import React from 'react';
import './App.css';
import './Common.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import routes from './router/route';
import {renderRoutes} from 'react-router-config';
import Index from "./work/pages/home/Index";
import Home from "./work/pages/home/Home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        {/*{
                            routes.map((item, idx) => {
                                if (item.exact) {
                                    return <Route key={idx} exact path={item.path}
                                    render={props => (<item.component {...props} routes={item.routes}/>)}/>
                                } else {
                                    return <Route key={idx}  path={item.path}
                                    render={props => (<item.component {...props} routes={item.routes}/>)}/>
                                }
                            })
                        }*/}
                        {
                            renderRoutes(routes)
                        }
                        {
                            routes.map((route, idx) => {
                               /* if (route.exact) {
                                    return <Route key={idx} exact path={route.path} component={route.component}>
                                        {
                                            route.children.map((childRoute, childIdx) => (
                                                <Route key={childIdx} exact path={childRoute.path}
                                                       component={childRoute.component}/>
                                            ))
                                        }
                                    </Route>
                                } else {
                                    return <Route key={idx} path={route.path} component={route.component}/>
                                }*/
                                /*return <Route key={idx} exact path={route.path} component={route.component}>
                                    {
                                        route.routes.map((childRoute, childIdx) => (
                                            <Route key={childIdx} exact path={childRoute.path}
                                                   component={childRoute.component}/>
                                        ))
                                    }
                                </Route>*/
                            })
                        }

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
