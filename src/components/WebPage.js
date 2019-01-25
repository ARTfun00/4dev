import React from 'react';
import CarList from '../containers/cars-list';
import Details from '../containers/details';

const WebPage = () => (
    <div>
        <h2>Cars:</h2>
        <CarList />
        <hr></hr>
        <h3>Details:</h3>
        <Details />
    </div>
);

export default WebPage;