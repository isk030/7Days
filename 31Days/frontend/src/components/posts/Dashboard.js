import React, {Fragment} from 'react';
import Form from "./Form";
import Posts from "./Posts";

const Dashboard = () => {
    return (
        <div>
            <Fragment>
                <Form/>
                <Posts/>
            </Fragment>
        </div>
    );
};

export default Dashboard;
