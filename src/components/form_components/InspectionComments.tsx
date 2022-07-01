import { FC } from "react";

const InspectionComments: FC = () => {
    return (
        <div className="component__container">
            <h1>Inspection Comments</h1>
            <div className="inspection__comment__container">
                <label htmlFor="comments">Inspection Comments</label>
                <textarea id="comments" name="comments" rows={1} cols={30}></textarea>
            </div>
        </div>
    )
}

export default InspectionComments;