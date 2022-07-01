import {FC} from 'react';

const InspectionFrequency: FC = () => {
    return(
        <div className="component__container">
            <div className="frequency-radio-container">
                <div className="radio_button">
                <input type="radio" name="frequency" id="annual" value="annual" />
                <label htmlFor="annual">Annual Inspection</label>
                </div>
                <div className="radio_button">
                <input type="radio" name="frequency" id="other" value="other" />
                <label htmlFor="other">Other</label>
                </div>
            </div>
        </div>

    )
}

export default InspectionFrequency;