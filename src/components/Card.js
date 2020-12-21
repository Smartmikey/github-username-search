import { React} from "React";

class Card extends React.Component {
    render(){
      
      const profile = this.props;
      return (
        <div className="github-profile">
          <img src={profile.avatar_url}/>
          <div className="info">
            <div className="name" style={{color: Math.random() < 0.5 ? "green": "blue"}}> {profile.name}</div>
            <div className="company"> {profile.company}</div>
          </div>
        </div>
      )
    }
  }
  

  export default Card