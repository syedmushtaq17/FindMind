import React,{Component} from "react";
import ReactDOM from "react-dom" ;
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

class App extends Component {


  render(){
   //let Field = withFieldset('email');


    return(
      
       
          <nav className='nav-link'>
             <Router>
            <Route path='/' exact>
        <div>Home</div>
        </Route>
        <Route path='/login' component={Login}>
       
        </Route>
        <Route path='/register' component={Register}>
        </Route>
        <Route path='/dashboard' component={Dashboard}>
  
        </Route>
        
        </Router>
        </nav>
       
        
   
   
   )
  }
};
export default App;

ReactDOM.render(<App />,document.getElementById('root'))