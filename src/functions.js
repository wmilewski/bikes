const parseAdditionalProperties = properties => properties.reduce((result, property) => {
    switch (property.key) {
        case 'Installed':
            result.installed = property.value === 'true';
            break;
        case 'Locked':
            result.locked = property.value === 'true';
            break;
        case 'NbBikes':
            result.bikes = parseInt(property.value);
            break;
        case 'NbEmptyDocks':
            result.spaces = parseInt(property.value);
            break;
    }

    return result;
}, {});

const parsePlace = place => ({
    name: place.commonName,
    distance: Number((parseFloat(place.distance) / 1000).toFixed(2)),
    lat: place.lat,
    lon: place.lon,
    ...parseAdditionalProperties(place.additionalProperties),
});

const parseResponse = response => response.places.map(parsePlace);

const buildQuery = data => Object.keys(data).map(function(key) {
    return [key, data[key]].map(encodeURIComponent).join("=");
}).join("&");

export {parseResponse, buildQuery};
