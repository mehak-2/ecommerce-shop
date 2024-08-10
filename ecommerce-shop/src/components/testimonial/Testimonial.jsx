import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section>
        <div className="container mx-auto px-5 py-10">
          <h1
            className="text-center text-5xl font-bold"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className="text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className="text-orange">customers</span> are saying
          </h2>
          <div className="flex flex-row gap-6 justify-center">
            {[
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtlLhtgpftB-2uN1FEsgA73NfzpuDARToaw&s",
                text: "The copy has come out very well. Thank you for the attention to detail and due diligence. All the work delivered by your team meets our expectations and we can now proceed with further tasks for my eCommerce store.",
                name: "John Doe",
                position: "Senior Product Designer",
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeQyLEWovHA0mROqcGC1ddJBH8jWA_gFxToy-o3Of97yoPZTTArsYrQK7DRzqAsF4Bq8&usqp=CAU",
                text: "While I was really struggling to manage multiple sales channels, I do not have to worry about it at all. All thanks to your team! You guys have been doing an excellent job in effortlessly managing all my channels and bringing in smooth sales. Highly impressed with your services.",
                name: "Terry White",
                position: "eCommerce Store Owner",
              },
              {
                src: "https://www.shareicon.net/data/512x512/2016/06/26/786560_people_512x512.png",
                text: "Your team has been doing an excellent job in handling multi-tasks, prioritizing tasks effectively, and delivering work in a turnaround time. Keep up the great work. I understand that certain tasks may involve specific procedures that can be confusing. However, thank you for your open-mindedness and resilience.",
                name: "Fred Thomson",
                position: "CEO & Founder",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-80 p-6 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: mode === "dark" ? "#333" : "#fff" }}
              >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-24 h-24 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={item.src}
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "#333" }}
                    className="leading-relaxed mb-4"
                  >
                    {item.text}
                  </p>
                  <span className="inline-block h-1 w-12 rounded bg-orange mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "#333" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    {item.name}
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "#555" }}
                    className="text-gray-500"
                  >
                    {item.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
