import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewTab extends Component {
    constructor(props){
        super(props);
        this.handleAddTab = this.handleAddTab.bind(this);
        this.handleChangeViewId = this.handleChangeViewId.bind(this)
    }
    handleAddTab(){
        // Kiểm tra xem các ô input đã điền đầy đủ thông tin hay chưa
        let flag1 = true;
        let flag2 = true;
        if(this.props.form1.name === '' || this.props.form1.title === '' ){
            flag1 = false
        }else{
            flag1 = true;
        }
        for( let index in this.props.view ){
            if(this.props.view[index] === ''){
                flag2 = false
            }else{
                Object.values(this.props.view[index]).map( value=>{
                    if(value === ''){
                        console.log(value);
                        flag2 = false
                    }
                } )
            }
        }
        // Nếu đã dủ thì mới được thêm view mới
        if(flag1 && flag2){
            this.props.addTab();
            this.props.changeTemplate('template0');
            this.props.changeViewId(this.props.lengthTab)
        }
    }
    handleChangeViewId(e){
        let num = parseInt(e.target.value)
        this.props.changeViewId(num)
    }
    render() {
        var button = [];
        var color = 'black';
        for(var i = 0; i<this.props.lengthTab;i++){
            if(i==this.props.viewId){
                color = 'red';
            }else {
                color = 'black'
            }
            button.push(<button style={{ color: color}} value={i} onClick={ (e)=>this.handleChangeViewId(e) } key={i}>  {`View${i}`} </button>)
        }
        return (
            <div className="view_tab">
                {button}
                <button onClick={this.handleAddTab}  >+</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        lengthTab : state.lengthTab,
        form1 : state.form1,
        view : state.view,
        viewId : state.viewId
    }
}
function mapDispatchToProps(dispatch){
    return{
        addTab : ()=>{
            dispatch({
                type : 'ADD_TAB'
            })
        },
        changeViewId :(viewId) =>{
            dispatch({
                type: 'CHANGE_VIEW_ID',
                viewId
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
export default  connect(mapStateToProps,mapDispatchToProps)(ViewTab);
