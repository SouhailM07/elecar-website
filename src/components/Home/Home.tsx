import "./home.css";
// mui
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Avatar,
} from "@mui/material";
// hooks
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// assets
import home_img from "/home.webp";
import bolt_logo from "/bolt-solid -small.svg";
import bolt_big from "/bolt-solid.svg";
import temp_logo from "/temperature-quarter-solid.svg";

export default function Home() {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      // options
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal("#Home__title h1");
    sr.reveal(".Home__subtitle", { delay: 500 });
    sr.reveal(".Home__elec", { delay: 600 });
    sr.reveal(".Home__car", { delay: 800 });
    sr.reveal(".Home__car-data", {
      delay: 900,
      interval: 100,
      origin: "bottom",
    });
    sr.reveal("#Home__button", {
      delay: 1000,
      origin: "bottom",
    });
  }, []);
  interface arrOfDetails_type {
    img: string;
    alt: string;
    value: string;
    label: string;
  }
  let arrOfDetails: arrOfDetails_type[] = [
    { img: temp_logo, alt: "", value: "24°", label: "temperature" },
    { img: "s", alt: "Km", value: "873", label: "mleage" },
    { img: bolt_big, alt: "", value: "94%", label: "battery" },
  ];
  return (
    <>
      <Card id="Home" component="article">
        <div id="Home__title">
          <h1>Choose The Best Car</h1>
          <h3 className=" Home__subtitle">Porsche Mission E</h3>
          <h4 className="Home__elec">
            <img src={bolt_logo} alt="logo" />
            <p className="">Electric Car</p>
          </h4>
        </div>
        <CardMedia image={home_img} component="div" className=" Home__car" />
        <CardContent className="Home__car-data">
          <ul>
            {arrOfDetails.map((e, i) => {
              return (
                <li key={i}>
                  <Avatar
                    src={e.img}
                    className="p-[1rem] !bg-containerColor home_detail !text-[0.8rem]"
                  >
                    {e.alt}
                  </Avatar>
                  <p className="font-medium text-[1.4rem]">{e.value}</p>
                  <p className="uppercase text-textColorLight text-[0.9rem]">
                    {e.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardActions className="mt-[3rem] ">
          <button
            id="Home__button"
            className="border-2 border-green-600 flex items-center justify-center h-[4.5rem] w-[4.5rem] rounded-full mb-[0.7rem]"
          >
            START
          </button>
        </CardActions>
      </Card>
    </>
  );
}
