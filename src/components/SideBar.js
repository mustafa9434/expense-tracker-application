import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/SideBar.module.css'
import AddExpense from './AddExpense'

const SideBar = () => {
    const {email, name} = useSelector(state => state.user)
    return (
        <div className={styles.card}>
            <div className={styles.cardData}>
                <div className={styles.user}>
                    <div className={styles.userDetails}>
                        <h4>{name}</h4>
                        <p>{email}</p>
                    </div>
                </div>
                <AddExpense />
            </div>
        </div>
    )
}

export default SideBar
