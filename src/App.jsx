import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserForm from "./UserForm";
import Home from "./components/Home";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/carousel-page" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
