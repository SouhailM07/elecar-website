import "./logos.css";
// hooks
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// assets
import logo_1 from "/logo1.png";
import logo_2 from "/logo2.png";
import logo_3 from "/logo3.png";
import logo_4 from "/logo4.png";
import logo_5 from "/logo5.png";
import logo_6 from "/logo6.png";
export default function Logos() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal("#Logos li", { interval: 100 });
  }, []);
  let arrOfLogos: string[] = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
  return (
    <>
      <section id="Logos">
        <ul
          role="list"
          className="grid max-w-[84rem] m-auto gap-y-[3rem] place-items-center"
        >
          {arrOfLogos.map((e, i) => {
            return (
              <li key={i} role="listitem">
                <img
                  src={e}
                  alt="logo"
                  className=" w-[4rem] opacity-50 hover:opacity-100"
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
