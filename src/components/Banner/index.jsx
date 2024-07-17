import styled from "styled-components";

const BannerStyles = styled.section`
  display:none;
 

  @media (width > 768px) {
    
    height: auto;
    background-image: url("./img/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    padding: 200px 28px;
    gap: 20px;
  }
`;

const ImgContainerStyles = styled.figure`
 

  @media (width > 768px) {
    height:250px;
    border-radius: 15px;
    width: 70%;
    overflow: hidden;
    min-width: 459px;
  }
`;


const CourseImgStyles = styled.img`
  width: 100%;
`;
const DescriptionContainer = styled.div`
    
  @media (width > 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 2%;
    width: auto;
    align-items: start;
  }
`;

const DescriptionTitle = styled.h3`
    

  @media (width > 768px) {
    font-size: 2.8rem;
  }
`;

const DescriptionStyles = styled.p`
    
  font-size: 1.8rem;
  font-weight: 100;
`;


const Banner = () => {
  return (
    <BannerStyles>
      <ImgContainerStyles>
        <CourseImgStyles
          src="https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/thumbnails/bannerCard.png"
          alt=""
        />
      </ImgContainerStyles>
      <DescriptionContainer>
        <div>
          <DescriptionTitle>Challenge React</DescriptionTitle>
          <DescriptionStyles>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </DescriptionStyles>
        </div>
      </DescriptionContainer>
    </BannerStyles>
  );
};

export default Banner;