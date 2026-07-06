export default function DashboardCards({
    totalEnergy,
    monthlyCost,
    machineCount,
}) {
    return (
        <div className="cards">

            <div className="card">
                <h2>Total Energy</h2>
                <p>{totalEnergy} kWh</p>
            </div>

            <div className="card">
                <h2>Monthly Cost</h2>
                <p>₹{monthlyCost.toFixed(2)}</p>
            </div>

            <div className="card">
                <h2>Machines</h2>
                <p>{machineCount}</p>
            </div>

        </div>
    )
}