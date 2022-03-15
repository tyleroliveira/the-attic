import React from "react";
import { Link} from "react-router-dom"
import { GET_BOXES } from '../util/queries';
import { useQuery } from '@apollo/client';
import "../index.css";

const BoxList = () => {
  const { loading, data, err } = useQuery(GET_BOXES);
  const boxes = data?.me.boxes;
  const styles = {
    box: {
      backgroundColor: "white",
    },
  };
  if (!boxes) {
    return <h3>No boxes Yet</h3>;
  }
  
  return (
    <div className="wrapper" >
      {boxes &&
        boxes.map((box) => (
          <div key={box._id} className="font-link">
            <div>
            </div>
            <button>
              <Link className="btn btn-lg btn-box"
              to={`/boxes/${box._id}`}
            >
              <div>
              <p>contents:</p>
              </div>
              <p>{box.title}</p>
            </Link>
            </button>
          </div>
        ))}
        </div>
    )
}

export default BoxList;