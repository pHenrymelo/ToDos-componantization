import { Outlet } from "react-router";
import { Header } from "../core-components/header";
import { MainContenet } from "../core-components/main-content";
import { Footer } from "../core-components/footer";

export function LayoutMain() {
    return( 
    <>
        <Header/>
        <MainContenet>
            <Outlet/>
        </MainContenet>
        <Footer/>
    </>
    )
}