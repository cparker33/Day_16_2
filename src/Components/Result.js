import React from 'react'
import Task from './Task.js'


export default React.createClass({

  getInitialState: function () {

    return {
      displaytype: 'all',
      tasklist: [],
      taskCnt: 0,
      activeCnt: 0,
      totalCnt: 0

    }

  },

  handleCheck: function (c) {

    var newArr = []
    var newAct = 0

    this.state.tasklist.forEach((task) => {

      if (task.id === c) {

        if (task.complete === false) {

          task.complete = true

        } else {task.complete = false}

      } 

      if (task.complete === false) {

        newAct += 1

      }

      newArr.push(task)
    })

    this.setState({

      tasklist: newArr,
      activeCnt: newAct

    })    

  },

  handleRemove: function (c) {

    var newArr = this.state.tasklist.filter((task) => {

      if (task.remove !== c) {

        return true

      } 
  
        return false

    })

    this.setState({

      tasklist: newArr

    })    

  },

  addTask: function (c) {

    var newTask = {

      name: c,
      id: 'task' + this.state.taskCnt,
      remove: 'remove' + this.state.taskCnt,
      complete: false 

    }

    this.setState({

      tasklist: [...this.state.tasklist, newTask],
      taskCnt: this.state.taskCnt + 1,
      activeCnt: this.state.activeCnt + 1

    })
    

  },



  render: function() {

    return (

      <div 
        id="cResults">

        {
          
          this.state.tasklist.map((task, index) =>  {

            return <Task 
                    key={index} 
                    task={task} 
                    checkClick={this.handleCheck} 
                    removeClick={this.handleRemove}
                   />
              
            })
        }
        



<div 
  id={this.state.activeCnt > 0 ? 'cFooter' : 'cFooterHidden'}
>
  
  <div 
    id="cTaskCount">{this.state.activeCnt} {this.state.activeCnt === 1 ? 'task' : 'tasks'} pending</div>

    <div 
      id="cFiltBtnCont"
    >
  
      <div>All</div>
      <div>Active</div>
      <div>Complete</div>
    </div>

    <div 
      id="cClear"
    >Clear Completed
    </div>

        

  </div>





      </div>

    )

  }


})