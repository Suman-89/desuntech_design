import React from 'react'
import CarouselComp from '../components/CarouselComp'


const HomePage = () => {
    return (
        <>
            <div className="container" id="carousel1">
                <CarouselComp />
            </div>
            <h3 className='cat_header'>Category</h3>
            <div className="row" id='home_cat_row'>
                <ul>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Video-Game-Controller-Icon.svg/1024px-Video-Game-Controller-Icon.svg.png" alt="" id='cat_img_game' />
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/512/3994/3994241.png" alt="" id='cat_img_ride' />
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/512/708/708862.png" alt="" id='cat_img_fun' />
                    </li>
                    <li>
                        <img src="https://e7.pngegg.com/pngimages/805/949/png-clipart-joker-clown-circus-clown-food-photography.png" alt="" id='cat_img_jocker' />
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/512/194/194366.png" alt="" id='cat_img_game' />
                    </li>
                </ul>
            </div>
            <div id="carouselExample" style={{ marginTop: '20px',bottom:'20px' }} className="carousel slide">
                <div className="carousel-inner" style={{ height: '350px',width:'auto' }}>
                    <div className="carousel-item active">
                        <img src="https://cdn.blessthisstuff.com/imagens/stuff/minimalist-movie-posters.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.etsystatic.com/8279478/r/il/1f9b7a/3929795937/il_570xN.3929795937_nnql.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.blessthisstuff.com/imagens/stuff/minimalist-movie-posters.jpg" className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default HomePage
