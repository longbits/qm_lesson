import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch} from 'react-router-dom'


function AmbiguousExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/company">Company</Link>
                    </li>
                    <li>
                        <Link to="/kim">Kim</Link>
                    </li>
                    <li>
                        <Link to="/chris">Chirs</Link>
                    </li>
                </ul>
                <Switch>
                <Route path="/about" component={About} />
                <Route path="/company" component={Company} />
                {/* //贪婪匹配   用Switch解决  仅匹配一个*/}
                <Route path="/:user" component={User} />
                </Switch>
            </div>
        </Router>
    )
}
function About() {
    return <h2>About</h2>
}
function Company() {
    return <h2>Company</h2>
}
function User({match}) {
    return <h2>User:{match.params.user}</h2>
}

ReactDOM.render(<AmbiguousExample />, document.getElementById('root'))
