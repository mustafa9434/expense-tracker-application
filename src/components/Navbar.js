import { signOut } from '@firebase/auth'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import styles from '../styles/Navbar.module.css'
import {useNavigate} from 'react-router'
const Navbar = () => {


    const {name} = useSelector(state => state.user)
    // navigate
    const navigate = useNavigate()
    

    // Logout handler
    const logoutHandler = () => {
        console.log('clicked');
        signOut(auth).then(() => {
            navigate('/login')
        })
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logoBox}>
                    <Link className={styles.logo} to="/">Tracker<span>Task</span></Link>
                </div>
                <div>

                    {name ?
                            <span className={styles.link}
                            onClick={() => logoutHandler()}
                            >
                                <button className={styles.login}>
                                    Logout
                                </button>
                            </span>
                        :
                            <span>
                                <Link to="/login" className={styles.link}>
                                    <button className={styles.login}>
                                        Login
                                    </button>
                                </Link>
                                <Link to="/signup" className={styles.link}>
                                    <button className={styles.register}>
                                        Sign Up
                                    </button>
                                </Link>
                            </span>
                        }

                </div>
            </div>
        </nav>
    )
}

export default Navbar
