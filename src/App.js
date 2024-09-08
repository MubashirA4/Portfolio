import Layout from "./layout";
import About from "./pages/about";
import HomePage from "./pages/home";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import Form from "./pages/Projects/projects/form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/about_me" exact element={<About/>} />
          <Route path="/projects" exact element={<Projects/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/form" exact element={<Form/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
