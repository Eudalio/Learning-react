import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    sum1(delta) {
        if((this.state.value + delta) >= 0 && (this.state.value + delta) < 11)
            this.setState({ value: this.state.value + delta });
        else
            this.setState({ value: this.state.value = 0})
    }

    render() {
        return (
            <div>
                <h1> {this.props.label} </h1>
                <h2> {this.state.value} </h2>
                <button onClick={() => this.sum1(-1)}>Dec</button>
                <button onClick={() => this.sum1(1)}>Inc</button>
            </div>
        )
    }
}