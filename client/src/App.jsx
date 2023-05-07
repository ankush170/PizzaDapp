import { useState, useEffect } from 'react'
import abi from "./contractJson/pizza.json"
import {ethers} from "ethers"
import Memos from './components/Memos'
import Buy from './components/buy'
import pizza from "./pizza.png";
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');

  useEffect(()=>{
    const template=async()=>{
      const contractAddress="0xFD62bae1C7787F8a3C1283e7D1Eaa7639e8deE21";
      const contractABI=abi.abi;

    try{  
      const {ethereum}=window;

      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })

      window.ethereum.on("accountsChanged",()=>{
        window.location.reload()
      })

      setAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )

      console.log(contract);
    setState({provider,signer,contract});
    }catch(error) {
      alert(error);
    } 
    }
    template();
  },[])
  return (
    <div >
    <img src={pizza} className="img-fluid" alt=".." width="100%" />
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state}/>
      <Memos state={state}/>
   
  </div>
  )
}

export default App
