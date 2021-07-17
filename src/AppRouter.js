import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { KeysContextProvider } from "contexts/KeysContextProvider";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import * as P from "pages";
import * as C from "constant";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <KeysContextProvider>
            <Route exact path={C.ROUTES.home} component={P.Home} />
            <Route exact path={C.ROUTES.hash} component={P.Hash} />
            <Route exact path={C.ROUTES.keys} component={P.Keys} />
            <Route exact path={C.ROUTES.block} component={P.Block} />
            <Route exact path={C.ROUTES.tokens} component={P.Tokens} />
            <Route exact path={C.ROUTES.signatures} component={P.Signatures} />
            <Route exact path={C.ROUTES.blockchain} component={P.Blockchain} />
            <Route exact path={C.ROUTES.distributed} component={P.Distributed} />
          </KeysContextProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
