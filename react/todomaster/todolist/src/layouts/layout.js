import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <Header/>
               {/*
               중첩 라우팅 
               중첩된 라우트에서 경로와 일치하는 자식 라우트를 보여주기 위함
               */}
               <Outlet/>
            <Footer/>
        </>
    )
}
export default RootLayout