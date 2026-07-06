import { useState } from "react"
import AddMachineForm from "../components/AddMachineForm"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import DashboardCards from "../components/DashboardCards"
import MachineTable from "../components/MachineTable"
import EnergyChart from "../components/EnergyChart"
export default function Dashboard() {

    const [machines, setMachines] = useState([])

    const totalEnergy = machines.reduce(
        (total, machine) => total + Number(machine.energy),
        0
    )

    const costPerUnit = 7.5
    const monthlyCost = totalEnergy * costPerUnit

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

                    <h1>⚡ Smart Energy Optimizer</h1>
                    <p>Monitor and reduce MSME energy usage</p>

                    <DashboardCards
                        totalEnergy={totalEnergy}
                        monthlyCost={monthlyCost}
                        machineCount={machines.length}
                    />

                    <AddMachineForm addMachine={addMachine} />

                    <MachineTable
                        machines={machines}
                        deleteMachine={deleteMachine}
                    />
                    <EnergyChart machines={machines} />

                </div>

            </div>

        </div>
    )
}