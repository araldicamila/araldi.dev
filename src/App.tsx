import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import { darkTheme, lightTheme } from "./assets/styles/themes";
import { Header } from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("GET_ITEM", "dark");

  console.log(theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Change theme
      </button>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
