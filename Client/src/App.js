import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPost from './screens/BlogPost.js';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      <Route path="" element={<BlogPost/>}/>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
