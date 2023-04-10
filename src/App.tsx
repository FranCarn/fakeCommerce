import { HomePage } from "./pages";
import { Login } from "./auth/Login";
function App() {
  const isLogged = localStorage.getItem("token");
  if (isLogged) return <HomePage />;
  return <Login />;
}

export default App;
