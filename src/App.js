import { React} from "React";
import { CardList } from "./components/CardList";
import { Form } from "./components/Form";

class App extends React.Component {
    
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
      <>
      <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfileData} />
    <CardList profiles={this.state.profiles} />
        
        </>
    )
  }
}

export default App