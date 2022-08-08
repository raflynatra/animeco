import styled from "@emotion/styled";
import { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const ANIME_QUERY = gql`
  query {
    Page(perPage: 10) {
      pageInfo {
        total
        perPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        duration
        coverImage {
          large
        }
        genres
        episodes
      }
    }
  }
`;

const HomeContainer = styled.div({
  backgroundColor: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px 20px",
  margin: "60px 0px 90px 0px",
  padding: "10px 20px",
  "@media (min-width: 576px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: "60px 0px 0px 0px",
  },
  "@media (min-width: 700px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: "60px 0px 0px 110px",
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    margin: "80px 0px 0px 110px",
  },
});

const Card = styled.div({
  position: "relative",
  borderRadius: "10px",
  boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
  width: "150px",
  height: "210px",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.05)",
  },
  "@media (min-width: 1024px)": {
    width: "220px",
    height: "310px",
  },
});

const Img = styled.img({
  width: "150px",
  // height: "210px",
  borderRadius: "10px 10px 10px 10px",
  margin: 0,
  "@media (min-width: 1024px)": {
    width: "220px",
    height: "310px",
  },
});

const CardInfo = styled.div({
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  padding: "0px 10px",
  top: 155,
  backgroundImage: "linear-gradient(to top, black, transparent)",
  color: "white",
  width: "150px",
  height: "60px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  "@media (min-width: 1024px)": {
    top: 255,
    width: "220px",
  },
});

const Title = styled.h1({
  fontSize: ".9rem",
  margin: "0px",
});

const Home: FC = () => {
  const { data, error } = useQuery(ANIME_QUERY);
  let dataAnime = data?.Page.media;

  if (dataAnime) {
    console.log(data.Page.media);
  } else if (error) {
    console.log(error.message);
  }

  return (
    <HomeContainer>
      {dataAnime &&
        dataAnime.map((val: any) => {
          let animeId = val.id;
          return (
            <>
              <Link
                to={`/anime/${animeId}/${val.title.romaji.replace(/\s/g, "-")}`}
              >
                <Card key={animeId}>
                  <Img src={val.coverImage.large} />
                  <CardInfo>
                    <Title>{val.title.romaji}</Title>
                  </CardInfo>
                </Card>
              </Link>
            </>
          );
        })}
    </HomeContainer>
  );
};

export default Home;
