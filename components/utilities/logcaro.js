import Slider from "react-slick";

function Logcaro() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-auto my-auto align-middle">
      {/* <h2> Single Item </h2> */}
      <Slider {...settings} className="h-auto rounded-lg bg-white">
        <div className="h-auto my-auto">
          <img
            src="/logos/aicte-nn.png"
            className="mx-auto my-auto h-auto w-auto"
          />
        </div>
        <div className="h-full my-auto">
          <img
            src="/logos/ariia-nn.png"
            className="mx-auto my-auto h-auto w-auto"
          />
        </div>
        <div className="h-full my-auto">
          <img
            src="/logos/DSIR-nn.png"
            className="mx-auto my-auto h-auto w-auto"
          />
        </div>
        <div className="h-full my-auto">
          <img
            src="/logos/naac-nn.png"
            className="mx-auto my-auto h-auto w-auto"
          />
        </div>
        <div className="h-full   my-auto">
          <img
            src="/logos/nirf-nn.png"
            className="mx-auto my-auto h-auto w-auto"
          />
        </div>
        <div className="h-full   my-auto">
          <img
            src="/logos/sii-nn.png"
            className="mx-auto my-auto h-auto w-auto"
          />
        </div>
        <div className="h-full my-auto">
          <img
            src="/logos/vtu-nn.png"
            className="mx-auto my-auto h-auto w-auto"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Logcaro;
