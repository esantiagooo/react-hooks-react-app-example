import React from "react";
// import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";
// The import in this example is importing something from within our porject file tree.
// by importing TestComponent we make <TestComponent/> avaiable for use in the App return statement

// Add your code own within the return statement
// Function App is at the top-level, meaning it is the parent component of out React app content
function App() {
  return (
    <div className="App">
      <h1>'Now'x---</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent/>
    </div>
  );
}

export default App;
// the export line allows other files to import things from the App.js file.
