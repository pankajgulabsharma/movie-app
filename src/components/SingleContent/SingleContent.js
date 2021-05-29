import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

export const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
        className="poster"
      />
      <b className="title">{title}</b>
      <div className="subtitle">
        <b>{media_type === "tv" ? "TV Series" : "Movie"}</b>
        <b>{date}</b>
      </div>
    </div>
  );
};
