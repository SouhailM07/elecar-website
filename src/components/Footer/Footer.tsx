import "./footer.css";
// assets
import img from "/favicon.png";
import facebook_logo from "/facebook-f.svg";
import instagram_logo from "/instagram.svg";
import twitter_logo from "/x-twitter.svg";

export default function Footer() {
  let f2: string[] = ["About", "Cars", "History", "Shop"];
  let f3: string[] = [
    "Request a quote",
    "Find a dealer",
    "Contact us",
    "Services",
  ];
  let f4: string[] = [facebook_logo, instagram_logo, twitter_logo];
  return (
    <>
      <footer className="mt-[15rem] pb-[7rem] text-white flex justify-between max-w-[84rem] px-[2rem] m-auto flex-wrap gap-[1rem]">
        {/* f1 */}
        <div className="w-[18rem] ">
          <div className="space-x-2 flex items-center  footer__title ">
            <img src={img} alt="img" className="h-[2.5rem]" />
            <span>Elecar</span>
          </div>
          <p className="text-[1.2rem]">
            We offer the best electric cars of the most recognized brands in the
            world
          </p>
        </div>
        {/* f2 */}
        <div>
          <h3 className="footer__title">
            <b>Company</b>
          </h3>
          <ul className="footer__links">
            {f2.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
        {/* f3 */}
        <div>
          <h3 className="footer__title">
            <b>Information</b>
          </h3>
          <ul className="footer__links">
            {f3.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
        {/* f4 */}
        <div>
          <h3 className="footer__title">
            <b>Follow us</b>
          </h3>
          <ul className="flex  space-x-[2rem]">
            {f4.map((e, i) => {
              return (
                <li key={i}>
                  <img src={e} alt="logo" className="h-[1.5rem]" />
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
}
