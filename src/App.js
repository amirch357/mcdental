import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header/Header';
import {Route,Routes,useNavigate} from "react-router-dom"
import Home from './Pages/Home/Home';
import "./fonts/Kirvy-Light.otf"
import Footer from './Layout/Footer/Footer';
import Services from './Pages/Services/Services';
import PatientInfo from './Pages/PatientInfo/PatientInfo';
import Gallery from './Pages/Gallery/Gallery';
import FAQ from './Pages/FAQ/FAQ';
import Blog from './Pages/Blog/Blog';
import PostDetail from './Pages/PostDetail/PostDetail';
import Search from './Pages/Search/Search';


function App() {
 

 
   
    
  
  return (
   <>
   
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path="/services" element={<Services />} />
   <Route path="/patient-information" element={<PatientInfo />} />
   <Route path="/gallery" element={<Gallery />} />
   <Route path="/faq" element={<FAQ />} />
   <Route path="/blogs" element={<Blog  />}  />
   
   <Route path={`/blog`} element={<PostDetail />} />
   <Route path={`/search`} element={<Search />} />
  
   </Routes>
   <Footer />
   </>
  );
}

export default App;
