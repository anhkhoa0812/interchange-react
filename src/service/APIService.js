import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios"
import api from "../api";

const getDataBlog = () =>{
    return api.get('/api/blog');
}
const postLogin = (email,password) =>{
    return api.post('/api/auth/login',{userIdOrPhoneNumberOrEmail:email, password:password});
}
const postRegister = (userId, password, rePassword, phoneNumber,email, firstName, lastName,birthDate, province, district, ward, streetAddress) =>{
    return api.post('/api/auth/registration',{userId: userId, password: password, rePassword: rePassword,phoneNumber: phoneNumber, email: email, firstName: firstName, lastName: lastName, birthDate: birthDate, province: province, district: district, ward:ward, streetAddress: streetAddress});
}
const postOTP = (userId, password, rePassword, phoneNumber,email, firstName, lastName,birthDate, province, district, ward, streetAddress, otp) =>{
    return api.post('/api/auth/registerOTPAuthentication',{userId: userId, password: password, rePassword: rePassword, phoneNumber: phoneNumber, email: email, firstName: firstName, lastName: lastName, birthDate: birthDate, province: province, district: district, ward: ward, streetAddress: streetAddress, otp: otp});
}
const getImagePost = (id) =>{
    return api.get(`/api/blog/image?blogId=${id}`);
} 
const getProductById = (id) =>{
    return api.get(`/api/manage-product/getProductById/${id}`);
} 
const getProduct= () =>{
    return api.get(`/api/product`);
} 
const getSupplier = () =>{
    return api.get('/api/supplier/listSupplier');
}
const getCategoryRoom = () =>{
    return api.get('/api/categoryRoom/findAll');
}
const getProByCategory = (id) => {
    return api.get(`/api/product/roomCategory?roomCategoryId=${id}`);
}
const getInforPro = (proId, supId) => {
    console.log("mia fpt",proId,supId);
    return api.get(`/api/product/inputSupplierProduct?proId=${proId}&supId=${supId}`);
} 
const postBaoGia = () =>{
    return api.get(`/api/quotation/save`);
}
export{
    getDataBlog, postLogin, postRegister, 
    postOTP, getImagePost, getProduct, getSupplier, 
    getCategoryRoom, getProByCategory, getInforPro, postBaoGia,
    getProductById
}