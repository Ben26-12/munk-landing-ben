import { MUNK_IMAGES } from "../constants";
function MainBanner() {
  return (
    <div
      style={{ backgroundImage: `url(${MUNK_IMAGES.bannerImg})` }}
      className=" flex justify-center bg-fixed w-full h-screen bg-cover bg-center"
    >
      <div className="text-main-text inner mx-auto w-full max-w-inner-width relative">
        <div className="banner-title pl-10 max-w-[485px] w-full absolute  top-1/2 font-title text-main-title font-thin  -translate-y-1/2 ">
          MATCHA TEA TO FUEL YOUR BODY
          <p>$30</p>
          <button className="text-white cursor-pointer transition duration-300 bg-forest w-[145px] h-[45px]  text-[14px]  mt-4 font-medium opacity-50 hover:opacity-70">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
