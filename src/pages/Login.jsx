import Sidebar from "../components/Sidebar";
import Header from '../components/Header'
import HQsHome from '../components/HqsHome'
import LoginPage from '../components/LoginPage.jsx'
import { useState } from "react";

export default function Home() {

    const [closed, setClosed] = useState(false);

    return (
        <>
            <LoginPage />
        </>
    );
}
