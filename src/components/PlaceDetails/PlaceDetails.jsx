import React from 'react';

const PlaceDetails = ({ place }) => {
    return (
       <ul>
            <h1>{place.name}</h1>
       </ul> 
    );
}

export default PlaceDetails;