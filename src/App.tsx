import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ErrorBoundary from "./ErrorBoundry";
import NotFoundPage from "./Pages/404/not-found-page";

import HomePage from "./Pages/Home/HomePage";
import Loader from "./UI-Components/Loader/loading";
const NewsPage = React.lazy(() => import("./Pages/News/news-page"));
const AboutUsPage = React.lazy(() => import("./Pages/AboutUs/about-us-page"));
const ContactUsPage = React.lazy(
  () => import("./Pages/ContactUs/contact-us-page")
);
const ConfigPage = React.lazy(
  () => import("./Pages/Configuration/config-page")
);

function App() {
  return (
    <div className="App" data-testid="App">
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/stock/:stock">
            <HomePage />
          </Route>
          <Route path="/config">
            <Suspense fallback={<Loader loading={true} errorMessage="" />}>
              <ConfigPage />
            </Suspense>
          </Route>
          <Route path="/news">
            <Suspense fallback={<Loader loading={true} errorMessage="" />}>
              <NewsPage />
            </Suspense>
          </Route>
          <Route path="/aboutus">
            <Suspense fallback={<Loader loading={true} errorMessage="" />}>
              <AboutUsPage />
            </Suspense>
          </Route>
          <Route path="/contactus">
            <Suspense fallback={<Loader loading={true} errorMessage="" />}>
              <ContactUsPage />
            </Suspense>
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
