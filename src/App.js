import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ContactForm from './components/ContactForm'
import RegistrationForm from './components/RegistrationForm'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact-form" component={ContactForm} />
        <Route path="/registration-form" component={RegistrationForm} />
        <Route path="/signup-form" component={SignUp} />
        <Redirect to="/contact-form" />
      </Switch>
    </Router>
  )
}

export default App
