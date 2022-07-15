import {FC} from 'react';
import BaseFormCard from "../../design-system/BaseFormCard";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

const InspectionFrequency: FC = () => {

    return(
        <BaseFormCard title={"Type of Inspection"} content={
            <>
                <RadioGroup>
                    <FormControlLabel value="female" control={<Radio />} label="Annual Inspection" />
                    <FormControlLabel value="male" control={<Radio />} label="Follow Up" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </>
        } />

    )
}

export default InspectionFrequency;