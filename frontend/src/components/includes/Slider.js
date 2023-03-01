import React from "react";
import Slider1 from "../Images/medi1.jpg";
import Slider2 from "../Images/medi2.jpeg";
import Slider3 from "../Images/medi3.jpg";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{
        backgroundColor: "#06283D",
        paddingBottom: "50px",
        paddingTop: "50px",
      }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img
            src={Slider1}
            class="mx-auto d-block w-100"
            alt="..."
            style={{ backgroundSize: "cover" }}
          />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img
            src={Slider2}
            class="mx-auto d-block w-100"
            alt="..."
            style={{ backgroundSize: "cover" }}
          />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img
            src={Slider3}
            class="mx-auto d-block w-100"
            alt="..."
            style={{ backgroundSize: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
