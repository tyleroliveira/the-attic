import React from "react";
import { Link} from "react-router-dom"
import { GET_BOXES } from '../util/queries';
import { useQuery } from '@apollo/client';
import Spinner from "react-bootstrap/Spinner";
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_BOX } from '../util/mutations';
import "../index.css";

const styles = {
  singleBox: {
    marginTop: "60px",
    fontSize: "30px",
    textDecoration: "underline",
  }
}
const BoxList = () => {
  const { loading, data, err } = useQuery(GET_BOXES);
  const boxes = data?.me.boxes;
  const boxesReversed = [].concat(boxes).reverse();

  const [removeBox, removeBoxState] = useMutation(REMOVE_BOX);

  const handleDeleteBox = (boxId) => {
    removeBox({
      variables: {
        boxId
      },
      refetchQueries: [GET_BOXES]
    });
  }

  if (!boxes) {
    return <h3>No boxes Yet</h3>;
  }
  return (
    <div className="wrapper">
      {boxesReversed &&
        boxesReversed.map((box) => (
          <div 
            key={box._id} 
            className="font-link"
            style={{width: "300px", justifyContent: "center", display: "block"}}
            >
            <Link 
              className="btn btn-lg btn-box"
              to={`/boxes/${box._id}`}
            >
              <div style={styles.singleBox}>
                {box.title}
              </div>
                </Link>
              <div>
                <button
                onClick={() => handleDeleteBox(box._id)}
                className='btn btn-dark'
                disabled={removeBoxState.loading}>{removeBoxState.loading?<> <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  />
                <span className="visually-hidden">Loading...</span></>:<><span className="visually-hidden">Delete Box</span>delete box</>}</button>
              </div>
          </div>
        ))}
      </div>
    )
}

export default BoxList;