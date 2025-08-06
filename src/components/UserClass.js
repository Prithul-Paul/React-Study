import React from "react";
import UserChildClass from "./UserChildClass";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log(this.props.name+" Child Constructor");
        
    }

    componentDidMount(){
        console.log(this.props.name+ " Child Component Did mount");
    }

    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        console.log(this.props.name+ " Child Render");

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Count: {count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: count + 1
                    });
                }}>Click</button>
                {/* <UserChildClass name={this.props.name}/> */}
            </div>
        )
    }
}

export default UserClass;