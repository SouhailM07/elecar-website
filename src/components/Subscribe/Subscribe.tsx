import "./subscribe.css";
// assets

import car_img from "/offer.png";
export default function Subscribe() {
  return (
    <>
      <article className="max-w-full text-white flex justify-evenly items-center bg-[url('/offer-bg.png')] h-[35rem]  bg-cover bg-no-repeat">
        <section className="w-[28rem] space-y-[2.5rem] ">
          <h1 className="text-[2rem] font-medium">
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
        <section>
          <img src={car_img} alt="car img" className="h-[18rem]" />
        </section>
      </article>
    </>
  );
}
