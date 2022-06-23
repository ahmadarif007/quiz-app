import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
// import Quiz from "./pages/Quiz";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <Quiz /> */}
        <Result />
      </Layout>
    </div>
  );
}

export default App;
