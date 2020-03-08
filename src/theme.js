import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const getTheme = (isDarkMode) => createMuiTheme({
  palette: {
    type: isDarkMode ? "dark" : "light"
  }
});

export default getTheme;
