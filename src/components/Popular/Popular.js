import React, { Component } from "react";
import "./Popular.css";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


class Popular extends Component {

  handleClick = (id) => {
    this.props.history.push("/game/"+id)
  }


  render() {
    let popularGames = []
    for(let i = 0; i < 4; i++) {
        popularGames.push(this.props.games[i])
    }

    return (
      <div className="popular">
        <p className="popular-title">Popular</p>
        <div className="popular-divs-container">
          {popularGames.map((game, index) => {
            return (
                <div onClick={() => this.handleClick(game._id)} className="popular-divs" key={index}>
                  <img src={game.image} alt={game.name} className="popular-images"/>
                  <span className="popular-caption">{game.name}</span>
                </div>)
          })}
        </div>
        
        
        
      </div>
    );
  }
}

export default Popular;

/* 
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

  
  <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
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
          itemClass=""
          // carousel-item-padding-40-px"
        >
          <div>
            <img className="carousel-images"
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
          
        </Carousel> */