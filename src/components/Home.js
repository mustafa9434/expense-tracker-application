import React, { useEffect } from 'react'
import AmountTracker from './AmountTracker'
import styles from '../styles/Home.module.css'
import SideBar from './SideBar'
import ExpenseItem from './ExpenseItem'
import { auth, db } from '../firebase'
import {  setUser, setUserDetails } from '../features/users/UserSlice'
import { useDispatch } from 'react-redux'
import { collection, onSnapshot, query, where } from '@firebase/firestore'
import { useNavigate } from 'react-router'

const Home = () => {
    // dispatch action
    const triggerAction = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                triggerAction(setUser(user.email))
                
                const userDetailsRef = collection(db, 'userDetails')
                const q = query(userDetailsRef, where("authId", "==", user.uid))
                onSnapshot(q, (snapshot) => {
                    let data = {}
                    snapshot.docs.forEach(doc => {
                        data = { ...doc.data(), id: user.id }
                    })
                    triggerAction(setUserDetails(data))
                })
            }else {
                navigate('/login')
            }
        })
        if (!auth) {
            navigate('/login')
        }
    }, [])
    return (
        <div className={styles.container}>
            <div>
                <AmountTracker />
                <ExpenseItem />
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    )
}

export default Home
