import { FC } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import noImg from "../assets/img/no-image.png";

const GET_ANIME_BY_ID = gql`
  query ($id: Int) {
    Media(type: ANIME, id: $id) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
      }
      bannerImage
      duration
      genres
      episodes
      format
      source
      status
      description
      startDate {
        year
        day
        month
      }
      endDate {
        year
        day
        month
      }
    }
  }
`;

interface cssProps {
  img?: any;
}

const Container = styled.div({
  marginBottom: "90px",
  "@media (min-width: 700px)": {
    marginLeft: "100px",
  },
});

const TopContainer = styled.div({
  margin: "20px auto 10px auto",
  padding: "10px 10px",
  display: "flex",
  borderRadius: "20px 20px 0px 0px",
  position: "relative",
  zIndex: 1,
  top: -30,
  "@media (min-width: 1024px)": {
    top: 0,
    marginLeft: "130px",
  },
});

const BannerImage = styled.div<cssProps>(
  {
    marginTop: "60px",
    width: "100%",
    zIndex: -2,
    height: "150px",
    backgroundSize: "cover",
    "@media (min-width: 1024px)": {
      minHeight: "300px",
    },
  },
  (props) => ({
    backgroundImage: `url(${props.img})`,
  })
);

const Image = styled.img({
  width: "110px",
  position: "relative",
  top: -70,
  "@media (min-width: 1024px)": {
    width: "300px",
    top: -150,
  },
});

const DetailContainer = styled.div({
  padding: "0px 10px",
  alignSelf: "flex-start",
  "@media (min-width: 700px)": {
    marginLeft: "30px",
  },
});

const Title = styled.h1({
  fontSize: "1.25rem",
  "@media (min-width: 1024px)": {
    fontSize: "2rem",
  },
});

const GenreContainer = styled.div({
  marginTop: "5px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "5px 5px",
});

const GenreItem = styled.span({
  fontSize: ".7rem",
  fontWeight: 500,
  backgroundColor: "black",
  color: "wheat",
  padding: "5px",
  borderRadius: "5px",
  textAlign: "center",
});

const InfoContainer = styled.div({
  margin: "-100px auto 10px auto",
  padding: "10px",
  backgroundColor: "wheat",
  width: "95%",
  boxSizing: "border-box",
  display: "flex",
  zIndex: 2,
  position: "relative",
  justifyContent: "space-between",
  "@media (min-width: 1024px)": {
    width: "85%",
    margin: "-140px auto 10px auto",
  },
});

const InfoItem = styled.div({
  margin: "10px",
});

const InfoTitle = styled.p({
  fontSize: ".5rem",
  fontWeight: 400,
  "@media (min-width: 1024px)": {
    fontSize: ".75rem",
  },
});

const InfoText = styled.p({
  fontSize: ".75rem",
  fontWeight: 500,
  "@media (min-width: 1024px)": {
    fontSize: "1rem",
  },
});

const DescriptionContainer = styled.div({
  width: "95%",
  margin: "10px auto 100px auto",
  "@media (min-width: 1024px)": {
    position: "absolute",
    width: "50%",
    top: 480,
    left: 580,
  },
});

const DescriptionTitle = styled.p({
  fontSize: "1rem",
  fontWeight: 500,
  "@media (min-width: 1024px)": {
    fontSize: "1.5rem",
  },
});

const DescriptionText = styled.p({
  fontSize: ".75rem",
  fontWeight: 400,
  "@media (min-width: 1024px)": {
    fontSize: "1rem",
  },
});

const AnimeDetail: FC = () => {
  const { id } = useParams();
  const { data, error } = useQuery(GET_ANIME_BY_ID, {
    variables: { id },
  });
  let detailData = data?.Media;

  if (data) {
    console.log(detailData);
  } else {
    console.log(error);
  }

  return (
    <Container>
      {detailData && (
        <>
          <BannerImage
            img={
              detailData.bannerImage != null ? detailData.bannerImage : noImg
            }
          ></BannerImage>
          <TopContainer>
            <Image src={detailData.coverImage.large} />
            <DetailContainer>
              <Title>{detailData.title.romaji}</Title>
              <GenreContainer>
                {detailData.genres.map((val: string) => {
                  return (
                    <>
                      <GenreItem>{val}</GenreItem>
                    </>
                  );
                })}
              </GenreContainer>
            </DetailContainer>
          </TopContainer>
          <InfoContainer>
            <InfoItem>
              <InfoTitle>Episodes</InfoTitle>
              <InfoText>{detailData.episodes}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Duration</InfoTitle>
              <InfoText>{detailData.duration} Min</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Format</InfoTitle>
              <InfoText>{detailData.format}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Source</InfoTitle>
              <InfoText>{detailData.source}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Status</InfoTitle>
              <InfoText>{detailData.status}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Start Date</InfoTitle>
              <InfoText>
                {detailData.startDate.day} - {detailData.startDate.month} -
                {detailData.startDate.year}
              </InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>End Date</InfoTitle>
              <InfoText>
                {detailData.endDate.day} - {detailData.endDate.month} -
                {detailData.endDate.year}
              </InfoText>
            </InfoItem>
          </InfoContainer>
          <DescriptionContainer>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionText>{detailData.description}</DescriptionText>
          </DescriptionContainer>
        </>
      )}
    </Container>
  );
};

export default AnimeDetail;
