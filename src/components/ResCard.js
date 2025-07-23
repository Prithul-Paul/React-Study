import {CLOUDINARY_URL} from "../utils/constants";

const ResCard = ({restraunt}) => {
    // console.log(restraunt.info);
    
    const {id, cloudinaryImageId, name, cuisines, avgRatingString, sla} = restraunt?.info;
    
    return (
    <div className="card-body">
        <div className="cardImge"><img src={CLOUDINARY_URL+cloudinaryImageId} /></div>
        <div className="details">
            <h1 className="resName">{name}</h1>
            <h2 className="resName">{cuisines.join(",")}</h2>
            <p className="rating">{avgRatingString}</p>
            <span className="timing">{sla.slaString}</span>
        </div>
    </div>)
}

export default ResCard;