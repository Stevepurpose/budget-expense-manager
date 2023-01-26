import React from 'react'
import { useState } from 'react';
import "./index.css"
import Header from './Header';
import Balance from './Balance';
import Moneyflow from './Moneyflow';
import Transactions from './Transactions';
import AddTransact from './AddTransact';

function App() {
  


  const [transactions,setTransactions]=useState([/*{id:1,purpose:"salary",amount:10000},{id:2,purpose:"shoes",amount:200},
{id:3,purpose:"gas",amount:150},{id:4,purpose:"electricty",amount:300},*/])
  

  return (
    <div className="app">
      <Header/>
      <Balance  transactions={transactions}/>
      <Moneyflow transactions={transactions}/>
      <Transactions transactions={transactions} setTransactions={setTransactions} />
      <AddTransact   transactions={transactions} setTransactions={setTransactions}/>
   
   
    
        
    </div>
  );
}

export default App; 

