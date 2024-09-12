import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Personal from "./Pages/Personal/Personal";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Notes from "./Pages/Notes/Notes";
import Messages from "./Pages/Messages/Messages";
import Reports from "./Pages/Reports/Reports";
import Emor from "./Pages/Emor/Emor";
import Company from "./Pages/Company/Company";
import MeetingNotes from "./Pages/MeetingNotes/MeetingNotes";
import OTP from "./Pages/Login/OTP/OTP";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/otp" element={<OTP />} />
          <Route path="/anasayfa" element={<Dashboard />} />
          <Route path="/personel" element={<Personal />} />
          <Route path="/notlar" element={<Notes />} />
          <Route path="/mesajlar" element={<Messages />} />
          <Route path="/raporlar" element={<Reports />} />
          <Route path="/emor" element={<Emor />} />
          <Route path="/firma" element={<Company />} />
          <Route path="/meeting-notes" element={<MeetingNotes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
