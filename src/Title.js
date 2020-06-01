import React,{ Component } from "react";

const TITLES=[
    "a software engineer",
    "an enthusiastic learner",
    "always ready to take challenges",
    "a food lover"
];

class Title extends Component{
state={titleIndex:0,fadeIn:true};

componentDidMount(){
    this.timeInterval=setInterval(()=>this.setState({fadeIn:!(this.state.fadeIn)}),2000)
    this.animateTitles();
}
componentWillUnmount(){
    console.log('Title component will unmount!')
    clearInterval(this.timeInterval)
    clearInterval(this.animateTitlesInterval)
}
animateTitles=()=>{
this.animateTitlesInterval=setInterval(()=>{
   const titleIndex=(this.state.titleIndex+1)%TITLES.length;
    this.setState({titleIndex});
},4000);
}
render(){
    const {titleIndex,fadeIn}=this.state;
    const title=TITLES[titleIndex];
    return(
        <p className={fadeIn?'title-fade-in':'title-fade-out'}>I am {title}</p>
    );
}
}

export default Title;