import React ,{Component} from 'react';
import '../css/todoInput.css';

 class TodoItem extends Component {

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>{this.props.todo.text}
      </div>
    );
  }
}
export default  TodoItem;