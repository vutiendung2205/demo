import React, { Component } from 'react'
import { connect } from 'react-redux';
import Template1 from './Template1';
import Template2 from './Template2';
import ViewTab from './ViewTab';

class ViewTabList extends Component {
    constructor(props){
        super(props);
        this.state={
            show: '0',
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.props.changeTemplate(e.target.value)
        if(e.target.value === 'template1'){
            let temp1 = {
                    template1 :{
                        email : '',
                        age : '',
                        gender : ''
                    }
                }
            this.props.addTemplate(temp1)
        }else if(e.target.value === 'template2'){
            let temp2 = {
                    template2 : {
                        id : '',
                        username : '',
                        password : ''
                    }
            }
            this.props.addTemplate(temp2)
        }else{
            this.props.addTemplate('')
        }
    }
    funcShow(num){
        switch (num){
            case 'template1' :{
                return( <Template1 /> )
            };
            case 'template2' :{
                return( <Template2 /> )
            };
            default :{
                return null
            }
        }
    }

    render() {
        return (
            <div className="view_tab_list">
                <ViewTab />
                <div className="select_template">
                    <label htmlFor="selectId">Template: </label>
                    <select name="selectId" defaultValue={this.props.template} onChange={ (e)=>this.onChange(e) }>
                        <option value="template0">None</option>
                        <option value="template1">Template1</option>
                        <option value="template2">Template2</option>
                    </select>
                    <span> {this.props.view === '' && this.props.getError ? 'Error' : null} </span>
                </div>
                <div>
                    { this.funcShow(this.props.template) }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        template : state.template,
        viewId : state.viewId,
        view: state.view,
        getError : state.getError
    }
}
function mapDispatchToProps(dispatch){
    return{
        addTemplate : (template)=>{
            dispatch({
                type : 'ADD_TEMPLATE',
                template
            })
        },
        changeTemplate : (template)=>{
            dispatch({
                type: 'CHANGE_TEMPLATE',
                template
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewTabList)
