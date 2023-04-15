// ReactDOM.render(
//   <ul>
//     <li>First Item</li>
//     <li>Second Item</li>
//   </ul>,
//   document.getElementById("react_header")
// );

// const MainContent = function () {
//   return <h1 className="Header">HEY, Im learning React</h1>;
// };

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.querySelector("#react_header")
// );

// // OLD WAY
// const newH1 = document.createElement("h1");
// newH1.textContent = "Trying Vanilla JS";
// newH1.classList.add("Header");
// document.getElementById("react_header").append(newH1);

// Practicing storing jsx elements which return js objects in variables and using them
// const navBar = (
//   <nav>
//     <h1>BRAND name</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );
// ReactDOM.render(navBar, document.getElementById("react_header"));

// const sampleObj_JSX = (
//   <div>
//     <h1>SAMPLE</h1>
//     <ol>
//       <li>
//         <h2>Mood</h2>
//       </li>
//       <li>
//         <h2>Motivation</h2>
//       </li>
//       <li>
//         <h3>Work</h3>
//       </li>
//       <li>
//         <h4>Details</h4>
//       </li>
//     </ol>
//   </div>
// );

// console.log(sampleObj_JSX);
// /*
//  Its a nested JSON object
// */

// // Trting to expect what would happen in this case
// document.querySelector("#react_header").append(sampleObj_JSX);

// // Vs this
// ReactDOM.render(sampleObj_JSX, document.querySelector("#react_header"));

// const reactLogo = <img src="./R.png" width="40"></img>;

// const restPage = (
//   <div>
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// // Use {} to render jsx inside another vars
// ReactDOM.render(
//   <div>
//     {reactLogo}
//     {restPage}
//   </div>,
//   document.getElementById("react_header")
// );

// import Header from "./header";
const Header = () => (
  <header>
    <nav className="nav">
      <img src="./R.png" className="nav-logo" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

const MainPage = () => {
  return (
    <div>
      <h1>React Basics</h1>
      <ol>
        <li>To complete my project</li>
        <li>To use the necessary pieces, one such is me</li>
        <li>In order to win</li>
      </ol>
    </div>
  );
};

const Footer = () => (
  <footer>&copy; 2023 Abhay Parashar development. All rights reserved </footer>
);

const Page = function () {
  return (
    <div>
      <Header /> <MainPage /> <Footer />
    </div>
  );
};
ReactDOM.render(<Page />, document.getElementById("react_header"));
