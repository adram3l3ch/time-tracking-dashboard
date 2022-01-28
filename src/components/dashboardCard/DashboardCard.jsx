import React from "react";
import { ReactComponent as Ellipsis } from "../../images/icon-ellipsis.svg";
import "./dashboardCard.css";

const DashboardCard = ({ data, activeTab }) => {
    return (
        <article className="dashboard__card" style={{ "--back-bg": data.color }}>
            <div className="dashboard__card__back">
                <img src={require("../../images")[data.title.replace(" ", "_")]} alt="" aria-hidden />
            </div>
            <div className="dashboard__card__front">
                <header className="dashboard__card__front__header">
                    <h2>{data.title}</h2>
                    <button aria-label="options">
                        <Ellipsis />
                    </button>
                </header>
                <div className="dashboard__card__front__content">
                    <h3>{data.timeframes[activeTab].current}hrs</h3>
                    <p>Last Week - {data.timeframes[activeTab].previous}hrs</p>
                </div>
            </div>
        </article>
    );
};

export default DashboardCard;
