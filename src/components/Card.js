import  React, {Component} from "react";

class Card extends Component {

    render(){
      const random1 = Math.random() *255;
      const random2 = Math.random() *255;
      const random3 = Math.random() *255;
      
      const profile = this.props;
      
      return (
        <div className="github-profile">
          <img alt={`${profile.name}'s profile`} src={profile.avatar_url}/>
          <div className="info">
            <div className="name" style={{color: `rgb(${random1}, ${random2},${random3})`}}> <a href={profile.html_url} target="_blank" rel="noreferrer"> {profile.name}</a></div>
            <div className="company"> {profile.company}</div>
          </div>
        </div>
      )
    }
  }
  

  export default Card