import "../app/Page.css";
import Header from "@/my_components/Pages/Header";
import Banner from "@/my_components/Pages/Banner";
import Cover from "@/my_components/Pages/Cover";
import Download from "@/my_components/Pages/Download";
export default function Home() {
  return (
    <>
      <div className="main">
        <Header />
        <Banner />
        <Cover />
        <Download />
      </div>
    </>
  );
}
