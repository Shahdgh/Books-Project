import Footer from "../componets/Footer";
import SectionOne from "../componets/SectionOne";
import Books from "./Books";


function Home() {
    return ( <>

    <SectionOne/>
<br/>
<h3 style={{textAlgin:"center",alignItems:"center",marginLeft:"40%",fontFamily:"cursive", fontWeight:"800"}}>Famous Books</h3>



    <Books/>
    <Footer/>
   
    </> );
}

export default Home;