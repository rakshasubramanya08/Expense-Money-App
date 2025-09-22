import React from 'react'
import './money.css'

function Money() {
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
        <input type="text" placeholder='Enter Name ' className='input2'/>

        <label className='label3'><h4>Expense Amount :</h4></label>
        <input type="number" placeholder='Enter amount' className='input3'/>
        </div>

        <div className="box3">
            <button className='btn'><b>Add Expense</b></button>
        </div>
    </div>

    <div className="Box2">
        expense  
        amount
        delete
    </div>
    </>
  )
}

export default Money

