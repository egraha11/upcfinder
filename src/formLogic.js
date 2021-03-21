import React, { Component } from 'react';
import AddUPC from './addUPC';
import LookUpUPC from './lookUpUPC';



class FormLogic extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLookUpViewable:true
        }
        this.changeParentState = this.changeParentState.bind(this);
    }

    changeParentState(value){
        this.setState(
            {isLookUpViewable:value}
        )
    }

    render(){
        if(this.state.isLookUpViewable == true){
            return(<LookUpUPC changeParentState = {this.changeParentState}/>)
        }
        else if (this.state.isLookUpViewable == false){
            return(<AddUPC changeParentState = {this.changeParentState}/>)
        }
    }
}
export default FormLogic; 