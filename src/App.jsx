import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserForm from "./UserForm";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
