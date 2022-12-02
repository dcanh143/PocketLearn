import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path='/about' component={About}>
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path='/courses' component={CourseHome}>
            <Header />
            <CourseHome />
          </Route>
          <Route exact path='/team' component={Team}>
            <Header />
            <Team />
            <Footer />
          </Route>
          <Route exact path='/pricing' component={Pricing}>
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path='/journal' component={Blog}>
            <Header />
            <Blog />
            <Footer />
          </Route>
          <Route exact path='/contact' component={Contact}>
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  )
}

export default App
