import React, { useState } from 'react'
import './money.css'
import ExpenseList from './ExpenseList'

function Money() {
    
    const [name, setName] = useState([]);
    const [money, setMoney] = useState([]);
    const [username, setUserName] = useState("");
    const [usermoney, setUserMoney] = useState("");

    const handleAdd =()=> {
        if(username.trim() !== "" && usermoney.trim() !== ""){
            setName([...name, username]);
            setMoney([...money, usermoney]);
            setUserName("");
            setUserMoney("");
        }
    }

  return (
    <>
      <h1 className="heading">Expense Tracker</h1>
    <div className='Box'>
        <h2 className='head1'>Money Expenses</h2>

        <div className='box1'>
        <label className='label1'><h4>Date :</h4></label>
        <input type="date" placeholder='Enter date' className='input1'/>
        </div>

        <div className="box2">
        <label className='label2'><h4>Expense Name :</h4></label>
        <input type="text" placeholder='Enter Name ' className='input2' 
                value={username} onChange={(e)=>setUserName(e.target.value)}/>

        <label className='label3'><h4>Expense Amount :</h4></label>
        <input type="number" placeholder='Enter amount' className='input3'
                value={usermoney} onChange={(e)=>setUserMoney(e.target.value)}/>
        </div>

        <div className="box3">
            <button className='btn' onClick={handleAdd}><b>Add Expense</b></button>
        </div>
    </div>
    <br />
    <div className="Box2">
        <ExpenseList />
    </div>
    </>
  )
}

export default Money

