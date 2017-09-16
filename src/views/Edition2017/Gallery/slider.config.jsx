import React from 'react';

const RightArrow = props => (
  <i
    className="fa fa-chevron-right"
    aria-hidden="true"
    onClick={props.onClick}
  />
);

const LeftArrow = props => (
  <i
    className="fa fa-chevron-left"
    aria-hidden="true"
    onClick={props.onClick}
  />
);

export default {
  infinite: true,
  pauseOnHover: true,
  autoplay: true,
  dots: true,
  arrows: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};
