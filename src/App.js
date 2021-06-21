import Routes from "./Routes";

import { Header } from "./components";
import { AuthContextProvider } from "./context/AuthContext";
import { FavoritesContextProvider } from "./context/FavoritesContext";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <FavoritesContextProvider>
        <Routes />
      </FavoritesContextProvider>
    </AuthContextProvider>
  );
}

export default App;
