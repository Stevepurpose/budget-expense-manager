import React from 'react'

const Balance = ({transactions}) => {
    const amounts=transactions.map(transaction=>transaction.amount)  //get each amount field,save them in amounts
    //add the amounts with the reduce
   const sum=amounts.reduce((accumulator,currentValue)=> (accumulator += currentValue),0).toFixed(2)
    


  return (
    <div className='check'>
      <h1> Balance  </h1> 
      <p>${sum}</p>

    </div>
  )
}

export default Balance