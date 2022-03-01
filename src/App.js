import { useAuthUser } from "./context/auth-context";
import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp"

function App() {
  const authUser = useAuthUser()

  if (authUser) {
    return <AuthApp />
  } else {
    return <UnAuthApp />
  }
}

export default App;
