import Routes from "./Routes";

import { Header } from "./components";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
