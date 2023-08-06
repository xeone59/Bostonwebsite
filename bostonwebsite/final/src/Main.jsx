import History from './History';
import Home from './Home';
import Attractions from './Attractions';
import Register from './Register';


function Main( {page,setPage}) {
    return(
    <main>
    { page === 'Home' && <Home/>}
    { page === 'History' && <History/>}
    { page === 'Attractions' && <Attractions/>}
    { page === 'Register' && <Register/>}

   </main>
    
    )
    
}

export default Main;