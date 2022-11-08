import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Dashboard from '../screens/dashboard';
import Home from '../screens/home';
import Login from '../screens/login';
import SignUp from '../screens/sign-up';
import TransactionHistory from '../screens/transaction-history';

const ReactRouter = () => {
    return (
        <div>
            <Router>
                {/* <Header /> */}
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/sign-up" element={<SignUp />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/dashboard/billing" element={<Home />} />
                    <Route exact path="/dashboard/history" element={<TransactionHistory />} />
                </Routes>
            </Router>
        </div>
    )
}


export default ReactRouter