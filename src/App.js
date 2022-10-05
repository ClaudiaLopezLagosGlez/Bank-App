import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photo from "./components/images/photo.jpg";
import { CreateAccount } from "./components/CreateAccount";
import { Deposit } from "./components/Deposit";
import { Withdraw } from "./components/Withdraw";
import { AllData } from "./components/AllData";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NavigationBar } from "./components/NavigationBar";
import { UserContext, AuthenticatedUserContext } from "./components/Context";
import { useState } from "react";
import Footer from "./components/Footer"

function App() {
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={[users, setUsers]}>
        <AuthenticatedUserContext.Provider value={[signedInUser, setSignedInUser]}>
          <BrowserRouter>
            <NavigationBar />
            <Routes>
              <Route path="/CreateAccount" element={<CreateAccount />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Deposit" element={<Deposit />} />
              <Route path="/Withdraw" element={<Withdraw />} />
              <Route path="/AllData" element={<AllData />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </AuthenticatedUserContext.Provider>
      </UserContext.Provider>

      <div className="PhotoLogo">
        <img
          src={Photo}
          className="App-logo"
          alt="logo"
          display="flex"
          flex-wrap="wrap"
          justify-content="center"
          align-items="center"
          width="100%"
          height="100%"
          margin="0"
          padding="0"
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
