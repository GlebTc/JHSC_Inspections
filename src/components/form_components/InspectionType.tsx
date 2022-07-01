import {FC} from 'react';

const InspectionFrequency: FC = () => {
    return(
        <div className="component__container">
            <h1>Type of Inspection</h1>
            <div className="inspection__type__container">
                <div className="radio__button">
                    <input type="radio" name="frequency" id="annual" value="annual" />
                    <label htmlFor="annual">Annual Inspection</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="frequency" id="other" value="other" />
                    <label htmlFor="other">Follow Up</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="frequency" id="other" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
        </div>
    )
}

export default InspectionFrequency;