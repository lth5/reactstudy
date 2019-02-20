import React, { Component } from "react";
import ReactDOM from 'react-dom';
export default class CompinentCom extends Component { 
    constructor(props){
        super(props)
        this.state={
            name:props.name,
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    // getDefaultProps() {
    //     return { name: false } 
    // }
    // getInitialState() { 
    //     return { name: this.props.name }; 
    // }
    handleClick (event) { 
        this.setState({ name: 'name 变了' }); 
    };
    render() { 
        console.log(this.props,this.state)
        return ( 
            <div className="outer">
                <div>我是Component状态组件</div>
                <div>props.name--{this.props.name}</div>
                <div>state.name--{this.state.name}</div>
                <button onClick ={this.handleClick}>无bind改变name</button>
                <button onClick ={this.handleClick.bind(this)}>bind改变name</button>
            </div>
        ); 
    } 
};