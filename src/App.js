import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./pages/Index";
import Reservation from "./pages/Reservation";
import Confirm from "./pages/Confirm";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Index/>}/>
					<Route path="/reservation" element={<Reservation/>}/>
					<Route path="/confirm" element={<Confirm/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
