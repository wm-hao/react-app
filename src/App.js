import React from 'react';
import './App.css';
import './Common.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import routes from './router/route';
import {renderRoutes} from 'react-router-config';
import Index from "./work/pages/home/Index";
import Home from "./work/pages/home/Home";
import Login from "./work/Login";
import StyleButton from "./demo/StyleButton";
import NotFound from "./work/NotFound";
import TradeHistory from "./work/pages/trade/TradeHistory";
import TradeEdit from "./work/pages/trade/TradeEdit";

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
                        {/*{*/}
                        {/*    renderRoutes(routes)*/}
                        {/*}*/}
                        {/* {
                            routes.map((route, idx) => {
                                return <Route key={idx} component={route.component} path={route.path}>

                                </Route>
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
                        }*/}
                        <Route exact path={'/'} component={Login}/>
                        <Route path={'/dashboard'} render={
                            () =>
                                <Home>
                                    <Route exact path={'/dashboard'} component={Index}/>
                                    <Route exact path={'/dashboard/tradeHistory'} component={TradeHistory}/>
                                    <Route exact path={'/dashboard/tradeEdit'} component={TradeEdit}/>
                                </Home>

                        }/>
                        {/*<Route component={NotFound}/>*/}

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
