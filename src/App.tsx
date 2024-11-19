// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
    //   return (
        //     <div className="App">
        //       <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //           Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { ThemeContextProvider } from './theme/ThemeContext';
import { AppRoutes } from './routing/AppRoutes';
import {
    formatDate,
    capitalizeFirstLetter,
    calculateAge,
    isValidEmail,
    generateSlug,
    APP_NAME,
  } from "../src/utils/helpers";

function App() {
  return (
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  );
}

export default App;


  console.log(formatDate(new Date())); // Outputs: '2024-11-19'
  console.log(capitalizeFirstLetter("hello")); // Outputs: 'Hello'
  console.log(calculateAge(new Date("2000-01-01"))); // Outputs: 24 (or current age based on the year)
  console.log(isValidEmail("test@example.com")); // Outputs: true
  console.log(generateSlug("Saki Royals Soccer Club")); // Outputs: 'saki-royals-soccer-club'
  console.log(`Welcome to ${APP_NAME}`); // Outputs: 'Welcome to Saki Royals Soccer Club'
