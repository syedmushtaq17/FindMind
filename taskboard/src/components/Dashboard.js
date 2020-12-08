import React, { Component } from 'react';
import '../css/container.css'
import 'font-awesome/css/font-awesome.min.css';
import TaskHeader from './tasks'







class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl:'',
            tasks:[],
            show:false,
            todos: [
                {id: 0, text: "Make dinner tonight!"},
                {id: 1, text: "Fold the laundry."},
                {id: 2, text: "Learn to make a React app!"}
              ]




          }
          this.addTodo = this.addTodo.bind(this);
          this.removeTodo = this.removeTodo.bind(this);
        
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
          todos: todos,
          nextId: ++this.state.nextId
        });
      }
    
      removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
          });
      }


   async componentDidMount(){
        const imgid=Math.floor(Math.random() * 1000)
     const imgurl=  await fetch(`https://picsum.photos/id/${imgid}/info`)
        .then(data=>data.json())
        .then(data=>data.download_url);
        this.setState({imgUrl:imgurl})

        console.log(imgurl)
return imgurl;
    }

     






    render() { 
        
        
        


        return ( 
            <div className='dashboard'>
                <div className="top">
                   
               
                <h1 className='logo' >TaskBoards</h1>
                   <span> <img src={this.state.imgUrl} className='image2' alt='Loading...' width='80px' height='60px' />
                   </span>
                </div>
                   
                   
                <div class="dashboardbody2">
                    <h1 style={{marginLeft:'100px',color:'black'}}> My  Tasks</h1>
                    <div className='adds'>
                    <input type='text' className='tasks' style={{border:'1px solid black' ,marginLeft:'20px'}} />
                    <span className='butts'><button > + </button></span>
                    </div>
                          </div>
                        
                

               
              
              
              
              
              
              
              
          

                   





            </div>



         );
    }
}
 
export default Dashboard;