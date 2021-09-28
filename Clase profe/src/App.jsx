import Index from  'pages';
import Rhodesianinfopage from 'pages/rhodesian';
import 'App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/rhodesian">
                    <Rhodesianinfopage/>
                  </Route>
                  <Route path="/">
                      <Index/>
                  </Route>
              </Switch>
           
        </Router>
          
   </div>
  );
}

export default App;
