import { Navbar } from './components/Navbar';
import { Page } from './components/Page';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/hiring-frontend-developer">
        <Routes>
          <Route path="/"
            element={
              <div className="font-poppins">
                <Navbar />
                <Page />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;