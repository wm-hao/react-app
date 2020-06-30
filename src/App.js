import React from 'react';
import './App.css';
import './Common.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './router/route';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        {
                            routes.map((item, idx) => {
                                if (item.exact) {
                                    return <Route key={idx} exact path={item.path} component={item.component}></Route>
                                } else {
                                    return <Route key={idx} path={item.path} component={item.component}></Route>
                                }
                            })
                        }
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
