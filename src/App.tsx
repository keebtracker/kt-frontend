import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages";
import Builds from "./pages/builds";
import UserParts from "./pages/userParts";
import Wishlist from "./pages/wishlist";
import Sold from "./pages/sold";

const client = new ApolloClient({
  uri: "http://localhost:5050/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/userParts" element={<UserParts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/sold" element={<Sold />} />
      </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
