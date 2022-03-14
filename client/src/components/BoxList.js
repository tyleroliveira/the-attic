import React from "react";
import { Link} from "react-router-dom"
import { GET_BOXES } from '../util/queries';
import { useQuery } from '@apollo/client';

const BoxList = () => {
  const { loading, data, err } = useQuery(GET_BOXES);
  const boxes = data?.me.boxes;
  //console.log(boxes.title)
  if (!boxes) {
    return <h3>No boxes Yet</h3>;
  }
  
  return (
    <div>
      {boxes &&
        boxes.map((box) => (
          <div key={box._id} className="card mb-3">
            <div className="card-body bg-light p-2">
              <p>{box.title}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/boxes/${box._id}`}
            >
            </Link>
          </div>
        ))}
        </div>
    )
}

export default BoxList;