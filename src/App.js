import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <PrivateRoute path="/" exact>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Router>
    </AuthWrapper>
  );
}

export default App;
