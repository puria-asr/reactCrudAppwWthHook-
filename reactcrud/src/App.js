import "./App.css";
import { useState } from "react";
import { usersdata } from "./data/data";
import EditSide from "./components/edit-side/EditSide";
import ViewUserSide from "./components/view-user-side/ViewUserSide";
import EditUserContext from "./aut-context/AuthContext";
function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(usersdata);
  return (
    <EditUserContext.Provider
      value={{
        userData: userData,
        setUserData: setUserData,
        setId: setId,
        setName: setName,
        setUserName: setUserName,
        id: +id,
        name: name,
        username: userName,
      }}
    >
      <div className="App">
        <EditSide />
        <ViewUserSide />
      </div>
    </EditUserContext.Provider>
  );
}

export default App;
