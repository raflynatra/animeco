import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const ANIME_QUERY = gql``;

const AnimeContext = () => {
  const [dataAnime, setDataAnime] = useState([]);
  return <div>AnimeContext</div>;
};

export default AnimeContext;
