import  React, {Component} from "react";

class Card extends Component {
    render(){
      
      const profile = this.props;
      return (
        <div className="github-profile">
          <img alt={`${profile.name}'s profile`} src={profile.avatar_url}/>
          <div className="info">
            <div className="name" style={{color: Math.random() < 0.5 ? "green": "blue"}}> {profile.name}</div>
            <div className="company"> {profile.company}</div>
          </div>
        </div>
      )
    }
  }
  

  export default Card