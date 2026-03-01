import { Route, Routes } from "react-router-dom"
import Homepage from "./HomePage/Homepage"
import Client from "./AuthSection/Client/Client"
import Engineer from "./AuthSection/Engineer/Engineer"
import JobPage from "./JobPage/JobPage"
import JobPortal from "./JobPortal/JobPortal"
import JobDetail from "./JobDetail/JobDetail"

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/choice/client" element={<Client></Client>}></Route>
      <Route path="/choice/engineer" element={<Engineer></Engineer>}></Route>
      <Route path="/job/create" element={<JobPage></JobPage>}></Route>
      <Route path="/job/view" element={<JobPortal></JobPortal>}></Route>
      <Route path="/job/detail" element={<JobDetail></JobDetail>}></Route>
    </Routes>
  )
}
export default App