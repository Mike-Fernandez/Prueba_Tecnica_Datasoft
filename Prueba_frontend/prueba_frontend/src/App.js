import './App.css';
import Appbar from './components/Appbar';
import { Container, Grid, Stack } from '@mui/material';
import FilteringCats from './components/CatService';

function App() {
  return (
    <div className="App">
    <Appbar/>
    <Grid justifyContent="center" 
      container 
      elevation={1}
    >
      <FilteringCats/>
    </Grid>
    </div>
  );
}

export default App;
