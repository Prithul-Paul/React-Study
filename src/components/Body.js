import { useState, useEffect } from "react";

import { resObj } from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [lisRestraunt, setLisRestraunt] = useState([]);

    const [searchedRestraunt, setSearchedRestraunt] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log(searchText);
    

    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        
        let data = await fetch(api);
        data = await data.json();
        // console.log(data.data);
        
        // data = data.json();
        const list = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        // console.log(list);
        
        setLisRestraunt(list);
        setSearchedRestraunt(list)
        
    }

    // console.log("Outside useeffect");
    
    // console.log(useState(resObj));
    // const arr = useState(resObj);
    // const lisRestraunt = arr[0];
    // const setLisRestraunt = arr[1];

    // if(lisRestraunt.length === 0){
    //     return <Shimmer />
    // }

    return lisRestraunt.length === 0 ? <Shimmer /> : (

        <div className="body-container">
            
            <button className="filter-btn" onClick={()=>{
                let updatedList = lisRestraunt.filter((retraunt)=> retraunt.info.avgRating>=4 );
                setLisRestraunt(updatedList);
                // console.log(resObj); 
            }}>Top Rated Restaurent</button>

            <div className="search-container">
                <label htmlFor="search">Search:</label>
                <input type="text" onChange={(e)=>{
                    // setSearchText("");
                    setSearchText(e.target.value);
                    // if(searchText !== ""){
                        const filteredres = lisRestraunt.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            // console.log(searchText.toLowerCase());
                        });
                        
                        setSearchedRestraunt(filteredres);
                    // }else{
                    //     setSearchedRestraunt(lisRestraunt);
                    // }
                    // setLisRestraunt(searchedRes); 
                    
                }} value={searchText} id="search" placeholder="Type to search..." className="search-box"
                />
            </div>

            <div className="res-container">
                {searchedRestraunt.map((retraunt, index)=>(
                    <ResCard key={index} restraunt={retraunt}/>
                ))}
                {/* <ResCard/> */}
            </div>

            
        </div>
    )
}

export default Body;