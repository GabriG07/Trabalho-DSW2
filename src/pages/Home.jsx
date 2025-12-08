import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import HQsHome from '../components/HqsHome';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() { 
    const location = useLocation();
    const [closed, setClosed] = useState(false);
    
    const { userData } = location.state || {};

    return (
        <>
            <Sidebar user = {userData} closed={closed} setClosed={setClosed} />
            <div className={`main-content ${closed ? "expanded" : ""}`}>
                <Header user = {userData}/>
                <HQsHome user = {userData}/>
            </div>
        </>
    );
}