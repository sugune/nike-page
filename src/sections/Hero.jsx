import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { statistics, shoes } from "../constants";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flex justify-start xl:flex-row gap-10 flex-col w-full
      min-h-screen max-container"
    >
      <div className="relative pt-28 xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 text-8xl  max-sm:text-[70px] max-sm:leading-[82px] font-palanquin font-bold  ">
          <span className="xl:bg-white xl:whitespace-nowrap pr-10 relative z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-10">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg sm:mx-w-sm mt-6 mb-14 leading-8">
          Welcome to Nike, where innovation meets excellence. Discover a world
          of possibilities as we redefine the way you sport.
        </p>
        <Button label="shop now" iconUrl={arrowRight} />
        <div className="flex flex-wrap justify-start items-start mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center
      xl:min-h-screen max-xl:py-40"
      >
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={510}
          className="relative z-10 object-contain"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
