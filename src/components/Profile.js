import React from "react";
import styled from "styled-components";
import image from "../assets/avatarimg.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "../components/ReuseableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>

      <div className="title">
        <h3>Winifred Asantewaa Asante</h3>
        <h5>
          <HiOutlineLocationMarker /> New York, USA
        </h5>
      </div>

      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>28</h3>
        </div>

        <div className="container">
          <h5>Rides</h5>
          <h3>427</h3>
        </div>

        <div className="container">
          <h5>Hours</h5>
          <h3>76</h3>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;

    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;

      border-radius: 20rem;
      transition: 0.5s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .title {
    text-align: center;
    h2,h3,h5 {
        color: dodgerblue;
        font-family: "Permanent Marker",cursive;
        letter-spacing: 0.3rem;
    }
  }

  .info {
    display: flex;
    gap: 1rem;

    .container {
        text-align: center;
    }
  }
`;
