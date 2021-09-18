
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import '../stylesheets/Login.css';
import { Formik } from 'formik';
import app_config from '../config';
import Swal from 'sweetalert2';
import Schedular from './schedular';
import { BrowserRouter, Link } from 'react-router-dom';
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
                        window.location.replace('/schedule');

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
      
     <div className="container">


<body>
  <audio id="clack" autoplay>
    <source src="https://freesound.org/data/previews/331/331656_5825863-lq.mp3" type="audio/mpeg"/>
  
  </audio>
 
 <h1 className="bg1"> <h1 class="line anim-typewritter">Login Now</h1></h1>
</body>

        <div id="wrapper" mx-auto>
      <div id="left">
        <div id="signin">
          {/* <div className="logo">
            <img src="https://rgs.health.wa.gov.au/_layouts/15/HDWA.RGS.SharePoint/img/loginIcon.png" alt="Sluralpright" />
          </div> */}
           <Formik
                            initialValues={loginform}
                            onSubmit={formSubmit}
                        >{({
                            values,
                            handleChange,
                            handleSubmit
                        }) => (
          
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email or username</label>
              <input className="form-control" onChange={handleChange} value={values.email} name="email" />
            </div>
            <div>
              <label>Password</label>
              <input className="form-control" onChange={handleChange} value={values.password} type="password" name="password" />
            </div>
            <button type="submit" className="primary-btn">Sign In</button>
          </form>
           )}


           </Formik>
          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Sign in with company or school</a>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <Link to="/Register" className="secondary-btn">Create an account</Link>
        </div>
        <footer id="main-footer">
          <p>Copyright &copy; 2018, Sluralpright All Rights Reserved</p>
          <div>
            <a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
          </div>
        </footer>
      </div>
      <div id="right">
        {/* <div id="showcase">
          <div className="showcase-content">
            {/* <h1 className="showcase-text">
              Let's create the future <strong>together</strong>
            </h1> */}
            {/* <a href="#" className="secondary-btn">Start a FREE 10-day trial</a> */}
          {/* </div>
        </div> */} 
      </div>
    </div>
</div>
        
    )
}


export default Login;