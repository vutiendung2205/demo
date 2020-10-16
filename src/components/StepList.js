import React, { Component } from 'react'
import { connect } from 'react-redux'

class StepList extends Component {
    constructor(props){
        super(props)
        this.onHandleClick0= this.onHandleClick0.bind(this);
        this.onHandleClick1= this.onHandleClick1.bind(this)
    }

    onHandleClick0(){
        this.props.click0();
    }
    onHandleClick1(){
        this.props.click1()
    }
    render() {
        return (
            <div className="step_list">
                <button style={{color: this.props.changeStep ? 'red' : 'black'}} onClick={this.onHandleClick0}>0</button>
                <button style={{color: !this.props.changeStep ? 'red' : 'black'}} onClick={this.onHandleClick1} >1</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        changeStep : state.changeStep
    }
}
function mapDispatchToProps(dispatch){
    return{
        click0 : ()=>{
            dispatch({
                type : 'CHANGE_STEP_0'
            })
        },
        click1 : ()=>{
            dispatch({
                type : 'CHANGE_STEP_1'
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StepList)
