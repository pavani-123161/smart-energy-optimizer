import {
    FaHome,
    FaIndustry,
    FaChartBar,
    FaFileAlt,
    FaCog
} from "react-icons/fa"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>⚡ Energy Optimizer</h2>

            <ul>
                <li><FaHome /> Dashboard</li>
                <li><FaIndustry /> Add Machine</li>
                <li><FaChartBar /> Analytics</li>
                <li><FaFileAlt /> Reports</li>
                <li><FaCog /> Settings</li>
            </ul>
        </div>
    )
}