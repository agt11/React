import React,{ Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles.js';
import Title from './Title.js'
import profile from './assets/profile.png';

export default class App extends Component{
    state={displayBio:false}
    toggleDisplayBio=()=>{
        this.setState({displayBio:!this.state.displayBio})
    }

    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>I am Tejaswini </p>
                <Title/>
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