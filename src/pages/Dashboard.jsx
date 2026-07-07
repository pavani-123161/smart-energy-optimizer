import { useState } from "react"
import AddMachineForm from "../components/AddMachineForm"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import DashboardCards from "../components/DashboardCards"
import MachineTable from "../components/MachineTable"
import EnergyChart from "../components/EnergyChart"
import Insights from "../components/Insights"
import SavingsEstimator from "../components/SavingsEstimator"

export default function Dashboard() {

    const [machines, setMachines] = useState([])
    const [search, setSearch] = useState("")

    const totalEnergy = machines.reduce(
        (total, machine) => total + Number(machine.energy),
        0
    )

    const costPerUnit = 7.5
    const monthlyCost = totalEnergy * costPerUnit
    const filteredMachines = machines.filter(machine =>
        machine.machine.toLowerCase().includes(search.toLowerCase())
    )

    function addMachine(machine, energy) {
        setMachines([
            ...machines,
            { machine, energy }
        ])
    }

    function deleteMachine(indexToDelete) {
        setMachines(
            machines.filter((_, index) => index !== indexToDelete)
        )
    }

    return (
        <div className="layout">

            <Sidebar />

            <div className="content">

                <Header />

                <div className="dashboard">

                    <DashboardCards
                        totalEnergy={totalEnergy}
                        monthlyCost={monthlyCost}
                        machineCount={machines.length}
                    />

                    <AddMachineForm addMachine={addMachine} />
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="🔍 Search machine..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <MachineTable
                        machines={filteredMachines}
                        deleteMachine={deleteMachine}
                    />
                    <EnergyChart machines={machines} />

                    <Insights machines={machines} />

                    <SavingsEstimator machines={machines} />

                </div>

            </div>

        </div>
    )
}