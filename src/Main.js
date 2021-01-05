import { Redirect, Route, Switch } from 'react-router-dom';
import ForgotPassword from './auth/ForgotPassword';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';

function Main() {
    return (
        <div>
            <div>
                <Switch>
                    <Route path="/forgot-password" component={ForgotPassword}></Route>
                    <Route path="/sign-up" component={SignUp}></Route>
                    <Route path="/sign-in" component={SignIn}></Route>
                    <Route path="/home" >
                        <><p>Landing Page</p></>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Main;