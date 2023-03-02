import {
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { AppRoutes } from '../routes';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../authConfig";
import { Toaster } from "react-hot-toast"

const THEME = createTheme({
  typography: {
    "fontFamily": `"montserrat", sans-serif`
  },
palette:{
  text: {
    disabled: '#000'
  },
}
});

function App() {
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
    <MsalProvider instance={msalInstance}>
      <ThemeProvider theme={THEME}>
        <div className="App">
          <AppRoutes />
          <Toaster />
        </div>
      </ThemeProvider>
    </MsalProvider>
  );
}

export default App;
