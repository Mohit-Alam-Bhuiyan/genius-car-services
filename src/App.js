import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
	return (
		<div>
      <Header></Header>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/home" element={<Home/>} />
				<Route path="/service/:serviceId" element={<ServiceDetail/>} />
				<Route path="/about" element={< About/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/register" element={<Register/>} />
				<Route path="/checkout" element={
					<RequireAuth>
						<Checkout/>
					</RequireAuth>
				} />
				<Route path="*" element={< NotFound/>} />

			</Routes>
      <Footer></Footer>
		</div>
	);
}

export default App;
