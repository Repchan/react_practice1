import React from "react";
import Tasks from "./Tasks"
export default class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            doneTask:this.props.doneTasks
        }
    }
    render(){
            return(
                <>
                    <button onClick={()=>this.setState({doneTask:this.props.doneTasks})}>количество выполненых задач</button>
                    <span>{this.state.doneTask}</span>
                </>

            )

    }
}