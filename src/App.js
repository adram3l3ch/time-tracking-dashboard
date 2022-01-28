import DashboardCard from "./components/dashboardCard/DashboardCard";
import ProfileCard from "./components/profileCard/ProfileCard";
import data from "./data.json";

function App() {
    return (
        <main className="app">
            <ProfileCard name={data.user.username} />
            {data.dashboard.map((item, index) => (
                <DashboardCard data={item} key={index} />
            ))}
        </main>
    );
}

export default App;
