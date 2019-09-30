import React, { Fragment } from "react";
import styled, { keyframes, css } from "styled-components";
import { MdDone, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const dropdown = keyframes`
    from {
            top: 0;
    }
    to {
        top: 100px;
    }
`;

const AlertBlock = styled.div`
  position: absolute;
  width: 300px;
  height: 3em;
  display: flex;
  justify-content: space-between;

  z-index: 1;
  background-color: black;
  border-radius: 5px;
  border: 2px solid #e64980;
  left: 50%;
  transform: translate(-50%, 0);
  animation: ${dropdown} 0.25s linear forwards;

  h4 {
    color: white;
  }
`;

function Alert({ text, onClick, success }) {
  return (
    <Fragment>
      <AlertBlock>
        <h4>{text}</h4>
        {success && (
          <Link to="/login">
            <MdDone onClick={onClick} size={32} />
          </Link>
        )}
        {!success && (
          <MdClose onClick={onClick} style={{ color: "red" }} size={32} />
        )}
      </AlertBlock>
    </Fragment>
  );
}

export default Alert;
