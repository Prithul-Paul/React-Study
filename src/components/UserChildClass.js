import { Component } from "react";

class UserChildClass extends Component{
    constructor(props){
        super(props);
        console.log(this.props.name + " Userchild Constructor");

    }
    componentDidMount(){
        console.log(this.props.name + " Userchild Did Mount");

    }
    render(){
        console.log(this.props.name +" Userchild Render");
        
    }
}

export default UserChildClass;