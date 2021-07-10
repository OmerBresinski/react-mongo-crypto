import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Hash, Block, Blockchain } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import * as C from "constant";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={C.ROUTES.home} component={Home} />
          <Route exact path={C.ROUTES.hash} component={Hash} />
          <Route exact path={C.ROUTES.block} component={Block} />
          <Route exact path={C.ROUTES.blockChain} component={Blockchain} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
