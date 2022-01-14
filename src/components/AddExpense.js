import { addDoc, collection } from '@firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../firebase';
import styles from '../styles/AddExpense.module.css'

const AddExpense = () => {

    const [expense, setExpense] = useState('')
    const [price, setPrice] = useState('');

    // expenseitemRef
    const expenseitemRef = collection(db, 'expenses')

    const adExpenseHandler = e => {
        e.preventDefault()
        addDoc(expenseitemRef, {
            expenseName: expense,
            expensePrice: price,
            authId: auth.currentUser.uid
        })
        setExpense('')
        setPrice('')
    }
    

    return (
        <div className={styles.padd}>
            New Expense
            <form className={styles.form} onSubmit={adExpenseHandler}>
                <div className={styles.formGroup}>
                    <input type="text" name="expense" 
                        className={styles.formControl} 
                        onChange={e => setExpense(e.target.value)}
                        placeholder="enter expense title"
                        />
                </div>
                <div className={styles.formGroup}>
                    <input type="number" name="amount" 
                        className={styles.formControl} 
                        placeholder="enter expense amount"
                        onChange={e => setPrice(e.target.value)}
                        />
                </div>
                <div className={styles.formGroup}>
                    <button type="submit" name="amount" 
                        className={styles.button} 
                        placeholder="enter expense amount"
                    >+ Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
