import React, { useState } from 'react'
import './money.css'
import ExpenseList from './ExpenseList'

function Money() {
  const [expenses, setExpenses] = useState([]);
  const [username, setUserName] = useState("");
  const [usermoney, setUserMoney] = useState("");

  const handleAdd = () => {
    if (username.trim() !== "" && usermoney.trim() !== "") {
      const newExpense = {
        id: Date.now(),
        name: username,
        amount: parseFloat(usermoney)
      };
      setExpenses([...expenses, newExpense]);
      setUserName("");
      setUserMoney("");
    }
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
    <>
      <h1 className="heading">Expense Tracker</h1>
      <div className='Box'>
        <h2 className='head1'>Money Expenses</h2>

        <div className="dat">
            <label>Date : </label>
            <input className='date' type="date" />
        </div>

        <div className="box2">
          <label><h4>Expense Name :</h4></label>
          <input 
            className='input1'
            type="text" 
            placeholder='Enter Name ' 
            value={username} 
            onChange={(e)=>setUserName(e.target.value)}
          />

          <label><h4>Expense Amount :</h4></label>
          <input 
            className='input2'
            type="number" 
            placeholder='Enter amount' 
            value={usermoney} 
            onChange={(e)=>setUserMoney(e.target.value)}
          />
        </div>

        <div className="box3">
          <button className='btn' onClick={handleAdd}><b>Add Expense</b></button>
        </div>
      </div>
      <br />
      <div className="Box2">
        <ExpenseList expenses={expenses} onDelete={handleDelete}/>
      </div>
    </>
  )
}

export default Money
