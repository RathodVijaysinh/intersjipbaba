import './App.css';
import FilterItems from './components/FilterItems';
import Navbar from './components/Navbar';
import Random from './components/Random';
import Tag from './components/Tag';


function App() {
  return (
    <div className="">
      <Navbar/>
      <FilterItems/>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Tag />
        <Random />
      </div>
    </div>
  );
}

export default App;                    
