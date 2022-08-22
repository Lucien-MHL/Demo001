import React from 'react'
import styled, { keyframes } from 'styled-components'

const progressEffect = (value) => keyframes`
  to {
    width: ${value}%;
  }
`

const Section = styled.section`
  width: 100%;

  ul {
    width: 100%;
    display: flex;

    .title {
      width: calc((100% / 3));
      padding: 0.125rem 0.5rem;
      display: flex;
      align-items: flex-end;

      .unit {
        padding-left: 0.5rem;
        font-size: 0.625rem;
      }
    }

    .value {
      width: calc((100% / 3));
      text-align: center;

      p {
        font-size: 10px;
        width: max-content;
        margin: 0 auto 7.75px;
        padding: 0.625rem;
        border-radius: 5px;
        background: #fdfdfd;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 1px 2px 2px rgba(0, 0, 0, 0.3);
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          bottom: -6.3px;
          left: 0;
          right: 0;
          margin: auto;

          border: 3.5px solid black;
          border-color: transparent transparent #fff #fff;

          transform-origin: 0 0;
          transform: rotate(-45deg) skew(-20deg, -20deg);

          box-shadow: -2px 5px 2px 0 rgba(0, 0, 0, 0.25);
        }
      }
    }
  }

  .parentDiv {
    height: 0.75rem;
    width: 100%;
    background-color: #184b5c;
    border-radius: 4px;

    .childDiv {
      height: 100%;
      width: 0;
      background-color: #2c83a2;
      border-radius: 7px;
      animation: ${({ progress }) => progressEffect(progress)} 1s forwards;
    }
  }
`

function ProgressBar({ progress }) {
  return (
    <Section progress={progress}>
      <ul>
        <li className='title'>
          PR
          <span className='unit'>%</span>
        </li>
        <li className='value'>
          <p>{progress}</p>
        </li>
      </ul>
      <div className='parentDiv'>
        <div className='childDiv' />
      </div>
    </Section>
  )
}

export default ProgressBar
