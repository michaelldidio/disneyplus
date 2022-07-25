import styled from 'styled-components';

const Viewers = (props) => {
    return (
        <Container>
            <Wrap>
                <a href="https://www.youtube.com/watch?v=TbQm5doF_Uc&ab_channel=WaltDisneyAnimationStudios"><img src='/images/viewers-disney.png' alt="" /></a>
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1564674844-disney (1).mp4' type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <a href="https://www.youtube.com/watch?v=JfVOs4VSpmA&ab_channel=SonyPicturesEntertainment"><img src='/images/viewers-marvel.png' alt="" /></a>
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1564676115-marvel.mp4' type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <a href="https://www.youtube.com/watch?v=rNk1Wi8SvNc&ab_channel=MOVIEPREDICTOR"><img src='/images/viewers-pixar.png' alt="" /></a>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/1564676714-pixar.mp4' type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <a href="https://www.youtube.com/watch?v=3Yh_6_zItPU&ab_channel=StarWars"><img src='/images/viewers-starwars.png' alt="" /></a>
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1608229455-star-wars.mp4' type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <a href="https://www.youtube.com/watch?v=i0MTCXgil1M&ab_channel=NationalGeographic"><img src='/images/viewers-national.png' alt="" /></a>
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1564676296-national-geographic.mp4' type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
};

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    position: relative;
    border-radius: 10px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
         rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        position: absolute;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        bottom: 0px;
    }

    &:hover {
        box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
         rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transition: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }

   
`;

export default Viewers;