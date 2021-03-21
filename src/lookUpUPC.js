import { render } from '@testing-library/react';
import React from 'react';


class LookUpUPC extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lookUpUpc: "",
            response :""
        }

    }

    /** 
    sendData = () => {
        this.props.parentCallback(false);
    }
    */

    submitUPC = () => {
        const jsonObject = new Object();

        jsonObject.upc = this.state.lookUpUpc;

        fetch('http://localhost:3000', {
            method:"POST", 
            body: JSON.stringify(jsonObject)
        }).then(response => response.json())
        .then(data => this.setState({response: data}))
        .catch((err) => console.log('error retrieving databse'))
    }

    handleChange = (event) => {
        this.setState({upc:event.target.value})
        console.log(this.state.lookUpUpc);
    }


    render(){
        return(
            <div>
            <form className = "lookUpUPC">
                <ul>
                    <li>
                        <input type = "text" name = "lookUpUPC" size = "50" placeholder = "Enter UPC Number Here" onChange = {this.handleChange}></input> 
                    </li>
                </ul>
                <button className = "submit">Submit</button>
                <button className = "toggleButton" onClick = {() => this.props.changeParentState(false)}>Add a UPC</button>
            </form>
            <p>{this.state.response}</p>
            </div>
        );
    }

}
export default LookUpUPC;