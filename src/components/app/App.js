import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from '../navbar'
import MainPage from '../../pages/mainpage/'
import AboutPage from '../../pages/aboutpage/'
import GiveHelpPage from '../../pages/givehelppage/'
import ContactsPage from '../../pages/contactspage/'

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path='/givehelp' component={GiveHelpPage} />
        <Route path='/contacts' component={ContactsPage} />
      </Switch>
    </Router>

  );
}

export default App;