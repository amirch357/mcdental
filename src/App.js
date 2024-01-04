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
   <Route path='/mc2dental_new' element={<Home />} />
   <Route path="mc2dental_new/services" element={<Services />} />
   <Route path="/mc2dental_new/patient-information" element={<PatientInfo />} />
   <Route path="/mc2dental_new/gallery" element={<Gallery />} />
   <Route path="/mc2dental_new/faq" element={<FAQ />} />
   <Route path="/mc2dental_new/blogs" element={<Blog  />}  />
   
   <Route path={`/mc2dental_new/blog`} element={<PostDetail />} />
   <Route path={`/mc2dental_new/search`} element={<Search />} />
  
   </Routes>
   <Footer />
   </>
  );
}

export default App;
