
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import '../stylesheets/Login.css';
import { Formik } from 'formik';
import app_config from '../config';
import Swal from 'sweetalert2';

const myStyles = makeStyles(() => ({
    mycard: {
        marginTop: '10rem',
        boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'
    }
}))

const Login = () => {

    const url = app_config.api_url;
    const classNamees = myStyles();

    const loginform = {
        email: '',
        password: ''
    }

    const formSubmit = (values) => {

        fetch(url + 'user/getbyemail/' + values.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);

                    if (data.password == values.password) {
                        console.log('login success');

                        Swal.fire({
                            icon: 'success',
                            title: 'Login Success',
                        })

                        sessionStorage.setItem('user', JSON.stringify(data));
                        window.location.replace('/product');

                        return
                    }
                }

                Swal.fire({
                    icon: 'error',
                    title: 'Email or Password Incorrect'
                })

            })


    }

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    return (

        // <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
        <div className="col-md-12 mx-auto">
            <div className="my-container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>   
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => {
                                container.classList.remove("right-panel-active");
                            }}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => {
                                container.classList.add("right-panel-active");
                            }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        // <footer>
        //     <p>
        //         Created with <i className="fa fa-heart"></i> by
        //         <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
        //         - Read how I created this and how you can join the challenge
        //         <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
        //     </p>
        // </footer>
    )
}


export default Login;