import "../app/Page.css";
import Header from "@/my_components/Pages/Header";
import Banner from "@/my_components/Pages/Banner";
export default function Home() {
  return (
    <>
      <div className="main">
        <Header />
        <Banner />
      </div>
    </>
  );
}
