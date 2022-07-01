import { FC } from "react";

const Item: FC = () => {
    return (
        <div className="component__container">
            <div className="hazards__container">
            <h1>Documented Hazards</h1>
            <div className="item__container">
                <h2>Item Number 1</h2>
            </div>
            <div className="item__container">
                <label htmlFor="conditions">Unsafe Conditions and/or acts</label>
                <textarea id="conditions" name="conditions" rows={1} cols={30}></textarea>
            </div>
            <div className="item__container">
                <p>Attach Photos/Files</p>
            </div>
            <div className="item__container">
                <label htmlFor="work_order_number">Work Order #</label>
                <textarea id="work_order_number" name="work_order_number" rows={1} cols={30}></textarea>
            </div>
            <div className="item__container">
                <p>Identified in Previous Inspection</p>
                <div className="radio__button">
                    <input type="radio" name="previous-inspection" id="yes" value="yes" />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div className="radio__button">
                    <input type="radio" name="previous-inspection" id="no" value="no" />
                    <label htmlFor="other">No</label>
                </div>
            </div>
            <div className="item__container">
                <p>Date Completed / Work Order Issued</p>
                <input type="date-modified" name="date-modified" id="date-modified" />
            </div>
            <div className="item__container">
                <label htmlFor="action">Corrective Action Taken</label>
                <textarea id="action" name="action" rows={1} cols={30}></textarea>
            </div>
            </div>
        </div>
    )
}

export default Item