import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
    changeStep : true,
    form1 : {
        name: '',
        title:''
    },
    view : {
        0: ''
    },
    template: 'template0',
    viewId:0,
    lengthTab : 1,
    getError : false
}

const reducer = ( state=initState, action ) =>{
    switch (action.type) {
        case 'CHANGE_STEP_0' :{
            return{...state,changeStep : true}
        };
        case 'CHANGE_STEP_1' :{
            return{...state,changeStep : false}
        };
        case 'CHANGE_NAME_FORM_1' :{
            return{...state,form1 : {...state.form1, name : action.name}}
        };
        case 'CHANGE_TITLE_FORM_1' :{
            return{...state,form1 : {...state.form1, title : action.title}}
        };
        case 'ADD_TEMPLATE' :{
            return{...state,
                view :{
                    ...state.view,
                    [state.viewId] : action.template
                }
            }
        };
        case 'ADD_TEMPLATE_1':{
            return {...state,view :{
                ...state.view,
                [state.viewId] : action.temp1
            }}
        }
        case 'GET_EMAIL' :{
            return{...state,view : {
                ...state.view,
                [state.viewId]: {template1 : {
                    ...state.view[state.viewId].template1,
                    email: action.email
                }}
            }}
        };
        case 'GET_GENDER' :{
            return{...state,view : {
                ...state.view,
                [state.viewId]: {template1 :{
                    ...state.view[state.viewId].template1,
                    gender: action.gender
                }}
            }}
        };
        case 'GET_AGE' :{
            return{...state,view : {
                ...state.view,
                [state.viewId]: {template1:{
                    ...state.view[state.viewId].template1,
                    age: action.age}}
            }}
        };
        case 'GET_ID' :{
            return{...state,view : {
                ...state.view,
                [state.viewId]: {template2: {
                    ...state.view[state.viewId].template2,id: action.id
                }}
            }}
        };
        case 'GET_USER' :{
            return{...state,view : {
                ...state.view,
                [state.viewId]: {template2 :{
                    ...state.view[state.viewId].template2,username: action.username
                }}
            }}
        };
        case 'GET_PASSWORD' :{
            return{...state,view : {
                ...state.view,
                [state.viewId]: {template2 :{
                    ...state.view[state.viewId].template2,password: action.password
                }}
            }}
        };
        case 'ADD_TAB':{
            let tab = state.lengthTab;
            return{...state,view :{...state.view,[tab]:''},lengthTab : tab+1, }
        };
        case 'CHANGE_VIEW_ID' :{
            return{...state,viewId : action.viewId}
        };
        case 'CHANGE_TEMPLATE' :{
            return{...state,template : action.template}
        };
        case 'GET_ERR' :{
            return{...state,getError : action.err}
        };
        default :{
            return state;
        }

    }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
