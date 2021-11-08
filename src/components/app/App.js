import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from '../navbar'
import MainPage from '../../pages/mainpage/'
import AboutPage from '../../pages/aboutpage/'
import GiveHelpPage from '../../pages/givehelppage/'
import ContactsPage from '../../pages/contactspage/'
import Footer from "../footer/"

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path='/givehelp'>
            <GiveHelpPage />
          </Route>
          <Route path='/contacts'>
            <ContactsPage />
          </Route>
        </Switch>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;