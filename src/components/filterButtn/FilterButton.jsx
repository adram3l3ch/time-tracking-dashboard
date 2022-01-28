import React from "react";

const FilterButton = ({ name, handler, activeTab }) => {
    return (
        <button onClick={() => handler(name)}>
            <p className={activeTab === name ? "filter active" : "filter"}>{name}</p>
        </button>
    );
};

export default FilterButton;
