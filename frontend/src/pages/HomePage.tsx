import { Carousel, Container } from 'react-bootstrap'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 751574cff9606f190ca1aea2809b9bb192e4e80e
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import 'swiper/components/pagination/pagination.min.css'
import 'swiper/swiper.min.css'
import './styles.css'

import { sampleProducts } from '../data.js'

// import required modules
import { Pagination } from 'swiper'
<<<<<<< HEAD
=======
=======
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt, 
} from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
>>>>>>> 6cafd3120dc4368b2fdc71ba15468e0194d82a7c
>>>>>>> 751574cff9606f190ca1aea2809b9bb192e4e80e

export default function HomePage() {
  const swiperOptions = {
    loop: true,
    autoplay: {
      delay: 200, // Change this value to adjust autoplay speed (in milliseconds)
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  }
  return (
    <div>
      <Carousel className="carousel1">
        <Carousel.Item interval={1000}>
          <div className="item">
            <img
              id="t1"
              className="d-block w-100"
              src="../../public/images/banner4.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="item">
            <img
              id="t1"
              className="d-block w-100"
              src="../../public/images/banner2.jpg"
              alt="First slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="item">
            <img
              id="t1"
              className="d-block w-100"
              src="../../public/images/banner5.jpg"
              alt="First slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-3">
        <h2>Buy</h2>
        <Swiper
          {...swiperOptions}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sampleProducts.map((product) => (
            <SwiperSlide>
              <div className="productCard">
                <Link to={'/product/' + product.slug}>
                  <img
                    className="productImage"
                    src={product.image}
                    alt={product.name}
                    // className="product-image"
                  />
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  )
}
