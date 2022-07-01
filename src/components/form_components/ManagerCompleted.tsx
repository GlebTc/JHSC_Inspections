import {FC} from 'react';

const ManagerCompleted: FC = () => {
    return (
        <div className="component__container">
            <div className="checkbox-container"> 
                <input type="checkbox" name="manager_completed" id="manager_completed" />
                <label htmlFor="manager_completed">Manager Completed</label>
            </div>
        </div>
    )
}

export default ManagerCompleted;