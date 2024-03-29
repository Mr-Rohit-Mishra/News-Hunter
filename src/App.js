import './App.css';
import React,{useState}  from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import{BrowserRouter,Routes,Route,}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default function App (props) {

    const [progress, setProgress] = useState(0)
    
  
    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
          <Routes>
            <Route exact path="/News-Hunter" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="generalhome" pageSize={10} country="in" category="general"/>}/>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="generalhome2" pageSize={10} country="in" category="general"/>}/>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="general" pageSize={10} country="in" category="general"/>}/>
            <Route exact path="/business"element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="buisness" pageSize={10} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="entertainment" pageSize={10} country="in" category="entertainment"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="health" pageSize={10} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="science" pageSize={10} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="sports" pageSize={10} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_NEWS_API}  key="technology" pageSize={10} country="in" category="technology"/>}/>
          </Routes>

        <Footer/>
      </BrowserRouter>
      </>
    )
  
}
