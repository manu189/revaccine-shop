import React, {Component} from 'react';

class Hello extends Component{
    constructor(props)
    {   
        super(props);
        this.state = {
            name: 'Manuel',
            lastname: 'Facio',
            age: 31
        }
    }

    handleClick = () => {
        this.setState({
            name: 'Juan',
            lastname: 'Perez',
            age: 29
        })
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.name} {this.state.lastname}</h1>
                <h2>You are {this.state.age} years old</h2>
                <button onClick={this.handleClick}>cambiar estado</button>
            </div>
        )
    }

}

export default Hello;