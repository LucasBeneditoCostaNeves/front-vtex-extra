import { Routes, Route } from "react-router-dom";
import { Profile } from "../page/profile";
import { PageLogin } from "../page/login";
import { RegisterPage } from "../page/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
