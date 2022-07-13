import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import store from "./store/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </Provider>
);
