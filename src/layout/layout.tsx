import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./footer/footer"
import './layout.css'

type Props = {
    children: React.ReactNode
}
export const Layout = ({ children }: Props) => {
  const location = useLocation();
    return (
        // <Box sx={{ display: 'flex', overflow: 'hidden' }}>
        //     {/* <CssBaseline /> */}

        //     {children}
        //     <div style={{display: 'flex', height: '100px'}}>
        //         <Footer />
        //     </div>
        // </Box>
        <div className="layout">
        <header>
          {/* Add your header content here */}
          <nav>
            {/* Add your navigation links here */}
          </nav>
        </header>
        <main className="main-content" style={{backgroundColor: (location?.pathname?.includes('sign-up') ? 'whitesmoke' : 'black'), color: (!location?.pathname?.includes('sign-up') ? 'whitesmoke' : 'black')}}>
          <Outlet /> {/* This is where the nested routes will be rendered */}
        </main>
        <Footer />
      </div>
    )
}