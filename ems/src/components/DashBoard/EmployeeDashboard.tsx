import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";


export default function EmployeeDashboard() {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen" >
      <Header/>
      <TaskListNumber/>
      <TaskList/>

    </div>
  )
}
