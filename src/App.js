import  React, {Component} from "react";
import  CardList  from "./components/CardList";
import  Form  from "./components/Form";
import './App.css'
class App extends Component {
    
  state = {
    profiles: []
  }
  
  addNewProfileData = profileData => {
    this.setState(prevState=> ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render(){
    return  (
      <div style={{
        width: '1000px',
        margin: '0 auto'
      }}>
      <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfileData} />
    <CardList profiles={this.state.profiles} />
        
        </div>
    )
  }
}

export default App