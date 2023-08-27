const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full max-w-[350px] shadow-3xl px-10 rounded-[20px] py-16">
      <div className="justify-center flex items-center bg-coral-red w-11 h-11 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-5 font-montserrat break-words text-lg leading-normal text-slate-gray ">
        {subtext}
      </p>
    </div>
  );
};
// const ServiceCard = ({ imgURL, label, subtext }) => {
//   return (
//     <div className="flex-1 sm:max-w-[350px] shadow-3xl px-10 w-full rounded-[20px] py-16">
//       <div className="justify-center flex items-center bg-coral-red w-11 h-11 rounded-full">
//         <img src={imgURL} alt={label} width={24} height={24} />
//       </div>
//       <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
//         {label}
//       </h3>
//       <p className="mt-5 font-montserrat break-words text-lg leading-normal text-slate-gray ">
//         {subtext}
//       </p>
//     </div>
//   );
// };

export default ServiceCard;
