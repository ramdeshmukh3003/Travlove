import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform.js";
function Contact(){
    return (
        <>
         <Navbar/>
        <Main 
        cName="Main" 
        MainImg="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Contact Us At"
        tagline="www.travlove/help.in"
       
       
        />
         <Contactform/>
        
        <Footer/>
        </>
    )

}
export default Contact