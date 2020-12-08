import React,{Component} from "react";
import '../css/container.css'


class Login extends Component {

  
  constructor(){
    super()
    this.state={
      email:"",
      password:"",
      remember:false,
      erroremail:"",
      errorpassword:"",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const {name,value,type}=event.target;
    this.setState({[name]:value})
  
  //  console.log(event.target.value);
type!=='checkbox' ? this.setState({[name]:value}) : this.setState({[name]:!this.state.remember}) ; 

}
handleSubmit(e){
 // let [a,b,c]=[false,false,false];
  
  e.preventDefault();

  const email=this.state.email;
  const password=this.state.password;
  if(email === undefined || email ==='' || !email.includes('@')){
      this.setState( {erroremail :'Please Enter Valid Email'})
  }
  else{
     const pass=localStorage.getItem(email);
     if(pass==null){
      this.setState( {errorpassword :'User Does Not Exists'})
     }
     else if(pass===password){
       localStorage.getItem(email)
       console.log('logged from register');
       this.props.history.push('/dashboard')
     }
   
  }
  

 

}

  render(){
   //let Field = withFieldset('email');
 
   
//styles 

    return(
   
      
      <div className='container' >
    <div class='container-box' >
      <form onSubmit={this.handleSubmit}>
      <h1 style={{textAlign:'center',fontSize:'40px'}}> Log In </h1>
      <fieldset>
        
                <legend style={{textAlign:'center',border:'default'}}>
              Email Address
              </legend>
              <input type='text' name='email' placeholder='Enter Email' onChange={this.handleChange} value={this.state.email} />                        
              </fieldset>
              <div class='errors'> {this.state.erroremail}</div>
              <fieldset>
                <legend style={{textAlign:'center'}}>
              Password
              </legend>
              <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange}  value={this.state.password}/>                        
              </fieldset>
              <div class='errors'> {this.state.errorpassword}</div>
      <input type='checkbox' name='remember' style={{marginTop:'15px'}} checked={this.state.remember} onChange={this.handleChange} />
      <label htmlFor='remember'> Remember Me </label>
      <span id='forgot' style={{float:'right',marginTop:'15px'}}> Forgot Password ?</span>

      <div>
            <button type='submit' >Log in </button>
            </div>
      </form>   
      
      
       </div>
       </div>
  
       )
  }
};
export default Login;

