import { Fragment } from 'react';
import { Route , Routes } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Index from './Pages/Index';
function App() {
  return (
    <Fragment>
      <Navbar/>
      <main>
      <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/newarrival" exact element={"/"}/>
      <Route path="/Gallery" exact element={"/"}/>
      <Route path="/aboutus" exact element={"/"}/>
      <Route path="/contact" exact element={"/"}/>
      </Routes>
      </main>
      <Footer/>
      </Fragment>
  );
}

export default App;
