import User from "./User";
import {Component} from "react";
import UserClass from "./UserClass";


class About extends Component {

    constructor(props){
        super(props);
        console.log("Parent Constructor");

    }

    componentDidMount(){
        console.log("Parent Component Did mount");
    }

    render(){
        console.log("Parent Render");

        return (
            <div className="about-container">
                <h1>About Us Page</h1>
                {/* <User name={"Prithul Paul (function)"} location={"Kolkata"} /> */}
                {/* <UserClass name={"First"} location={"WB"} /> */}
                <UserClass name={"Second"} location={"WB"} />
            </div>
        );

    }
}
// const About = () => {
// }

export default About;