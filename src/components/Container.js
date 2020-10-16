import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import ViewTabList from './ViewTabList'

class Container extends Component {

    render() {
        return (
            <div>
                {
                    this.props.changeStep ? <Form /> : <ViewTabList/>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        view : state.view,
        changeStep : state.changeStep
    }
}


export default connect(mapStateToProps)(Container)
