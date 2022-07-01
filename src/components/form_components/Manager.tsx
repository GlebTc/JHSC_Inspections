import { FC } from "react";

const Manager: FC = () => {
    return (
        <div className="component__container">
            <h1>Responsible Manager</h1>
            <div className="manager__contact">
            <label htmlFor="manager">Manager</label>
            <select id="manager" name="manager">
                <option value="">Select</option>
                <option value="1">Manager 1</option>
            </select>
            </div>
            <div className="manager__contact">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
            </div>
            <div className="manager__contact">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" />
            </div>
        </div>
    )
}

export default Manager;