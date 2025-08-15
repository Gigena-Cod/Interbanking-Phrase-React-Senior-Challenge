import { ViewPhrases } from "./infrastructure/features/ViewPhrases/ViewPhrases ";
import { Provider } from "react-redux";
import { store } from "./infrastructure/redux";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={store}>
      <ViewPhrases />
      <ToastContainer />
    </Provider>
  );
}

export default App;
