import ColoredDiv from "./components/ColoredDiv";
import Counter from "./components/Counter";

function App() {

  const sayHello = () => {
    alert("Hi")
  }

  //JS internally passes an event object by default.
  const greetings = (e) => {
    // console.log(e);

    console.log(e.target.name);
    console.log(e.target.value);
  }

  const login = (e) => {
      e.preventDefault(); //preventing default behaviour of link to redirect on other page in order to call "login" function.
      // preventDefault is mostly used with button to prevent form submission and link to prevent page opening.
      alert("Link Clicked")
    }

  return (
    <>
       <h1>Event Handling App</h1>

       <button onClick={sayHello}>Click Me</button>
       <button onClick={greetings} name="btn" value={20}>Show</button>
       {/* calling a function on click of link */}
       <a href="#" onClick={login}>Login</a>

       <Counter/>

       <ColoredDiv/>
    </>
  )
}

export default App
