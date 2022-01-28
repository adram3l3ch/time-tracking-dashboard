import { useState } from "react";
import DashboardCard from "./components/dashboardCard/DashboardCard";
import ProfileCard from "./components/profileCard/ProfileCard";
import data from "./data.json";

function App() {
    const [activeTab, setActiveTab] = useState("weekly");
    return (
        <main className="app">
            <ProfileCard name={data.user.username} handler={setActiveTab} activeTab={activeTab} />
            {data.dashboard.map((item, index) => (
                <DashboardCard data={item} key={index} activeTab={activeTab} />
            ))}
        </main>
    );
}

export default App;
