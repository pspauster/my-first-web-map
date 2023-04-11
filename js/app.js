// a map of all motor vehicle crashes where people were killed in the past year
$.ajax({
    url: "https://data.cityofnewyork.us/resource/h9gi-nx95.geojson",
    type: "GET",
    async: "false",
    data: {
        "$limit": 5000,
        "$$app_token": "2CyYsCwXD8tqO7Tn1vaeQwcxz",
        "$where": "number_of_pedestrians_killed > 0 AND crash_date > '2023-01-01T00:00:00.000'"
    }
}).done(function (data) {
    // alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
    console.log(data.features)
    console.log(data.features[0].geometry.coordinates[0])
    console.log(data.features[0].properties.number_of_persons_killed)
    console.log(data.features[0].properties)

    mapboxgl.accessToken = 'pk.eyJ1IjoicHNwYXVzdGVyIiwiYSI6ImNsZ2JxN3p4djAyZDkzZ3BmOGR1ZTVhcWQifQ.499a8nIbNZgnjPf0qIGx8g';
    const NYC_COORDINATES = [-74.00214, 40.71882]

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/light-v11', // style URL
        center: NYC_COORDINATES, // starting position [lng, lat]
        zoom: 10, // starting zoom
        bearing: 0,
        pitch: 0
    });

    filteredData = data.features.geometry.filter(function (geom){
        geom != null
    })
    console.log(filteredData)

    data.features.forEach(function (fatalCrash) {
        // create the popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            `${fatalCrash.properties['number_of_pedestrians_killed']} pedestrian(s) was(were) killed by a ${fatalCrash.properties['vehicle_type_code1']} due to ${fatalCrash.properties['contributing_factor_vehicle_1']}`
        );

        // map center point and add geometry
        new mapboxgl.Marker({
            color: "#00000"
        })
            .setLngLat([fatalCrash.geometry.coordinates[0], fatalCrash.geometry.coordinates[1]])
            .setPopup(popup)
            .addTo(map);
    })
});








const pizzaData = [
    {
        "first-name": "Chris",
        "pizza-shop-name": "Ben's Pizza",
        "place": "the Village",
        "longitude": -74.000288,
        "latitude": 40.730412,
        "program": "MUP"
    },
    {
        "first-name": "Max",
        "pizza-shop-name": "Lou Malnati's Pizzeria",
        "place": "Chicago",
        "longitude": -87.63368899,
        "latitude": 41.89067478,
        "program": "MSDS"
    },
    {
        "first-name": "Christina",
        "pizza-shop-name": "Pie-Eyed Pizzeria",
        "place": "Chicago",
        "longitude": -87.65571,
        "latitude": 41.89619,
        "program": "MUP"
    },
    {
        "first-name": "Nate",
        "pizza-shop-name": "Pizza Suprema",
        "place": "Midtown",
        "longitude": -73.995163,
        "latitude": 40.75063,
        "program": "MSPP"
    },
    {
        "first-name": "Patrick",
        "pizza-shop-name": "Patsy's",
        "place": "East Harlem",
        "longitude": -73.93486712,
        "latitude": 40.797137,
        "program": "MUP"
    },
    {
        "first-name": "Evan",
        "pizza-shop-name": "Rosa's",
        "place": "Ridgewood",
        "longitude": -73.900092,
        "latitude": 40.712197,
        "program": "MUP"
    },
    {
        "first-name": "Aisha",
        "pizza-shop-name": "Christian's Pizza",
        "place": "Charlottesville",
        "longitude": -78.48223019,
        "latitude": 38.0310708,
        "program": "MUP"
    },
    {
        "first-name": "Luke",
        "pizza-shop-name": "Pica's ",
        "place": "Philadelphia",
        "longitude": -75.27540655,
        "latitude": 39.96583696,
        "program": "MUP"
    },
    {
        "first-name": "Ritwick",
        "pizza-shop-name": "Percy's",
        "place": "Greenwich Village",
        "longitude": -74.00138792,
        "latitude": 40.72933278,
        "program": "MUP"
    },
    {
        "first-name": "Whitney",
        "pizza-shop-name": "Piz-zetta ",
        "place": "Downtown Brooklyn",
        "longitude": -73.9907819,
        "latitude": 40.69243875,
        "program": "EMPA"
    },
    {
        "first-name": "Becky",
        "pizza-shop-name": "Prince Street Pizza",
        "place": "SOHO",
        "longitude": -73.99454946,
        "latitude": 40.72388084,
        "program": "ITP"
    },
    {
        "first-name": "Yu Ze",
        "pizza-shop-name": "Mama's TOO!",
        "place": "Upper West Side",
        "longitude": -73.96760083,
        "latitude": 40.80101105,
        "program": "CUSP"
    },
    {
        "first-name": "Anna ",
        "pizza-shop-name": "John's of Bleecker ",
        "place": "Greenwich Village ",
        "longitude": -74.00337035,
        "latitude": 40.73170071,
        "program": "CUSP"
    },
    {
        "first-name": "Camille ",
        "pizza-shop-name": "John's of Bleecker ",
        "place": "Greenwich Village ",
        "longitude": -74.00337035,
        "latitude": 40.73170071,
        "program": "MUP"
    },
    {
        "first-name": "Bria",
        "pizza-shop-name": "San Matteo",
        "place": "Upper East Side",
        "longitude": -73.95487,
        "latitude": 40.77398,
        "program": "MPA"
    },
    {
        "first-name": "Chloe",
        "pizza-shop-name": "Village Square Pizza",
        "place": "the East Village",
        "longitude": -73.98279206,
        "latitude": 40.72768156,
        "program": "MSDS"
    },
    {
        "first-name": "Karen",
        "pizza-shop-name": "Annie's Italian restaurant",
        "place": "Beijing",
        "longitude": 116.43731,
        "latitude": 39.91891,
        "program": "MUP"
    }
]


