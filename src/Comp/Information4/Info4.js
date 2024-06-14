import React, { useState } from "react";
import "./Info4.css"; // Ensure you have this CSS file to apply styles

// images
import img1 from "../../Img/Proper Storage.jpg";
import img2 from "../../Img/natnat.jpg";
import img3 from "../../Img/pp2.jpg";

const Info4 = () => {
  const [activeTab, setActiveTab] = useState("inventory");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Info4">
      <section
        id="secondary-features"
        aria-label="Features for simplifying everyday business tasks"
        className="pb-14 bg-teal-300/5 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" data-aos-delay="200" className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Simplify everyday business tasks.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Because you’d probably be a little confused if we suggested you
              complicate your everyday business tasks instead.
            </p>
          </div>

          {/* mobile screen */}
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
            <div>
              {/*  */}
              <div data-aos="fade-up" data-aos-delay="200" className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-teal-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <defs>
                      <linearGradient
                        id=":Rapqfja:"
                        x1="11.5"
                        y1={18}
                        x2={36}
                        y2="15.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".194" stopColor="#fff" />
                        <stop offset={1} stopColor="#6692F1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                      stroke="url(#:Rapqfja:)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-teal-600">
                  Reporting
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Stay on top of things with always up-to-date reporting
                  features.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  We talked about reporting in the section above but we needed
                  three items here, so mentioning it one more time for
                  posterity.
                </p>
              </div>
              {/*  */}
              <div className="relative mt-10 pb-10">
                <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                <div
                data-aos="fade-up" data-aos-delay="200"
                  style={{
                    maxHeight: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width={1688}
                    height={856}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent" }}
                    sizes="52.75rem"
                    src={img1}
                  />
                </div>
              </div>
            </div>
            <div>
              <div data-aos="fade-up" data-aos-delay="200" className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-teal-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    />
                    <path
                      opacity=".3"
                      d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    />
                    <path
                      d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-teal-600">
                  Inventory
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Never lose track of what’s in stock with accurate inventory
                  tracking.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  We don’t offer this as part of our software but that statement
                  is inarguably true. Accurate inventory tracking would help you
                  for sure.
                </p>
              </div>
              <div className="relative mt-10 pb-10">
                <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                <div
                data-aos="fade-up" data-aos-delay="200"
                  style={{
                    maxHeight: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width={1688}
                    height={856}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent" }}
                    sizes="52.75rem"
                    src={img2}
                  />
                </div>
              </div>
            </div>
            <div>
              <div data-aos="fade-up" data-aos-delay="200" className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-teal-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                      fill="#fff"
                    />
                    <path
                      d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-teal-600">
                  Contacts
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Organize all of your contacts, service providers, and invoices
                  in one place.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  This also isn’t actually a feature, it’s just some friendly
                  advice. We definitely recommend that you do this, you’ll feel
                  really organized and professional.
                </p>
              </div>
              <div className="relative mt-10 pb-10">
                <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                <div
                data-aos="fade-up" data-aos-delay="200"
                  style={{
                    maxHeight: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width={1688}
                    height={856}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent" }}
                    sizes="52.75rem"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>










          {/*  device screen */}

          <div className="hidden lg:mt-20 lg:block ">
            <div
            data-aos="fade-up" data-aos-delay="600"
              className="grid grid-cols-3 gap-x-8"
              role="tablist"
              aria-orientation="horizontal"
            >
              <div
                className={`relative opacity-75 hover:opacity-100 ${
                  activeTab === "inventory" ? "opacity-100" : ""
                }`}
                onClick={() => handleTabClick("inventory")}
              >
                <div
                  className={`w-9 rounded-lg ${
                    activeTab === "inventory" ? "bg-teal-500" : "bg-slate-500"
                  }`}
                >
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    />
                    <path
                      opacity=".3"
                      d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    />
                    <path
                      d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-slate-600">
                  <button
                    className="ui-not-focus-visible:outline-none"
                    id="headlessui-tabs-tab-:R2jdqfja:"
                    role="tab"
                    type="button"
                    aria-selected={activeTab === "inventory"}
                    tabIndex={-1}
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:R2ddqfja:"
                  >
                    <span className="absolute inset-0" />
                    Inventory
                  </button>
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Never lose track of what’s in stock with accurate inventory
                  tracking.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  We don’t offer this as part of our software but that statement
                  is inarguably true. Accurate inventory tracking would help you
                  for sure.
                </p>
              </div>

              <div
                className={`relative opacity-75 hover:opacity-100 ${
                  activeTab === "contacts" ? "opacity-100" : ""
                }`}
                onClick={() => handleTabClick("contacts")}
              >
                <div
                  className={`w-9 rounded-lg ${
                    activeTab === "contacts" ? "bg-teal-500" : "bg-slate-500"
                  }`}
                >
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                      fill="#fff"
                    />
                    <path
                      d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-slate-600">
                  <button
                    className="ui-not-focus-visible:outline-none"
                    id="headlessui-tabs-tab-:R2rdqfja:"
                    role="tab"
                    type="button"
                    aria-selected={activeTab === "contacts"}
                    tabIndex={-1}
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:R3ddqfja:"
                  >
                    <span className="absolute inset-0" />
                    Contacts
                  </button>
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Organize all of your contacts, service providers, and invoices
                  in one place.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  This also isn’t actually a feature, it’s just some friendly
                  advice. We definitely recommend that you do this, you’ll feel
                  really organized and professional.
                </p>
              </div>

              <div
                
                className={`relative opacity-75 hover:opacity-100 ${
                  activeTab === "reports" ? "opacity-100" : ""
                }`}
                onClick={() => handleTabClick("reports")}
              >
                <div
                  className={`w-9 rounded-lg ${
                    activeTab === "reports" ? "bg-teal-500" : "bg-slate-500"
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-rectangle-report"
                    >
                      <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-6 text-sm font-medium text-slate-600">
                  <button
                    className="ui-not-focus-visible:outline-none"
                    id="headlessui-tabs-tab-:R2sdqfja:"
                    role="tab"
                    type="button"
                    aria-selected={activeTab === "reports"}
                    tabIndex={-1}
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:R4ddqfja:"
                  >
                    <span className="absolute inset-0" />
                    Reports
                  </button>
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Generate detailed reports to analyze business performance.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  While we don’t generate reports, keeping track of your
                  business performance is crucial. Consider using dedicated
                  software for this.
                </p>
              </div>
            </div>

            <div className="relative mt-20 overflow-hidden rounded-4xl transition-transform  bg-slate-200 px-14 py-16 xl:px-16 border border-slate-400 rounded-3xl">
              <div
                className={`px-5 transition duration-500 ease-in-out transform ${
                  activeTab === "inventory" ? "" : "trans"
                }`}
                aria-hidden={activeTab !== "inventory"}
                id="headlessui-tabs-panel-:R2ddqfja:"
                role="tabpanel"
                tabIndex={-1}
                data-headlessui-state=""
                aria-labelledby="headlessui-tabs-tab-:R2jdqfja:"
              >
                <div
                  style={{
                    maxHeight: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width={1688}
                    height={856}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent" }}
                    sizes="52.75rem"
                    src={img1}
                  />
                </div>
              </div>

              <div
                className={`px-5 transition duration-500 ease-in-out transform ${
                  activeTab === "contacts" ? "trans" : " trans3 "
                }`}
                aria-hidden={activeTab !== "contacts"}
                id="headlessui-tabs-panel-:R3ddqfja:"
                role="tabpanel"
                tabIndex={-1}
                data-headlessui-state=""
                aria-labelledby="headlessui-tabs-tab-:R2rdqfja:"
              >
                <div
                  style={{
                    maxHeight: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width={1688}
                    height={856}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent" }}
                    sizes="52.75rem"
                    src={img2}
                  />
                </div>
              </div>

              <div
                className={`px-5 transition duration-500 ease-in-out transform ${
                  activeTab === "reports" ? "trans3 " : "trans  "
                }`}
                aria-hidden={activeTab !== "reports"}
                id="headlessui-tabs-panel-:R4ddqfja:"
                role="tabpanel"
                tabIndex={-1}
                data-headlessui-state=""
                aria-labelledby="headlessui-tabs-tab-:R2sdqfja:"
              >
                <div
                  style={{
                    maxHeight: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width={1688}
                    height={856}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent" }}
                    sizes="52.75rem"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info4;
