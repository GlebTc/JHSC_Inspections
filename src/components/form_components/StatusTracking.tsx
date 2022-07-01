import {FC} from 'react';

const StatusTracking: FC = () => {
    return(
        <div className="component__container">
            <h1>Status</h1>
            <div className="status__container">
                <label htmlFor="status">Status</label>
                <textarea id="status" name="status" rows={1} cols={34}></textarea>
            </div>
            <div className="status__container">
                <label htmlFor="tracking">Tracking #</label>
                <textarea id="tracking" name="tracking" rows={1} cols={30}></textarea>
            </div>
        </div>
    )
}

export default StatusTracking;