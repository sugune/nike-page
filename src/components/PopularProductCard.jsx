import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex mt-8 justify-start gap-2.5 items-center">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat leading-normal text-slate-gray text-xl ">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal ">
        {name}
      </h3>
      <p
        className="text-2xl mt-2 font-montserrat font-semibold leading-normal
      text-coral-red "
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
