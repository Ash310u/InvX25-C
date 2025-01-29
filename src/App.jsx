import useNavigation from './hooks/useNavigation'
import Home from './pages/Home';
import Login from './pages/Login'
import Router from './routers'
import Router404 from './routers/Router404'
import Err404 from './components/Err404'

function App() {

  const { navigate } = useNavigation();

  return (
    <>

      {/* Boilerplate Nav */}
      {/* <div className='nav'>
        <button onClick={() => navigate('home')}>Home</button>
        <button onClick={() => navigate('login')}>Login</button>
      </div> */}

      {/* Routes --------------------------------------------- */}
      <Router path="home" pathNum={1}>
        <Home />
      </Router>
      <Router path="" pathNum={1}>
        <Login />
      </Router>
      <Router path="login" pathNum={1}>
        <Login />
      </Router>
      <Router404>
        <Err404 />
      </Router404>
    </>
  )
}

export default App
