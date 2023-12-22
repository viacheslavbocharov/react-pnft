import React, { useState } from 'react';
import clear from '../assets/clear.png';
import show from '../assets/show.png';
import google from '../assets/google.png';


export const Form = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShow, setPasswordShow] = useState(false)
    const changePasswordShow = () => {
        setPasswordShow((e) => !e) 
    }

    return (
        <div className='form'>
            <div className="auth-form">
                <div className="auth-form__title">NFT Access</div>
                <div className="auth-form__desc">
                    Please fill your detail to access your account.
                </div>

                <div className="auth-form__field">
                    <div class="auth-form__field-name">Email</div>
                    <div class="auth-form__field-area">
                        <input
                            /* [(ngModel)]="inputText" */
                            name="inputText"
                            className="auth-form__field"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="debra.holt@example.com"
                        />

                        <div /*(click)="inputText = ''"*/ className="auth-form__field-img" onClick={() => setEmail('')}>
                            <img src={clear} alt="clear icon" />
                        </div>
                    </div>
                </div>
                <div className="auth-form__field">
                    <div className="auth-form__field-name">Password</div>
                    <div className="auth-form__field-area">
                        <input
                            className="auth-form__field"
                            name="passwordShow"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            type={passwordShow ? 'text' : 'password'}
                            /*[type]="passwordShow ? 'text' : 'password'" */
                            placeholder="••••••••"
                        />
                        <div /*(click)="passwordShow = !passwordShow"*/ className="auth-form__field-img" onClick={changePasswordShow}>
                            <img src={show} alt="clear icon" />
                        </div>
                    </div>
                </div >
                <div className="auth-form__extras">
                    <label className="auth-form__checkbox">
                        <input type="checkbox" />
                        <div className="auth-form__checkbox-text">Remember me</div>
                    </label>
                    <div className="auth-form__alt-check"><a href="/">Forgot Password?</a></div>
                </div>
                <a className="auth-form__sign-in" href="/">Sign in</a>
                <a className="auth-form__sign-in-google" href="/">
                    <img src={google} alt="googlr icon" />
                    <span className="uth-form__sign-in-google-text">Sign in with Google</span>
                </a>
                <div className="auth-form__no-account">
                    <div className="auth-form__no-account-text">Don't have an account?</div>
                    <div className="auth-form__alt-check"><a href="/">Sign up</a></div>
                </div>
            </div>
        </div >
    )
}
