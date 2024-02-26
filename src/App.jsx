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

function App() {
  return (
    <AuthProvider>
      <SampleProvider>
        <BrowserRouter>
          <div className=" flex gap-10 mx-auto pr-10">
            <Lateralbar />
            <div className="flex flex-col w-11/12">
              <Navbar />
              <div className="flex gap-20">
                <div className="flex-1">
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
                      <Route path="/add-sample" element={<SampleFormPage />} />
                      <Route path="/samples/:id" element={<SampleFormPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
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
