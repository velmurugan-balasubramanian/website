import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import TimelineWork from './components/TimelineWork/TimelineWork'
import TimelineEducation from './components/TimelineEducation/TimelineEducation'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'

function App() {

  return (
    <Router>
      <div className="row">
        <div className="col l2 hide-on-small-only sticky_sidebar">
          <Sidebar />
        </div>
        <div className="col l10 s12 valign-wrapper content">
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/about' exact>
                <About />
              </Route>
              <Route path='/skills' exact>
              <Skills />
              </Route>
              <Route path='/education' exact>
              <TimelineEducation />
              </Route>
              <Route path='/work' exact>
              <TimelineWork />
              </Route>
              <Route path='/projects' exact>
              <Projects />
              </Route>
              <Route path='/blog' exact>
              <Blogs />
              </Route>
              <Redirect to="/" />
            </Switch>
        </div>
      </div>
    </Router>

    // <div className="row">
    //   <div className="col s2  sticky_sidebar">
    //    <Sidebar />
    //   </div>
    //   <div className="col s10 content">
    //   <TimelineEducation />
    //   <TimelineWork />
    //   </div>
    // </div>
  );
}

export default App;
