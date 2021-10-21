import './App.scss';
import { BrowserRouter as Router, Switch/*, Route*/ } from "react-router-dom";
import MyNavbar from './layouts/Navbar/navbar'


function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        {/* <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} /> */}
      </Switch>
    </Router>
  );
}

export default App;
