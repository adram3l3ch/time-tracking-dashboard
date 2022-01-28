import DashboardCard from "./components/dashboardCard/DashboardCard";
import data from "./data.json";

function App() {
    return (
        <div className="App">
            {data.dashboard.map(item => (
                <DashboardCard data={item} />
            ))}
        </div>
    );
}

export default App;
