import Nav from "./Components/Nav";
import About from "./Components/About";
import Project from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [msg, setmsg] = useState('');
  const [form, setForm] = useState({});
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://shreedraskar-api.onrender.com", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();

    setFormSubmitted(true);
    setmsg('Form submitted successfully!');
  };

  const [text] = useTypewriter({
    words: ["Web-Developer", "Competitive Programmer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 80,
  });

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<About text={text} />}></Route>
          <Route exact path="/projects" element={<Project />}></Route>
          <Route exact path="/exp" element={<Experience />}></Route>
          <Route
            exact
            path="/contact"
            element={
              <Contact
                handleForm={handleForm}
                handleSubmit={handleSubmit}
                msg={msg}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
