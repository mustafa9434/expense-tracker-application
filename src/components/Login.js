import { signInWithEmailAndPassword } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import styles from '../styles/Login.module.css'

const Login = () => {

    // email & password state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // error state
    const [error, setError] = useState('')

    // navigate
    const navigate = useNavigate()
    // USe Effect
    useEffect(() => {
        auth.onAuthStateChanged(user => {
           if (user) {
               navigate('/add-amount')
           }
        })
    }, [])

    const loginHandler = e => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/')
        }).catch(err => setError(err.message))

    }
    

    return (
        <div className={styles.container}>
            <div className={styles.innerContent}>
                <div className={styles.card}>
                    <h3>Login</h3>
                    <form className={styles.form} onSubmit={loginHandler}>
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
                            {error}
                        </div>
                        <div className={styles.formGroup}>
                            <button type="submit" className={styles.btn}>Login</button>
                        </div>
                    </form> <br />
                    <span>Not have an Account? <Link to="/signup">Create Account</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login
