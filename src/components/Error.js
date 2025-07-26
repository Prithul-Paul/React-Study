import { useRouteError } from "react-router";

const Error = () => {
    console.log(useRouteError());
    const err = useRouteError();
    return (
        <div className="error">
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default Error;