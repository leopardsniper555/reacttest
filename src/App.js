import React ,{Component} from 'react';

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      username : "Gerard"
    }
  }
  

  changeStateData = () =>{
    this.setState({
      username:this.state.username === "Gerard" ? "Bob" : "Adam"
    })
  }

  render = () =>
      <div>
        <h4 className = "bg-primary text-white text-center p-2">
          {this.state.username}'s To Do List  
        </h4>
        <button className='btn btn-primary m-2' onClick={this.changeStateData}>
          Change
        </button>
      
      </div>
  
}


