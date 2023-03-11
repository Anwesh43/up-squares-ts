import React from 'react'
import {useStyle} from './hooks'
import withContext from './withContext'

interface UpSquareProps {
    w : number,
    h : number, 
    scale : number, 
    onClick : () => void
}

const UpSquare = (props : UpSquareProps) => {
    const {blockStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <React.Fragment>
            {new Array(2).fill(0).map((num : number, i : number) => (
                <div key = {`block_${i}`} style = {blockStyle(i)} onClick = {() => {
                    props.onClick()
                }}></div>
            ))}
        </React.Fragment>
        
    )
}

export default withContext(UpSquare)