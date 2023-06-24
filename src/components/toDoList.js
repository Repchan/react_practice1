import React from 'react';
import Button from './Button'
import Tasks from './Tasks'
export default class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            doneTask:0,
            clicked:false,
            listArr: [{task:'Помыть посуду'}, {task:'сходить в магазин'},{task:'Сходить на работу'},{task:'сходить погулять'},{task:'Завершить этот блядский компонент'}],
        }
    }

    Update(){
        let myObj = Tasks(this.state.listArr,this.state.doneTask);
        this.setState({doneTask:myObj.num});
        return console.log(myObj.num)
    }


    // Tasks(){
    //     let taskList = [];
    //     this.state.listArr.forEach((task,index)=>
    //     taskList.push(
    //             <form>
    //                 <input type={'checkbox'} id={`${index}`} onChange={
    //                     (e)=>{
    //                         let num=this.state.doneTask;
    //                     if(e.target.checked){
    //                         this.setState({doneTask:num+1})
    //                     }
    //                     else{
    //                         this.setState({doneTask:num-1})
    //                     }
    //                     let date = new Date()
    //                     console.log(`Вы изменили задачу ${task.task} ${date.toLocaleDateString()} в ${date.toLocaleTimeString()}`)
    //                 }
    //
    //                     }
    //                 ></input>
    //                 <label htmlFor={`${index}`}>{task.task}</label>
    //             </form>
    //     ))
    //     return taskList;
    // }

    render(){

      return(
              <ol>
                  {this.state.listArr.map((taskE)=><li onChange={()=>{

                  }}><Tasks task={taskE.task}/></li>)}

                    <Button doneTasks={this.state.doneTask}/>

              </ol>

          )
    }
}
