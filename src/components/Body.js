import {useState} from "react";

import { resObj } from "../utils/mockData";
import ResCard from "./ResCard";

const Body = () => {
    const [lisRestraunt, setLisRestraunt] = useState(resObj);
    console.log(useState(resObj));
    return (
        <div className="body-container">
            <button className="filter-btn" onClick={()=>{
                let updatedList = lisRestraunt.filter((retraunt)=> retraunt.info.avgRating>=4 );
                setLisRestraunt(updatedList);
                // console.log(resObj); 
            }}>Top Rated Restaurent</button>
            <div className="res-container">
                {lisRestraunt.map((retraunt, index)=>(
                    <ResCard key={index} restraunt={retraunt}/>
                ))}
                {/* <ResCard/> */}
            </div>
        </div>
    )
}

export default Body;