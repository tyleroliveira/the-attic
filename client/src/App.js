import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RequireAuth from "./components/RequireAuth";
import Boxes from "./pages/Boxes";
import Login from "./pages/Login";
import Items from "./pages/Items";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/boxes" element={<RequireAuth><Boxes /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/boxes/:boxId" element={<RequireAuth><Items /></RequireAuth>} />
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
