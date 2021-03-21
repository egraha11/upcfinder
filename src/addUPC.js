import React from 'react';


class AddUPC extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            upc: "", 
            name: "", 
            brand: "",
            response:""
        };
    }

    
    submitUPC = () => {

        var jsonObject = new Object()
        
        jsonObject.upc = this.state.upc;
        jsonObject.postName = this.state.name;
        jsonObject.postBrand = this.state.brand;
        

        fetch('http://localhost:3000', {
            method:"POST", 
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(response => this.setResponse(response))
        .catch((err) => console.log('error saving to databse'))
    }

    
    handleSubmit = (event) => {
        this.submitUPC()
    }
    

    setResponse = (res) => {
        this.setState({response: res})

        setTimeout(this.setState({response:""}), 3000)
    }



    handleChange = (event) => {
        if(event.target.name == "UPC Number"){
            this.setState({upc: event.target.value})
            console.log(this.state.upc)

        }
        else if(event.target.name == "Item Name"){
            this.setState({name: event.target.value})
            console.log(this.state.name)
        }
        else{
            this.setState({brand: event.target.value})
            console.log(this.state.brand)
        }
    }




    /*onSubmit = {this.handleSubmit()}*/

    render(){
        return(
            <div>
            <form className = "addUPC" onSubmit = {this.handleSubmit()}>
                <ul>
                    <li>
                        <input type = "text" size = "50" name = "UPC Number" placeholder = "UPC Number" onChange = {this.handleChange}></input>
                    </li>
                    <li>
                        <input type = "text" size = "50" name = "Item Name" placeholder = "Item Name" onChange = {this.handleChange}></input>
                    </li>
                    <li>
                        <input type = "text" size = "50" name = "Brand" placeholder = "Brand" onChange = {this.handleChange}></input>
                    </li>
                </ul>
                <button className = "submit">Submit</button>
                                                            
                <button className = "toggleButton" onClick = {(e) => this.props.changeParentState(true)}>Look up a UPC</button>
            </form>
            <p>{this.state.response}</p>
            </div>
        )
    }
}
export default AddUPC;