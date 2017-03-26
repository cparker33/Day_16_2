import React from 'react'
import Result from './Components/Result.js'
import './Style/normalize.css'
import './Style/cAppStyle.css'
import './Style/Result.css'
import './Style/Task.css'

export default React.createClass({

  getInitialState: function () {

    return {
      taskinput: ''
    }

  },

  handleSubmit: function (e) {
  
    e.preventDefault()

    this.refs.rslt.addTask(this.state.taskinput)

    this.setState({

      taskinput: ''

    })

  },


  handleChange: function (e){

    this.setState({

      taskinput: e.target.value

    })
  },


  render: function() {

    return (

      <div 
        id="cMain">

      <div 
        id="cTitle">
        <h1>cToDo</h1>
      </div>

        <form
         id="cForm" 
         onSubmit={this.handleSubmit}
        > 

          <input 
            id="cInp" 
            placeholder="what needs to be done?" 
            type="text" 
            onChange={this.handleChange} 
            value={this.state.taskinput}
            />

        </form>

        <Result ref='rslt' />

      </div>

    )

  }


})