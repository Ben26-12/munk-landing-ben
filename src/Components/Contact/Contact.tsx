import { MUNK_IMAGES } from "../constants";

const inputClass =
  "w-full border-0 bg-neutral-100 px-4 py-3 text-sm text-main-text placeholder:text-neutral-400 outline-none transition focus:ring-2 focus:ring-[#00665c]/25";

function Contact() {
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div id="contact" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-inner-width grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:px-6 xl:px-8">
        <div className="min-h-[280px] w-full lg:min-h-[520px]">
          <img
            src={MUNK_IMAGES.contact}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center lg:pl-10 xl:pl-14">
          <h2 className="font-title text-4xl font-light uppercase leading-tight tracking-[0.12em] text-main-text sm:text-5xl md:text-6xl">
            Contact us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm text-main-text">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="given-name"
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-lastname"
                className="text-sm text-main-text"
              >
                Last name
              </label>
              <input
                id="contact-lastname"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Your last name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-sm text-main-text">
                Your email*
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Your email address"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-sm text-main-text"
              >
                Message*
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Enter your message"
                className={`${inputClass} min-h-[140px] resize-y`}
              />
            </div>
            <button
              type="submit"
              className="w-fit bg-[#00665c] px-10 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
