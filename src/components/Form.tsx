import { FC } from 'react';
import InspectionFrequency from './form_components/InspectionFrequency';   
import Site from './form_components/Site';
import Date from './form_components/Date';
import ManagerCompleted from './form_components/ManagerCompleted';
import StatusTracking from './form_components/StatusTracking';
import InspectionArea from './form_components/InspectionArea';
import InspectionComments from './form_components/InspectionComments';
import Manager from './form_components/Manager';
import Hazard from './form_components/NoHazard';
import Item from './form_components/Item';
import Reminder from './form_components/Reminder';


const Form: FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    return (
            <form id="form" onSubmit={handleSubmit}>
                <InspectionFrequency />
                <Site />
                <Date />
                <ManagerCompleted />
                <StatusTracking />
                <InspectionArea />
                <InspectionComments />
                <Manager />
                <Reminder />
                <Hazard  />
                <Item />
                <button type="submit">Submit</button>
            </form> 
    );
}

export default Form;