import React, { Component } from 'react'
import { connect } from 'react-redux'

class Template1 extends Component {
    constructor(props){
        super(props);
        this.handleGetEmail = this.handleGetEmail.bind(this);
        this.handleGetAge = this.handleGetAge.bind(this)
        this.handleGetGender = this.handleGetGender.bind(this)
    }
    handleGetAge(e){
        this.props.getAge(e.target.value)
    }
    handleGetGender(e){
        this.props.getGender(e.target.value)
    }
    handleGetEmail(e){
        this.props.getEmail(e.target.value)
    }
    render() {
        return (

            <div className="form">
                <form>

                    <div className="form_group">
                        <label >Email</label>
                        <input type="text" name='email' value={this.props.view.email} onChange={ (e)=>{this.handleGetEmail(e)} }  />
                        <span> {this.props.view.email == '' && this.props.getError ? 'Error' : null} </span>
                    </div>

                    <div className="form_group">
                        <label >Age</label>
                        <input type="text" name= 'age' value={this.props.view.age}   onChange={ (e)=>{this.handleGetAge(e)} }   />
                        <span> {this.props.view.age == '' && this.props.getError ? 'Error' : null} </span>
                    </div>

                    <div className="form_group">
                        <label >Gender</label>
                        <input type="text" name='gender' value={this.props.view.gender}  onChange={ (e)=>{this.handleGetGender(e)} }  />
                        <span> {(this.props.view.gender == '' && this.props.getError) ? 'Error' : null} </span>
                    </div>

                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        viewId : state.viewId,
        view : state.view[state.viewId].template1,
        getError : state.getError
    }
}
function mapDispatchToProps(dispatch){
    return {
        addView : (temp1)=>{
            dispatch({
                type : 'ADD_TEMPLATE_1',
                temp1
            })
        },
        getEmail : (email) =>{
            dispatch({
                type: "GET_EMAIL",
                email
            })
        },
        getGender : (gender) =>{
            dispatch({
                type : 'GET_GENDER',
                gender
            })
        },
        getAge : (age) =>{
            dispatch({
                type : 'GET_AGE',
                age
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Template1)
