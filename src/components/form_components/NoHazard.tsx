import {FC} from 'react';

const Hazard: FC = () => {
    return (
        <div className="component__container">
            <div className="checkbox-container"> 
                <input type="checkbox" name="hazard" id="hazard" />
                <label htmlFor="hazard">Area inspected and no hazard noted</label>
            </div>
        </div>
    )
}

export default Hazard;