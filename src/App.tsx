import { Provider } from "react-redux";
import { store } from "./redux/store";
import IncDec from "./IncDec";

function App() {
  return (
    <Provider store={store}>
      <IncDec />
    </Provider>
  );
}

export default App;
