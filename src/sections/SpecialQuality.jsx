import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SpecialQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full
      max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-palanquin font-bold max-lg:max-w-lg ">
          we provide you
          <br />
          <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Welcome to Nike, where innovation meets excellence. Discover a world
          of possibilities as we redefine the way you sport.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Welcome to Nike, where innovation meets excellence.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522}
        className="object-contain"/>
      </div>
    </section>
  );
};

export default SpecialQuality;
