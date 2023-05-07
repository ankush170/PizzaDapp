// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <=0.9.0;

contract pizza {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function orderPizza(
        string calldata name,
        string calldata message
    ) external payable {
        require(msg.value > 0, "Your payment should be more than 0 Eth.");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemo() public view returns (Memo[] memory) {
        return memos;
    }
}
