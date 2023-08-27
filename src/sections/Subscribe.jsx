import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex max-container justify-between items-center
  max-lg:flex-col gap-10"
    >
      <h3 className="capitalize text-4xl leading-[68px] font-bold font-palanquin lg:max-w-md">
        Sign up for{" "}
        <span className className="text-coral-red">
          Updates
        </span>{" "}
        and Newsletter
      </h3>
      <div
        className="lg:max-w-[40%] w-full flex max-sm:flex-col items-center
      gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full "
      >
        <input type="text" className="input" placeHolder="dada@gmail.com" />
        <div
          className="flex max-sm:justify-end items-center max-sm:w-full
        "
        >
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
