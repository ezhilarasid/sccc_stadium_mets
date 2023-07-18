import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../routes/protectedRoutes";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Analytics from "../pages/Analytics";
import Parking from "../pages/Parking/parking";
import Security from "../pages/Security";
import Video from "../pages/Video";
import Operations from "../pages/Operations";
import Outdoors from "../pages/Outdoors";
import FoodConcessions from "../pages/FoodConcessions";
import Profile from "../pages/Profile";
import BirdsEyeView from "pages/BirdsEyeView";

const SCCC_Routes = () => {
  return (
    <Routes>
      {/** Protected Routes */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Navigate replace to="login" />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/security" element={<Security />} />
        <Route path="/video/:pageName" element={<Video />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/outdoors" element={<Outdoors />} />
        <Route path="/foodconcessions" element={<FoodConcessions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/birdsview" element={<BirdsEyeView />} />
      </Route>

      {/** Public Routes */}
      <Route path="/login" element={<Login />} />

      {/** Permission denied route */}
      <Route path="/denied" element={<div>No permission</div>} />
    </Routes>
  );
};

export default SCCC_Routes;
