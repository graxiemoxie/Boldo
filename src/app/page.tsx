import CustomerConnect from "./components/Home/CustomerConnect";
import Testimonials from "./components/Home/Testimonials";
import Footer from "./components/Footer";
import HeroSection from "./components/Home/HeroSection";
import LogoWall from "./components/Home/LogoWall";
import NewsLetter from "./components/Home/NewsLetter";
import OfficeSpace from "./components/OfficeSpace";
import OurBlog from "./components/Home/OurBlog";
import OurServices from "./components/Home/OurServices";

export default function Home() {
    return (
       <div>
          <main>
                <HeroSection />
                <LogoWall />
                <div className="bg-white">
                <OurServices />
                <CustomerConnect/>
          </div>
          <Testimonials/>
          <div className="bg-white">
            <OfficeSpace />
            <OurBlog />
            <NewsLetter />
            <Footer />
          </div>
      </main>
    </div>
  );
}
