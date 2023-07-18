import {useState, useEffect} from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import {
    RootContainer,
    NeedleShaft,
    ShaftLabel,
    ShaftValue,
} from "./AQIMeter.styles"

const defaultSegments = [
    {
        text: 'Good',
        position: 'INSIDE',
        color: '#2E2D2D',
    },
    {
        text: 'Moderate',
        position: 'INSIDE',
        color: '#2E2D2D',
    },
    {
        text: 'Unhealthy',
        position: 'INSIDE',
        color: '#2E2D2D',
    },
    {
        text: 'Hazourdous',
        position: 'INSIDE',
        color: '#2E2D2D',
    },
]

const defaultSegmentColors = [
    '#83B146',
    '#EEE409',
    '#F68260',
    '#EC3649',
]

const AQIMeter = (props) => {
    const {
        min = 0,
        max = 250,
        value = 100,
        segments,
        needleColor = "#FFFFFF",
        width = 300
    } = props;
    return (
        <RootContainer width={width} >
            <ReactSpeedometer
                minValue={min}
                maxValue={250}
                value={value}
                segments={segments?segments.length:defaultSegments.length}
                segmentColors={defaultSegmentColors}
                customSegmentLabels={segments || defaultSegments}
                ringWidth={36}
                needleColor={needleColor}
                currentValueText=""
                labelFontSize="7px"
                width={width}
                height={width}
            />
            <NeedleShaft width={width}>
                <ShaftValue width={width} >{value}</ShaftValue>
                <ShaftLabel width={width} >AQI</ShaftLabel>
            </NeedleShaft>
        </RootContainer>
    )
}

export default AQIMeter;