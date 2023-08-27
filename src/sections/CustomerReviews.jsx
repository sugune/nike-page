import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquinin text-center font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="mt-4 info-text m-auto max-w-lg text-center ">
        Hear what our satisfied customers have to say. you might memorize the
        speech silently and the internet is not a single day
      </p>
      <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName}          {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
