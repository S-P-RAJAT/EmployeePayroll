import "./App.css";
import PayrollForm from "./components/payroll-form/PayrollForm";
import EmployeeHome from "./components/payroll-home/PayrollHome";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/home">
              <EmployeeHome />
            </Route>
            <Route exact path="/payroll-form">
              <PayrollForm />
            </Route>
            <Route exact path="/payroll-form/:id">
              <PayrollForm />
            </Route>
            <Route exact path="">
              <Redirect exact from="/" to="/home" />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
