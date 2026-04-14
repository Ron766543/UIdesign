import React from "react";
import { ArrowRight } from "lucide-react";
import "./Maincontent.css";

const Maincontent = (cards) => {
  return (
    <div className="maincontent" id="right">
      {cards.cards.cards.map((user, index) => (
        <div
          className="card m-1 min-h-130 max-w-70"
          key={index}
          style={{
            backgroundImage: `url(${user.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        >
          <h1>{index + 1}</h1>
          {/* <h4 className="m-px text-cyan-800 font-black text-2xl">{user.name}</h4> */}
          {/* <h4 className="m-px">{user.profession}</h4> */}
          <p className="m-px">
            Prime customers, that have access to bank credit and are satisfied
            with the current product
          </p>
          <button className="flex items-center justify-between bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <span>Satisfied</span>
            <ArrowRight size={28} strokeWidth={1.5} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Maincontent;
