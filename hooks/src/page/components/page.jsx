import Content from "./content";
import Footer from "./footer";
import Header from "./header";

const Page = () => {
  // This is middle Component!
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
