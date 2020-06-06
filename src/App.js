import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
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
        <Route exact path="/tools" render={() => (<div>Toolbox</div>)}/>
        <Route exact path="/recipes" render={() => (<div>Recipes</div>)}/>
      </div>
    );
  }
};

export default App;
