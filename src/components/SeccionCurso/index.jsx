import styled from "styled-components";
import TipoCurso from "../TipoCurso";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";

const SectionStyles = styled.section`
  width: 100%;
  background-color: #000000;
  padding: 40px 27px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;

  @media (width > 1024px) {
    align-items: center;
    padding: 62px;
  }
`;

const CourseContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 30px;
  scrollbar-width: thin;
  scrollbar-color: #2271d1 #2271d12b;
  padding-bottom: 12px;

  @media (width > 1024px) {
    align-self: flex-start;
  }
`;

const SeccionCurso= ({ category }) => {
  const { videos } = useContext(GlobalContext);
  const { color, nombre } = category;

  return (
    <>
      {videos.length > 0 && (
        <SectionStyles>
          <TipoCurso color={color}>{nombre}</TipoCurso>
          <CourseContainer>
            {videos
              .filter((video) => video.Categoria === nombre)
              .map((video) => (
                <Card color={color} key={video.id} video={video} />
              ))}
          </CourseContainer>
        </SectionStyles>
      )}
    </>
  );
};

export default SeccionCurso;