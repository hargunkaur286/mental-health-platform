// import { products } from "../constants";
// import { PopularProductCard } from "../components";

// const PopularProducts = () => {
//   return (
//     <section id='products' className='max-container max-sm:mt-12'>
//       <div className='flex flex-col justify-start gap-5'>
//         <h2 className='text-4xl font-palanquin font-bold'>
//           Our <span className='text-orange-600'> Popular </span> Services
//         </h2>
        
//       </div>

      
//       <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
//         {products.map((product) => (
//           <a href={products.link}>
//           <PopularProductCard key={product.name} {...product} />
//           </a>
//         ))}
//       </div>
      
//     </section>
//   );
// };

// export default PopularProducts;


import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-orange-600'> Popular </span> Services
        </h2>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product, index) => (
          <a href={product.link} key={index}>
            <PopularProductCard {...product} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
