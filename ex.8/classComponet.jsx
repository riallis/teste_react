import React, { Component } from 'react'

export default class classComponet extends Component {
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
    }
    
    Dec(delta){
        let state = this.state.value;
        this.setState(state > 0 ? {value: state + delta} : {value: 0})
    }

    Inc(delta){
        this.setState({value: this.state.value + delta});
    }

    render() {
    return (
    <div>
        <h1>{this.props.label}</h1>
        <h2>{this.state.value}</h2>
        <button onClick = {() => this.Dec(-1)}>Dec</button>
        <button onClick = {() => this.Inc(1)}>Inc</button>
    </div>
    )
  }
}
