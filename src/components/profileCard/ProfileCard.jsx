import React from "react";
import avatar from "../../images/image-jeremy.png";
import FilterButton from "../filterButtn/FilterButton";
import "./profileCard.css";

const ProfileCard = ({ name, handler, activeTab }) => {
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
                <FilterButton name="daily" handler={handler} activeTab={activeTab} />
                <FilterButton name="weekly" handler={handler} activeTab={activeTab} />
                <FilterButton name="monthly" handler={handler} activeTab={activeTab} />
            </div>
        </div>
    );
};

export default ProfileCard;
