import { Outlet } from "react-router-dom";
import { NavigationBar } from "./Nav";
import { Footer } from "./Footer ";


export function SowOuter(){
    return (
        <>
        <div>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
            
            
        </div>
        </>
    )
}