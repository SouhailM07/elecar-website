import "./popular.css";

// ! Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// mui
import { Card, CardContent, CardMedia } from "@mui/material";
// hooks
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// assets
import car_1 from "/popular1.png";
import car_2 from "/popular2.png";
import car_3 from "/popular3.png";
import car_4 from "/popular4.png";
import car_5 from "/popular5.png";
//
import addToCard_logo from "/bxs-shopping-bag-alt.svg";
import speed_logo from "/dashboard-3-line.svg";
import km_logo from "/funds-box-line.svg";
import charging_logo from "/charging-pile-2-line.svg";

export default function Popular() {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      // options
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal("#Popular");
  });
  interface arrOfCars_type {
    img: string;
    car_name: string;
    model: string;
    price: string;
  }
  const arrOfCars: arrOfCars_type[] = [
    {
      img: car_1,
      car_name: "Porsche",
      model: "Turbo S",
      price: "175,900",
    },
    {
      img: car_2,
      car_name: "Porsche",
      model: "Taycan",
      price: "114,900",
    },
    {
      img: car_3,
      car_name: "Porsche",
      model: "Turbo S Cross",
      price: "150,900",
    },
    {
      img: car_4,
      car_name: "Porsche",
      model: "E-tron",
      price: "175,900",
    },
    {
      img: car_5,
      car_name: "Porsche",
      model: "E-tron",
      price: "175,900",
    },
  ];
  return (
    <>
      <article
        id="Popular"
        className="space-y-[6rem] w-[90%] md:w-full m-auto "
      >
        {/* Title */}
        <h1 className="lg:text-[2rem] text-[1.8rem] font-medium  text-white text-center">
          Choose Your Electric Car Of <br /> The Porsche Brand
        </h1>
        {/* Selectors */}
        {/* Gallery */}
        <Swiper
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <ul role="list">
            {arrOfCars.map((e, i) => {
              return (
                <li role="listitem" key={i}>
                  <SwiperSlide>
                    <Card
                      // component="li"
                      className="!bg-containerColor Card pl-[2rem] cursor-pointer select-none w-[20rem] !text-white !rounded-xl pt-[1rem]"
                    >
                      <div className="py-[1rem]">
                        <h2 className="text-[1.8rem] font-medium">
                          {e.car_name}
                        </h2>
                        <h4 className="text-[0.9rem] text-gray-400">
                          {e.model}
                        </h4>
                      </div>
                      <CardMedia
                        image={e.img}
                        component="div"
                        className="!bg-contain  h-[10rem] w-[14rem] m-auto CardMedia"
                      />
                      {/*  */}
                      <CardContent className="grid grid-cols-2 gap-y-4 !px-[0rem]">
                        <Detail img={speed_logo} value="3,7 Sec" />
                        <Detail img={km_logo} value="356 km/h" />
                        <Detail img={charging_logo} value="Electric" />
                      </CardContent>
                      {/*  */}
                      <div className="flex justify-between ">
                        <p className="text-[1.4rem] font-medium">${e.price}</p>
                        <button className="p-3 rounded-tl-xl bg-blue-500">
                          <img src={addToCard_logo} alt="img" />
                        </button>
                      </div>
                    </Card>
                  </SwiperSlide>
                </li>
              );
            })}
          </ul>
        </Swiper>
      </article>
    </>
  );
}

let Detail = ({ img, value }: { img: string; value: string }) => {
  return (
    <>
      <div className="flex items-center space-x-2 font-medium">
        <img src={img} alt="logo" className="h-[1.5rem]" />
        <p>{value}</p>
      </div>
    </>
  );
};
