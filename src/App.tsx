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
    Developer,
    Developer_Contact,
  } from "../src/utils/helpers";

function App() {
  return (
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  );
}

export default App;


  console.log(formatDate(new Date()));
  console.log(`Welcome to ${APP_NAME}`);
  console.log(`Developed by 👉 ${Developer}`);
  console.log(`Developeer Contact 👉 ${Developer_Contact}`);
