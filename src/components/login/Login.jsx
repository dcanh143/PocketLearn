import React from 'react'
import { useRef, useState, useEffect } from 'react';
import './login.css';
import AuthContext from './context/AuthProvider';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import axios from './api/axios';
const LOGIN_URL = 'https://pocket-learn-backend.herokuapp.com/api/authentication/sign-in'


const Login = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const history = useHistory();

    if (localStorage.getItem('jwt_token') === null || localStorage.getItem('jwt_token') === '') {
        history.push('/login')
    }
    else {
        history.push('/')
    }

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                {
                    username: user,
                    password: pwd
                }
            );
            console.log(response?.data);
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });

            setUser('');
            setPwd('');
            localStorage.setItem('user', response.data.name)
            localStorage.setItem('jwt_token', response.data.token)


        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            }
            else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            }
            else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            }
            else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
    }



    return (
        <>
            <section className='login_section'>
                <h0>PocketLearn</h0>
                <p ref={errRef} className={errMsg ? "errmsg" :
                    "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Đăng nhập</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        id="username"
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Đăng nhập</button>
                </form>
                <p>
                    Bạn chưa có tài khoản? Đừng lo! <br />
                    <a href="register">Đăng ký</a>
                </p>
            </section>
        </>
    )
}

export default Login
