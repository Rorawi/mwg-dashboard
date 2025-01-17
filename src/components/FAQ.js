import React from 'react'
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyle } from "../components/ReuseableStyles";


export default function FAQ() {

    const faqs = [
        {
          icon: <AiFillCalendar />,
          text: "How to manage time and get good marks for trips",
        },
        {
          icon: <MdTimelapse />,
          text: "How to regulate transactions over time",
        },
        {
          icon: <IoMdCash />,
          text: "Withdrawing money through an ATM",
        },
      ];


  return (
    <Section>

    <div className='title'>
        <h2>Information for drivers</h2>
    </div>

    <div className='faqs'>
        {faqs.map((faq,index)=> {
            return(
                <div className='faq' key={index}>
                <div className='info'>
                    {faq.icon}
                  <h4>  {faq.text}</h4>
                </div>
                <IoIosArrowForward />
            </div>
            )
        })}
    </div>
    </Section>
  )
}


const Section = styled.section`
${cardStyle}

.title {
    h2{
        color: dodgerblue;
        letter-spacing: 0.3rem;
        font-family: Permanent Marker;
    }
}

.faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 1rem;

    .faq {
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;

        .info {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        svg {
            font-size: 1.4rem;
        }

        &:nth-of-type(2) {
            border-top: 0.01rem solid #6c6c6c ;
            border-bottom: 0.01rem solid #6c6c6c ;
            padding: 0.8rem 0;
        }
    }
}
`