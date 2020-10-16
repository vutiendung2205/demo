import React, { Component } from 'react'
import { connect } from 'react-redux'

class Template2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            username : '',
            password : ''
        }
        this.handleGetId = this.handleGetId.bind(this);
        this.handleGetUsername = this.handleGetUsername.bind(this);
        this.handleGetPassword = this.handleGetPassword.bind(this)
    }
    handleGetId(e){
        this.props.getId(e.target.value)
    }
    handleGetUsername(e){
        this.props.getUsername(e.target.value)
    }
    handleGetPassword(e){
        this.props.getPassword(e.target.value)
    }
    render() {
        return (
            <div className="form">
                <form>

                    <div className="form_group">
                        <label >Id</label>
                        <input type="text"  name='id' value={this.props.view.id}  onChange={ (e)=>{this.handleGetId(e)} }   />
                        <span> {this.props.view.id == '' && this.props.getError ? 'Error' : null} </span>
                    </div>

                    <div className="form_group">
                        <label >User</label>
                        <input type="text" value={this.props.view.username}   name='username'  onChange={ (e)=>{this.handleGetUsername(e)} }   />
                        <span> {this.props.view.username == '' && this.props.getError ? 'Error' : null} </span>
                    </div>

                    <div className="form_group">
                        <label >Password</label>
                        <input type="text" value={this.props.view.password} name='password'  onChange={ (e)=>{this.handleGetPassword(e)} }    />
                        <span> {this.props.view.password == '' && this.props.getError ? 'Error' : null} </span>
                    </div>

                </form>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        viewId : state.viewId,
        view : state.view[state.viewId].template2,
        getError : state.getError
    }
}
function mapDispatchToProps(dispatch){
    return {
        getId : (id) =>{
            dispatch({
                type: "GET_ID",
                id
            })
        },
        getUsername : (username) =>{
            dispatch({
                type : 'GET_USER',
                username
            })
        },
        getPassword : (password) =>{
            dispatch({
                type : 'GET_PASSWORD',
                password
            })
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Template2)
