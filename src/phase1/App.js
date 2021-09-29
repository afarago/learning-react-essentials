import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { Checkbox } from "./Checkbox";
// import restaurant from "./restaurant.jpg";

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   );
// }

// function Main(props) {
//   return (
//     <section>
//       <p>We Serve the most {props.adjective} food around</p>
//       <img
//         src={restaurant}
//         height={200}
//         alt="napking and fork at a restaurant table"
//       />
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// const dishes = ["Macharoni and Cheese", "Salmon", "Tofu with Vegetables"];
// const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

// function Footer(props) {
//   return (
//     <footer>
//       <p>Copyright {props.year}</p>
//     </footer>
//   );
// }

// function SecretComponent() {
//   return <h1>Super secret information for authorized users only.</h1>;
// }

// function RegularComponent() {
//   return <h1>Everyone can see this component.</h1>;
// }

function App({ login }) {
  return (
    <div>
      <h1>Hello React Testing Library</h1>
      <Checkbox/>
    </div>
  );

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (!login) return;
  //   setLoading(true);
  //   setError(null);
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response) => {
  //       if (response.status === 404) throw new Error("User Not Found");
  //       return response.json();
  //     })
  //     .then(setData)
  //     .finally(() => setLoading(false))
  //     .catch(setError);
  // }, [login]);

  // if (loading) return <h1>Loading....</h1>;
  // if (error) return <pre>{error.toString()}</pre>;
  // if (!data) return null;

  // return (
  //   <div>
  //     <h1>{data.name}</h1>
  //     <p>{data.location}</p>
  //     <img alt={data.login} src={data.avatar_url} />
  //   </div>
  // );

  // const [emotion, setEmotion] = useState("happy");
  // const [secondary, setSecondary] = useState("tired");

  // useEffect(() => {
  //   console.log(`I's ${emotion} around here.`);
  // }, [emotion]);

  // useEffect(() => {
  //   console.log(`I's ${secondary} around here.`);
  // }, [secondary]);

  // const [checked, toggle] = useReducer((checked) => !checked, false);
  // return (
  //   <>
  //     {/* <input type="checkbox" value={checked} onChange={toggle} />
  //     <p>{checked ? "checked" : "not checked"}</p> */}
  //     {/*       <hr />
  //     <h1>
  //       Current emotion is {emotion} and {secondary}.
  //     </h1>
  //     <button onClick={() => setEmotion("frustrated")}>Frustrated</button>
  //     <button onClick={() => setEmotion("enthusiastic")}>Enthusiastic</button>
  //     <button onClick={() => setEmotion("happy")}>Happy</button>
  //     <hr />
  //     <button onClick={() => setSecondary("crabby")}>Make crabby</button>
  //     <button onClick={() => setSecondary("tired")}>Make tired</button> */}
  //   </>
  // );

  // return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>;

  // return (
  //   <div className="App">
  //     <Header name="Attila" />
  //     <Main adjective="delicious" dishes={dishObjects} />
  //     <Footer year={new Date().getFullYear()} />
  //   </div>
  // );
}

export default App;
