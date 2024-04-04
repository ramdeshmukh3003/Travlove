import Navbar from "../components/Navbar";
import Main from "../components/Main";
import BestSellers from "../components/BestSellers";
import Footer from "../components/Footer";
function Home(){
    return (
        <>
        <Navbar/>
        <Main 
        cName="Main" 
        MainImg="https://wallpapercave.com/wp/wp3812098.jpg"
        title="Travel. Love. Repeat. - Travlove"
        tagline="Fall in love with the journey, fall in love with TravLove."
        btnName="Create a Trip"
        url="/packages"
       btnClass="showClass"
      />
      <BestSellers/>
      <Footer/>
        </>
    )

}
export default Home