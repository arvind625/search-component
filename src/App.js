import './App.css';
import { users } from './constant';
import { SearchComponent } from './SearchComponent';

function App() {
  return (
    <div className="App">
      <SearchComponent users={users} />
    </div>
  );
}

export default App;
