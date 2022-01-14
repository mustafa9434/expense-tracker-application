import { collection, onSnapshot, query, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { auth, db } from '../firebase'

import styles from '../styles/AmountTracker.module.css'

const AmountTracker = () => {

    // selector
    const {income} = useSelector(state => state.user)

    // state
    const [spent, setSpent] = useState('')

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
                    const spentData = expenses.map(expense => {
                        return expense.expensePrice
                        
                    })
                    const spentTotal = spentData.reduce((spent, val) => {
                        return spent + parseInt(val)
                    }, 0)
                    setSpent(spentTotal);
                    
                })
            }
        })

    }, [])
    return (
        <div className={styles.row}>
            <div className={styles.card}>
                <p>Monthly Income</p>
                <h1>${income}</h1>
            </div>
            <div className={styles.card}>
                <p>Already Spent</p>
                <h1>$ {spent}</h1>        
            </div>
            <div className={styles.card}>
                <p>Remaining</p>
                <h1>$ {income - spent}</h1>
            </div>
        </div>
    )
}

export default AmountTracker
