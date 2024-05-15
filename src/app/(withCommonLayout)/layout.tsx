import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/UI/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
