// Initialize the map and set its view to the chosen geographical coordinates and a zoom level
const map = L.map('map').setView([45.547944, -73.571238], 13);

// Add a tile layer to add to our map, in this case, it's a OSM tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// HTML content for the popup
const popupContent = `
    <table class="popup-table">
        <tr>
            <td>POST_ID_POT</td><td>7444</td>
            <td>POSITION_POP</td><td>7</td>
        </tr>
        <tr>
            <td>PANNEAU_ID_PAN</td><td>13565</td>
            <td>PANNEAU_ID_RPA</td><td>2604</td>
        </tr>
        <tr>
            <td>DESCRIPTION_RPA</td><td>\\P 09:30-10:30 WED. MARCH 1 TO DEC 1.</td>
            <td>CODE_RPA</td><td>SU-ND</td>
        </tr>
        <tr>
            <td>FLECHE_PAN</td><td>0</td>
            <td>TOPONYME_PAN</td><td></td>
        </tr>
        <tr>
            <td>DESCRIPTION_CAT</td><td>PARKING</td>
            <td>POST_VERSION_POT</td><td>0</td>
        </tr>
        <tr>
            <td>DATE_CONCEPTION_POT</td><td>5/11/99</td>
            <td>NOT_ON_STREET</td><td></td>
        </tr>
        <tr>
            <td>DESCRIPTION_REP</td><td>Removed</td>
            <td>DESCRIPTION_RTP</td><td>1- Stem and base</td>
        </tr>
        <tr>
            <td>X</td><td>299237.457</td>
            <td>Y</td><td>5045339.227</td>
        </tr>
        <tr>
            <td>Longitude</td><td>-73.571238</td>
            <td>Latitude</td><td>45.547944</td>
        </tr>
        <tr>
            <td>AROUND_NAME</td><td>5664.5</td>
        </tr>
    </table>
`;

// Add a marker to the map at the specified coordinates and bind the popup with the HTML content
L.marker([45.547944, -73.571238]).addTo(map)
    .bindPopup(popupContent)
    .openPopup();
