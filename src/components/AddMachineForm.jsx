import { useState } from "react"

export default function AddMachineForm({ addMachine }) {

    const [machine, setMachine] = useState("")
    const [energy, setEnergy] = useState("")

    function handleSubmit(e) {

        e.preventDefault()

        addMachine(machine, energy)

        setMachine("")
        setEnergy("")
    }

    return (

        <form onSubmit={handleSubmit}>

            <h2>Add Machine Data</h2>

            <input
                type="text"
                placeholder="Machine Name"
                value={machine}
                onChange={(e) => setMachine(e.target.value)}
            />

            <input
                type="number"
                placeholder="Energy Used"
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
            />

            <button type="submit">
                Save
            </button>

        </form>

    )
}