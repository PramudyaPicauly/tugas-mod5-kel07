import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";

function App() {
	return (
		<BrowserRouter>
			<header>
				<p id="titleGroup">Kelompok 07</p>
			</header>
			<Routes>
				<Route path="/" element={<Navigate to="/movie" />}></Route>
				<Route path="/movie" element={<Movie />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
			</Routes>
			<footer>
				<NavLink to="/movie" className="iconWrapper">
					<HiHome className="icon" />
					Movie
				</NavLink>
				<NavLink to="/profile" className="iconWrapper">
					<MdGroup className="icon" />
					Profile
				</NavLink>
			</footer>
		</BrowserRouter>
	);
}

export default App;
