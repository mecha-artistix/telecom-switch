import "./App.css";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter basename="/Kinz247-voip/">
      <AuthProvider>
        <div className="mx-auto w-screen max-w-[2000px]">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<AuthenticatedApp />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

function AuthenticatedApp() {
  const { isAuthenticated, user, logout } = useAuth();

  // if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <>
      <header className="sticky top-0 z-10 h-24 w-full bg-white">
        <Header />
      </header>
      <main className="flex w-full border border-black">
        <LeftPanel user={user} logout={logout} />
        <Dashboard />
      </main>
    </>
  );
}

export default App;
