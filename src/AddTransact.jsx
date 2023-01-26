import React from 'react'
import { useState } from 'react'

const AddTransact = ({transactions,setTransactions}) => {
  
   const[purpose,setPurpose]=useState("")
    const[amount,setAmount]=useState(0)
    
    const newtransaction={
      id:Math.floor(Math.random()* 10000000000),
      purpose,
      amount:+amount
    }
   
   
    function handleSubmit(e){
      e.preventDefault()
  
    addTransaction(newtransaction)
    
    }
  
    function addTransaction(newtransaction){
  setTransactions([...transactions,newtransaction])
}




  return (
    <>
    <h1> AddTransaction </h1>
    <form onSubmit={handleSubmit}>
<div className="form-control">
  <label htmlFor="purpose">Enter purpose:</label>
  <input type="text"  value={purpose} onChange={(e)=>setPurpose(e.target.value)}  />
  </div>

  <div className="form-control">
  <label htmlFor="amount" >Amount:
  (negative-spending,positive-income)</label>
  <input type="number"     value={amount} onChange={(e)=>setAmount(e.target.value)} />


</div>
<button className="btn">Add Transaction</button>

    </form>


  </>
      
  )
}

export default AddTransact