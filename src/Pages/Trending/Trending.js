import axios from "axios";
import React, { useEffect, useState } from "react";
import CutomPagination from "../../components/Pagination/CutomPagination";
import { SingleContent } from "../../components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrendingData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      // console.log(data);
      // console.log(data.results);
      setContent(data.results);
    } catch (error) {
      console.log("Error during API fetching", error.message);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrendingData();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CutomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
