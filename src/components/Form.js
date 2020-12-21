import  React, {Component} from "react";


class Form extends Component {
    state = {
      username: ""
    }
    handleSubmit= async (event)=> {
      
      event.preventDefault();
        const resp = await  axios.get(`https://api.github.com/users/${this.state.username}`);
      
        const {data} = resp
        this.props.onSubmit(data)
      this.setState({username: ""})
    }
    render(){
      return (
      <form onSubmit={this.handleSubmit} >
        <input type="text"  placeholder="Github username" value={this.state.username} 
          onChange={event => this.setState({username: event.target.value})} required/>
        <button> Add Card </button>
      </form>)
    }
  }

  export default Form