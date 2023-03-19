import Welcome from './components/Welcome/welcome';
import Gallery from './components/Gallery/gallery';
import Bookings from './components/Booking/bookings';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Gallery />
      <Bookings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
