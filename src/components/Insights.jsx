export default function Insights({ machines }) {

    if (machines.length === 0) {
        return (
            <div className="insights">
                <h2>AI Energy Insights</h2>
                <p>Add machines to receive recommendations.</p>
            </div>
        )
    }

    const totalEnergy = machines.reduce(
        (sum, machine) => sum + Number(machine.energy),
        0
    )

    const averageEnergy = totalEnergy / machines.length

    const highestMachine = machines.reduce((highest, current) =>
        Number(current.energy) > Number(highest.energy) ? current : highest
    )

    function getMachineStatus(energy) {
        const value = Number(energy)

        if (value < averageEnergy)
            return {
                score: 95,
                status: "Healthy",
                color: "green"
            }

        if (value < averageEnergy * 1.5)
            return {
                score: 70,
                status: "Needs Monitoring",
                color: "orange"
            }

        return {
            score: 35,
            status: "Critical",
            color: "red"
        }
    }
    return (
        <div className="insights">

            <h2>🤖 AI Energy Insights</h2>

            <p>
                Average Energy Consumption:
                <strong> {averageEnergy.toFixed(1)} kWh</strong>
            </p>

            <p>
                Highest Consumption:
                <strong> {highestMachine.machine}</strong>
                {" "}
                ({highestMachine.energy} kWh)
            </p>

            {
                Number(highestMachine.energy) > averageEnergy * 1.5 &&
                (
                    <div className="warning">
                        ⚠ Recommendation:
                        Inspect <strong>{highestMachine.machine}</strong>.
                        Its energy consumption is much higher than the fleet average.
                    </div>
                )
            }

            {/* 👇 Add the Machine Health section HERE */}

            <h3>Machine Health</h3>

            {
                machines.map((machine, index) => {

                    const health = getMachineStatus(machine.energy)

                    return (
                        <div
                            key={index}
                            style={{
                                marginTop: "15px",
                                padding: "12px",
                                borderLeft: `6px solid ${health.color}`,
                                background: "#f8f9fa"
                            }}
                        >
                            <strong>{machine.machine}</strong>

                            <p>Energy: {machine.energy} kWh</p>

                            <p>
                                Status:
                                <span
                                    style={{
                                        color: health.color,
                                        fontWeight: "bold",
                                        marginLeft: "8px"
                                    }}
                                >
                                    {health.status}
                                </span>
                            </p>

                            <div
                                style={{
                                    width: "100%",
                                    background: "#ddd",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    height: "12px"
                                }}
                            >
                                <div
                                    style={{
                                        width: `${health.score}%`,
                                        height: "100%",
                                        background: health.color
                                    }}
                                ></div>
                            </div>

                            <p>
                                Health Score: <strong>{health.score}/100</strong>
                            </p>
                        </div>
                    )

                })
            }

        </div>
    )
}