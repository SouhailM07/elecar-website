import "./morefeatures.css";
// hooks
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// assets
import map_img from "/map.svg";
import car_img from "/features.webp";
export default function MoreFeatures() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      duration: 2500,
      distance: "60px",
      delay: 400,
    });
    sr.reveal("#carImg", { origin: "bottom" });
    sr.reveal("#MoreFeatures__car");
  }, []);
  return (
    <>
      <article id="MoreFeatures">
        <img
          id="carImg"
          src={map_img}
          alt="image"
          className="rotate-[-25deg] "
        />
        <img src={car_img} alt="image" id="MoreFeatures__car" />
        <section className="absolute w-[65%] z-[3] ">
          <ul id="MoreFeatures__details" role="list">
            <li className="about__card_details px-[2rem] " role="listitem">
              <h3>800v</h3>
              <p>Turbo Charge</p>
            </li>
            <li
              className="self-end translate-y-[-2rem] about__card_details px-[3rem]"
              role="listitem"
            >
              <h3>350</h3>
              <p>km Range</p>
            </li>
            <li className="about__card_details px-[3rem]" role="listitem">
              <h3>480</h3>
              <p>Km Travel</p>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
