import {FC} from 'react';

const Date: FC = () => {
    return(
        <div className="component__container">
            <h1>Date of Report</h1>
            <div className="date__container">
                <input type="date" name="date" id="date" />
            </div>
        </div>
    )
}

export default Date;