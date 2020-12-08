import React, { Component } from 'react';
import '../css/container.css'







class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:"",
            username:"",
            erroremail:"",
            errorpassword:"",
            errorusername:"",
            accept:false
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        const {name,value,type}=event.target;
        this.setState({[name]:value})
      
      //  console.log(event.target.value);
  type!=='checkbox' ? this.setState({[name]:value}) : this.setState({[name]:!this.state.accept}) ; 

    }

    handleSubmit(e){
        let [a,b,c]=[false,false,false];
        
        e.preventDefault();
        const username=this.state.username;
        const email=this.state.email;
        const password=this.state.password;
console.log(username);
        if(username === undefined || username ==='' || username.length<6){
            this.setState( {errorusername :'Please Enter Valid Username'})
        }
        else{
           a=true; 
         
        }
        if(email === undefined || email ==='' || !email.includes('@')){
            this.setState( {erroremail :'Please Enter Valid Email'})
        }
        else if(localStorage.getItem(email)!=null) {
            this.setState( {erroremail :'User already Exists'})
        }
        else{
           b=true; 
         
        }
        if(password === undefined || password ==='' || password.length<6){
            this.setState( {errorpassword :'Please Enter Valid Password'})
        }
        else{
           c=true; 
         
        }

        if(a && b && c && this.state.accept){
            
            localStorage.setItem(email, password);
            console.log('logged in ');
            this.props.history.push('/login');
        }

    }

    render() { 

       

        return ( 
          
            <div className='container' >
            <div class='container-box' >
              <form onSubmit={this.handleSubmit}>
               <h1 style={{textAlign:'center',fontSize:'40px'}}> Sign up</h1>
               <fieldset>
                <legend style={{textAlign:'center'}}>
              Username
              </legend>
              <input type='text' name='username' placeholder='Enter Name'   onChange={this.handleChange}  value={this.state.username}/>                        
              
              </fieldset>
        <div class='errors'> {this.state.errorusername}</div>

              <fieldset>
                <legend style={{textAlign:'center'}}>
              Email Address
              </legend>
              <input type='text' name='email' placeholder='Enter Email'  onChange={this.handleChange} value={this.state.email}/>                        
              </fieldset>
              <div class='errors'> {this.state.erroremail}</div>
              <fieldset>
                <legend style={{textAlign:'center'}}>
              Password
              </legend>
              <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange}  value={this.state.password}/>                        
              </fieldset>
              <div class='errors'> {this.state.errorpassword}</div>

              <input type='checkbox' name='accept' style={{marginTop:'15px'}} checked={this.state.accept} onChange={this.handleChange} />
              <label htmlFor='accept'> I accept the terms & conditions </label>
             <div>
            <button type='submit' >Sign up</button>
            </div>
              </form>   
              
              
               </div>
               </div>
            
         );
    }
}
 
export default Register;