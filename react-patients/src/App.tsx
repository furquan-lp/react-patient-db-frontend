import SideBar from "./components/SideBar";
import ViewAdd from "./components/ViewAdd";
import ViewEdit from "./components/ViewEdit";

function App() {
  return (
    <main className='app-main'>
      <SideBar selected={1} />
      <ViewEdit />
    </main>
  );
}

export default App;
