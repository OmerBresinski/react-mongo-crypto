import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { KeysContextProvider } from "contexts/KeysContextProvider";
import { Home, Hash, Block, Blockchain, Distributed, Keys, Signatures } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import * as C from "constant";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <KeysContextProvider>
            <Route exact path={C.ROUTES.home} component={Home} />
            <Route exact path={C.ROUTES.hash} component={Hash} />
            <Route exact path={C.ROUTES.block} component={Block} />
            <Route exact path={C.ROUTES.distributed} component={Distributed} />
            <Route exact path={C.ROUTES.keys} component={Keys} />
            <Route exact path={C.ROUTES.signatures} component={Signatures} />
            <Route exact path={C.ROUTES.blockChain} component={Blockchain} />
          </KeysContextProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
