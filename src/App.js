import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./Components/Feed/Feed.jsx";
import Home from "./Components/Profile/Home";
import Footer from "./Components/Footer/Footer";
import MyNav from "./Components/navbar/MyNav";
import Connection from "./Components/Profile/connection/Connection";

function App() {
  return (
    <>
      <Router>
        <MyNav />
        <br />
        <br />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/home/:id" component={Home} />
          <Route path="/" exact component={Feed} />
          <Route path="/feed" exact component={Feed} />
          <Route path="/connections" exact component={Connection} />
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
