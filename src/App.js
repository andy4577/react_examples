import "./main.scss";
import "@zurich/web-sdk/js/scripts.min.js";
import CardCarousel from "./components/CardCarousel";
export default function App() {
  return (
    <>
      <h2>ZDS v2.0 Card Carousel Example</h2>
      <CardCarousel />
    </>
  );
}
