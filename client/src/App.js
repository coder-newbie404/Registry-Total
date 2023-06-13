
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';




function App() {

  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get('http://localhost:4000/regisloclst')
    .then(function (response) {
      console.log(response.data);
    })
 
  }
  return (
    <div className="App">
      <header className="App-header">      
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
                <p>First Name</p>
                  <input
                  className = "Name" 
                  type="text" 
                  name="name" 
                  placeholder="First name ..."
                  onChange={(e) => {setName(e.target.value)}}
                  />

<<<<<<< Updated upstream
                <p> Company Role</p>
                  <input 
                  className = "Role"
                  type="text" 
                  name ="Role" 
                  placeholder = "Role...." 
                  onChange={(e) => {setRole(e.target.value)}}
                  />
                  <button type="submit">Submit</button>
            </form>
        </div>
      </header>
    </div>
=======
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={ROLES.User} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={ROLES.Editor} />}>
          <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
>>>>>>> Stashed changes
  );
}

export default App;
