import React,{ Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles.js'

export default class App extends Component{
    state={displayBio:false}
    toggleDisplayBio=()=>{
        this.setState({displayBio:!this.state.displayBio})
    }

    render(){
        return(
            <div>
                <h1>Hello!</h1>
                <p>I am Tejaswini </p>
                <p>I am software Engineer</p>
                {this.state.displayBio?(<div>
                    <p>I am from Ongole.</p>
                    <p>I am learning React.It is quite interesting</p>
                    <p>I love football</p>
                    <button onClick={this.toggleDisplayBio}>ShowLess</button>
                    </div>):(<button onClick={this.toggleDisplayBio}>ReadMore</button>)
    }
            <hr />
            <Projects/>
            <hr />
            <SocialProfiles/>
            <hr />
            </div>
        );
    }
}