import React from 'react'
import './ExpenseList.css'

function ExpenseList({ expenses, onDelete }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <>
      <div className='tableBox'>
        <table className='table'>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Expense Name</th>
              <th>Expense Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="4">No expenses added yet</td>
              </tr>
            ) : (
              expenses.map((exp, index) => (
                <tr key={exp.id}>
                  <td>{index + 1}</td>
                  <td>{exp.name}</td>
                  <td>{exp.amount}</td>
                  <td>
                    <button 
                      className='delbtn' 
                      onClick={() => onDelete(exp.id)}
                    >
                      ⛔
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="total">
        <h3>Total Expense Amount : {total} </h3>
      </div>
    </>
  )
}

export default ExpenseList
