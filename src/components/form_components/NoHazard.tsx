import {FC} from 'react';

const Hazard: FC = () => {
    return (
        <div className="component__container">
            <h1>No Hazard Noted</h1>
            <div className="checkbox__container"> 
                <input type="checkbox" name="hazard" id="hazard" />
                <label htmlFor="hazard">Area inspected and no hazzards noted</label>
            </div>
        </div>
    )
}

export default Hazard;