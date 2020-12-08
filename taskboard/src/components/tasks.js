import React, { Component } from 'react';


class TaskHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div style={{margin: "10px"}}>  
            My Tasks </div>
            <span id="dot"  style={{marginLeft:'260px'}}>&#8942;</span>
            </div>
         );
    }
}
 
export default TaskHeader;