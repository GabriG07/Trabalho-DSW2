import Sidebar from "../components/Sidebar";
import Header from '../components/Header'
import HQsHome from '../components/HqsHome'
import { useState } from "react";

export default function Home() {

    const [closed, setClosed] = useState(false);

    return (
        <>
            <Sidebar closed={closed} setClosed={setClosed} />
            <div className={`main-content ${closed ? "expanded" : ""}`}>
                <Header />
                <HQsHome />
            </div>
        </>
    );
}
