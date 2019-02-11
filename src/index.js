import React, { useState } from 'react'
import PropTypes from 'prop-types'

function SlidingInput(props) {
    const [value, setValue] = useState(props.value);
    function handleOnChange(e){
        let value = e.target.value
        setValue(value)
        props.onChange(value)
    }

    const inputStyle = {
        position: "absolute",
        margin: "0px",
        left: "0px",
        border: "1px solid transparent",
        opacity: 0,
        width: props.width+"px",
        height: props.height+"px",
        cursor: "e-resize"
    }
    const containerStyle = {
        position: "relative",
        width: props.width+"px",
        height: props.height+"px"
    }
    return(
        <span style={containerStyle}>
            <input
                type="number"
                value={value}
                min={props.min}
                max={props.max}
                readOnly
                className={props.className}
            />
            <input
                type="range"
                step={props.step}
                min={props.min}
                max={props.max}
                onChange={handleOnChange}
                style={inputStyle}
            />
        </span>
    )
}

SlidingInput.defaultProps = {
    value: 0,
    width: 62,
    height: 23,
    min: 0,
    max: 50,
    step: null
}
SlidingInput.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    onChange: () => {}
}

export default SlidingInput;