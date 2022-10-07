import React, { useEffect } from "react";

const CardCarousel = () => {
  useEffect(() => {
    window.ZWS.carousel.initAll();
  });
  return (
    <div className="container">
      <div className="card-carousel">
        <div
          className="splide"
          aria-labelledby="cards-headline"
          aria-roledescription="carousel"
          role="group"
        >
          <div className="splide__arrows">
            <button
              className="splide__arrow btn btn--icon-shape splide__arrow--prev"
              data-direction="back"
            >
              <span className="icon icon--arrow-long-left_24"></span>
            </button>
            <button
              className="splide__arrow btn btn--icon-shape splide__arrow--next"
              data-direction="forward"
            >
              <span className="icon icon--arrow-long-right_24"></span>
            </button>
          </div>
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Card example"
                      src="https://zurich.invisionapp.com/dsm-api/storybook/zurich-insurance/GTOlaD2GY/asset-proxy?assetName=static/media/promo-image.599ab367.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <p className="card-preline">
                      <span className="icon icon--pencil_24_outline"></span>{" "}
                      Preline lorem ipsum
                    </p>
                    <h5 className="card-headline">
                      Title lorem ipsum dolor sit amet consetetur elitr.
                    </h5>
                    <p className="card-body">
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam nonumy eirmod tempor.
                    </p>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Card example"
                      src="https://zurich.invisionapp.com/dsm-api/storybook/zurich-insurance/GTOlaD2GY/asset-proxy?assetName=static/media/promo-image.599ab367.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <p className="card-preline">
                      <span className="icon icon--pencil_24_outline"></span>{" "}
                      Preline lorem ipsum
                    </p>
                    <h5 className="card-headline">
                      Title lorem ipsum dolor sit amet consetetur elitr.
                    </h5>
                    <p className="card-body">
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam nonumy eirmod tempor.
                    </p>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Card example"
                      src="https://zurich.invisionapp.com/dsm-api/storybook/zurich-insurance/GTOlaD2GY/asset-proxy?assetName=static/media/promo-image.599ab367.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <p className="card-preline">
                      <span className="icon icon--pencil_24_outline"></span>{" "}
                      Preline lorem ipsum
                    </p>
                    <h5 className="card-headline">
                      Title lorem ipsum dolor sit amet consetetur elitr.
                    </h5>
                    <p className="card-body">
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam nonumy eirmod tempor.
                    </p>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Card example"
                      src="https://zurich.invisionapp.com/dsm-api/storybook/zurich-insurance/GTOlaD2GY/asset-proxy?assetName=static/media/promo-image.599ab367.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <p className="card-preline">
                      <span className="icon icon--pencil_24_outline"></span>{" "}
                      Preline lorem ipsum
                    </p>
                    <h5 className="card-headline">
                      Title lorem ipsum dolor sit amet consetetur elitr.
                    </h5>
                    <p className="card-body">
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam nonumy eirmod tempor.
                    </p>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Card example"
                      src="https://zurich.invisionapp.com/dsm-api/storybook/zurich-insurance/GTOlaD2GY/asset-proxy?assetName=static/media/promo-image.599ab367.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <p className="card-preline">
                      <span className="icon icon--pencil_24_outline"></span>{" "}
                      Preline lorem ipsum
                    </p>
                    <h5 className="card-headline">
                      Title lorem ipsum dolor sit amet consetetur elitr.
                    </h5>
                    <p className="card-body">
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam nonumy eirmod tempor.
                    </p>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Card example"
                      src="https://zurich.invisionapp.com/dsm-api/storybook/zurich-insurance/GTOlaD2GY/asset-proxy?assetName=static/media/promo-image.599ab367.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <p className="card-preline">
                      <span className="icon icon--pencil_24_outline"></span>{" "}
                      Preline lorem ipsum
                    </p>
                    <h5 className="card-headline">
                      Title lorem ipsum dolor sit amet consetetur elitr.
                    </h5>
                    <p className="card-body">
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam nonumy eirmod tempor.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCarousel;
