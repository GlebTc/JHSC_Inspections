import {FC} from 'react';

const InspectionArea: FC = () => {
    return(
        <div className="area__component__container">
            <div className="dropdown-container">
                <label htmlFor="floor">Floor</label>
                <select name="floor" id="floor">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="dropdown-container">
                <label htmlFor="area">Area</label>
                <select name="area" id="area">
                    <option value="1">1</option>
                    <option value="2">2</option>

                </select>
            </div>
        </div>
    )
}

export default InspectionArea;