import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStyles } from "./Styles";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import Secure from "./pages/Secure";
import Settings from "./pages/Settings";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.appRoot}>
      <Router>
        <Navigation />
        <div>
          <div className={classes.appBarSpacer}></div>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/accounts" element={<Accounts />} />
            <Route exact path="/transactions" element={<Transactions />} />
            <Route exact path="/secure" element={<Secure />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
