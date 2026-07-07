import { Zap, IndianRupee, Cpu } from "lucide-react"

export default function DashboardCards({
    totalEnergy,
    monthlyCost,
    machineCount,
}) {

    return (
        <div className="cards">

            <div className="card">
                <Zap size={32} />
                <h2>Total Energy</h2>
                <h1>{totalEnergy} kWh</h1>
            </div>

            <div className="card">
                <IndianRupee size={32} />
                <h2>Monthly Cost</h2>
                <h1>₹{monthlyCost.toFixed(2)}</h1>
            </div>

            <div className="card">
                <Cpu size={32} />
                <h2>Machines</h2>
                <h1>{machineCount}</h1>
            </div>

        </div>
    )
}