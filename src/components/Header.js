import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){
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
                    Object.values(value).map( (val)=>{
                        if(val=== ''){
                            flag2 = false
                        }
                    } )
                } )
            }
        }

        if( flag1 && flag2){
            alert('Thành công');
            this.props.getErr(false)
        }else{
            alert('Vui lòng nhập đủ thông tin');
            this.props.getErr(true)
        }
    }
    render() {
        return (
            <header>
                <button className="submit" onClick={this.handleSubmit}>Submit</button>
            </header>
        )
    }
}
function mapStateToProps(state){
    return {
        form1 : state.form1,
        view : state.view
    }
}
function mapDispatchToProps(dispatch){
    return{
        getErr : (err)=>{
            dispatch({
                type: 'GET_ERR',
                err
            })
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Header);
