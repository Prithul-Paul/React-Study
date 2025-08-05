import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us Page</h1>
            {/* <User name={"Prithul Paul (function)"} location={"Kolkata"} /> */}
            <UserClass name={"Prithul Paul (class)"} location={"WB"} />
        </div>
    );
}

export default About;