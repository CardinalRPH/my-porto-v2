import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import mainData from "../../data/mainData"

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer socialHub={mainData.profile.social} />
        </>
    )

}

export default RootLayout