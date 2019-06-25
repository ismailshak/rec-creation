import React, { Component } from "react";
import "./Popular.css";
import $ from "jquery";

class Popular extends Component {
  componentDidMount() {
    // this.$el = $(this.el);
    // this.$el.somePlugin();
    $("#popularCarousel").carousel({
      interval: 10000
    });

    $(".carousel .carousel-item").each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next
        .children(":first-child")
        .clone()
        .appendTo($(this));

      for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }

        next
          .children(":first-child")
          .clone()
          .appendTo($(this));
      }
    });
  }

  render() {
    return (
      <div className="popular-container" ref={el => (this.el = el)}>
        <div class="container text-center my-3">
          <h2>Popular</h2>
          <div class="row mx-auto my-auto">
            <div
              id="popularCarousel"
              class="carousel slide w-100"
              data-ride="carousel"
            >
              <div class="carousel-inner w-100" role="listbox">
                <div classN="carousel-item active">
                  <img
                    class="d-block col-3 img-fluid"
                    src="http://placehold.it/350x180?text=1"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block col-3 img-fluid"
                    src="http://placehold.it/350x180?text=2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block col-3 img-fluid"
                    src="http://placehold.it/350x180?text=3"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block col-3 img-fluid"
                    src="http://placehold.it/350x180?text=4"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block col-3 img-fluid"
                    src="http://placehold.it/350x180?text=5"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block col-3 img-fluid"
                    src="http://placehold.it/350x180?text=6"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#recipeCarousel"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#recipeCarousel"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <h4>Advances one slide at a time</h4>
        </div>
      </div>
    );
  }
}

export default Popular;
