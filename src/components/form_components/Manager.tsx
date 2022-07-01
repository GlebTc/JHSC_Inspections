import { FC } from "react";

const Manager: FC = () => {
    return (
        //add dropdown with label followed by email input by phone input
        <div className="component__container">
            <label htmlFor="manager">Manager</label>
            <select id="manager" name="manager">
                <option value="">Select</option>
                <option value="1">Manager 1</option>
            </select>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" />
        </div>
    )
}

export default Manager;