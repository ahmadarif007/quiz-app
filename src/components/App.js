import "../styles/App.css";
import Layout from "./Layout";
import Login from "./pages/Login";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <SignUp /> */}
        <Login />
      </Layout>
    </div>
  );
}

export default App;
