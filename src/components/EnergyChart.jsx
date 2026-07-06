import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function EnergyChart({ machines }) {

    const data = {
        labels: machines.map(machine => machine.machine),

        datasets: [
            {
                label: "Energy (kWh)",
                data: machines.map(machine => Number(machine.energy)),
            },
        ],
    }

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Energy Analytics</h2>

            <Bar data={data} />
        </div>
    )
}