import React from "react";
import avatar from "../../images/image-jeremy.png";
import "./profileCard.css";

const ProfileCard = ({ name }) => {
    return (
        <div className="profile__card">
            <div className="profile__card__main">
                <img src={avatar} alt="" />
                <div>
                    <p>Report for</p>
                    <h1>{name}</h1>
                </div>
            </div>
            <div className="profile__card__footer">
                <p className="filter">Daily</p>
                <p className="filter active">Weekly</p>
                <p className="filter">Monthly</p>
            </div>
        </div>
    );
};

export default ProfileCard;
