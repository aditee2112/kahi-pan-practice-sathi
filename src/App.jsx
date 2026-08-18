import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserForm from "./UserForm";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/user-form">
        <button>Go to User Form</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
