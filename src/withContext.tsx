import React, { useState } from "react";
import {useDimension, useAnimatedScale} from './hooks'

const withContext = (MainFC : React.FC<any>) => {
    
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const mainProps = {
            ...props, 
            scale, 
            w, 
            h, 
            onClick
        }
        return (<MainFC {...mainProps}></MainFC>)
    }
}

export default withContext