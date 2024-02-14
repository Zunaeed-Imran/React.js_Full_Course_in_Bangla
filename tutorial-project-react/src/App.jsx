import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./card";
import Student from "./Student";
import Prooptyp from "./Proptype";
import Default_prop from "./default_prop";
import Greeting from "./UserGreeting";


function App() {

  return (
    <>
      {/* <Header />
      <Food/>
      <Footer /> */}
      
      {/* <Card/> */}

      {/* <Student name="Imran" age={26} isEmploye={true} />
      <Student name="Shakil" age={23} isEmploye={false} /> */}


      {/* <Prooptyp name="Ranas" age="man" gender="Male" /> */}

      {/* <Default_prop name="Iron-Mon" age={60} />
      <Default_prop /> */}

      {/* <Greeting/> */}


      <Greeting isLoggedin={true} username="Imran"/>
      
    </>
  );
}


export default App
