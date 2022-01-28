import React from "react";
import { ReactComponent as Ellipsis } from "../../images/icon-ellipsis.svg";
import "./dashboardCard.css";

const DashboardCard = ({ data }) => {
    return (
        <article className="dashboard__card" style={{ "--back-bg": data.color }}>
            <div className="dashboard__card__back">
                <img src={require("../../images")[data.title.replace(" ", "_")]} alt="" aria-hidden />
            </div>
            <div className="dashboard__card__front">
                <header className="dashboard__card__front__header">
                    <h2>{data.title}</h2>
                    <button>
                        <Ellipsis />
                    </button>
                </header>
                <div className="dashboard__card__front__content">
                    <h3>{data.time}hrs</h3>
                    <p>Last Week - {data.prev}hrs</p>
                </div>
            </div>
        </article>
    );
};

export default DashboardCard;
