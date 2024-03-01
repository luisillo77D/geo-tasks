import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import SamplesPage from "./pages/SamplesPage";
import SampleFormPage from "./pages/SampleFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import { SampleProvider } from "./context/SamplesContext";
import Navbar from "./components/Navbar";
import Lateralbar from "./components/Lateralbar";
import { useState } from "react";
import Mapa from "./pages/mapa";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <AuthProvider>
      <SampleProvider>
        <BrowserRouter>
          <div className="gap-10 mx-auto px-0 sm:pr-10 h-screen">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex w-full h-5/6 justify-between">
              {showSidebar && <Lateralbar />}
              <div className={`w-full ${showSidebar ? 'ml-10' : ''}`}>
                <div className="flex justify-center mt-3">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route element={<ProtectedRoute />}>
                      <Route path="/mysamples" element={<SamplesPage />} />
                      <Route element={<AdminRoute />}>
                        <Route
                          path="/samples"
                          element={<h1>samples page admin</h1>}
                        />
                      </Route>
                      <Route
                        path="/add-sample"
                        element={<SampleFormPage />}
                      />
                      <Route
                        path="/samples/:id"
                        element={<SampleFormPage />}
                      />
                      <Route path="/profile" element={<Mapa  />} />
                    </Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </SampleProvider>
    </AuthProvider>
  );
}

export default App;
