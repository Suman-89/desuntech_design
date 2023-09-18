import React from 'react'
import CarouselComp from '../components/CarouselComp'


const HomePage = () => {
    return (
        <>
            <div className="container" id="carousel1">
                <CarouselComp/>
            </div>
            <h3 className='cat_header'>Category</h3>
            <div className="row" id='home_cat_row'>
                <ul>
                    <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Video-Game-Controller-Icon.svg/1024px-Video-Game-Controller-Icon.svg.png" alt="" id='cat_img_game'/>
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
            <section>
            <ul className="navigation">
                    <li className='hp_li_1'>Games</li>
                    <li className='hp_li_2'>Rides</li>
                    <li className='hp_li_3'>Fun foods</li>
                    <li className='hp_li_4'>Fun Activities</li>
                    <li className='hp_li_5'>Carnival Decor</li>
                </ul>
            </section>
            {/* <section className='pic_section'>
                <ul>
                    <li>
                        <img src="https://i.pinimg.com/474x/1a/3a/ed/1a3aed9a5e1df4fbc34e22e641610300.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://i.pinimg.com/474x/1a/3a/ed/1a3aed9a5e1df4fbc34e22e641610300.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://i.pinimg.com/474x/1a/3a/ed/1a3aed9a5e1df4fbc34e22e641610300.jpg" alt="" />
                    </li>
                </ul>
            </section> */}
        </>
    )
}

export default HomePage
