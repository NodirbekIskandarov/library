import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import History from "./pages/history/History";
import Managment from "./pages/managment/Managment";
import Regulatorydoc from "./pages/regulatorydoc/Regulatorydoc";
import Orgstructures from "./pages/orgstructures/Orgstructures";
import Confirmation from "./pages/confirmation/Confirmation";
import Contact from "./pages/contact/Contact";
import Courses from "./pages/courses/Courses";
import Region from "./pages/region/Region";
import Contract from "./pages/contract/Contract";
import Certificate from "./pages/certificate/Certificate";
import Aboutdocuments from "./pages/aboutdocuments/Aboutdocuments";
import Detail from "./pages/datail/Detail";
import Application from "./pages/application/Application";
import Online from "./pages/online/Online";
import Applicationforonline from "./pages/applicationforonline/Applicationforonline";
import Pay from "./pages/pay/Pay";
import Questions from "./pages/questions/Questions";
import Registration from "./pages/registration/Registration";
import Galery from "./pages/galery/Galery";
import Index from "./layouts/components/Index";
import './i18n'
import Onlinecourses from "./pages/onlinecourses/Onlinecourses";
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />}>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/managment" element={<Managment />} />
            <Route path="/regulatory" element={<Regulatorydoc />} />
            <Route path="/structures" element={<Orgstructures />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path={`/batafsil/:id`} element={<Detail />} />
            <Route path="/xorazm" element={<Region />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path={`/documents/:id`} element={<Aboutdocuments />} />
            <Route path="/application" element={<Application />} />
            <Route path="/online" element={<Onlinecourses />} />
            <Route
              path="/applicationforonline"
              element={<Applicationforonline />}
            />
            <Route path="/pay" element={<Pay />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>

        {/* <Navbar/>
        <Menu/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/managment' element={<Managment/>}/>
          <Route path='/regulatory' element={<Regulatorydoc/>}/>
          <Route path='/structures' element={<Orgstructures/>}/>
          <Route path='/confirmation' element={<Confirmation/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/xorazm' element={<Region/>}/>
          <Route path='/contract' element={<Contract/>}/>
          <Route path='/certificate' element={<Certificate/>}/>
          <Route path='/documents' element={<Aboutdocuments/>}/>
          <Route path='/batafsil' element={<Detail/>}/>
          <Route path='/application' element={<Application/>}/>
          <Route path='/online' element={<Online/>}/>
          <Route path='/applicationforonline' element={<Applicationforonline/>}/>
          <Route path='/pay' element={<Pay/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/galery' element={<Galery/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
        <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
