import {useState, useEffect, CSSProperties} from 'react'

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

const sinify = (scale : number) => Math.sin(scale * Math.PI)

export const useStyle = (w : number, h : number, scale : number) => {
    const size : number = Math.min(w, h) / 10 
    const sf : number = sinify(scale)
    return {
        blockStyle(i : number) : CSSProperties {
            return {
                left: `${w / 2 - size / 2}px`,
                top: `${h / 2 + (i * h / 2) - (h / 2 + size * (1 - j) * sf)}px`,
                width: `${size}px`,
                height: `${size}px`,
                position: 'absolute',
                background: 'purple'
            }
        }
    }
}