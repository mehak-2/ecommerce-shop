import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Track() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <h1
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '40px', // Set the font size for the main heading
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '40px 0' // Increased margin for better spacing
        }}
      >
        Features
      </h1>
      <section>
        <div className="container mx-auto px-5 py-10">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="card border-2 hover:shadow-2xl border-gray-200 bg-gray-100 shadow-lg px-4 py-8 rounded-lg transition-all duration-300 transform hover:-translate-y-3 hover:scale-105"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                  minHeight: '250px' // Added min-height for better visual structure
                }}
              >
                <svg
                  className="icon w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  style={{ color: '#52525b' }}
                >
                  <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z" />
                </svg>
                <h2
                  className="title-font font-medium text-lg text-red-700"
                  style={{
                    fontSize: '24px', // Set the font size for the subheading
                    color: mode === "dark" ? "white" : ""
                  }}
                >
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px' }}>
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="card border-2 hover:shadow-2xl border-gray-200 bg-gray-100 shadow-lg px-4 py-8 rounded-lg transition-all duration-300 transform hover:-translate-y-3 hover:scale-105"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                  minHeight: '250px' // Added min-height for better visual structure
                }}
              >
                <svg
                  className="icon w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ color: '#52525b' }}
                >
                  <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
                <h2
                  className="title-font font-medium text-lg text-red-700"
                  style={{
                    fontSize: '24px', // Set the font size for the subheading
                    color: mode === "dark" ? "white" : ""
                  }}
                >
                  Hassle Free Delivery
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px' }}>
                  We have best delivery partners.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="card border-2 hover:shadow-2xl border-gray-200 bg-gray-100 shadow-lg px-4 py-8 rounded-lg transition-all duration-300 transform hover:-translate-y-3 hover:scale-105"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                  minHeight: '250px' // Added min-height for better visual structure
                }}
              >
                <svg
                  className="icon w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ color: '#52525b' }}
                >
                  <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
                <h2
                  className="title-font font-medium text-lg text-red-700"
                  style={{
                    fontSize: '24px', // Set the font size for the subheading
                    color: mode === "dark" ? "white" : ""
                  }}
                >
                  Best Discount
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px' }}>
                  We provide best discount offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;
