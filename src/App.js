import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const [country, updateCountry] = useState("in");
  const [countryName, updateCountryName] = useState("India");
  const [search, setSearch] = useState("");

  return (
    <div>
      <Router>
        <Navbar
          search={search}
          setSearch={setSearch}
          updateCountry={updateCountry}
          updateCountryName={updateCountryName}
        />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/search">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="general"
              search={search}
            />
          </Route>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="general"
              search=""
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="business"
              search=""
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="entertainment"
              search=""
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="general"
              search=""
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="health"
              search=""
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="science"
              search=""
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="sports"
              search=""
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country={country}
              countryName={countryName}
              category="technology"
              search=""
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
