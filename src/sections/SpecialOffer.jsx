import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex max-xl:flex-col-reverse items-center gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-palanquin font-bold max-lg:max-w-lg ">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Welcome to Nike, where innovation meets excellence. Discover a world
          of possibilities as we redefine the way you sport.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Welcome to Nike, where innovation meets excellence.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
