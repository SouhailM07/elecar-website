import "./morefeatures.css";
// assets
import map_img from "/map.svg";
import car_img from "/features.png";
export default function MoreFeatures() {
  return (
    <>
      <article id="MoreFeatures">
        <img src={map_img} alt="img" className="rotate-[-25deg] " />
        <img src={car_img} alt="img" id="MoreFeatures__car" />
        <div className="absolute w-[65%] z-[3] ">
          <ul id="MoreFeatures__details">
            <li className="about__card_details px-[2rem] ">
              <h3>800v</h3>
              <p>Turbo Charge</p>
            </li>
            <li className="self-end translate-y-[-2rem] about__card_details px-[3rem] ">
              <h3>350</h3>
              <p>km Range</p>
            </li>
            <li className="about__card_details px-[3rem] ">
              <h3>480</h3>
              <p>Km Travel</p>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
