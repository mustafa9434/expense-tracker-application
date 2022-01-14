import { addDoc, collection } from '@firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { auth, db } from '../firebase'
import styles from '../styles/AddAmount.module.css'

const AddAmount = () => {

    // state
    const [name, setName] = useState()
    const [income, setIncome] = useState()

    // navigate
    const navigate = useNavigate()

    // userDetails ref
    const userDetailsRef = collection(db, 'userDetails')

    //submit handler
    const detailHnadler = e => {
        e.preventDefault()
        auth.onAuthStateChanged(user => {
            addDoc(userDetailsRef, {
                authId: user.uid,
                name: name,
                income: income,
            }).then(() => {
                navigate('/')
            }).catch(err => console.log(err.message))
        })
    } 


    return (
        <div className={styles.container}>
            <div className={styles.innerContent}>
                <div className={styles.card}>
                    <h3>Add Details</h3>
                    <form className={styles.form} onSubmit={detailHnadler}>
                        <div className={styles.formGroup}>
                            <input type="name" name="name"
                                placeholder="enter name"
                                className={styles.formControl}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="amount" name="amount"
                                placeholder="enter monthly income"
                                className={styles.formControl}
                                onChange={e => setIncome(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <button type="submit" className={styles.btn}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddAmount
