import SideBar from "./components/SideBar";
import ViewAdd from "./components/ViewAdd";

function App() {
  const l = 0;
  return (
    <main className='app-main'>
      <SideBar selected={0} />
      <ViewAdd />
    </main>
  );
}

export default App;
