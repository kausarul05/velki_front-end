import Image from "next/image";
import Navbar from "./Components/Home/Navbar";
import Bannar from "./Components/Home/Bannar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <Navbar></Navbar>
      <Bannar></Bannar>
    </div>
  );
}
