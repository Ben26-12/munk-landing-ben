import { MUNK_IMAGES, WHY_MATCHA_BLOCKS } from "../constants";

function WhyMatcha() {
  return (
    <div id="why-matcha" className="w-full">
      <h1 className="font-title text-main-title text-center my-20">
        WHY MATCHA?
      </h1>
      <div className="mx-auto max-w-inner-width w-full flex justify-center flex-col md:flex-row">
        <div className="left-block py-5 px-4 flex flex-col gap-5 justify-between lg:basis-[50%] basis-full ">
          {WHY_MATCHA_BLOCKS.map((item) => {
            return (
              <div key={item.title} className="lg:w-[70%] w-full">
                <h2 className="font-title text-sub-title">{item.title}</h2>
                <span>{item.body}</span>
              </div>
            );
          })}
        </div>
        <div className="right-block lg:basis-[50%] basis-full">
          <img
            className="w-full text-center"
            src={MUNK_IMAGES.why}
            alt="WhyMatcha"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyMatcha;
