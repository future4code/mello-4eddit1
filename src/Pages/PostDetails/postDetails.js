import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const params = useParams();
  return (
    <div>
      <h1>PostDetails {params.id}</h1>
    </div>
  );
}
