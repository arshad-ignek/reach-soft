import routes from "./routes/routes";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center custom-login-page">
     <BrowserRouter>
      <Routes>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            Component={route.component}
           
          />
        ))}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;