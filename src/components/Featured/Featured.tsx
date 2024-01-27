import "./featured.css";
// mui
import { Card, CardMedia, CardContent } from "@mui/material";
// hooks
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
// assets
import addToCard_logo from "/bxs-shopping-bag-alt.svg";
//
import porsche_logo from "/logo1.png";
import audi_logo from "/logo2.png";
import tesla_logo from "/logo3.png";
//
import tesla_car_white from "/featured1.png";
import tesla_car_red from "/featured2.png";
import audi_car from "/featured3.png";
import porsche_1 from "/featured4.png";
import porsche_2 from "/featured5.png";

export default function Featured() {
  useEffect(() => {
    const firstLabel = document.querySelector(
      "input[type='radio']"
    ) as HTMLLabelElement;
    firstLabel.click();
    //
    const sr = ScrollReveal({
      // options
      origin: "top",
      distance: "60px",
      duration: 2500,
      // delay: 400,
    });
    sr.reveal("#Features h1");
    sr.reveal("#Features .Selectors", { delay: 800 });
    sr.reveal("#Features #Gallery", { delay: 1200, origin: "bottom" });
  }, []);
  let [filterCar, setFilterCar] = useState<string>("All");
  interface arrOfLabels_type {
    img: string;
    value: string;
    filter: string;
  }
  const arrOfLabels: arrOfLabels_type[] = [
    { img: "all", value: "All", filter: "All" },
    { img: tesla_logo, value: "", filter: "tesla" },
    { img: audi_logo, value: "", filter: "audi" },
    { img: porsche_logo, value: "", filter: "porsche" },
  ];

  //===================================================================================
  interface arrOfCars_type {
    img: string;
    car_name: string;
    model: string;
    price: string;
    type: string[];
    ariaSpeech: string;
  }
  const arrOfCars: arrOfCars_type[] = [
    {
      img: tesla_car_white,
      car_name: "Tesla",
      model: "Model X",
      price: "98,900",
      type: ["All", "tesla"],
      ariaSpeech: "white tesla model x",
    },
    {
      img: tesla_car_red,
      car_name: "Tesla",
      model: "Model 3",
      price: "45,900",
      type: ["All", "tesla"],
      ariaSpeech: "red tesla model 3",
    },
    {
      img: audi_car,
      car_name: "Audi",
      model: "E-tron",
      price: "175,900",
      type: ["All", "audi"],
      ariaSpeech: "audi model e tron",
    },
    {
      img: porsche_1,
      car_name: "Porsche",
      model: "E-tron",
      price: "175,900",
      type: ["All", "porsche"],
      ariaSpeech: "porsche ",
    },
    {
      img: porsche_2,
      car_name: "Porsche",
      model: "E-tron",
      price: "175,900",
      type: ["All", "porsche"],
      ariaSpeech: "porsche ",
    },
  ];

  return (
    <>
      <article id="Features" className="space-y-[6rem]">
        {/* Title */}
        <h1 className="text-[2rem] font-bold text-white text-center">
          Featured Luxuray Cars
        </h1>
        {/* Selectors */}
        <ul
          role="list"
          className="Selectors flex justify-between max-w-[22rem] m-auto "
        >
          {arrOfLabels.map((e, i) => {
            return (
              <li key={i} role="listitem">
                <input
                  type="radio"
                  id={e.img}
                  name="featured"
                  className="hidden"
                />
                <label
                  htmlFor={e.img}
                  onClick={() => setFilterCar(e.filter)}
                  className="flex items-center justify-center rounded-md text-[1.5rem] text-white h-full  bg-gray-800"
                >
                  <img src={e.img} alt="" className="w-[3.5rem] p-3" />
                  <p className="absolute">{e.value}</p>
                </label>
              </li>
            );
          })}
        </ul>
        {/* Gallery */}
        <ul
          role="list"
          className="grid gap-y-[4rem] place-items-center"
          id="Gallery"
        >
          {arrOfCars
            .filter((e) => {
              return e.type.includes(filterCar);
            })
            .map((e, i) => {
              return (
                <Card
                  key={i}
                  role="listitem"
                  component="li"
                  className="!bg-containerColor w-[20rem] !text-white !rounded-xl pt-[1rem]"
                >
                  <CardContent>
                    <h2 className="text-[1.8rem] font-medium">{e.car_name}</h2>
                    <h3 className="text-[0.9rem] text-gray-400">{e.model}</h3>
                  </CardContent>
                  <CardMedia
                    image={e.img}
                    component="div"
                    className="!bg-contain  h-[10rem] w-[15rem] m-auto"
                  />
                  {/*  */}
                  <div className="flex justify-between pl-[2rem]">
                    <p className="text-[1.4rem] font-medium">${e.price}</p>
                    <button
                      aria-label={e.ariaSpeech}
                      className="p-3 rounded-tl-xl bg-blue-500"
                    >
                      <img src={addToCard_logo} alt="image" />
                    </button>
                  </div>
                </Card>
              );
            })}
        </ul>
      </article>
    </>
  );
}
