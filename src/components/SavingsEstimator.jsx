export default function SavingsEstimator({ machines }) {

    if (machines.length === 0) {
        return null
    }

    const totalEnergy = machines.reduce(
        (sum, machine) => sum + Number(machine.energy),
        0
    )

    const averageEnergy = totalEnergy / machines.length

    const highestMachine = machines.reduce((highest, current) =>
        Number(current.energy) > Number(highest.energy) ? current : highest
    )

    const extraEnergy = Math.max(
        Number(highestMachine.energy) - averageEnergy,
        0
    )

    const costPerUnit = 7.5

    const monthlySaving = extraEnergy * costPerUnit

    return (
        <div className="savings-card">

            <h2>💰 Estimated Savings</h2>

            <p>
                Highest Energy Machine:
                <strong> {highestMachine.machine}</strong>
            </p>

            <p>
                Potential Monthly Saving:
            </p>

            <h1>
                ₹{monthlySaving.toFixed(2)}
            </h1>

            <p>
                If energy consumption is reduced to the fleet average.
            </p>

        </div>
    )
}