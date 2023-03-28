import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Card from "../card/Card";
import "./featured.scss";
export default function Featured({ type }) {
  const { isLoading, error, data } = useQuery(["featured", type], async () => {
    const res = await makeRequest.get(
      `/products?populate=*&[filters][type][$eq]=${type}`
    );
    return res.data.data;
  });

  return (
    <div className="featured">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          sint nisi commodi rerum? Eum eius eaque earum numquam voluptate iure,
          illo fuga quas necessitatibus optio non quisquam. Nobis, est
          perferendis?
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "error"
        ) : isLoading ? (
          <div className="loading">
            <img src="/icon/load.gif" alt="" />
          </div>
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
}
