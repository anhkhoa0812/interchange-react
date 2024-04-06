import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import Tu_Van from './components/Tu_Van/Tu_Van'
import TKNT_ALL from './components/TKNT/TKNT_ALL'
import DAHT_Tu_Bep from './components/DAHT/DAHT_Tu_Bep'
import DAHT_Phong_Ngu from './components/DAHT/DAHT_Phong_Ngu'
import DAHT_Phong_Tho from './components/DAHT/DAHT_Phong_Tho'
import DAHT_Phong_Khach from './components/DAHT/DAHT_Phong_Khach'
import DAHT_ALL from './components/DAHT/DAHT_ALL'
import Tin_Tuc from './components/Tin_Tuc/Tin_Tuc'
import Gioi_Thieu from './components/Gioi_Thieu/Gioi_Thieu'
import { Routes, Route } from "react-router-dom";
import Bao_Gia from './components/Bao_Gia/Bao_Gia';
import Dang_nhap from './components/Information/Dang_Nhap';
import Dang_Ky from './components/Information/Dang_Ky';
import OTP from './components/Information/OTP';
import Detail_Blog from './components/Tin_Tuc/Detail_Blog';
import Du_An from './components/Du_An/Du_An';
import TKNT_Phong_Ngu from './components/TKNT/TKNT_Phong_Ngu';
import TKNT_Tu_Bep from './components/TKNT/TKNT_Tu_Bep';
import TKNT_Phong_Khach from './components/TKNT/TKNT_Phong_Khach';
import TKNT_Phong_Tho from './components/TKNT/TKNT_Phong_Tho';
import TKNT_Phong_Giai_Tri from './components/TKNT/TKNT_Phong_Giai_Tri';
import DAHT_Phong_Giai_Tri from './components/DAHT/DAHT_Phong_Giai_Tri';
import Product from './components/Product/Product';
import Detail_TKNT from './components/TKNT/Detail_TKNT';
import Detail_Home from './components/Home/Detail_Home';

const NotFound = () =>{
  return(
    <div className="container alert alert-danger">
      tap tin khong ton tai
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
          <Route index element={<App />} />
          <Route path="Home" element={<App />} />
          <Route path="Tu_Van" element={<Tu_Van />} />
          <Route path="Gioi_Thieu" element={<Gioi_Thieu />} />
          <Route path="TKNT_ALL" element={<TKNT_ALL />} />  
          <Route path="TKNT_Phong_Ngu" element={<TKNT_Phong_Ngu />} />  
          <Route path="TKNT_Tu_Bep" element={<TKNT_Tu_Bep/>} />  
          <Route path="TKNT_Phong_Khach" element={<TKNT_Phong_Khach />} />  
          <Route path="TKNT_Phong_Tho" element={<TKNT_Phong_Tho />} /> 
          <Route path="TKNT_Phong_Giai_Tri" element={<TKNT_Phong_Giai_Tri />} />   
          <Route path="DAHT_Tu_Bep" element={<DAHT_Tu_Bep />} />
          <Route path="DAHT_Phong_Ngu" element={<DAHT_Phong_Ngu />} />
          <Route path="DAHT_Phong_Khach" element={<DAHT_Phong_Khach />} />
          <Route path="DAHT_Phong_Tho" element={<DAHT_Phong_Tho />} />
          <Route path="DAHT_Phong_Giai_Tri" element={<DAHT_Phong_Giai_Tri />} />
          <Route path="DAHT_ALL" element={<DAHT_ALL />} />
          <Route path="Product" element={<Product />} />
          <Route path="Tin_Tuc" element={<Tin_Tuc />} />
          <Route path="Bao_Gia" element={<Bao_Gia />} />
          <Route path="Dang_Nhap" element={<Dang_nhap />} />
          <Route path="Dang_Ky" element={<Dang_Ky/>} />
          <Route path="Detail_Blog" element={<Detail_Blog/>} />
          <Route path="Detail_TKNT" element={<Detail_TKNT/>} />
          <Route path="Detail_Home" element={<Detail_Home/>} />
          <Route path="OTP" element={<OTP/>} />
          <Route path="Du_An" element={<Du_An/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
