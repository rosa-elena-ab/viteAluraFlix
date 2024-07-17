import styled from "styled-components";

const BannerStyles = styled.section`
    display:"none";
     @media (width > 768px) {
        width: 100%;
        height: 600px;
        position: absolute;
        top: 129px;
        left: 0;
        background-image: url("./img/banner.png");
        background-color: white;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
            
    }
`;

const ImgDescription = styled.section`
    @media (width < 768px) {
        display: none;
    }

     @media (width > 768px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;
        height: 400px;
        position: absolute;
        top: 100px;
        left: 0;

     }

`;

const ImgStyles = styled.figure`
 

  @media (width > 768px) {
    height:250px;
    border-radius: 15px;
    width: 70%;
    overflow: hidden;
    min-width: 459px;
  }
`;


const VideoImgStyles = styled.img`

    @media (width > 768px) {
        width: 100%;
        border-radius: 20px;
    }
 
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
        <ImgDescription>
        <ImgStyles>
        <VideoImgStyles
          src="https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/thumbnails/bannerCard.png"
          alt=""
        />
        </ImgStyles>
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
        </ImgDescription>
       
    </BannerStyles>
  );
};

export default Banner