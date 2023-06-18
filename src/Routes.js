import React from "react";
import { Route, Switch } from "react-router-dom";
import Task1 from "./Task1";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={"/task1"} render={() => <Task1 />} />
        </Switch>
    );
};

export default Routes;