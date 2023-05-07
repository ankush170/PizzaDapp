import {ethers} from "ethers"
import "./Buy.css";
const Buy=({state})=>{

    const orderPizza = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const amount = document.querySelector("#amount").value;
        const amountWei = {value:ethers.utils.parseEther(amount)}
        const transaction = await contract.orderPizza(name,message,amountWei)
        await transaction.wait();
        alert("Transaction is successful");
        window.location.reload;
    }

    return <>
    <div className="center">
       <h1>Thanks</h1>
        <form onSubmit={orderPizza}>
          <div className="inputbox">
            <input type="text" required="required" id="name" />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required="required" id="message" />
            <span>Message</span>
          </div>
          <div className="inputbox">
            <input type="text" required="required" id="amount" />
            <span>Amount</span>
          </div>
          <div className="inputbox">
            <input type="submit" value="Pay"  disabled={!state.contract}/>
          </div>
        </form>
          
    </div>
    </>
}
export default Buy;