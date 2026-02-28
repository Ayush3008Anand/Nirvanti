import { Route, Routes } from "react-router-dom"
import Homepage from "./HomePage/Homepage"
import Client from "./AuthSection/Client/Client"
import Engineer from "./AuthSection/Engineer/Engineer"
import JobPage from "./JobPage/JobPage"

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/choice/client" element={<Client></Client>}></Route>
      <Route path="/choice/engineer" element={<Engineer></Engineer>}></Route>
      <Route path="/job" element={<JobPage></JobPage>}></Route>
    </Routes>
  )
}
export default App