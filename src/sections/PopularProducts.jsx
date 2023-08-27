import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex justify-start gap-5 flex-col">
        <h2 className="text-4xl font-palanquin font-bold ">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Explore the world of Nike products, where innovation and style
          converge to redefine your athletic journey. Whether you're an avid
          runner, a fitness enthusiast, or simply crave comfort and fashion,
          Nike has you covered
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-12 grid-cols-1 sm:gap-4 gap:14">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
