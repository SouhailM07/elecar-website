import "./about.css";
// mui
import { Card, CardContent, CardActions, Button } from "@mui/material";
// hooks
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// assets
import about_img from "/about.webp";

export default function About() {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      // options
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal(".About__img", { origin: "left" });
    sr.reveal(".About__details", { origin: "right" });
  }, []);
  return (
    <>
      <Card id="About" component="article">
        <div className=" About__img ">
          <img src={about_img} alt="" className=" rounded-xl" />
          <div className="about__card_details translate-y-[2.5rem] absolute rounded-3xl lg:w-[15rem] w-[13rem] py-[1rem] px-[0.5rem] lg:px-[2rem] text-white text-center">
            <h3 className="text-[1.4rem] font-medium ">2.500+</h3>
            <p className="lg:text-[1rem] text-[0.9rem]">
              Supercharges placed along popular routes
            </p>
          </div>
        </div>
        <div className="About__details">
          <h2>
            Machines With <br /> Future Technology
          </h2>
          <CardContent component="div">
            <p>
              See the future with high-performance electric cars produced by
              renowned brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>
          </CardContent>
          <CardActions className="!pl-0">
            <Button
              role="button"
              className="!bg-blue-500 !text-white !px-[1.8rem] !py-[0.8rem] rounded-md !normal-case"
            >
              Know more
            </Button>
          </CardActions>
        </div>
      </Card>
    </>
  );
}
