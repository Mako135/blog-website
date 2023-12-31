import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from './components/Header'
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import { LogoutButton } from "./components/LogoutButton";


function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <Container maxW="700px">
      <Header />
      <Routes>
        <Route path="/" element={user ? <HomePage/> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />}/>
        <Route path="/:username" element={<UserPage/>}/>
        <Route path="/:username/post/:pid" element={<PostPage />}/>
      </Routes>

      {user && <LogoutButton/>}
    </Container>
  )
}

export default App
