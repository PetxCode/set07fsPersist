import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";

function App() {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
