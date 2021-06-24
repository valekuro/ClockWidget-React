import "./App.css";
import Theme from "./components/Theme";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { QueryClient } from "react-query";
import ApplicationInd from "./ApplicationInd";

const queryClient = new QueryClient();
function App() {
  const variant = "light";

  return (
    <Theme>
      <Provider store={store}>
        <ApplicationInd variant={variant} />
      </Provider>
    </Theme>
  );
}

export default App;
