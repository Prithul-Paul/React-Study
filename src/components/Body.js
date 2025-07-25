import { useState, useEffect } from "react";

import { resObj } from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [lisRestraunt, setLisRestraunt] = useState([]);

    const [searchedRestraunt, setSearchedRestraunt] = useState([]);

    const [searchText, setSearchText] = useState("");

    // console.log(searchText);

    const handelSearch = (e)=>{
        // setSearchText("");
        const currentSearchVal = e.target.value;
        setSearchText(currentSearchVal);
        // console.log(e.target.value);
        
        
        const filteredres = lisRestraunt.filter((res)=>{
            return res.info.name.toLowerCase().includes(currentSearchVal.toLowerCase());
            // console.log(searchText.toLowerCase());
        });

        
        setSearchedRestraunt(filteredres);
        
        
    }
    

    useEffect(() => {
        fetchApiData();
        // fetchOtherData();
    }, []);

    const fetchApiData = async () => {
        const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.48369268619159&lng=88.36907844990493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        
        let data = await fetch(api);
        data = await data.json();
        // console.log(data.data);
        
        // data = data.json();
        const list = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        // console.log(list);
        
        setLisRestraunt(list);
        setSearchedRestraunt(list)
        
    }


    return lisRestraunt.length === 0 ? <Shimmer /> : (

        <div className="body-container">
            
            <button className="filter-btn" onClick={()=>{
                let updatedList = lisRestraunt.filter((retraunt)=> retraunt.info.avgRating>=4 );
                setLisRestraunt(updatedList);
                // console.log(resObj); 
            }}>Top Rated Restaurent</button>

            <div className="search-container">
                <label htmlFor="search">Search:</label>
                <input type="text" onInput={handelSearch} value={searchText} id="search" placeholder="Type to search..." className="search-box"
                />
            </div>

            <div className="res-container">
                {searchedRestraunt.map((retraunt, index)=>(
                    <ResCard key={index} restraunt={retraunt}/>
                ))}
                {/* <ResCard/> */}
            </div>
            {/* <button className="showMoreRes" onClick={fetchOtherData}>Show More</button> */}

            
        </div>
    )
}

export default Body;