
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

    

    return (

        <div id="wrapper">
      <div id="left">
        <div id="signin">
          <div className="logo">
            <img src="https://image.ibb.co/hW1YHq/login-logo.png" alt="Sluralpright" />
          </div>
          <form>
            <div>
              <label>Email or username</label>
              <input type="text" className="text-input" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" className="text-input" />
            </div>
            <button type="submit" className="primary-btn">Sign In</button>
          </form>
          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Sign in with company or school</a>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <a href="#" className="secondary-btn">Create an account</a>
        </div>
        <footer id="main-footer">
          <p>Copyright &copy; 2018, Sluralpright All Rights Reserved</p>
          <div>
            <a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
          </div>
        </footer>
      </div>
      <div id="right">
        <div id="showcase">
          <div className="showcase-content">
            <h1 className="showcase-text">
              Let's create the future <strong>together</strong>
            </h1>
            <a href="#" className="secondary-btn">Start a FREE 10-day trial</a>
          </div>
        </div>
      </div>
    </div>
        
    )
}


export default Login;