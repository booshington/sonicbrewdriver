import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Toolbox from './Toolbox';

class App extends Component {
  constructor(props: any){
    super(props);
    this.state = {
    }
  };
  render(){
    return (
      <div>
        <nav>
          <div className={"nav-wrapper"}>
              <Link to="/" className={"brand-logo right"}>Sonic BrewDriver v0.1</Link>
              <ul id="nav-mobile" className={"left hide-on-med-and-down"}>
                  <li><Link to={{pathname: "/tools",state:this.state}}>Toolbox</Link></li>
                  <li><Link to={{pathname: "/recipes",state:this.state}}>Recipe Creator</Link></li>
              </ul>
          </div>
        </nav>
        <Route exact path="/" render={() => (<div>Home page</div>)}/>
        <Route exact path="/tools" render={() => (<Toolbox />)}/>
        <Route exact path="/recipes" render={() => (<div>Recipes</div>)}/>
      </div>
    );
  }
};

export default App;
