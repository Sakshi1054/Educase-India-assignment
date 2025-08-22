import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import UserProfile from "./Pages/userProfile";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
    </UserProvider>
  );
}

export default App;
