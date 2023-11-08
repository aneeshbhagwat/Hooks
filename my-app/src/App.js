import React from "react";
//import { useCounter } from "./useCounter";
//import { useControlComponents } from "./useControlComponents";
import ParentComponent from "./componets/ParentComponent";
import WithoutHooksForm from "./components/WithoutHooksForm";
//import WithHooksForms from "./components/WithHooksForms";

// function ExampleComponent() {
//   // Using the useCounter hook
//   const counter = useCounter(0);

//   // Using the useControlComponents hook
//   const control = useControlComponents();

//   const handleClick = (index) => {
//     control.setActive(index);
//   };

//   return (
//     <div>
//       <div>
//         <p>Count: {counter.count}</p>
//         <button onClick={counter.increment}>Increment</button>
//         <button onClick={counter.decrement}>Decrement</button>

//         <button onClick={counter.reset}>Reset</button>
//       </div>
//       <div>
//         {["ANISH", "ROHAN", "RAHUL"].map((label, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             style={{
//               fontWeight: control.activeIndex === index ? "bold" : "normal",
//             }}
//           >
//             {label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ExampleComponent;

// function App() {
//   return (
//     <div className="App">
//       <ParentComponent />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      {/* <WithHooksForms />*/}
      <WithoutHooksForm />
    </div>
  );
}

export default App;
