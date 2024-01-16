import "./logos.css";
// mui
// assets
import logo_1 from "/logo1.png";
import logo_2 from "/logo2.png";
import logo_3 from "/logo3.png";
import logo_4 from "/logo4.png";
import logo_5 from "/logo5.png";
import logo_6 from "/logo6.png";
export default function Logos() {
  let arrOfLogos: string[] = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
  return (
    <>
      <article className="">
        <ul className="flex justify-between items-center">
          {arrOfLogos.map((e, i) => {
            return (
              <li key={i} className="opacity-40 hover:opacity-100">
                <img src={e} alt="logo" className=" w-[4rem]" />
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
