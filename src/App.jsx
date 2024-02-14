import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import SamplesPage from "./pages/SamplesPage";
import SampleFormPage from "./pages/SampleFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';
import { SampleProvider } from "./context/SamplesContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <SampleProvider>
      <BrowserRouter>
      <main className=" container mx-auto px-10">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute/>}>
            <Route path="/mysamples" element={<SamplesPage />} />
            <Route element={<AdminRoute/>}>
            <Route path="/samples" element={<h1>samples page admin</h1>} />
            </Route>        
            <Route path="/add-sample" element={<SampleFormPage />} />
            <Route path="/samples/:id" element={<SampleFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </main>
      </BrowserRouter>
      </SampleProvider>
    </AuthProvider>
  );
}

export default App;
