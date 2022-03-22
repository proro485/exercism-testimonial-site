import Navbar from './components/Navbar';
import Page from './components/Page';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"
            element={
              <>
                <Navbar />
                <Page />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;