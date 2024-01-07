import "./about.css";
// mui
import { Card, CardContent, CardActions, Button } from "@mui/material";
// assets
import about_img from "/about.png";

export default function About() {
  return (
    <>
      <Card className="!bg-transparent flex mt-[10rem] justify-between items-center">
        <div className="w-[47%] flex flex-col items-end justify-end">
          <img src={about_img} alt="" className=" rounded-xl" />
          <div className="about__card_details translate-y-[2.5rem] absolute rounded-3xl w-[15rem] py-[0.8rem] px-[2rem] text-white text-center">
            <h3 className="text-[1.4rem] font-medium ">2.500+</h3>
            <p>Supercharges placed along popular routes</p>
          </div>
        </div>
        <div className="w-[45%]">
          <h2 className="text-white text-[2rem]">
            Machines With <br /> Future Technology
          </h2>
          <CardContent className="!pl-0 !py-[2rem]">
            <p className="text-textColor text-[1.2rem] max-w-[30rem]">
              See the future with high-performance electric cars produced by
              renowned brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>
          </CardContent>
          <CardActions className="!pl-0">
            <Button className="!bg-blue-500 !text-white !px-[1.8rem] !py-[0.8rem] rounded-md !normal-case">
              Know more
            </Button>
          </CardActions>
        </div>
      </Card>
    </>
  );
}
