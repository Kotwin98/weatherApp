import React from 'react';

const Result = (props) => {
    const {
        date,
        city,
        sunrise,
        sunset,
        temp,
        pressure,
        wind,
        err
    } = props.weather;

    return (
        <>
            <div>Date: {date}</div>
            <div>City: {city}</div>
            <div>Temp: {temp}</div>
            <div>Sunrise: {sunrise}</div>
            <div>Sunset: {sunset}</div>
            <div>Pressure: {pressure}</div>
            <div>Wind: {wind}</div>
        </>
    );
};

export default Result;