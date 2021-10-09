import { Formik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../config';
import '../stylesheets/Register.css';
const addappointment = () => {

    const url = app_config.api_url;

    const addappointmentform = {
        title: '',
        startDate: '',
        endDate: '',
        id: '',
        Location: ''
    }

    const formSubmit = (values) => {
        console.log(values);


        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        fetch(url + 'task/add', reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message == 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registered!',
                        text: 'Now Login to Continue'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: 'Something went wrong'
                    })
                }

            })
    }


    return (

        // <div className='bold-line'></div>
        <div className='container1 mx-auto'>
            <div className='window '>
                <div className='overlay'></div>
                <div className='content'>
                    <div className='welcome'>Hello There!</div>
                    <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div>
                    <div className='input-fields'>
                        <Formik
                            initialValues={addappointmentform}
                            onSubmit={formSubmit}
                        >
                            {({
                                values,
                                handleChange,
                                handleSubmit
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <input className="form-control" onChange={handleChange} value={values.title} name="title" placeholder="title" />
                                    <input type="date" className="form-control" onChange={handleChange} value={values.startDate} name="startDate" placeholder="StartDate" />
                                    <input type="date" className="form-control" onChange={handleChange} value={values.endDate} name="endDate" placeholder="EndDate" />
                                    <input className="form-control" onChange={handleChange} value={values.id} name="id" placeholder="id" />
                                    <input className="form-control" onChange={handleChange} value={values.Location} name="Location" placeholder="Location" />
                                    {/* <input className="form-control" type="password" onChange={handleChange} value={values.password} name="password"placeholder="password" /> */}
                                    <button className='ghost-round full-width'>Create Account</button>
                                </form>
                            )}
                        </Formik>

                    </div>
                    <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    )
}

export default addappointment;