import React from "react";
import {Switch, Route} from 'react-router-dom';

import Quiz from "../Quiz/Quiz";
import Question from "../Question/Question";
import Result from "../Result/Result";


const Routes = props => {
    return (
        <Switch>
            <Route exact path='/' component={Quiz} />
            <Route exact path='/question' component={Question} />
            <Route exact path='/result' component={Result} />
        </Switch>
    )
}

export default Routes;