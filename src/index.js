import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import App from "./App";
// import Button from '@material-ui/core/Button';
// import Clock from "./demo/Clock";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
// const username = 'richer';
// const element = <h1>Hello, world {username}</h1>;

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello</h1>
//             <h2>it's {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);
// ReactDOM.render(element, document.getElementById('root'));


// function Welcome(props) {
//     return <h1>Hello {props.name}</h1>
// }
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
// const element = <App/>;
// ReactDOM.render(<Clock/>, document.getElementById("root"));
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//
//         // 为了在回调中使用 `this`，这个绑定是必不可少的
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }
//
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
//
// function LoginButton(props) {
//     return (
//         <Button onClick={props.onClick}>
//             Login
//         </Button>
//     );
// }
//
// function LogoutButton(props) {
//     return (
//         <Button onClick={props.onClick}>
//             Logout
//         </Button>
//     );
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );
// const list = [1,2,3,4,5];
// // const element = list.map((number) => <li>{number*2}</li>);
// function Welcome(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((n) => <li key={n.toString()}>{n}</li>);
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// ReactDOM.render(<Welcome numbers={list}/>, document.getElementById('root'));
// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );
// }
//
// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
// );
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('提交的名字: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }
// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('你喜欢的风味是: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     选择你喜欢的风味:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">葡萄柚</option>
//                         <option value="lime">酸橙</option>
//                         <option value="coconut">椰子</option>
//                         <option value="mango">芒果</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }
// ReactDOM.render(<FlavorForm/>, document.getElementById('root'));
// ReactDOM.render(<input value="hi" />, document.getElementById('root'));root
// class FileInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.fileInput = React.createRef();
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         alert(
//             `Selected file - ${this.fileInput.current.files[0].name}`
//         );
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Upload file:
//                     <input type="file" ref={this.fileInput} />
//                 </label>
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }

// ReactDOM.render(
//     <MaterialUI/>,
//     document.getElementById('root')
// );
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
