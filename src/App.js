import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HolidayTypes from "./components/HolidayTypes/HolidayTypes";
import Locations from "./components/Locations/Locations";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HolidayTypes />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
