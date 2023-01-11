// import React from 'react';
// import Main from './Components/Main';
// import './Components/style.css';
// // import SignUp from './Components/Form'
// function App() {
//   return (
//     <>
//       <Main/>
//       {/* <SignUp/> */}
//     </>
//   );
// }
// 
// export default App;

import NavBar from './Components/NavBar';
import Form from './Components/Form';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <NavBar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/form' element={<Form/>}/>
     {/* <Card/> */}
     </Routes>
    </div>
  );
}

export default App;
