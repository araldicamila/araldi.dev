import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import { darkTheme, lightTheme } from "./assets/styles/themes";
import { Header } from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { LandingPage } from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [theme, setTheme] = useLocalStorage("GET_ITEM", "dark");

  console.log(theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header
        setTheme={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
