import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./card";
import Student from "./Student";


function App() {

  return (
    <>
      {/* <Header />
      <Food/>
      <Footer /> */}
      
      {/* <Card/> */}

      <Student name="Imran" age={26} isEmploye={true} />
      <Student name="Shakil" age={23} isEmploye={false} />
    </>
  );
}

export default App
