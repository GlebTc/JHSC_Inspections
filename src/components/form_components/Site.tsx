import {FC} from 'react';

const Site: FC = () => {
    return(

        <div className="component__container">
            <h1>Site</h1>
            <div className="site__radio__container">
                <div className="radio__button">
                    <input type="radio" name="site" id="juravinski" value="juravinski" />
                    <label htmlFor="daily">Juravinski</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="mumc" value="mumc" />
                    <label htmlFor="weekly">MUMC</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="urgent_care" value="urgent_care" />
                    <label htmlFor="weekly">Urgent Care</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="st_peters" value="st_peters" />
                    <label htmlFor="weekly">St. Peter's</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="wlmh" value="wlmh" />
                    <label htmlFor="weekly">WLMH</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="chedoke" value="chedoke" />
                    <label htmlFor="weekly">Chedoke</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="jcc" value="jcc" />
                    <label htmlFor="weekly">JCC</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="general" value="general" />
                    <label htmlFor="weekly">Genereal</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="site" id="other" value="other" />
                    <label htmlFor="weekly">Other</label>
                </div>
            </div>
        </div>
    )
}

export default Site;