mapboxgl.accessToken = 'pk.eyJ1IjoicHNwYXVzdGVyIiwiYSI6ImNsZ2JxN3p4djAyZDkzZ3BmOGR1ZTVhcWQifQ.499a8nIbNZgnjPf0qIGx8g';

const NYC_COORDINATES = [-74.00214, 40.71882]
const BRONX_ZOO_COORDINATES = [-73.87708, 40.85999]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: NYC_COORDINATES, // starting position [lng, lat]
    zoom: 10, // starting zoom
    bearing: 0,
    pitch: 0
});


// real markers, made with REAL data

pizzaData.forEach(function (pizzaRecord) {
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${pizzaRecord['first-name']} loves ${pizzaRecord['pizza-shop-name']} in ${pizzaRecord.place}. (${pizzaRecord.program})`
    );

    // figure out the color of the marker based on the program variable

    // by default, use gray
    let color = '#ccc'

    if (pizzaRecord.program === 'MUP') {
        color = '#62237d'
    }

    if (pizzaRecord.program === 'CUSP') {
        color = '#2f6e36'
    }

    if (pizzaRecord.program === 'ITP') {
        color = '#e8af33'
    }

    if (pizzaRecord.program === 'EMPA') {
        color = '#f794e0'
    }

    if (pizzaRecord.program === 'MSDS') {
        color = '#dd22e3'
    }

    if (pizzaRecord.program === 'MSDS') {
        color = '#dd22e3'
    }

    if (pizzaRecord.program === 'MSPP') {
        color = '#f4f740'
    }




    // map center point
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat([pizzaRecord.longitude, pizzaRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})

// event listeners

$('#fly-to-beijing').on('click', function () {
    map.flyTo({
        center: [116.43731, 39.91891]
    })
})

$('#fly-to-chicago').on('click', function () {
    map.flyTo({
        center: [-87.6298, 41.8781]
    })
})


$('#fly-to-philadelphia').on('click', function () {
    map.flyTo({
        center: [-75.27540655, 39.96583696]
    })
})

$('#fly-to-charlottesville').on('click', function () {
    map.flyTo({
        center: [-78.4822301, 38.0310708]
    })
})