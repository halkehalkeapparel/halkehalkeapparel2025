import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}

