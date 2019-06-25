import React, { Component } from "react";
import "./Popular.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Popular extends Component {
  render() {
    return (
      <div className="popular">
        <p>Popular</p>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          slidesToSlide={1}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img
              src={this.props.games[0].image}
              alt="item 1"
              className="nav-logo"
            />
            Item 1
          </div>
          <div>
            <img
              src={this.props.games[1].image}
              alt="item 2"
              className="nav-logo"
            />
            Item 2
          </div>
          <div>
            <img
              src={this.props.games[2].image}
              alt="item 3"
              className="nav-logo"
            />
            Item 3
          </div>
          <div>
            <img
              src={this.props.games[3].image}
              alt="item 4"
              className="nav-logo"
            />
            Item 4
          </div>
          <div>
            <img
              src={this.props.games[4].image}
              alt="item 5"
              className="nav-logo"
            />
            Item 5
          </div>
          <div>
            <img
              src={this.props.games[5].image}
              alt="item 6"
              className="nav-logo"
            />
            Item 6
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Popular;
