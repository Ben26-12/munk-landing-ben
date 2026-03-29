import { MUNK_IMAGES, HISTORY_MUNK } from "../constants";

function HistoryMunk() {
  return (
    <section
      id="history"
      className="w-full bg-white py-16 text-main-text md:py-24"
    >
      <div className="mx-auto flex max-w-inner-width flex-col gap-10 px-4 md:flex-row-reverse md:items-center md:gap-0 md:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-center md:w-[60%] md:pl-10 lg:pl-16">
          <h2 className="font-title text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] sm:text-5xl md:text-main-title">
            <span className="block">THE HISTORY</span>
            <span className="mt-1 block">OF MUNK</span>
          </h2>
          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-main-text sm:text-lg">
            {HISTORY_MUNK.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="w-full shrink-0 md:w-[40%]">
          <img
            src={MUNK_IMAGES.history}
            alt=""
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HistoryMunk;
