import React from 'react'

export default React.createClass({


  getInitialState: function () {

    return {
      class: 'active'

    }

  },

  handleCheck: function (e) {

    this.props.checkClick(e.target.id)

  },

  handleRemove: function(e) {

    this.props.removeClick(e.target.id)

  },

  getId: function(id) {

    return 'task' + id

  },

  getKey: function(id) {

    return 'key' + id

  },

  render: function() {

    return (

      <li
        key={this.getKey(this.props.task.id)} 
        className="cTask"
      >

  
          <input 
            type="checkbox" 
            id={this.props.task.id}
            onChange={this.handleCheck} 
            checked={this.props.task.complete === false ? '' : 'checked'} 
            className='cCheckBox'
          /> 

            <label 
              className={this.props.task.complete === false ? 'Active' : 'Complete'} 
              htmlFor={this.props.task.id}
            > 

              {this.props.task.name}

            </label> 

            <div 
              id={this.props.task.remove}
              onClick={this.handleRemove}
              className='cRemoveBtn'
            >
              X
            </div>

          </li> 

      

    )

  }


})