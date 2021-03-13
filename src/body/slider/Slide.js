/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ text, content, width }) => (
    <div
        css={css`
      height: 100%;
      width: ${width}px;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
    `}>
        <div
            css={css`
        height: 100%;
        background-color: #ffffff;
        width: 35%;
        opacity: 0.8;
        z-index: 1;
        position: absolute;
        text-align: center;
        `}>
            <h2
                css={css`
                position: inline-flex;
                margin: 20px;
                word-wrap:break-word;
                white-space:normal;
                `}
            >{text}</h2>

            <button css={css`

            position: center,

            `}>Se mere</button>
        </div>
    </div>

)

export default Slide
