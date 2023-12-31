import React from "react";
import BG from "./Elements/BG";
import Rating from "./Elements/Rating";
import Review from "./Elements/Review";

function App() {
  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <section className="lg:grid grid-cols-2 grid-rows-[45%_55%] w-full h-full lg:px-[165px] lg:pb-[100px] lg:pt-[116px] px-[25px] py-[80px] z-10 relative flex flex-col text-center lg:text-left">
        <div className="h-auto w-full lg:pr-32">
          <h1 className="text-[--very-dark-magenta] text-5xl font-bold mb-4 xl:text-7xl anim anim-left">
            10,000+ of our users love our products.
          </h1>
          <p className="lg:text-xl text-[--dark-grayish-magenta] overflow-y-auto text-lg anim anim-left">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="h-auto w-full flex flex-col items-left gap-4 pt-16">
          <Rating text="Rated 5 Stars in Reviews" pos={"start"} />
          <Rating text="Rated 5 Stars in Report Guru" pos={"center"} />
          <Rating text="Rated 5 Stars in BestTech" pos={"end"} />
        </div>
        <div
          id="reviews"
          className="h-full w-full flex items-center lg:gap-5 pt-20 lg:flex-row flex-col gap-4 col-span-2 pb-[80px]"
        >
          <Review
            pos="start"
            img="image-colton.jpg"
            username="Colton Smith"
            text="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          />
          <Review
            pos="center"
            img="image-irene.jpg"
            username="Irene Roberts"
            text="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
          />
          <Review
            pos="end"
            img="image-anne.jpg"
            username="Anne Wallace"
            text="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
          />
        </div>
      </section>
      <BG />
    </main>
  );
}

export default App;
