import { FC } from "react";

const InspectionComments: FC = () => {
    return (
        // add text area with label
        <div className="component__container">
            <label htmlFor="comments">Inspection Comments</label>
            <textarea id="comments" name="comments" rows={1} cols={30}></textarea>
        </div>
    )
}

export default InspectionComments;