import { FC } from "react";

const Item: FC = () => {
    return (
        <div className="component__container">
            <p>Item Number 1</p>
            <label htmlFor="conditions">Unsafe Conditions and/or acts</label>
            <textarea id="conditions" name="conditions" rows={1} cols={30}></textarea>
            <p>Attach Photos/Files</p>
            <label htmlFor="work_order_number">Work Order #</label>
            <textarea id="work_order_number" name="work_order_number" rows={1} cols={30}></textarea>
            <div className="previous-inspection-container">
                <input type="radio" name="previous-inspection" id="yes" value="yes" />
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="previous-inspection" id="no" value="no" />
                <label htmlFor="other">No</label>
            </div>

            <div className="date-container">
                <h1>Date Completed / Work Order Issued</h1>
                <input type="date-modified" name="date-modified" id="date-modified" />
            </div>
            <label htmlFor="action">Corrective Action Taken</label>
            <textarea id="action" name="action" rows={1} cols={30}></textarea>
        </div>
    )
}

export default Item