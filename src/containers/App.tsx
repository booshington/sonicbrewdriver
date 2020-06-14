import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Toolbox from './Toolbox';
import testTools from '../test/testTools'
import { ITool } from '../components/Tool';

class App extends Component {
  constructor(props: any){
    super(props);
    this.state = {
    }
  };
  render(){
    return (
      <div>
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
          <Link to="/" className={"navbar-brand"}>Sonic BrewDriver v0.1</Link>
          <div className={"collapse navbar-collapse"}>
              <ul id="linklist" className={"navbar-nav mr-auto"}>
              <li className={"nav-item dropdown"}>
                <a className={"nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tools
                </a>
                  <div className={"dropdown-menu"} aria-labelledby="navbarDropdown">
                    {
                      testTools.map((value: ITool, index) => {
                        return (
                          <Link to={{pathname: `/${value.path}`}} className={"nav-link"}>{value.name}</Link>
                        )
                      })
                    }
                    <div className={"dropdown-divider"}></div>
                  </div>
                </li>
                  {/*<li className={"nav-item"}><Link to={{pathname: "/tools",state:this.state}} className={"nav-link"}>Toolbox</Link></li>*/}
                  {/*<li className={"nav-item"}><Link to={{pathname: "/recipes",state:this.state}} className={"nav-link"}>Recipe Creator</Link></li>*/}
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
