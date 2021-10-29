import './index.css'
import { Redirect, Route, Switch } from 'react-router';
import Home from './Componenets/Home'
import About from './Componenets/Aboute'
import Service from './Componenets/Service'
import Contact from './Componenets/Contact'
import Navbar from './Componenets/Navbar'




function App() {
  return (
    <>
      <Navbar />
        <div className="container mx-auto flex justify-center items-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
        




      </>
      );
}

      export default App;
