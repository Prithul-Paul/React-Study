import { useEffect, useState } from "react";
import { CLOUDINARY_URL, LOGO_URL } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [allInfo, setAllInfo] = useState([]);
    const [resInfo, setResInfo] = useState({});
    const [menuInfo, setMenuInfo] = useState([]);

    const fetchRestaurantData = async () => {
        const api = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.48369268619159&lng=88.36907844990493&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER";

        const data = await fetch(api);
        const response = await data.json();
        // console.log(response);
        setAllInfo(response || []);
        setResInfo(response?.data?.cards[2]?.card?.card?.info);
        setMenuInfo(response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    // console.log(allInfo);
    // if(Object.keys(resInfo).length !== 0){
        // console.log(resInfo);
    const {name, avgRatingString, totalRatingsString, costForTwoMessage, areaName} = resInfo
    // const timings = slaString ?? "";
    // }
    
    console.log(menuInfo);
    
    useEffect(()=>{
        fetchRestaurantData()
    }, []);

    return allInfo.length === 0 ? <Shimmer/> :
    (
        <div className="restaurant-menu-container">
            <div className="page-header">
                <h1 className="res-name">{name}</h1>
                <div className="res-info">
                    <div className="rating-price">
                        <span className="res-rating">{avgRatingString} {totalRatingsString}</span>
                        <span className="res-price">{costForTwoMessage}</span>
                    </div>
                    <div className="other-detail">
                        <span className="outlet-heading"><b>Outlet: </b>{areaName}</span><br/>
                        {/* <span className="del-tuming">{timings}</span> */}
                    </div>
                </div>
            </div>
            <div className="menu-section">
                <h2 className="menu-heading">Recommended</h2>
                <div className="menu-list">
                    { menuInfo.map((menu)=>{
                        const {id, name, imageId, description, defaultPrice, price, ratings: {aggregatedRating: {rating,ratingCountV2}}} = menu?.card?.info;
                        const finalPrice = defaultPrice ?? price;
                        return (<div className="list" key={id}>
                            <div className="food-info">
                                <h3 className="food-name">{name}</h3>
                                <p className="food-price">₹ {finalPrice/100}</p>
                                <p className="food-rating">{rating} ({ratingCountV2})</p>
                                <div className="food-desc">
                                    {description}
                                </div>
                            </div>
                            <div className="food-image">
                                <img src={CLOUDINARY_URL + imageId} />
                            </div>
                        </div>)
                    })

                    }
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;