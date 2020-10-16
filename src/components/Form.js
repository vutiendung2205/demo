import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            title: '',
        }
        this.handleGetTitle = this.handleGetTitle.bind(this)
        this.handleGetName = this.handleGetName.bind(this)
    }
    handleGetTitle(e){
        this.props.getTitle(e.target.value)
    }
    handleGetName(e){
        this.props.getName(e.target.value)
    }
    render() {
        return (
            <div className="form">
                <form>
                    <div className="form_group">
                    <label htmlFor="name">Name</label>
                    <input type="text"  value={this.props.form1.name} name='name' id="name"  onChange={ (e)=>this.handleGetName(e) } />
                    <span> {this.props.form1.name == '' && this.props.getError ? 'Error' : null} </span>
                    </div>
                    <div className="form_group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.props.form1.title} name='title' id="title" onChange={ (e)=>this.handleGetTitle(e) } />
                    <span> {this.props.form1.title == '' && this.props.getError ? 'Error' : null} </span>
                    </div>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        form1: state.form1,
        getError : state.getError
    }
}
function mapDispatchToProps(dispatch){
    return{
        getName: (name) =>{
            dispatch({
                type: 'CHANGE_NAME_FORM_1',
                name,
            })
        },
        getTitle: (title)=>{
            dispatch({
                type : 'CHANGE_TITLE_FORM_1',
                title
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)
