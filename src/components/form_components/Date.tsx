import {FC} from 'react';

const Date: FC = () => {
    return(
        <div className="component__container">
            <div className="date-container">
                <h1>Date</h1>
                <input type="date" name="date" id="date" />
            </div>
        </div>
    )
}

export default Date;