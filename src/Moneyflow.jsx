import React from 'react'

const Moneyflow = ({transactions}) => {
    const amounts=transactions.map(transaction=>transaction.amount)
    //add positive amounts to get income
     const income=amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
     //negative amounts are recorded as expenses
     const spending=(amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0) * -1).toFixed(2)
     


  return (
    
    <div className="incexp">
        
    
    
<p className="moneyplus">income:{income}</p>
  
     
     
    
  
    <p className="moneyminus">spending:{spending}</p>
    

     </div>
 


  )
}

export default Moneyflow