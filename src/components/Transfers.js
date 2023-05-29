import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarimg.png";
import { cardStyle } from "../components/ReuseableStyles";

export default function Transfers() {
  const transactions = [
    {
      image: avatarImage,
      name: "From Kishan Sheth",
      time: "Today, 16:36",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: "To Lauras Santos",
      time: "Today, 08:49",
      amount: "-$25",
    },
    {
      image: avatarImage,
      name: "From Jadon S.",
      time: "Yesterday, 14:36",
      amount: "+$150",
    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Your Transactions</h2>
      </div>

      <div className="transactions">
        {transactions.map((transaction,index) => {
          return (
            <div className="transaction" key={index}>
              <div className="transaction_title">
                <div className="transaction_title_img">
                  <img src={transaction.image} />
                </div>
                <div className="transaction_title_details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction_amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#" className="view">
        View All
        <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle}

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    h2 {
      color:dodgerblue;
      letter-spacing: 0.3rem;
      font-family: Permanent Marker;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: auto;

    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_title {
        display: flex;
        gap: 1rem;
         &_img {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
      }

      &_amount {
        background-color: #d7e41e1d ;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0s.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color:dodgerblue;
            span {
                color: #000;
            }
        }
      }
    }

  }
  
  .view {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        text-decoration: none;
        color:dodgerblue;
        font-weight: bold;

        margin-top: 1rem;
        gap: 0.5rem;

        svg {
            transform: 0.3s ease-in-out;
            font-size: 1.4rem;
        }

        &:hover {
            svg{
                transform: translateX(0.05rem);
            }
        }
    }
`;
