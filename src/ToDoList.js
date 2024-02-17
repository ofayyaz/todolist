import React, {Component} from "react";
import ToDoItems from "./ToDoItems";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {items : []};
        this.additem = this.additem.bind(this);
        this.deleteitem= this.deleteitem.bind(this);
    }
    
    additem(e){
        e.preventDefault();

        if (this._inputElement.value !== "") {
            const newItem = {
                text : this._inputElement.value,
                key : Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
 
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        
    }

    deleteitem(key){
        const filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        })
    }

    render(){
        return(
            <div className="toDoListMain">
                <div className="header">
                    <form onSubmit={this.additem}>
                        <input ref={(a) => this._inputElement =a} placeholder="Enter Task">
                        
                        </input>
                        <button type="submit">add</button>
                    </form>
                    <ToDoItems entries= {this.state.items} delete={this.deleteitem}></ToDoItems>
                </div>

            </div>
        );
    }
}

export default ToDoList