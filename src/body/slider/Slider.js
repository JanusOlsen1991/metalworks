/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
//import Arrow from './Arrow'
import Dots from './Dots'

const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const Slider = props => {
    const { slides } = props

    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const thirdSlide = slides[2]
    const lastSlide = slides[slides.length - 1]

    const { texts } = props
    const firstText = texts[0]
    const secondText = texts[1]
    const thirdText = texts[2]
    const lastText = texts[texts.length -1]



    const [state, setState] = useState({
        activeSlide: 0,
        activeText: 0,
        translate: getWidth(),
        transition: 3.0,
        _slides: [lastSlide, firstSlide, secondSlide, thirdSlide],
        _texts:  [lastText, firstText, secondText, thirdText]
    })

    let { activeSlide, translate, _slides, transition, _texts, activeText } = state

    const autoPlayRef = useRef()
    const transitionRef = useRef()
    const resizeRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
        resizeRef.current = handleResize
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const smooth = e => {
            if (e.target.className.includes('SliderContent')) {
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        const transitionEnd = window.addEventListener('transitionend', smooth)
        const onResize = window.addEventListener('resize', resize)

        let interval = null

        if (props.autoPlay) {
            interval = setInterval(play, props.autoPlay * 1000)
        }

        return () => {
            window.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', onResize)

            if (props.autoPlay) {
                clearInterval(interval)
            }
        }
    }, [])

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.9 })
    }, [transition])

    const handleResize = () => {
        setState({ ...state, translate: getWidth(), transition: 0 })
    }

    const smoothTransition = () => {
        let _slides = []

        // We're at the last slide.
        if (activeSlide === slides.length - 1) {
            _slides = [slides[slides.length - 2], lastSlide, firstSlide];
            _texts = [texts[texts.length - 2], lastText, firstText]
        }

        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeSlide === 0) {
            _slides = [lastSlide, firstSlide, secondSlide]
            _texts = [ lastText, firstText, secondText]

        }

        // Create an array of the previous last slide, and the next two slides that follow it.
        else {
            _slides = slides.slice(activeSlide - 1, activeSlide + 2)
            _texts = texts.slice(activeText -1, activeText + 2)
        }

        setState({
            ...state,
            _slides,
            _texts,
            transition: 0,
            translate: getWidth()
        })
    }

    const nextSlide = () =>
        setState({
            ...state,
            translate: translate + getWidth(),
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
            activeText: activeText == texts.length -1 ? 0 : activeText +1
        })

    const prevSlide = () =>
        setState({
            ...state,
            translate: 0,
            activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
        })

    return (
        <div css={SliderCSS}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
            >
                {_slides.map((_slide, i) => (
                    <Slide width={getWidth()} key={_slide + i} content={_slide} text={<p>{_texts[i]}</p>}>

                    </Slide>
                ))}
            </SliderContent>


            <Dots slides={slides} activeSlide={activeSlide} />
        </div>
    )
}

const SliderCSS = css`
  position: relative;
  height: 55vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`




export default Slider
