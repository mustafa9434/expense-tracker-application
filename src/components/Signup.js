import { createUserWithEmailAndPassword } from '@firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import styles from '../styles/Signup.module.css'
import { useDispatch } from 'react-redux';
import { setUser } from '../features/users/UserSlice';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Signup = () => {


    // form states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // dispatch
    const triggerAction = useDispatch()

    // Navigate
    const navigate = useNavigate()


    // Signupt handler
    const signupHandler = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then(auth => {
        triggerAction(setUser(auth.user.email))
        navigate("/add-amount")
    })   
    }
    return (
        <div className={styles.container}>
            <div className={styles.innerContent}>
                <div className={styles.card}>
                    <h3>Sign up Now</h3>
                    <form className={styles.form} onSubmit={signupHandler}>
                        <div className={styles.formGroup}>
                            <input type="email" name="email"
                                placeholder="enter email"
                                className={styles.formControl}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="password" name="password"
                                placeholder="enter password"
                                className={styles.formControl}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <button type="submit" className={styles.btn}>Signup</button>
                        </div>
                    </form> <br />
                    <span>Already have an Account? <Link to="/login">Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Signup
