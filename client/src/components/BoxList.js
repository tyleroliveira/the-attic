import React from "react";
import { Link} from "react-router-dom"
import { GET_BOXES } from '../util/queries';
import { useQuery } from '@apollo/client';
import "../index.css";
const BoxList = () => {
  const { loading, data, err } = useQuery(GET_BOXES);
  const boxes = data?.me.boxes;
  const boxesReversed = [].concat(boxes).reverse();
  const boxesEven = boxesReversed?.filter((box, index) => index % 2 === 0);
  const boxesOdd = boxesReversed?.filter((box, index) => index % 2 !== 0);
  if (!boxes) {
    return <h3>No boxes Yet</h3>;
  }
  return (
    <div className="wrapper" >
      <div>
      {boxesEven &&
        boxesEven.map((box) => (
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
        <div>
        {boxesOdd &&
        boxesOdd.map((box) => (
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
        </div>
    )
}
export default BoxList;