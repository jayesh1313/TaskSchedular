import './App.css';
import Header from './components/Header';
import Login from './components/Login';
 import Footer from './components/Footer';
import Cover from './components/Cover';
import Register from './components/Register';
// import TaskSchedular from './components/TaskSchedular';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Schedular from './components/schedular';
import addappointment from './components/addappointment';

function App() {
  return (
    <div>
       
      {/* <Login></Login> */}
     
      
     <Router>
     <Header></Header>
     
     <Route component={Login} path={'/Login'} ></Route>
     <Route component={Register} path={'/Register'} ></Route>
     {/* <Route component={TaskSchedular} path={'/TaskSchedular'} ></Route> */}
     <Route component={Cover} path={'/Cover'} ></Route>
     <Route component={Schedular} path={'/schedule'} ></Route>
     <Route component={addappointment} path={'/addappointment'} ></Route>
     </Router>
     {/* <Footer></Footer>  */}
     
    </div>
  );
}

export default App;
