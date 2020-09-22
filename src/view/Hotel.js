import React from 'react';
import styled from "styled-components"
import Heading from "../components/Heading";
import {device} from "../assets/device";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import hotelBanner from "../assets/images/hotelBanner.jpg"
import {ReactComponent as WifiIcon} from "../assets/svg/wifi.svg"
import {ReactComponent as AirConditioning} from "../assets/svg/airConditioner.svg"
import {ReactComponent as BathIcon} from "../assets/svg/bath.svg"
import {ReactComponent as TvIcon} from "../assets/svg/monitor.svg"
import {ReactComponent as BreakfastIcon} from "../assets/svg/breakfast.svg"
import {ReactComponent as ParkingIcon} from "../assets/svg/parking.svg"
import {ReactComponent as LiftIcon} from "../assets/svg/lift.svg"
import {ReactComponent as RoomIcon} from "../assets/svg/room.svg"


import slide1 from "../assets/images/Hotel/slide1.jpg"
import slide2 from "../assets/images/Hotel/slide2.jpg"
import slide3 from "../assets/images/Hotel/slide3.jpg"
import slide4 from "../assets/images/Hotel/slide4.jpg"
import slide5 from "../assets/images/Hotel/slide5.jpg"
import slide6 from "../assets/images/Hotel/slide6.jpg"
import slide7 from "../assets/images/Hotel/slide7.jpg"
import slide8 from "../assets/images/Hotel/slide8.jpg"
import slide9 from "../assets/images/Hotel/slide9.jpg"
import slide10 from "../assets/images/Hotel/slide10.jpg"
import slide11 from "../assets/images/Hotel/slide11.jpg"
import slide12 from "../assets/images/Hotel/slide12.jpg"
import slide13 from "../assets/images/Hotel/slide13.jpg"
import slide14 from "../assets/images/Hotel/slide14.jpg"
import slide15 from "../assets/images/Hotel/slide15.jpg"


const SubHeading = styled.h3`
font-size: 4rem;
text-align: center;
`


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const OfferList = styled.ul`
width: 300px;
margin:6rem auto;
padding: 0 1rem;
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;

    @media ${device.tablet} {
        font-size: 3rem;
        width: 600px;
  }
`

const OfferListItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
font-size: 2.1rem;
margin: 0 0 1rem 0;

    svg {
      width: 30px;
      min-width: 30px;
      height: 30px;
      min-height: 30px;
      margin-right: 1rem;
    }

    @media ${device.tablet} {
      font-size: 3rem;
    }
`



export const GalleryImage = styled.img`
height: 100%;
transition: .3s all ease-in-out;

    &:hover {
        position: relative;
        cursor: pointer;
        transform: scale(1.05);
        transition: .3s all ease-in-out;
        z-index: 999;
        margin:0 1rem;
    }
`
export const StyledSplide = styled(Splide)`
padding:0 0 4rem 0 !important;

    .splide__pagination__page{
    
        &:hover {
          background: #ff5200 ;
        }
            
         &.is-active {
          background: #ff5200;
        }
    }

    path{
      fill: #ff5200;
    }

    @media ${device.laptop}{
      padding:3rem !important;
  } 
`


const Hotel = () => {

    const photos = [
        {
            src: slide1,
        },
        {
            src: slide2,
        },
        {
            src: slide3,
        },
        {
            src: slide4,
        },
        {
            src: slide5,
        },
        {
            src: slide6,
        },
        {
            src: slide7,
        },
        {
            src: slide8,
        },
        {
            src: slide9,
        },
        {
            src: slide10,
        },
        {
            src: slide11,
        },
        {
            src: slide12,
        },
        {
            src: slide13,
        },
        {
            src: slide14,
        },
        {
            src: slide15,
        },


    ];



    return (
        <>
            <Heading
                img={hotelBanner}
                title="HOTEL"
                secondary
                none="none"

            />
            <Wrapper>
                <div>
                    <SubHeading>Nasza Oferta</SubHeading>
                    <OfferList>
                        <OfferListItem><RoomIcon />30 miejsc w 10 przestrzennych pokojach</OfferListItem>
                        <OfferListItem><WifiIcon />Darmowe Wifi</OfferListItem>
                        <OfferListItem><AirConditioning />Klimatyzacja</OfferListItem>
                        <OfferListItem><BathIcon />Łazienka z prysznicem i suszarką</OfferListItem>
                        <OfferListItem><TvIcon />Telewizor</OfferListItem>
                        <OfferListItem><BreakfastIcon /> Śniadanie w cenie</OfferListItem>
                        <OfferListItem><ParkingIcon />Bezpłatny, całodobowy, monitorowany parking</OfferListItem>
                        <OfferListItem><LiftIcon />Windy dla niepełnosprawnych</OfferListItem>
                    </OfferList>
                </div>


                <StyledSplide
                    options={ {
                        perPage: 3,
                        rewind : true,
                        width  : "80%",
                        height: 400,
                        gap    : '1rem',
                        autoWidth: true,
                        autoplay:true,
                        breakpoints: {

                            600: {
                                perPage: 1,
                                height: 200,
                                width  : "100%",
                            },

                            1024: {
                                perPage: 1,
                                height: 300,
                                width  : "100%",
                                arrows: false,

                            },

                        },

                    }}>

                    {photos.map(({src})=>
                        (   <SplideSlide key={src}>
                                <GalleryImage  src={src} />
                            </SplideSlide>
                        )
                    )}

                </StyledSplide>
           </Wrapper>

        </>
    );
};

export default Hotel;