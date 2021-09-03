/** @format */

import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "react-scroll-up";
import { MdArrowUpward } from "react-icons/md";
function App() {
  return (
    <div className="flex  bg-white pb-12  dark:bg-black  overflow-scroll text-white-500 flex-col">
      <Header />
      <Body />
      <Footer />
      <ScrollToTop showUnder={160}>
        <MdArrowUpward className="bg-purple text-white w-12 h-12 rounded-full border-none" />
      </ScrollToTop>
    </div>
  );
}

export default App;
