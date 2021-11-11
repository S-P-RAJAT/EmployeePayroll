import "./App.css";
import PayrollForm from "./components/payroll-form/PayrollForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="">
            <PayrollForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
