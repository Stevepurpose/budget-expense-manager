import React from 'react'
import {Trash} from "phosphor-react"

const Transactions = ({transactions,amount,setTransactions}) => {
    const symbol=amount<0 ? '-' : '+'

function handleDelete(id){
  setTransactions (transactions.filter(transaction=>transaction.id!==id))
}


  return (
    <div className='for-trans'>
    <h1>TRANSACTIONS</h1>
    <ul className="list"  >
        {transactions.map(transaction=>(<li className={transaction.amount< 0? "minus":"plus"} key={transaction.id}>{transaction.purpose} <span>{symbol}${Math.abs(transaction.amount)}</span>
        <button  onClick={()=>handleDelete(transaction.id)} className="delete-btn"><Trash size={25}  color={'red'}/></button> </li>))}
        
     </ul>

    </div>
  )
}

export default Transactions