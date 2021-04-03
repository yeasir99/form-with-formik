import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ContactForm from './components/ContactForm'
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact-form" component={ContactForm} />
        <Route path="/registration-form" component={RegistrationForm} />
        <Redirect to="/contact-form" />
      </Switch>
    </Router>
  )
}

export default App
