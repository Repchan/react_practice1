import React from "react";
let Tasks = (listArr, doneTask) =>{
    let taskList = [];
    let num=doneTask;
    listArr.forEach((task,index)=>
        taskList.push(
            <form>
                <input type={'checkbox'} id={`${index}`} onChange={
                    (e)=>{

                        if(e.target.checked){
                            num+=1
                        }
                        else{
                           num-=1
                        }
                        let date = new Date()
                        console.log(`Вы изменили задачу ${task.task} ${date.toLocaleDateString()} в ${date.toLocaleTimeString()}`)
                    }

                }
                ></input>
                <label htmlFor={`${index}`}>{task.task}</label>
            </form>
        ))
    let tasks = []
    taskList.forEach((task,index)=>tasks.push(<li key={index}>{task}</li>));
    console.log(num)
    return  {tasks,num};
}
export default Tasks;