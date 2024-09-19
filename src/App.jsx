// import MyForm from "./Components/CustomHooks/FormHandling/MyForm"
// import WindowSize from "./Components/CustomHooks/WindowDimension/WindowSize"
// import FormWithValidation from "./Components/FormValidationHandle/ControlComponentWithState"
// import ComplexValidationForm from "./Components/FormValidationHandle/ComplexFormValidation"
// // import RealTimeValidationForm from "./Components/FormValidationHandle/RealTimeValidation"

import { ThemeProvider } from "./Components/Context/ThemeContext";
import DataDisplay from "./Components/CustomHooks/FetchingData/DataDisplay";
import MyForm from "./Components/CustomHooks/FormHandling/MyForm";
import WindowSize from "./Components/CustomHooks/WindowDimension/WindowSize";
import NestedComponent from "./NestedComponent";


// const App = () => {
//   return (
//     <div>
//     <ComplexValidationForm/>
//     {/* <WindowSize/> */}
//       {/* <FormWithValidation/> */}
//       {/* <RealTimeValidationForm/> */}
//     </div>
//   )
// }

// export default App



// function App() {
//   return (
//     <ThemeProvider>
//       <div>
//         <h1>Context API Example</h1>
//         <ThemedComponent />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;



// App.js with NestedComponent:

// jsx




// function App() {
//   return (
//     <ThemeProvider>
//       <div>
//         <h1>Context API Example</h1>
//         <NestedComponent />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

const App = () => {
  return (
    <div>
    <DataDisplay/>
   {/* <MyForm/> */}
      {/* <WindowSize/> */}
    </div>
  )
}

export default App
