// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'Ypk.eyJ1IjoicHNwYXVzdGVyIiwiYSI6ImNrcGxzbGEzZjFtZXMzMnBlYnlmMGh2MHgifQ.cxTnj_Q47JPXRWlZG3K5bA';

const NYC_COORDINATES = [12.65147, 55.608166]
const BRONX_ZOO_COORDINATES = [-73.87649, 40.84939]

pizzaData = 
[
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
      "pizza-shop-name": "Pica's",
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
      "pizza-shop-name": "Piz-zetta",
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
      "first-name": "Anna",
      "pizza-shop-name": "John's of Bleecker",
      "place": "Greenwich Village",
      "longitude": -74.00337035,
      "latitude": 40.73170071,
      "program": "CUSP"
    },
    {
      "first-name": "Camille",
      "pizza-shop-name": "John's of Bleecker",
      "place": "Greenwich Village",
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
      "place": "East Village",
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


const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: NYC_COORDINATES, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

pizzaData.forEach(function(pizzaRecord) {
    const popup = new mapboxgl.Popup({offset: 24}).setText(
        `${pizzaRecord['first-name']} loves ${pizzaRecord['pizza-shop-name']} in ${pizzaRecord['place']}`
    )

    //figure out the color of the marker based on the program variable
    const color = "purple"

    new mapboxgl.Marker({
        color: '#fcba03'
    })
    .setLngLat([pizzaRecord.longitude, pizzaRecord.latitude])

});

// create the popup
const center_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Construction on the Washington Monument began in 1848.'
);

// create the popup
const zoo_popup = new mapboxgl.Popup({ offset: 25, }).setText(
    'Construction on the Washington Monument began in 1848.'
);

// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';

new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(center_popup) // sets a popup on this marker
    .setPopup(zoo_popup)
    .addTo(map);