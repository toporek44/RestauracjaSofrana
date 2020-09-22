import React from 'react';
import styled from "styled-components";
import {device} from "../assets/device";
import Heading from "../components/Heading";

import {ReactComponent as CutleryIcon} from "../assets/svg/cutlery.svg"
import {ReactComponent as KitchenChefIcon}  from "../assets/svg/kitchenChef.svg"
import {ReactComponent as RestaurantIcon}  from "../assets/svg/restaurant.svg"
import {ReactComponent as HotelIcon}  from "../assets/svg/hotel.svg"
import {ReactComponent as GlassIcon}  from "../assets/svg/glass.svg"
import {ReactComponent as WeddingIcon}  from "../assets/svg/wedding.svg"

import sofranaMainImg from "../assets/images/sofranaMain.jpg"
import triangle from "../assets/images/triangle_bg.png";

import photo1 from "../assets/images/HomePage/home1.jpg";
import photo2 from "../assets/images/HomePage/home2.jpg";
import photo3 from "../assets/images/HomePage/home3.jpg";
import photo4 from "../assets/images/HomePage/home4.jpg";
import photo5 from "../assets/images/HomePage/home5.jpg";
import photo6 from "../assets/images/HomePage/home6.jpg";
import photo7 from "../assets/images/HomePage/home7.jpg";
import photo8 from "../assets/images/HomePage/home8.jpg";
import photo9 from "../assets/images/HomePage/home9.jpg";

import {SplideSlide} from "@splidejs/react-splide";
import {StyledSplide, GalleryImage} from "./Hotel";

const AboutSection = styled.section`
width:100%;
background-color: #fff;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0rem 1rem 7rem 1rem;


    &::after {
        content: "";
        background: url(${triangle}) repeat-x;
        background-size: 24px 10px;
        position: absolute;
        transform: rotate(180deg);
        width:100%;
        height: 20px;
        bottom:-10px;
        left:0;
        z-index: 10;
    }

    p {
        font-size: 2.4rem;
        max-width: 900px;
        padding: 0 1rem;
        text-align: center;
    }
    
    
`

const StyledKitchenChefIcon = styled(KitchenChefIcon)`
display: none;
width:150px;
height: 150px;
position:absolute;
top:50px;
right: 70px;

     @media ${device.laptopL}{
         display: block;    
      }
`

const StyledCutleryIcon = styled(CutleryIcon)`
display: none;
width:150px;
height: 150px;
position:absolute;
bottom:50px;
left: 70px;

     @media ${device.laptopL}{
      display: block;
   }
`

const ServicesSection = styled.section`
position: relative;
width:100%;
background: rgba(255,80,0,0.83);
color: #fff;
min-height: 400px;


    svg {
        width:80px;
        height: 80px;
    }


    &::after {
        content: "";
        background: url(${triangle}) repeat-x;
        background-size: 24px 10px;
        position: absolute;
        width:100%;
        height: 20px;
        bottom:-12px;
        left:0;
        z-index: 10;
    }


`


const IconsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
padding-bottom: 5rem;

     @media ${device.tablet} {
          flex-direction:row;
    }
`

const ServiceContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin:3rem 4rem;
max-width: 270px;

     @media ${device.laptop} {
          margin:3rem 7rem;
    }



`

const Label = styled.div`
font-size: 2.4rem;
font-weight: bold;
margin-top: 3rem;
text-align: center;
line-height:2.5rem;
`



const PhotoRelation = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const HomeStyledSplide = styled(StyledSplide)`
margin:0 auto;
padding:0 0 4rem 0 !important;

    @media ${device.tablet} {
      padding: 5rem 0 !important;
    }
`

export const SectionTitle = styled.h2` 
color:${ ( { white } ) => white? "#fff" : "#ff5200" } ;
text-align: center;
padding:7rem 0 3rem 0;
font-size: 2.8rem;
display: flex;
width:100%;
justify-content: center;
align-items: center;
margin: 0;
    
     &::before, &::after {
      content:"";
      display: block;
      width:15%;
      max-width: 150px;
      height: 2px;
      background: ${ ( { white } ) => white ? "#fff" : "#ff5200" };
      z-index: 999;
      margin: 0 .5rem;
              
               @media ${device.mobileL} {
                  margin: 0 1.5rem;
            }
        }
        
      @media ${device.mobileL} {
         font-size: 3.5rem;
     }    
`
const Home = () => {

    const photos = [
        {
            src: photo1,

        },
        {
            src: photo2,

        },
        {
            src: photo3,

        },
        {
            src: photo4,

        },
        {
            src: photo6,

        },
        {
            src: photo5,

        },
        {
            src: photo7,

        },
        {
            src: photo8,

        },
        {
            src: photo9,

        },
    ];

    return (
        <>
            <Heading
                img={sofranaMainImg}
                title="Wierzymy, że dobre jedzenie może sprawić uśmiech"
            />
            <AboutSection>
                <SectionTitle>O Nas</SectionTitle>
                <p>Restauracja Sovrana jest nowoczesnym obiektem odpowiadającym wysokim standardom. Serdeczna atmosfera
                    oraz troska o potrzeby klienta sprawia, że każdy czuje się u nas komfortowo. Sovrana to nie tylko
                    hotel i restauracja. To również miejsce znakomicie usytuowane do organizacji różnego rodzaju
                    przyjęć, konferencji oraz spotkań towarzyskich i biznesowych.
                </p>
                <StyledKitchenChefIcon/>
                <StyledCutleryIcon/>
            </AboutSection>

            <ServicesSection>
                <SectionTitle white>Nasze Usługi</SectionTitle>
                <IconsWrapper>
                    <ServiceContainer>
                        <RestaurantIcon/>
                        <Label>Restauracja</Label>
                    </ServiceContainer>

                    <ServiceContainer>
                        <HotelIcon />
                        <Label>Hotel</Label>
                    </ServiceContainer>

                    <ServiceContainer>
                        <GlassIcon />
                        <Label>Imprezy Okolicznościowe</Label>
                    </ServiceContainer>

                    <ServiceContainer>
                        <WeddingIcon />
                        <Label>Wesela</Label>
                    </ServiceContainer>

                </IconsWrapper>
            </ServicesSection>
          <PhotoRelation>
            <SectionTitle>Photo Relation</SectionTitle>
            <HomeStyledSplide
            options={ {
                perPage: 3,
                rewind : true,
                width  : "100%",
                height: 350,
                gap    : '.5rem',
                autoWidth: true,
                pagination:false,
                arrows: false,
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
                        pagination:false,

                    },
                },

            } }>
            {photos.map(({src},id)=>
                (   <SplideSlide key={src}>
                        <GalleryImage  src={src} alt={`slider image${id}`} />
                    </SplideSlide>
                )
            )}

            </HomeStyledSplide>
            </PhotoRelation>
        </>
    );
};

export default Home;