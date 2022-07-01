import {FC} from 'react';

const StatusTracking: FC = () => {
    return(
        // add text area with label
        <div className="status__component__container">
            <div className="status_container">
                <label htmlFor="status">Status</label>
                <textarea id="status" name="status" rows={1} cols={30}></textarea>
            </div>
            <div className="status_container">
                <label htmlFor="tracking">Tracking #</label>
                <textarea id="tracking" name="tracking" rows={1} cols={30}></textarea>
            </div>
        </div>
    )
}

export default StatusTracking;