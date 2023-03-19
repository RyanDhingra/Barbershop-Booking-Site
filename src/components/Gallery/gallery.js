import React, { useEffect, useState } from 'react';
import './gallery.css'
import Star from '../../assets/star.png'
import Image from '../../assets/image.png'
import Aos from 'aos';
import "aos/dist/aos.css";

function Gallery() {
    const [currImg, setCurrImg] = useState(0)
    const images = ['https://www.menshairstyletrends.com/wp-content/uploads/2020/07/Taper-haircut-black-Mark-Ingram-Pattycuts.jpg','https://images.squarespace-cdn.com/content/v1/5ec56c29f7b9a46d9a8b857e/1590124437806-L72LJ718AVHX8BLVYSL8/truecuts3.jpg','https://i.pinimg.com/736x/43/a2/0a/43a20aa0a09938f50e8a3b21919538b5--hairstyle-for-man-barber-haircuts.jpg','https://s3-media0.fl.yelpcdn.com/bphoto/7mp9v9wOoX_vVjPK8fResA/348s.jpg','https://www.menshairstyletrends.com/wp-content/uploads/2020/07/Taper-haircut-black-Mark-Ingram-Pattycuts.jpg','https://images.squarespace-cdn.com/content/v1/5ec56c29f7b9a46d9a8b857e/1590124437806-L72LJ718AVHX8BLVYSL8/truecuts3.jpg','https://i.pinimg.com/736x/43/a2/0a/43a20aa0a09938f50e8a3b21919538b5--hairstyle-for-man-barber-haircuts.jpg','https://s3-media0.fl.yelpcdn.com/bphoto/7mp9v9wOoX_vVjPK8fResA/348s.jpg'];
    const testimonials = ['']

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='gallery-page' id='gallery'>
            <div className='gallery-ls'>
                <div className='display-image' data-aos="fade-right" style={{width: '100%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img className={currImg === 0 ? 'curr-img active':'curr-img'} src={images[0]} alt='Display'/>
                    <img className={currImg === 1 ? 'curr-img active':'curr-img'} src={images[1]} alt='Display'/>
                    <img className={currImg === 2 ? 'curr-img active':'curr-img'} src={images[2]} alt='Display'/>
                    <img className={currImg === 3 ? 'curr-img active':'curr-img'} src={images[3]} alt='Display'/>
                    <img className={currImg === 4 ? 'curr-img active':'curr-img'} src={images[4]} alt='Display'/>
                    <img className={currImg === 5 ? 'curr-img active':'curr-img'} src={images[5]} alt='Display'/>
                    <img className={currImg === 6 ? 'curr-img active':'curr-img'} src={images[6]} alt='Display'/>
                    <img className={currImg === 7 ? 'curr-img active':'curr-img'} src={images[7]} alt='Display'/>
                </div>
                <div className='testimonial-cont' data-aos="fade-right">
                    <h1 style={{textAlign: 'center', margin: 0}}>
                        <span className='testimonial'>` ` The best cuts in town ´ ´</span>
                        <span className='author'>- Customer {currImg + 1}</span>
                    </h1>
                    <div className='stars'>
                        <img className='star' src={Star} alt='star'/>
                        <img className='star' src={Star} alt='star'/>
                        <img className='star' src={Star} alt='star'/>
                        <img className='star' src={Star} alt='star'/>
                        <img className='star' src={Star} alt='star'/>
                    </div>
                </div>
            </div>
            <div className='gallery-rs'>
                <div style={{display: 'flex', width: '39vw', height: '39vw', flexWrap: 'wrap'}}> 
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="200">
                        <img onClick={() => setCurrImg(0)} className='grid-image' src='https://www.menshairstyletrends.com/wp-content/uploads/2020/07/Taper-haircut-black-Mark-Ingram-Pattycuts.jpg' alt='Gallery Img'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="250">
                        <img onClick={() => setCurrImg(1)} className='grid-image' src='https://images.squarespace-cdn.com/content/v1/5ec56c29f7b9a46d9a8b857e/1590124437806-L72LJ718AVHX8BLVYSL8/truecuts3.jpg' alt='Gallery Img'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
                        <img onClick={() => setCurrImg(2)} className='grid-image' src='https://i.pinimg.com/736x/43/a2/0a/43a20aa0a09938f50e8a3b21919538b5--hairstyle-for-man-barber-haircuts.jpg' alt='Gallery Img'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="350">
                        <img onClick={() => setCurrImg(3)} className='grid-image' src='https://s3-media0.fl.yelpcdn.com/bphoto/7mp9v9wOoX_vVjPK8fResA/348s.jpg' alt='Gallery Img'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="400">
                        <img className='grid-center' src={Image} alt='Gallery Icon'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="450">
                        <img onClick={() => setCurrImg(4)} className='grid-image' src='https://www.menshairstyletrends.com/wp-content/uploads/2020/07/Taper-haircut-black-Mark-Ingram-Pattycuts.jpg' alt='Gallery Img'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                        <img onClick={() => setCurrImg(5)} className='grid-image' src='https://images.squarespace-cdn.com/content/v1/5ec56c29f7b9a46d9a8b857e/1590124437806-L72LJ718AVHX8BLVYSL8/truecuts3.jpg' alt='Gallery Img'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="550">
                        <img onClick={() => setCurrImg(6)} className='grid-image' src='https://i.pinimg.com/736x/43/a2/0a/43a20aa0a09938f50e8a3b21919538b5--hairstyle-for-man-barber-haircuts.jpg' alt='Gallery Img'/>
                    </div>
                    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="600">
                        <img onClick={() => setCurrImg(7)} className='grid-image' src='https://s3-media0.fl.yelpcdn.com/bphoto/7mp9v9wOoX_vVjPK8fResA/348s.jpg' alt='Gallery Img'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;