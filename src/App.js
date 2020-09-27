import React, { Component } from 'react';

  class App extends Component {
    state = {
      todos: []
    }
    componentDidMount() {
      fetch('https://9mz9ypoe2d.execute-api.eu-west-1.amazonaws.com/test/todolist?userId=2&id=2&title=tache1&completed=true')
      
      .then(res => res.json())
      .then((data) => {
        console.log("test")
        console.log(data)
        console.log(typeof data)
        
        console.log(typeof this.state.todos)
        this.setState({ todos: data })
        
        console.log(this.state.todos)
      })
      .catch(console.log)
    }
  
    render() {

      return (
         <div className="container">
          <div className="col-xs-12">
          <h1>My Todos</h1>
         
            <div className="card">
              <div className="card-body">

                <h5 className="card-title"> userId: {this.state.todos.userId}</h5>
                <h5 className="card-title">id: {this.state.todos.id}</h5>
                <h5 className="card-title">title: {this.state.todos.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                { this.state.todos.completed &&
                  <span>
                  Completed
                  </span>
                }
                { !this.state.todos.completed &&
                  <span>
                    Pending
                  </span>
                }              
                </h6>
              </div>
            </div>
          
          </div>
         </div>
      );
    
  }}
    

  export default App;

