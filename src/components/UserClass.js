import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {name, location} = this.props;
        const {count} = this.state;
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
            </div>
        )
    }
}

export default UserClass;