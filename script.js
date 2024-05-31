// Sample data to demonstrate functionality (replace with real data)
const data = [
    {
        "POTEAU_ID_POT": 7444,
        "POSITION_POP": 7,
        "PANNEAU_ID_PAN": 13565,
        "PANNEAU_ID_RPA": 2604,
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ND",
        "FLECHE_PAN": 0,
        "TOPONYME_PAN": "Main Street",
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": 0,
        "DATE_CONCEPTION_POT": "1999-11-05",
        "PAS_SUR_RUE": null,
        "DESCRIPTION_REP": "Enlevé",
        "DESCRIPTION_RTP": "1- Tige et base",
        "Longitude": -73.571238,
        "Latitude": 45.547944,
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
    },
    {
        "POTEAU_ID_POT": 59640,
        "POSITION_POP": 6,
        "PANNEAU_ID_PAN": 121656,
        "PANNEAU_ID_RPA": 2420,
        "DESCRIPTION_RPA": "\\P 09h-17h LUN. JEU.",
        "CODE_RPA": "SD-ZD",
        "FLECHE_PAN": 0,
        "TOPONYME_PAN": "Second Street",
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": 0,
        "DATE_CONCEPTION_POT": "1999-09-24",
        "PAS_SUR_RUE": null,
        "DESCRIPTION_REP": "Enlevé",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "Longitude": -73.587793,
        "Latitude": 45.474864,
        "NOM_ARROND": "Le Sud-Ouest"
    },
    {
        "POTEAU_ID_POT": 62627,
        "POSITION_POP": 7,
        "PANNEAU_ID_PAN": 127071,
        "PANNEAU_ID_RPA": 2686,
        "DESCRIPTION_RPA": "\\P 07h30-08h30 LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AE",
        "FLECHE_PAN": 0,
        "TOPONYME_PAN": "Third Street",
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": 2,
        "DATE_CONCEPTION_POT": null,
        "PAS_SUR_RUE": null,
        "DESCRIPTION_REP": "Enlevé",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "Longitude": -73.576569,
        "Latitude": 45.499245,
        "NOM_ARROND": "Ville-Marie"
    },
    {
        "POTEAU_ID_POT": 60326,
        "POSITION_POP": 6,
        "PANNEAU_ID_PAN": 122960,
        "PANNEAU_ID_RPA": 2175,
        "DESCRIPTION_RPA": "\\P 09h-17h MAR. VEN.",
        "CODE_RPA": "SB-JL",
        "FLECHE_PAN": 2,
        "TOPONYME_PAN": "Fourth Street",
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": 1,
        "DATE_CONCEPTION_POT": null,
        "PAS_SUR_RUE": null,
        "DESCRIPTION_REP": "Réel",
        "DESCRIPTION_RTP": "3- Fût",
        "Longitude": -73.58679,
        "Latitude": 45.628754,
        "NOM_ARROND": "Rivière-des-Prairies - Pointe-aux-Trembles"
    },
    {
        "POTEAU_ID_POT": 60327,
        "POSITION_POP": 6,
        "PANNEAU_ID_PAN": 122961,
        "PANNEAU_ID_RPA": 2176,
        "DESCRIPTION_RPA": "\\P 09h-17h MAR. VEN.",
        "CODE_RPA": "SB-JL",
        "FLECHE_PAN": 2,
        "TOPONYME_PAN": "Fifth Street",
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": 1,
        "DATE_CONCEPTION_POT": null,
        "PAS_SUR_RUE": null,
        "DESCRIPTION_REP": "Réel",
        "DESCRIPTION_RTP": "3- Fût",
        "Longitude": -73.58680,
        "Latitude": 45.628755,
        "NOM_ARROND": "Rivière-des-Prairies - Pointe-aux-Trembles"
    }
    // Add more entries here...
];

// Initialize the map and set its view to cover all valid data points
const map = L.map('map');

// Create a bounds object to include all valid data points
const bounds = L.latLngBounds(data.map(item => [item.Latitude, item.Longitude]));

// Fit the map to the bounds
map.fitBounds(bounds);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers to the map
data.forEach(item => {
    const marker = L.marker([item.Latitude, item.Longitude]).addTo(map);
    const popupContent = `
        <div class="popup-content">
            <div class="popup-header">
                <i class="fas fa-map-marker-alt"></i>
                <h3>${item.NOM_ARROND}</h3>
            </div>
            <table class="popup-table">
                <tr><td><i class="fas fa-map-marker-alt"></i> Latitude</td><td>${item.Latitude}</td></tr>
                <tr><td><i class="fas fa-map-marker-alt"></i> Longitude</td><td>${item.Longitude}</td></tr>
                <tr><td><i class="fas fa-globe"></i> Region</td><td>${item.NOM_ARROND}</td></tr>
                <tr><td><i class="fas fa-map-signs"></i> Position</td><td>${item.POSITION_POP}</td></tr>
                <tr><td><i class="fas fa-calendar-alt"></i> Date</td><td>${item.DATE_CONCEPTION_POT}</td></tr>
                <tr><td><i class="fas fa-info-circle"></i> Description</td><td>${item.DESCRIPTION_RTP}</td></tr>
            </table>
        </div>
    `;
    marker.bindPopup(popupContent);
});
