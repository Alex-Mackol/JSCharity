import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from '../navbar'
import MainPage from '../../pages/mainpage/'

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route path='/' exact component={MainPage} />
        {/* <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} /> */}
      </Switch>
    </Router>

  );
}

export default App;
