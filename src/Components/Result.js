import React from 'react'
import Task from './Task.js'


export default React.createClass({

  getInitialState: function () {

    return {
      displaytype: 'all',
      displaylist: [],
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
      activeCnt: newAct, 
      totalCnt: newArr.length


    })    

  },


  clearComplete: function () {

    var newArr = this.state.tasklist.filter((task) => {

      return task.complete === false

    })

    this.setState({

      tasklist: newArr,
      displaylist: newArr,
      totalCnt: newArr.length,
      activeCnt: newArr.length

    })     
      
  },


  handleRemove: function (c) {

    var actC = 0

    var newArr = this.state.tasklist.filter((task) => {

      if (task.remove !== c) {

        return true

      } 
        
        return false

    })

    newArr.forEach((task) => {

      if (task.complete === false) {

        actC += 1

      }

    })

    this.setState({

      tasklist: newArr,
      displaylist: newArr,
      totalCnt: newArr.length,
      activeCnt: actC

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
      displaylist: [...this.state.displaylist, newTask],
      taskCnt: this.state.taskCnt + 1,
      activeCnt: this.state.activeCnt + 1,
      totalCnt: this.state.totalCnt + 1,

    })
    
  },


  showAll: function () {

    var newArr = []
    var actC = 0

    this.state.tasklist.forEach((task) => {

      if (task.complete === false) {

        actC += 1

      }

      newArr.push(task)

    })

    this.setState({

      displaytype: 'all',
      displaylist: newArr,
      totalCnt: newArr.length,
      activeCnt: actC

    }) 

  },


  showComp: function () {

    var newArr = []
    var actC = 0
    
    this.state.tasklist.forEach((task) => {

      if (task.complete === true) {

        newArr.push(task)

      }

      if (task.complete === false) {

        actC += 1

      }

    })

    this.setState({

      displaytype: 'com',
      displaylist: newArr,
      totalCnt: newArr.length,
      activeCnt: actC

    })  

  },


  showAct: function () {

    var newArr = []
    var actC = 0

    this.state.tasklist.forEach((task) => {

      if (task.complete === false) {

        newArr.push(task)
          
        actC += 1

      }

    })

    this.setState({

      displaytype: 'act',
      displaylist: newArr,
      totalCnt: newArr.length,
      activeCnt: actC

    })  

  },

  render: function() {

    return (

      <div 
        id="cResults">

        {

        this.state.displaylist.map((task, index) =>  {

          return <Task 
            key={index} 
            task={task} 
            checkClick={this.handleCheck} 
            removeClick={this.handleRemove}/>
              
          })

        }
        
        <div 
          id={this.state.tasklist.length > 0 ? 'cFooter' : 'cFooterHidden'}>
  
          <div 
            id="cTaskCount">
            {this.state.activeCnt} {this.state.activeCnt === 1 ? 'task' : 'tasks'} pending
          </div>

          <div 
            id="cFiltBtnCont">
  
          <div 
            className={this.state.displaytype === 'all' ? 'cSelected' : 'cNotSelected'}
            onClick={this.showAll}>
            All
          </div>

          <div 
            className={this.state.displaytype === 'act' ? 'cSelected' : 'cNotSelected'}
            onClick={this.showAct}>
            Active
          </div>

          <div 
            className={this.state.displaytype === 'com' ? 'cSelected' : 'cNotSelected'}
            onClick={this.showComp}>
            Complete
          </div>

        </div>

        <div 
          id="cClear"
          onClick={this.clearComplete}>
          Clear Completed
        </div>

      </div>

    </div>

    )

  }

})