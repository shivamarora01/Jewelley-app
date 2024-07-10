import Image from "next/image";
import NavbarHead from "./components/NavbarHead";
import Navbar from "./components/Navbar";
import Heropage from "./components/Heropage";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import FeaturedProduct from "./components/FeaturedProduct";
import TrendingCat from "./components/TrendingCat";
import Component6 from "./components/component6";

export default function Home() {
  return (
    <>
    <NavbarHead/>
    <Navbar/>
    <Heropage/>
    <TrendingCat/>
    <NewArrival/>
    <FeaturedProduct/>
    <Component6/>
    <Footer/>
    </>
  );
}
