import Index from 'pages';
import Rhodesianinfopage from 'pages/rhodesian';
import 'styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Layout from 'layouts/Layout';
import BorderCollie from 'pages/borderCollie';


function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <Switch>
          
            <Route path="/rhodesian" >
              <Rhodesianinfopage />
            </Route>
            <Route path="/borderCollie" >
              <BorderCollie/>
            </Route>
            <Route path="/">
              <Index />
            </Route>
          
        </Switch>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
