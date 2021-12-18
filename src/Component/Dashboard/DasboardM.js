import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import Main from "../Dashboard/Main/Main";
import Sidebar from '../Dashboard/Sidebar/Sidebar'
const DasboardM = () => {
    return (
        <div>
            {/* <Switch>

                <Route>

                </Route>
            </Switch> */}

            <Main />
            <Sidebar />

        </div>
    );
};

export default DasboardM;