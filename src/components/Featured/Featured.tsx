import "./featured.css";
// mui
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
} from "@mui/material";
// hooks
import { useState } from "react";
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
  interface arrOfLabels_type {
    img: string;
    value: string;
  }
  const arrOfLabels: arrOfLabels_type[] = [
    { img: "", value: "All" },
    { img: tesla_logo, value: "" },
    { img: audi_logo, value: "" },
    { img: porsche_logo, value: "" },
  ];

  //===================================================================================
  interface arrOfCars_type {
    img: string;
    car_name: string;
    model: string;
    price: string;
  }
  const arrOfCars: arrOfCars_type[] = [
    {
      img: tesla_car_white,
      car_name: "Tesla",
      model: "Model X",
      price: "98,900",
    },
    {
      img: tesla_car_red,
      car_name: "Tesla",
      model: "Model 3",
      price: "45,900",
    },
    {
      img: audi_car,
      car_name: "Audi",
      model: "E-tron",
      price: "175,900",
    },
    {
      img: porsche_1,
      car_name: "Porsche",
      model: "E-tron",
      price: "175,900",
    },
    {
      img: porsche_2,
      car_name: "Porsche",
      model: "E-tron",
      price: "175,900",
    },
  ];

  return (
    <>
      <article className="border-2 border-blue-500 space-y-[6rem]">
        {/* Title */}
        <h1 className="text-[2rem] font-bold text-white text-center">
          Featured Luxuray Cars
        </h1>
        {/* Selectors */}
        <ul className="flex border-2 justify-between max-w-[20rem] m-auto">
          {arrOfLabels.map((e, i) => {
            return (
              <li key={i} className=" rounded-2xl border-2 border-white p-2">
                <input
                  type="radio"
                  id={e.img}
                  name="featured"
                  className="hidden"
                />
                <label
                  htmlFor={e.img}
                  onClick={() => {
                    // setProjectsType(e);
                  }}
                >
                  <div
                    className={`text-white grid place-items-center text-[1.2rem]  bg-center bg-no-repeat bg-[url('${e.img}')] bg-contain w-[2rem] h-[2rem]`}
                  >
                    {e.value}
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
        {/* Gallery */}
        <ul className="grid grid-cols-3 gap-y-[4rem] place-items-center">
          {arrOfCars.map((e, i) => {
            return (
              <Card
                key={i}
                component="li"
                className="!bg-containerColor w-[20rem] !text-white !rounded-xl pt-[1rem]"
              >
                <CardContent>
                  <h2 className="text-[1.8rem] font-medium">{e.car_name}</h2>
                  <h4 className="text-[0.9rem] text-gray-400">{e.model}</h4>
                </CardContent>
                <CardMedia
                  image={e.img}
                  component="div"
                  className="!bg-contain  h-[10rem] w-[15rem] m-auto"
                />
                {/*  */}
                <div className="flex justify-between pl-[2rem]">
                  <p className="text-[1.4rem] font-medium">${e.price}</p>
                  <button className="p-3 rounded-tl-xl bg-blue-500">
                    <img src={addToCard_logo} alt="img" />
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
