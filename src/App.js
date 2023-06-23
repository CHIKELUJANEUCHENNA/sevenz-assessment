import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./Login";

function App() {
  const token = localStorage.getItem("token");
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          {token ? (
            <>
              <NavBar />
              <div className="d-flex">
                <SideBar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
