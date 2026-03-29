import { MUNK_IMAGES, PRODUCT_SECTION } from "../constants";

function ProductSection() {
  return (
    <section id="product" className="w-full bg-white py-16 text-main-text md:py-24">
      <div className="mx-auto grid max-w-inner-width grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:px-6 xl:px-8">
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:pr-10 xl:pr-16">
          <h2 className="font-title text-4xl font-light uppercase leading-tight tracking-[0.06em] sm:text-5xl md:text-6xl">
            {PRODUCT_SECTION.title}
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-main-text/80 sm:text-lg">
            {PRODUCT_SECTION.description}
          </p>
          <div className="mt-10">
            <p className="font-title text-5xl text-main-text md:text-6xl">
              {PRODUCT_SECTION.price}
            </p>
            <p className="mt-2 text-sm font-light text-main-text/70">
              {PRODUCT_SECTION.priceSubtext}
            </p>
          </div>
          <button
            type="button"
            className="mt-10 w-fit bg-[#9abfb8] px-10 py-3.5 text-sm font-medium tracking-wide text-white transition hover:brightness-105"
          >
            {PRODUCT_SECTION.ctaLabel}
          </button>
        </div>
        <div className="order-1 min-h-[280px] w-full lg:order-2 lg:min-h-[min(100vh,640px)]">
          <img
            src={MUNK_IMAGES.product}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
