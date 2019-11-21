import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StyledApp from "./App";
import GeneratedSpellbook from "./components/GeneratedSpellbook";
import SpellbookOptions from "./components/SpellbookOptions";

export default function App() {
  const [isKnaveSpellsIncluded, setKnaveSpells] = useState(false);

  useEffect(() => {
    setKnaveSpells(isKnaveSpellsIncluded);
  }, [isKnaveSpellsIncluded]);

  return (
    <Router basename="/">
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <StyledApp>
            <SpellbookOptions />
          </StyledApp>
        </Route>
        <Route exact path="/spellbook">
          <StyledApp>
            <GeneratedSpellbook />
          </StyledApp>
        </Route>
      </Switch>
    </Router>
  );
}
