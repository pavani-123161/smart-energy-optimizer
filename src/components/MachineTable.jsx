export default function MachineTable({ machines, deleteMachine }) {
    return (
        <>
            <h2>Saved Machines</h2>

            <table className="machine-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Machine</th>
                        <th>Energy (kWh)</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {machines.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.machine}</td>
                            <td>{item.energy}</td>
                            <td>
                                <button onClick={() => deleteMachine(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}