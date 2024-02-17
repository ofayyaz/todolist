import React, {Component} from "react";

class ToDoItems extends Component {
    constructor(props){
        super(props);
        this.createTask = this.createTask.bind(this);

    }

    createTask(item){
        return <li onClick = {() => this.delete(item.key)} key={item.key} >{item.text}</li>

    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        const toDoEntries = this.props.entries;
        const listItems = toDoEntries.map(this.createTask)
        return(
            <ul className = "theList">{listItems}</ul>
        );

    }

    };



export default ToDoItems
