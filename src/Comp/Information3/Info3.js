import React, { useState } from "react";

const Info3 = () => {
  const [selectedTab, setSelectedTab] = useState("Food Preservation Methods");

  const tabs = [
    {
      name: "Proper Storage",
      description:
        "Learn how to store foods correctly to increase their shelf life and reduce waste.",
      image: require("../../Img/Proper Storage.jpg"),
    },
    {
      name: "Food Preservation Methods",
      description:
        "Explore the best methods for preserving different types of foods to maintain their quality and flavor.",
      image: require("../../Img/pp1.jpg"),
    },
    {
      name: "Reusing Leftovers",
      description: "Ideas for reusing leftovers in new and delicious recipes.",
      image: require("../../Img/pp2.jpg"),
    },
    {
      name: "Meal Planning",
      description:
        "Learn how to plan meals in a way that helps reduce waste and increase benefits.",
      image: require("../../Img/pp3.jpg"),
    },
  ];

  return (
    <div className="Info3">
      <section
        id="features"
        aria-label="Features for reducing food waste"
        className="relative mt-12 overflow-hidden bg-teal-600 pb-28 pt-20 sm:py-32"
      >
        {/* shape */}
        <div
          className="absolute aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#449e6e] to-[#3ba0a0]  opacity-2"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div data-aos="fade-up" data-aos-delay="200" className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl ">
              Everything you need to reduce food waste.
            </h2>
            <p className="mt-6 text-lg tracking-tight text-blue-100">
              Discover tools and tips to improve food consumption sustainability
              and reduce waste.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
              <div
              data-aos="fade-up" data-aos-delay="200"
                className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
                role="tablist"
                aria-orientation="vertical"
              >
                {tabs.map((tab) => (
                  <div
                  
                    key={tab.name}
                    className={`group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5 ${
                      selectedTab === tab.name
                        ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                        : ""
                    }`}
                    onClick={() => setSelectedTab(tab.name)}
                    role="tab"
                    aria-selected={selectedTab === tab.name}
                  >
                    <h3>
                      <button
                        className={`font-display text-lg ui-not-focus-visible:outline-none ${
                          selectedTab === tab.name
                            ? "text-teal-600 lg:text-white"
                            : "text-blue-100 hover:text-white lg:text-white"
                        }`}
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        {tab.name}
                      </button>
                    </h3>
                    <p
                      className={`mt-2 hidden text-sm lg:block ${
                        selectedTab === tab.name
                          ? "text-white"
                          : "text-teal-100 group-hover:text-white"
                      }`}
                    >
                      {tab.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  id={`tabpanel-${tab.name}`}
                  role="tabpanel"
                  tabIndex={selectedTab === tab.name ? 0 : -1}
                  style={{
                    display: selectedTab === tab.name ? "block" : "none",
                  }}
                  hidden={selectedTab !== tab.name}
                >
                  <div className="relative sm:px-6 lg:hidden">
                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                      {tab.description}
                    </p>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="200" className="mt-10 w-[45rem] flex items-center overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem] lg:max-h-[33rem]">
                    <img
                      alt={tab.name}
                      fetchpriority="high"
                      width={2174}
                      height={1464}
                      decoding="async"
                      data-nimg={1}
                      className="w-full "
                      style={{ color: "transparent",  }}
                      // sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      src={tab.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info3;
