import React from 'react'
import './ExpenseList.css'

function ExpenseList() {
  return (
    <>
    <div className='tableBox'>
      <table className='table'>
        <tr>
           <th>Sl.no</th>
           <th>Expense Name</th> 
           <th>Expense Amount</th>
           <th>Delete</th>     
        </tr>

        <tr>
            <td>1</td>
            <td>Petrol</td>
            <td>2000</td>
            <td><button className='delbtn'>⛔</button></td>  
        </tr>  
        <tr>
            <td>2</td>
            <td>Food</td>
            <td>1500</td>
            <td><button className='delbtn'>⛔</button></td>  
        </tr>        
     </table>
    </div>
    <div className="total">
        <h3>Total Expense Amount : 3500 </h3>
    </div>
    </>
  )
}

export default ExpenseList
