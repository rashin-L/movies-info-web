import React, { Component } from "react";
import style from "../styles/style.module.css";
import f1 from "../images/sliders/Darsman-Instagram.webp";
import f2 from "../images/sliders/front-end-2.webp";
import f3 from "../images/sliders/scratch_cours.webp";
import f4 from "../images/sliders/SpringSlider.webp";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  nextSlideHandler = () => {
    this.setState((prevState) => ({
      slideIndex: (prevState.slideIndex + 1) % this.slides.length,
    }));
  };

  prevSlideHandler = () => {
    this.setState((prevState) => ({
      slideIndex: (prevState.slideIndex - 1 + this.slides.length) % this.slides.length,
    }));
  };


  slides = [
    { id: 1, src: f1, alt: "Image 1" },
    { id: 2, src: f2, alt: "Image 2" },
    { id: 3, src: f3, alt: "Image 3" },
    { id: 4, src: f4, alt: "Image 4" },
  ];

  render() {
    return (
      <>
        <div className={style["slider-container"]}>
          <div className={style["slider"]}>
            {this.slides.map((slide) => (
              <img
                key={slide.id}
                src={slide.src}
                alt={slide.alt}
                className={
                  this.state.slideIndex + 1 === slide.id
                    ? style["active"]
                    : style["dective"]
                }
              />
            ))}
          </div>
          <button className={style["prev-button"]} onClick={this.prevSlideHandler}>
            Previous
          </button>
          <button className={style["next-button"]} onClick={this.nextSlideHandler}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Slider;
