import { collection, deleteDoc, doc, onSnapshot, query, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import styles from '../styles/ExpenseItem.module.css'

const ExpenseItem = () => {

    const [expensesData, setExpensesData] = useState()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                const expensesRef = collection(db, 'expenses');
                const q = query(expensesRef, where("authId", "==", user.uid))
                onSnapshot(q, (snapshot) => {
                    let expenses = []
                    snapshot.docs.forEach(doc => {
                        expenses = [...expenses, { id: doc.id, ...doc.data() }]
                    })
                    setExpensesData(expenses)
                })
            }
        })

    }, [])

    // delete document
    const deleteDocument = id => {
        const docRef = doc(db, 'expenses', id)
        deleteDoc(docRef)
    }
    return (
        <>
            {expensesData && expensesData.map(expense => {
                return <div className={styles.expenseItem}>
                    <div className={styles.expenseData}>
                        <div className={styles.data}>
                            <h3>{expense.expenseName}</h3>
                            <p>03/12/2021 12:00 PM</p>
                        </div>
                        <span className={styles.price}><b>$ {expense.expensePrice}</b></span>
                        <svg
                        onClick={() => deleteDocument(expense.id)}
                        className={styles.close} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                </div>
            })
            }
        </>
    )
}

export default ExpenseItem
