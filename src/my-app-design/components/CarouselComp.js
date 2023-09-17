import React from 'react'
// import { Carousel } from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const CarouselComp = () => {
  return (
    <>
      <div id="carouselExample" style={{marginTop:'20px'}} class="carousel slide">
  <div class="carousel-inner" style={{height:'350px'}}>
    <div class="carousel-item active">
      <img src="https://img.freepik.com/vetores-premium/modelo-vetorial-venda-de-moda-azul-moderno-melhor-para-banner-e-capa_483777-364.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/vetores-premium/desconto-e-venda-de-natal-no-modelo-de-design-da-capa-do-facebook-e-banner-da-web_493236-155.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="https://litcommerce.com/blog/wp-content/uploads/2022/01/fb-ads-idea.webp" class="d-block w-100" alt=""/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default CarouselComp
