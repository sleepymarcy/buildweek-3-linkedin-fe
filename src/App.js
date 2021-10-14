import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./Components/Feed";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import MyNav from "./Components/MyNav.jsx"


function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/home/:id" component={Home} />
          <Route path="/" exact component={Feed} />
          <Route path="/feed" exact component={Feed} />
          <Route
            render={() => (
              <>
                <br />
                <h1 className="text-danger text-center m-5 p-5">
                  404 - NOT FOUND
                </h1>
              </>
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;