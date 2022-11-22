import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
