
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
    const classes = myStyles();

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
        <div className="bg">
            <div className="col-md-3 mx-auto" >
                <div className={clsx('card', classes.mycard)} style={{ marginTop: '10rem' }}>
                    <div className="card-body mx-auto">

                        <div className="col-md-2 mx-auto mt-4">
                            <img src="data:image/png;base64,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" className="img-fluid" />
                        </div>

                        <Formik
                            initialValues={loginform}
                            onSubmit={formSubmit}
                        >{({
                            values,
                            handleChange,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <label className="mt-5 w-100">Email</label>
                                <input className="form-control" onChange={handleChange} value={values.email} name="email" />

                                <label className="mt-4">Password</label>
                                <input className="form-control" onChange={handleChange} value={values.password} type="password" name="password" />

                                <button type="submit" className="mt-5 btn btn-primary w-100">Login Now</button>
                            </form>
                        )}


                        </Formik>



                        <hr className="mt-4" />
                        <a href="#">Forgot Password</a>
                        <div className="float-end">
                            <a href="#">Not Registered Yet?</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Login;