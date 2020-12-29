import React, {Fragment} from 'react';
import Form from "./Form";
import Leads from "./Leads";

const MyComponent = () => {
    return (
        <div>
            <Fragment>
                <Form/>
                <Leads/>
            </Fragment>
        </div>
    );
};

export default MyComponent;
