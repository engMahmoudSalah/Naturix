import React from "react";

const Questions = () => {
  return (
    <div className="Questions">
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative overflow-hidden bg-teal-300/5 py-20 sm:py-32"
      >
        {/* blob1 absoul */}
        <div
          className="  absolute -tob-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-4rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#46ffff] to-[#449e6e] opacity-2"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        

        {/* <img
          alt=""
          loading="lazy"
          width={1558}
          height={946}
          decoding="async"
          data-nimg={1}
          className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
          style={{ color: "red" }}
          src="https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg"
        /> */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="faq-title"
              className="border-b pb-4 font-display font-medium text-3xl tracking-tight text-slate-900 sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              If you can’t find what you’re looking for, email our support team
              and if you’re lucky someone will get back to you.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <ul role="list" className="flex flex-col gap-y-8">
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    How does the app reduce food waste?
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    It tracks food purchases, consumption, and expiration dates,
                    provides reminders, offers leftover recipes, and educates on
                    storage.
                  </p>
                </li>

                {/* 2 */}
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    Can family members share an account?
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    Yes, you can create multiple profiles under one account for
                    family members.
                  </p>
                </li>

                {/* 3 */}
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    How do I set up expiration reminders?{" "}
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    Enter the expiration dates when adding items; the app will
                    notify you as dates approach.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <ul role="list" className="flex flex-col gap-y-8">
                {/* 4 */}
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    Is the app free?
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    Yes, the app is free to download and use. However, there are
                    premium features available for a small subscription fee,
                    which include advanced analytics, personalized tips, and
                    access to exclusive content.
                  </p>
                </li>

                {/* 5 */}

                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    How secure is my data on the app?
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    Your data security is our top priority. The app uses
                    encryption to protect your information and complies with all
                    relevant data protection regulations. Your data will never
                    be shared without your consent.
                  </p>
                </li>

                {/* 6 */}
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    Does the app work offline?
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    The app requires an internet connection for initial setup
                    and to sync data across devices. However, once the data is
                    downloaded, you can access most features offline.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <ul role="list" className="flex flex-col gap-y-8">
                {/* 7 */}
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    What recipes does the app suggest?
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    It suggests recipes based on your available ingredients,
                    focusing on using up items nearing expiration.
                  </p>
                </li>

                {/* 8 */}
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    Can the app connect to smart kitchen devices?{" "}
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    Yes, it integrates with smart refrigerators and scales to
                    update inventory and provide notifications.{" "}
                  </p>
                </li>

                {/* 9 */}
                <li>
                  <h3 className="font-display text-lg leading-7 font-medium text-slate-900">
                    How does the app educate on food storage?{" "}
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    It offers a guide on food storage, including tips, visual
                    tutorials, and articles on best practices.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Questions;
