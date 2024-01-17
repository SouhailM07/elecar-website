import "./subscribe.css";
// hooks
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// assets
import car_img from "/offer.png";
export default function Subscribe() {
  useEffect(() => {
    // const sr= ScrollReveal({

    // })
    const sr = ScrollReveal({
      // options
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    // sr.reveal("#Subscribe");
    sr.reveal("#Subscribe #Subscribe__s1", { delay: 200, origin: "left" });
    sr.reveal("#Subscribe #Subscribe__s2", { delay: 200, origin: "right" });
  }, []);
  return (
    <>
      <article id="Subscribe">
        <section id="Subscribe__s1">
          <h1 className="md:text-[2rem] text-[1.8rem] font-medium">
            Do You Want To Receive <br /> Special Offers ?
          </h1>
          <p className="text-[1.2rem] text-textColor">
            Be the first to receive all the information about our products and
            new cars by email by subscribing to our mailing list.
          </p>
          <button className="px-[2rem] py-[1rem] bg-blue-500 font-medium">
            Subscribe Now
          </button>
        </section>
        <section id="Subscribe__s2">
          <img src={car_img} alt="car img" />
        </section>
      </article>
    </>
  );
}
