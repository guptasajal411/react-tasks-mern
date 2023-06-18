import React from "react";
import { Route, Switch } from "react-router-dom";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";
import Task6 from "./Task6";
import Tasks from "./Tasks";

const Routes = ({colors}) => {
    return (<>
        <Switch>
            <Route exact path={"/"} render={() => <Tasks />} />
            <Route exact path={"/task1"} render={() => <Task1 />} />
            <Route exact path={"/task2"} render={() => <Task2 />} />
            <Route exact path={"/task3"} render={() => <Task3 colors={colors} />} />
            <Route exact path={"/task4"} render={() => <Task4 />} />
            <Route exact path={"/task5"} render={() => <Task5 />} />
            <Route exact path={"/task6"} render={() => <Task6 />} />
        </Switch>
    </>
    );
};

export default Routes;