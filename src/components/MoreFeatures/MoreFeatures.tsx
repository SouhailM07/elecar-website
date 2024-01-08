import "./morefeatures.css";
// assets
import map_img from "/map.svg";
import car_img from "/features.png";
export default function MoreFeatures() {
  return (
    <>
      <article className="text-white  mt-[10rem]">
        <div className="-rotate-[25deg] h-[45rem] w-[50rem] m-auto bg-[url('/map.svg')] bg-cover bg-no-repeat flex justify-center items-center">
          <ul className="rotate-[25deg] bg-[url('/features.png')] bg-no-repeat h-[36rem] w-[27rem]  bg-center bg-contain flex flex-col justify-evenly py-[4rem]">
            <li className="about__card_details rounded-3xl w-[10rem] py-[0.8rem] px-[2rem] text-white text-center">
              <h3 className="text-[1.4rem] font-medium ">800v</h3>
              <p>Turbo Charge</p>
            </li>
            <li className="self-end translate-y-[-2rem] about__card_details rounded-3xl w-[10rem] py-[0.8rem] px-[3rem] text-white text-center">
              <h3 className="text-[1.4rem] font-medium ">350</h3>
              <p>km Range</p>
            </li>
            <li className="about__card_details rounded-3xl w-[10rem] py-[0.8rem] px-[3rem] text-white text-center">
              <h3 className="text-[1.4rem] font-medium ">480</h3>
              <p>Km Travel</p>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
