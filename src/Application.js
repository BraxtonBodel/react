import React, {Component} from 'react';

class Application extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    handleClick = () =>{
        this.setState({count: this.state.count + 1});
    }

    render(){
        let {count} = this.state;
        return (
            <div>
                 <span>
                     <button onClick={(e) => this.handleClick()} >Click me</button>
                 </span>
                 <h1>You clicked me {count} times</h1>
            </div>
           
        );
    }
}

export default Application;