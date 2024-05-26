// Data extracted from the Excel file
const data =  [
    {
      "record": {
        "POTEAU_ID_POT": "7444",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "13565",
        "PANNEAU_ID_RPA": "2604",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ND",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299237.457",
        "Y": "5045339.227",
        "Longitude": "-73.571238",
        "Latitude": "45.547944",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "7452",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "13584",
        "PANNEAU_ID_RPA": "2167",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-05 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299292.647",
        "Y": "5045414.954",
        "Longitude": "-73.570532",
        "Latitude": "45.548626",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "7452",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "13583",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-05 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299292.647",
        "Y": "5045414.954",
        "Longitude": "-73.570532",
        "Latitude": "45.548626",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1336",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "2461",
        "PANNEAU_ID_RPA": "2585",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298028.806",
        "Y": "5047372.523",
        "Longitude": "-73.586745",
        "Latitude": "45.56623",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1374",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "2512",
        "PANNEAU_ID_RPA": "2586",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ME",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298154.041",
        "Y": "5047571.973",
        "Longitude": "-73.585143",
        "Latitude": "45.568026",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1415",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "2579",
        "PANNEAU_ID_RPA": "2610",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298457.208",
        "Y": "5048065.68",
        "Longitude": "-73.581266",
        "Latitude": "45.572471",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1415",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "2577",
        "PANNEAU_ID_RPA": "1683",
        "DESCRIPTION_RPA": "\\P RESERVE TAXIS",
        "CODE_RPA": "R-TA",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298457.208",
        "Y": "5048065.68",
        "Longitude": "-73.581266",
        "Latitude": "45.572471",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4250",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "7788",
        "PANNEAU_ID_RPA": "2452",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 09h30-18h LUN. AU VEN.",
        "CODE_RPA": "SL-JS",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301784.545",
        "Y": "5044846.505",
        "Longitude": "-73.538615",
        "Latitude": "45.543526",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4298",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "7945",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-03-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "300482.236",
        "Y": "5044646.69",
        "Longitude": "-73.55529",
        "Latitude": "45.541721",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "7479",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "13619",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-05 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299196.463",
        "Y": "5045265.06",
        "Longitude": "-73.571762",
        "Latitude": "45.547277",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1488",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "2723",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298627.362",
        "Y": "5047031.84",
        "Longitude": "-73.579073",
        "Latitude": "45.56317",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1488",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "2722",
        "PANNEAU_ID_RPA": "1256",
        "DESCRIPTION_RPA": "P 15 min",
        "CODE_RPA": "PD-DT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298627.362",
        "Y": "5047031.84",
        "Longitude": "-73.579073",
        "Latitude": "45.56317",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1488",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "2721",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298627.362",
        "Y": "5047031.84",
        "Longitude": "-73.579073",
        "Latitude": "45.56317",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1596",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "3003",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300819.064",
        "Y": "5048233.627",
        "Longitude": "-73.551006",
        "Latitude": "45.574",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1596",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "3002",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300819.064",
        "Y": "5048233.627",
        "Longitude": "-73.551006",
        "Latitude": "45.574",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "7780",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "14042",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298825.586",
        "Y": "5046399.009",
        "Longitude": "-73.576526",
        "Latitude": "45.557477",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1656",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "3107",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299761.3",
        "Y": "5050622.517",
        "Longitude": "-73.564584",
        "Latitude": "45.595489",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1678",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "3157",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301595.272",
        "Y": "5049980.045",
        "Longitude": "-73.541073",
        "Latitude": "45.589719",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4678",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "8713",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-03-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "296789.876",
        "Y": "5047477.093",
        "Longitude": "-73.602619",
        "Latitude": "45.567158",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4684",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "8729",
        "PANNEAU_ID_RPA": "2468",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU SAM.",
        "CODE_RPA": "SS-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296857.298",
        "Y": "5047437.98",
        "Longitude": "-73.601754",
        "Latitude": "45.566807",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4687",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "8734",
        "PANNEAU_ID_RPA": "2713",
        "DESCRIPTION_RPA": "\\P 09h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-JH",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-03-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296909.947",
        "Y": "5047404.816",
        "Longitude": "-73.601079",
        "Latitude": "45.566509",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8051",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "14496",
        "PANNEAU_ID_RPA": "2564",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295724.548",
        "Y": "5047007.058",
        "Longitude": "-73.616258",
        "Latitude": "45.562915",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8088",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "14552",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295651.204",
        "Y": "5047375.294",
        "Longitude": "-73.617204",
        "Latitude": "45.566228",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8128",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "14650",
        "PANNEAU_ID_RPA": "2291",
        "DESCRIPTION_RPA": "\\P 20h-21h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295428.26",
        "Y": "5047515.637",
        "Longitude": "-73.620063",
        "Latitude": "45.567488",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1859",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "3438",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299066.6",
        "Y": "5046836",
        "Longitude": "-73.573444",
        "Latitude": "45.561411",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1968",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "3642",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300659.212",
        "Y": "5049581.877",
        "Longitude": "-73.553066",
        "Latitude": "45.586131",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4867",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9135",
        "PANNEAU_ID_RPA": "2547",
        "DESCRIPTION_RPA": "\\P 13h-14h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297506.119",
        "Y": "5047267.993",
        "Longitude": "-73.59344",
        "Latitude": "45.565284",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8136",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "14668",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295317.452",
        "Y": "5047585.504",
        "Longitude": "-73.621484",
        "Latitude": "45.568115",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8236",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "14930",
        "PANNEAU_ID_RPA": "2512",
        "DESCRIPTION_RPA": "\\P 09h-17h LUN. MER. JEU.",
        "CODE_RPA": "ST-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294909.663",
        "Y": "5048083.032",
        "Longitude": "-73.626718",
        "Latitude": "45.572586",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8255",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "15006",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294885.265",
        "Y": "5048019.636",
        "Longitude": "-73.62703",
        "Latitude": "45.572015",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2059",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "3762",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301186.609",
        "Y": "5048773.529",
        "Longitude": "-73.546301",
        "Latitude": "45.57886",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2196",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "3938",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "301949.62",
        "Y": "5045224.506",
        "Longitude": "-73.536503",
        "Latitude": "45.546928",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2248",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "4040",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301820.262",
        "Y": "5045892.19",
        "Longitude": "-73.538164",
        "Latitude": "45.552936",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5001",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9346",
        "PANNEAU_ID_RPA": "2539",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296426.331",
        "Y": "5045746.126",
        "Longitude": "-73.607246",
        "Latitude": "45.551578",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5039",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9433",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296967.05",
        "Y": "5046709.539",
        "Longitude": "-73.600336",
        "Latitude": "45.560253",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5150",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9580",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295958.379",
        "Y": "5046163.887",
        "Longitude": "-73.613247",
        "Latitude": "45.555331",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8505",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "15498",
        "PANNEAU_ID_RPA": "2330",
        "DESCRIPTION_RPA": "\\P 13h-14h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VS",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300333.519",
        "Y": "5042954.317",
        "Longitude": "-73.557179",
        "Latitude": "45.526492",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2320",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "4245",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "301887.048",
        "Y": "5045653.597",
        "Longitude": "-73.537307",
        "Latitude": "45.550789",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5197",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9680",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298805.782",
        "Y": "5045117.746",
        "Longitude": "-73.576764",
        "Latitude": "45.545948",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5243",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9806",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298770.06",
        "Y": "5045426.5",
        "Longitude": "-73.577225",
        "Latitude": "45.548726",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5245",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9809",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298808.03",
        "Y": "5045409.5",
        "Longitude": "-73.576738",
        "Latitude": "45.548573",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5308",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "9989",
        "PANNEAU_ID_RPA": "2573",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298891.688",
        "Y": "5045532.426",
        "Longitude": "-73.575669",
        "Latitude": "45.54968",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8722",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "16003",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299794.549",
        "Y": "5043227.753",
        "Longitude": "-73.564082",
        "Latitude": "45.528949",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5394",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "10217",
        "PANNEAU_ID_RPA": "2539",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299112.825",
        "Y": "5045752.557",
        "Longitude": "-73.572839",
        "Latitude": "45.551663",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5455",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "10316",
        "PANNEAU_ID_RPA": "2672",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297366.895",
        "Y": "5046789.737",
        "Longitude": "-73.595216",
        "Latitude": "45.560979",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5523",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "10423",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298868.279",
        "Y": "5046817.55",
        "Longitude": "-73.575984",
        "Latitude": "45.561244",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2690",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "4933",
        "PANNEAU_ID_RPA": "2441",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SL-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "301668.229",
        "Y": "5046284.808",
        "Longitude": "-73.540114",
        "Latitude": "45.556468",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2693",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "4937",
        "PANNEAU_ID_RPA": "2292",
        "DESCRIPTION_RPA": "\\P 21h-22h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301734.067",
        "Y": "5046254.865",
        "Longitude": "-73.53927",
        "Latitude": "45.556199",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2709",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "4954",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301613.848",
        "Y": "5046295.449",
        "Longitude": "-73.54081",
        "Latitude": "45.556564",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2710",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "4955",
        "PANNEAU_ID_RPA": "2293",
        "DESCRIPTION_RPA": "\\P 21h-22h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301600.98",
        "Y": "5046301.47",
        "Longitude": "-73.540975",
        "Latitude": "45.556618",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8827",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "16181",
        "PANNEAU_ID_RPA": "2318",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299411.579",
        "Y": "5044103.828",
        "Longitude": "-73.568995",
        "Latitude": "45.536829",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "8949",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "16449",
        "PANNEAU_ID_RPA": "2320",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "300319.571",
        "Y": "5043468.116",
        "Longitude": "-73.557363",
        "Latitude": "45.531115",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "2878",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "5256",
        "PANNEAU_ID_RPA": "2441",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SL-JD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301366.184",
        "Y": "5046406.43",
        "Longitude": "-73.543983",
        "Latitude": "45.557561",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "5891",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "10998",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296827.026",
        "Y": "5045708.303",
        "Longitude": "-73.602114",
        "Latitude": "45.551242",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9230",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "17112",
        "PANNEAU_ID_RPA": "2565",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295097.156",
        "Y": "5047496.155",
        "Longitude": "-73.624304",
        "Latitude": "45.567308",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9236",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "17121",
        "PANNEAU_ID_RPA": "2291",
        "DESCRIPTION_RPA": "\\P 20h-21h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295137.424",
        "Y": "5047516.307",
        "Longitude": "-73.623789",
        "Latitude": "45.56749",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9254",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "17165",
        "PANNEAU_ID_RPA": "2564",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295252.967",
        "Y": "5047641.579",
        "Longitude": "-73.622311",
        "Latitude": "45.568618",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9295",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "17230",
        "PANNEAU_ID_RPA": "2539",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294133.579",
        "Y": "5047842.959",
        "Longitude": "-73.636657",
        "Latitude": "45.570414",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9307",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "17261",
        "PANNEAU_ID_RPA": "2666",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294379.412",
        "Y": "5048260.449",
        "Longitude": "-73.633516",
        "Latitude": "45.574175",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9329",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "17301",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294851.62",
        "Y": "5047415.858",
        "Longitude": "-73.627448",
        "Latitude": "45.566582",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9331",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "17304",
        "PANNEAU_ID_RPA": "2585",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294844.031",
        "Y": "5047468.283",
        "Longitude": "-73.627547",
        "Latitude": "45.567053",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "3185",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "5789",
        "PANNEAU_ID_RPA": "2445",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 09h-17h LUN. AU VEN.",
        "CODE_RPA": "SL-JH",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301420.705",
        "Y": "5051084.942",
        "Longitude": "-73.543317",
        "Latitude": "45.59966",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "3201",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "5812",
        "PANNEAU_ID_RPA": "2733",
        "DESCRIPTION_RPA": "\\P 13h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301398.764",
        "Y": "5051073.041",
        "Longitude": "-73.543599",
        "Latitude": "45.599553",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "67",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300998.053",
        "Y": "5048156.359",
        "Longitude": "-73.548712",
        "Latitude": "45.573306",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "69",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301092.744",
        "Y": "5048115.075",
        "Longitude": "-73.547499",
        "Latitude": "45.572935",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "3248",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "5905",
        "PANNEAU_ID_RPA": "2320",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "302318.064",
        "Y": "5051674.799",
        "Longitude": "-73.531818",
        "Latitude": "45.604972",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "3310",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "5983",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "302017.883",
        "Y": "5050741.339",
        "Longitude": "-73.535661",
        "Latitude": "45.596571",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6318",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "11515",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300314.968",
        "Y": "5045083.503",
        "Longitude": "-73.557436",
        "Latitude": "45.545651",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "331",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "606",
        "PANNEAU_ID_RPA": "2591",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "303372.414",
        "Y": "5051875.288",
        "Longitude": "-73.518302",
        "Latitude": "45.606779",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "331",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "605",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "303372.414",
        "Y": "5051875.288",
        "Longitude": "-73.518302",
        "Latitude": "45.606779",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "3581",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "6387",
        "PANNEAU_ID_RPA": "2182",
        "DESCRIPTION_RPA": "\\P 13h-14h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JS",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "300753.21",
        "Y": "5043890.737",
        "Longitude": "-73.551814",
        "Latitude": "45.534921",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6485",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "11805",
        "PANNEAU_ID_RPA": "1381",
        "DESCRIPTION_RPA": "P 60 min 08h-19h LUN. AU SAM.",
        "CODE_RPA": "PS-JE",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300099.291",
        "Y": "5044365.673",
        "Longitude": "-73.560191",
        "Latitude": "45.53919",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6515",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "11848",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300159.487",
        "Y": "5046117.502",
        "Longitude": "-73.559437",
        "Latitude": "45.554954",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "3763",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "6755",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301581.696",
        "Y": "5045365.25",
        "Longitude": "-73.541216",
        "Latitude": "45.548193",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6701",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "12139",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299260.05",
        "Y": "5044949.629",
        "Longitude": "-73.570944",
        "Latitude": "45.544439",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6777",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "12283",
        "PANNEAU_ID_RPA": "2572",
        "DESCRIPTION_RPA": "\\P 13h-14h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298995.015",
        "Y": "5045255.809",
        "Longitude": "-73.574342",
        "Latitude": "45.547192",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6801",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "12316",
        "PANNEAU_ID_RPA": "2667",
        "DESCRIPTION_RPA": "\\P 10h-11h VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299068.136",
        "Y": "5045383.611",
        "Longitude": "-73.573407",
        "Latitude": "45.548342",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6837",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "12405",
        "PANNEAU_ID_RPA": "1592",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 15h-09h",
        "CODE_RPA": "R-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299042.937",
        "Y": "5045527.235",
        "Longitude": "-73.573731",
        "Latitude": "45.549635",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "662",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "1119",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301712.473",
        "Y": "5047838.738",
        "Longitude": "-73.539557",
        "Latitude": "45.570451",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "670",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "1129",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301796.094",
        "Y": "5047780.543",
        "Longitude": "-73.538485",
        "Latitude": "45.569928",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "670",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "1128",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301796.094",
        "Y": "5047780.543",
        "Longitude": "-73.538485",
        "Latitude": "45.569928",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "742",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "1213",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-20 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302843.367",
        "Y": "5050424.078",
        "Longitude": "-73.525078",
        "Latitude": "45.593719",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "6886",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "12500",
        "PANNEAU_ID_RPA": "2592",
        "DESCRIPTION_RPA": "\\P 13h-14h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ML",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297565.886",
        "Y": "5045291.492",
        "Longitude": "-73.592645",
        "Latitude": "45.547499",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "874",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "1554",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301986.68",
        "Y": "5050507.026",
        "Longitude": "-73.536059",
        "Latitude": "45.594462",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "989",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "1751",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301247.441",
        "Y": "5045766.988",
        "Longitude": "-73.5455",
        "Latitude": "45.551807",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "989",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "1750",
        "PANNEAU_ID_RPA": "1587",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-21h  (2 SECTEURS)",
        "CODE_RPA": "R-PD-2S",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301247.441",
        "Y": "5045766.988",
        "Longitude": "-73.5455",
        "Latitude": "45.551807",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "989",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "1749",
        "PANNEAU_ID_RPA": "2318",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301247.441",
        "Y": "5045766.988",
        "Longitude": "-73.5455",
        "Latitude": "45.551807",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4055",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "7376",
        "PANNEAU_ID_RPA": "2579",
        "DESCRIPTION_RPA": "\\P 07h-08h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LS",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-04-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301424.021",
        "Y": "5045354.679",
        "Longitude": "-73.543235",
        "Latitude": "45.548097",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4055",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "7375",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-04-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301424.021",
        "Y": "5045354.679",
        "Longitude": "-73.543235",
        "Latitude": "45.548097",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "4092",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "7435",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301455.95",
        "Y": "5045558.268",
        "Longitude": "-73.542828",
        "Latitude": "45.54993",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1117",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "1993",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298781.68",
        "Y": "5046861.694",
        "Longitude": "-73.577094",
        "Latitude": "45.56164",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "1117",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "1992",
        "PANNEAU_ID_RPA": "88",
        "DESCRIPTION_RPA": "\\A 07h-09h30  15h-19h LUN. AU VEN.",
        "CODE_RPA": "AV-QZ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298781.68",
        "Y": "5046861.694",
        "Longitude": "-73.577094",
        "Latitude": "45.56164",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21032",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "43561",
        "PANNEAU_ID_RPA": "2584",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "303674.28",
        "Y": "5051654.5",
        "Longitude": "-73.514431",
        "Latitude": "45.604792",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11919",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22730",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299959.3",
        "Y": "5041215.5",
        "Longitude": "-73.561953",
        "Latitude": "45.510843",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12075",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "23026",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300800.53",
        "Y": "5042351.479",
        "Longitude": "-73.551196",
        "Latitude": "45.52107",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14820",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "30265",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299562.144",
        "Y": "5042154.31",
        "Longitude": "-73.567046",
        "Latitude": "45.519288",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14820",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "30264",
        "PANNEAU_ID_RPA": "9488",
        "DESCRIPTION_RPA": "PANONCEAU - EXCEPTE VEHICULES MUNIS D'UN PERMIS",
        "CODE_RPA": "PX-PR",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299562.144",
        "Y": "5042154.31",
        "Longitude": "-73.567046",
        "Latitude": "45.519288",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14820",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "30263",
        "PANNEAU_ID_RPA": "1433",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU VEN.",
        "CODE_RPA": "PV-JN",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299562.144",
        "Y": "5042154.31",
        "Longitude": "-73.567046",
        "Latitude": "45.519288",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14820",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "30262",
        "PANNEAU_ID_RPA": "2134",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES 09h30-17h LUN. AU VEN.",
        "CODE_RPA": "RV-JA",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299562.144",
        "Y": "5042154.31",
        "Longitude": "-73.567046",
        "Latitude": "45.519288",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14820",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "30261",
        "PANNEAU_ID_RPA": "2331",
        "DESCRIPTION_RPA": "\\P 14h-15h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299562.144",
        "Y": "5042154.31",
        "Longitude": "-73.567046",
        "Latitude": "45.519288",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14961",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "30714",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299853.508",
        "Y": "5042328.936",
        "Longitude": "-73.563318",
        "Latitude": "45.520861",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17968",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "37853",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302184.013",
        "Y": "5047597.245",
        "Longitude": "-73.533514",
        "Latitude": "45.56828",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17989",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "37883",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302323.593",
        "Y": "5047509.856",
        "Longitude": "-73.531726",
        "Latitude": "45.567494",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21265",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "44019",
        "PANNEAU_ID_RPA": "2623",
        "DESCRIPTION_RPA": "\\P 19h-20h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-SB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296243.252",
        "Y": "5045182.572",
        "Longitude": "-73.609581",
        "Latitude": "45.546504",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21265",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "44018",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296243.252",
        "Y": "5045182.572",
        "Longitude": "-73.609581",
        "Latitude": "45.546504",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21265",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "44017",
        "PANNEAU_ID_RPA": "1492",
        "DESCRIPTION_RPA": "PANONCEAU 08h-16h LUN A VEN",
        "CODE_RPA": "PX-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296243.252",
        "Y": "5045182.572",
        "Longitude": "-73.609581",
        "Latitude": "45.546504",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21265",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "44016",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296243.252",
        "Y": "5045182.572",
        "Longitude": "-73.609581",
        "Latitude": "45.546504",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12132",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "23132",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300686.926",
        "Y": "5042197.124",
        "Longitude": "-73.552649",
        "Latitude": "45.519681",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12230",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "23458",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300103.605",
        "Y": "5041377.955",
        "Longitude": "-73.560108",
        "Latitude": "45.512306",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12230",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "23457",
        "PANNEAU_ID_RPA": "1581",
        "DESCRIPTION_RPA": "\\P RESERVE MOTOS",
        "CODE_RPA": "R-MO",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300103.605",
        "Y": "5041377.955",
        "Longitude": "-73.560108",
        "Latitude": "45.512306",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12254",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "23550",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-03-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300497.289",
        "Y": "5041713.557",
        "Longitude": "-73.555072",
        "Latitude": "45.515328",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "15005",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "30821",
        "PANNEAU_ID_RPA": "2164",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299277.437",
        "Y": "5041131.201",
        "Longitude": "-73.570679",
        "Latitude": "45.510079",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "15152",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "31220",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298695.18",
        "Y": "5043283.209",
        "Longitude": "-73.578157",
        "Latitude": "45.529439",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18082",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "38114",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302298.013",
        "Y": "5047595.235",
        "Longitude": "-73.532054",
        "Latitude": "45.568262",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18090",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "38129",
        "PANNEAU_ID_RPA": "2168",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "302377.131",
        "Y": "5047557.951",
        "Longitude": "-73.53104",
        "Latitude": "45.567927",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18090",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "38128",
        "PANNEAU_ID_RPA": "2435",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-12h LUN. AU VEN.",
        "CODE_RPA": "SL-AN",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "302377.131",
        "Y": "5047557.951",
        "Longitude": "-73.53104",
        "Latitude": "45.567927",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18098",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "38154",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302451.332",
        "Y": "5047452.021",
        "Longitude": "-73.530089",
        "Latitude": "45.566974",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18098",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "38153",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302451.332",
        "Y": "5047452.021",
        "Longitude": "-73.530089",
        "Latitude": "45.566974",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18154",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "38245",
        "PANNEAU_ID_RPA": "1572",
        "DESCRIPTION_RPA": "\\P RESERVE TITULAIRES DE PERMIS",
        "CODE_RPA": "R-DP",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298041.469",
        "Y": "5042720",
        "Longitude": "-73.586519",
        "Latitude": "45.524365",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18189",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "38299",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302745.674",
        "Y": "5047312.078",
        "Longitude": "-73.526318",
        "Latitude": "45.565716",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21491",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "44577",
        "PANNEAU_ID_RPA": "2440",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-17h LUN. AU VEN.",
        "CODE_RPA": "SL-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297694.989",
        "Y": "5044492.615",
        "Longitude": "-73.59098",
        "Latitude": "45.540312",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21529",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "44668",
        "PANNEAU_ID_RPA": "2725",
        "DESCRIPTION_RPA": "\\P 08h-20h   LUN A VEN",
        "CODE_RPA": "SV-JU",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297317.397",
        "Y": "5043014.043",
        "Longitude": "-73.595792",
        "Latitude": "45.527004",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18450",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "38752",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294644.084",
        "Y": "5042239.488",
        "Longitude": "-73.63",
        "Latitude": "45.52",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18450",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "38751",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294644.084",
        "Y": "5042239.488",
        "Longitude": "-73.63",
        "Latitude": "45.52",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18477",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "38794",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296270.438",
        "Y": "5043741.083",
        "Longitude": "-73.609208",
        "Latitude": "45.533534",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9505",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "17722",
        "PANNEAU_ID_RPA": "2538",
        "DESCRIPTION_RPA": "\\P 09h-10h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293719.027",
        "Y": "5047488.165",
        "Longitude": "-73.64196",
        "Latitude": "45.567215",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9511",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "17742",
        "PANNEAU_ID_RPA": "2667",
        "DESCRIPTION_RPA": "\\P 10h-11h VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294362.099",
        "Y": "5047733.568",
        "Longitude": "-73.633726",
        "Latitude": "45.569433",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12562",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "24417",
        "PANNEAU_ID_RPA": "1675",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 16h-18h LUN A VEN + 09h-23h SAM ET DIM",
        "CODE_RPA": "R-SD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299851.62",
        "Y": "5041941.5",
        "Longitude": "-73.563338",
        "Latitude": "45.517375",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12562",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "24416",
        "PANNEAU_ID_RPA": "2335",
        "DESCRIPTION_RPA": "\\P 07h-08h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VX",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299851.62",
        "Y": "5041941.5",
        "Longitude": "-73.563338",
        "Latitude": "45.517375",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12564",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "24423",
        "PANNEAU_ID_RPA": "1675",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 16h-18h LUN A VEN + 09h-23h SAM ET DIM",
        "CODE_RPA": "R-SD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299867.94",
        "Y": "5041931",
        "Longitude": "-73.563129",
        "Latitude": "45.517281",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12564",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "24422",
        "PANNEAU_ID_RPA": "2335",
        "DESCRIPTION_RPA": "\\P 07h-08h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VX",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299867.94",
        "Y": "5041931",
        "Longitude": "-73.563129",
        "Latitude": "45.517281",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12578",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "24466",
        "PANNEAU_ID_RPA": "2164",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299830.643",
        "Y": "5041973.142",
        "Longitude": "-73.563607",
        "Latitude": "45.51766",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "15551",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "32185",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300954.254",
        "Y": "5046427.702",
        "Longitude": "-73.54926",
        "Latitude": "45.55775",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18622",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39093",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296744.527",
        "Y": "5045226.616",
        "Longitude": "-73.603162",
        "Latitude": "45.546907",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18631",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "39114",
        "PANNEAU_ID_RPA": "2201",
        "DESCRIPTION_RPA": "\\P 07h-08h LUN. MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-LL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296744.452",
        "Y": "5045192.983",
        "Longitude": "-73.603163",
        "Latitude": "45.546604",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18635",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39130",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296731.89",
        "Y": "5045174.211",
        "Longitude": "-73.603323",
        "Latitude": "45.546435",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18648",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39160",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296990.549",
        "Y": "5044458.742",
        "Longitude": "-73.6",
        "Latitude": "45.54",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9565",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "17879",
        "PANNEAU_ID_RPA": "2538",
        "DESCRIPTION_RPA": "\\P 09h-10h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293788.28",
        "Y": "5047735.708",
        "Longitude": "-73.641078",
        "Latitude": "45.569444",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "15596",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "32325",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301624.884",
        "Y": "5048547.277",
        "Longitude": "-73.540684",
        "Latitude": "45.576826",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18713",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "39256",
        "PANNEAU_ID_RPA": "2601",
        "DESCRIPTION_RPA": "\\P 08h-09h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NA",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294958.79",
        "Y": "5042773.729",
        "Longitude": "-73.625982",
        "Latitude": "45.524812",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18713",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39255",
        "PANNEAU_ID_RPA": "2323",
        "DESCRIPTION_RPA": "\\P 12h-13h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VJ",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294958.79",
        "Y": "5042773.729",
        "Longitude": "-73.625982",
        "Latitude": "45.524812",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18760",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39332",
        "PANNEAU_ID_RPA": "2169",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296521.014",
        "Y": "5042605.893",
        "Longitude": "-73.605981",
        "Latitude": "45.523322",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18813",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "39428",
        "PANNEAU_ID_RPA": "2546",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299926.522",
        "Y": "5049920.749",
        "Longitude": "-73.562459",
        "Latitude": "45.589176",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18843",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39462",
        "PANNEAU_ID_RPA": "2318",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299989.094",
        "Y": "5049871.175",
        "Longitude": "-73.561657",
        "Latitude": "45.58873",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18893",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "39587",
        "PANNEAU_ID_RPA": "1381",
        "DESCRIPTION_RPA": "P 60 min 08h-19h LUN. AU SAM.",
        "CODE_RPA": "PS-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296661.689",
        "Y": "5042826.054",
        "Longitude": "-73.604183",
        "Latitude": "45.525305",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18893",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39585",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296661.689",
        "Y": "5042826.054",
        "Longitude": "-73.604183",
        "Latitude": "45.525305",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9770",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "18145",
        "PANNEAU_ID_RPA": "2440",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-17h LUN. AU VEN.",
        "CODE_RPA": "SL-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293168.699",
        "Y": "5048122.146",
        "Longitude": "-73.649025",
        "Latitude": "45.572911",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9803",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "18190",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293141.834",
        "Y": "5048043.928",
        "Longitude": "-73.649367",
        "Latitude": "45.572207",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9935",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "18449",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293040.883",
        "Y": "5047404.756",
        "Longitude": "-73.650645",
        "Latitude": "45.566454",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "9935",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "18448",
        "PANNEAU_ID_RPA": "56",
        "DESCRIPTION_RPA": "\\A 16h-18h LUN. AU VEN.",
        "CODE_RPA": "AV-PJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293040.883",
        "Y": "5047404.756",
        "Longitude": "-73.650645",
        "Latitude": "45.566454",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12873",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "25299",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300555.052",
        "Y": "5041741.01",
        "Longitude": "-73.554333",
        "Latitude": "45.515576",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12919",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "25493",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300226.563",
        "Y": "5041204",
        "Longitude": "-73.558532",
        "Latitude": "45.510741",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18913",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "39634",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296636.54",
        "Y": "5042754.117",
        "Longitude": "-73.604504",
        "Latitude": "45.524657",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18977",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39784",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301069.871",
        "Y": "5049388.278",
        "Longitude": "-73.547802",
        "Latitude": "45.584391",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "18981",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "39788",
        "PANNEAU_ID_RPA": "2684",
        "DESCRIPTION_RPA": "\\P 09h-11h30 LUN. AU VEN.",
        "CODE_RPA": "SV-AC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301089.147",
        "Y": "5049389.738",
        "Longitude": "-73.547555",
        "Latitude": "45.584405",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "19031",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "39890",
        "PANNEAU_ID_RPA": "2317",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297592.165",
        "Y": "5043038.515",
        "Longitude": "-73.592275",
        "Latitude": "45.527227",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10017",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "18700",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293612.252",
        "Y": "5047903.235",
        "Longitude": "-73.643337",
        "Latitude": "45.570948",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10017",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "18699",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293612.252",
        "Y": "5047903.235",
        "Longitude": "-73.643337",
        "Latitude": "45.570948",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10059",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "18806",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293389.506",
        "Y": "5047559.251",
        "Longitude": "-73.646183",
        "Latitude": "45.56785",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10064",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "18813",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293334.597",
        "Y": "5047436.98",
        "Longitude": "-73.646883",
        "Latitude": "45.566748",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10116",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "18889",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-25 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292989.512",
        "Y": "5048700.862",
        "Longitude": "-73.651335",
        "Latitude": "45.578115",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12934",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "25557",
        "PANNEAU_ID_RPA": "2696",
        "DESCRIPTION_RPA": "\\P 07h-08h LUN. AU VEN.",
        "CODE_RPA": "SV-AO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-03-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300369.803",
        "Y": "5042011.496",
        "Longitude": "-73.556706",
        "Latitude": "45.518008",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "12934",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "25556",
        "PANNEAU_ID_RPA": "204",
        "DESCRIPTION_RPA": "\\P 10h-22h CLIGNOTANT 22h-10h FIXE",
        "CODE_RPA": "EU-TG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-03-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300369.803",
        "Y": "5042011.496",
        "Longitude": "-73.556706",
        "Latitude": "45.518008",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "15927",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "33168",
        "PANNEAU_ID_RPA": "1544",
        "DESCRIPTION_RPA": "\\P RESERVE AUTOBUS TOURISTIQUES",
        "CODE_RPA": "R-AT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298374.353",
        "Y": "5041542.26",
        "Longitude": "-73.582242",
        "Latitude": "45.51377",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "15927",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "33167",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298374.353",
        "Y": "5041542.26",
        "Longitude": "-73.582242",
        "Latitude": "45.51377",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "15943",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "33199",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299756.392",
        "Y": "5043266.307",
        "Longitude": "-73.564571",
        "Latitude": "45.529295",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16089",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "33454",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298234.915",
        "Y": "5042555.338",
        "Longitude": "-73.58404",
        "Latitude": "45.522885",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10194",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "19021",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-25 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292770.025",
        "Y": "5049031.364",
        "Longitude": "-73.654155",
        "Latitude": "45.581086",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10203",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "19031",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "292842.857",
        "Y": "5049124.833",
        "Longitude": "-73.653224",
        "Latitude": "45.581928",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10213",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "19062",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-25 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292860.542",
        "Y": "5049133.143",
        "Longitude": "-73.652998",
        "Latitude": "45.582003",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10243",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "19147",
        "PANNEAU_ID_RPA": "1469",
        "DESCRIPTION_RPA": "PANONCEAU DEBAR. AUTOBUS SCOLAIRE",
        "CODE_RPA": "PX-AS",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292699.996",
        "Y": "5047903.455",
        "Longitude": "-73.655025",
        "Latitude": "45.570935",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10243",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "19146",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292699.996",
        "Y": "5047903.455",
        "Longitude": "-73.655025",
        "Latitude": "45.570935",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10243",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "19145",
        "PANNEAU_ID_RPA": "2566",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292699.996",
        "Y": "5047903.455",
        "Longitude": "-73.655025",
        "Latitude": "45.570935",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16127",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "33532",
        "PANNEAU_ID_RPA": "2603",
        "DESCRIPTION_RPA": "\\P 09h-10h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302645.597",
        "Y": "5051222.115",
        "Longitude": "-73.527617",
        "Latitude": "45.600899",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16136",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "33560",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298814.088",
        "Y": "5043542.464",
        "Longitude": "-73.576638",
        "Latitude": "45.531773",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16201",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "33708",
        "PANNEAU_ID_RPA": "1519",
        "DESCRIPTION_RPA": "PANONCEAU LORSQUE STATIONNEMENT PERMIS-PETITES VOITURES",
        "CODE_RPA": "PX-PV",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298342.432",
        "Y": "5042504.554",
        "Longitude": "-73.582663",
        "Latitude": "45.522429",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16201",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "33707",
        "PANNEAU_ID_RPA": "1661",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 16h-23h LUN A VEN ET 9h-23h SAM ET DIM",
        "CODE_RPA": "R-RP",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298342.432",
        "Y": "5042504.554",
        "Longitude": "-73.582663",
        "Latitude": "45.522429",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16201",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "33706",
        "PANNEAU_ID_RPA": "2167",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298342.432",
        "Y": "5042504.554",
        "Longitude": "-73.582663",
        "Latitude": "45.522429",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "19315",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "40485",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297175.27",
        "Y": "5043913.519",
        "Longitude": "-73.597626",
        "Latitude": "45.535096",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "19315",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "40484",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297175.27",
        "Y": "5043913.519",
        "Longitude": "-73.597626",
        "Latitude": "45.535096",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10499",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "19609",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "292958.697",
        "Y": "5048153.029",
        "Longitude": "-73.651716",
        "Latitude": "45.573185",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "13322",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "26575",
        "PANNEAU_ID_RPA": "1454",
        "DESCRIPTION_RPA": "P 15 min 07h-09h30 ET 15h30-18h LUN. AU VEN",
        "CODE_RPA": "PV-QC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299470.316",
        "Y": "5041524.909",
        "Longitude": "-73.568214",
        "Latitude": "45.513624",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "13374",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "26730",
        "PANNEAU_ID_RPA": "2733",
        "DESCRIPTION_RPA": "\\P 13h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "302405.719",
        "Y": "5050896.444",
        "Longitude": "-73.53069",
        "Latitude": "45.597968",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16457",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "34357",
        "PANNEAU_ID_RPA": "1614",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 16h-20h LUN A SAM (2 SECTEURS)",
        "CODE_RPA": "R-PZ-2S",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297872.088",
        "Y": "5042694.852",
        "Longitude": "-73.588687",
        "Latitude": "45.524137",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "19511",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "40813",
        "PANNEAU_ID_RPA": "2573",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "303521.824",
        "Y": "5048663.478",
        "Longitude": "-73.516378",
        "Latitude": "45.577878",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10510",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "19623",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292531.714",
        "Y": "5048320.525",
        "Longitude": "-73.657191",
        "Latitude": "45.574685",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "13551",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "27067",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299544.674",
        "Y": "5042384.352",
        "Longitude": "-73.567272",
        "Latitude": "45.521358",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16552",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "34560",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298772.607",
        "Y": "5043387.769",
        "Longitude": "-73.577167",
        "Latitude": "45.530381",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16564",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "34598",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298725.707",
        "Y": "5043419.072",
        "Longitude": "-73.577768",
        "Latitude": "45.530662",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16575",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "34620",
        "PANNEAU_ID_RPA": "1572",
        "DESCRIPTION_RPA": "\\P RESERVE TITULAIRES DE PERMIS",
        "CODE_RPA": "R-DP",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298717.112",
        "Y": "5043399.45",
        "Longitude": "-73.577878",
        "Latitude": "45.530485",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16664",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "34806",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "302652.979",
        "Y": "5050306.117",
        "Longitude": "-73.527518",
        "Latitude": "45.592657",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "19720",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "41219",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294223.719",
        "Y": "5045383.5",
        "Longitude": "-73.635448",
        "Latitude": "45.548285",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10715",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20139",
        "PANNEAU_ID_RPA": "2291",
        "DESCRIPTION_RPA": "\\P 20h-21h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301156.396",
        "Y": "5043684.597",
        "Longitude": "-73.54665",
        "Latitude": "45.533068",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10828",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20437",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300292.863",
        "Y": "5043160.227",
        "Longitude": "-73.557702",
        "Latitude": "45.528345",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10863",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20504",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299118.459",
        "Y": "5044678.803",
        "Longitude": "-73.572754",
        "Latitude": "45.542001",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16689",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "34847",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298647.892",
        "Y": "5043208.031",
        "Longitude": "-73.578762",
        "Latitude": "45.528762",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "19987",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "41635",
        "PANNEAU_ID_RPA": "2164",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "302825.633",
        "Y": "5051461.628",
        "Longitude": "-73.52531",
        "Latitude": "45.603055",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "19992",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "41657",
        "PANNEAU_ID_RPA": "2538",
        "DESCRIPTION_RPA": "\\P 09h-10h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "303033.408",
        "Y": "5051630.274",
        "Longitude": "-73.522647",
        "Latitude": "45.604573",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20049",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "41742",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "303440.644",
        "Y": "5051459.088",
        "Longitude": "-73.517426",
        "Latitude": "45.603034",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10896",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20566",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296554.304",
        "Y": "5046894.427",
        "Longitude": "-73.605627",
        "Latitude": "45.561912",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10902",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20577",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296630.964",
        "Y": "5046847.533",
        "Longitude": "-73.604644",
        "Latitude": "45.561491",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10951",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20648",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "294229.26",
        "Y": "5048425.585",
        "Longitude": "-73.635443",
        "Latitude": "45.575658",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10955",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20654",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294239.875",
        "Y": "5048390.202",
        "Longitude": "-73.635307",
        "Latitude": "45.57534",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "10991",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20704",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "295302.4",
        "Y": "5047678.5",
        "Longitude": "-73.621679",
        "Latitude": "45.568951",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "13991",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "28125",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "299612.286",
        "Y": "5041778.503",
        "Longitude": "-73.5664",
        "Latitude": "45.515907",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14038",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "28214",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299440.284",
        "Y": "5042555.768",
        "Longitude": "-73.56861",
        "Latitude": "45.522899",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14045",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "28221",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299515.244",
        "Y": "5042504.633",
        "Longitude": "-73.56765",
        "Latitude": "45.52244",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "16910",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "35394",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298050.574",
        "Y": "5043421.212",
        "Longitude": "-73.586412",
        "Latitude": "45.530675",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20134",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "41887",
        "PANNEAU_ID_RPA": "1390",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU SAM.",
        "CODE_RPA": "PS-JN",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "303329.506",
        "Y": "5051267.489",
        "Longitude": "-73.51885",
        "Latitude": "45.601309",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20169",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "41942",
        "PANNEAU_ID_RPA": "2229",
        "DESCRIPTION_RPA": "\\P 14h-15h MAR. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-MT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296966.118",
        "Y": "5044142.632",
        "Longitude": "-73.600307",
        "Latitude": "45.537155",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20237",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "42054",
        "PANNEAU_ID_RPA": "2584",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "303915.953",
        "Y": "5052315.641",
        "Longitude": "-73.511334",
        "Latitude": "45.610742",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11079",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "20941",
        "PANNEAU_ID_RPA": "1388",
        "DESCRIPTION_RPA": "P 02h 09h-16h LUN. AU SAM.",
        "CODE_RPA": "PS-JL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296591.958",
        "Y": "5045562.869",
        "Longitude": "-73.605122",
        "Latitude": "45.549931",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11079",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "20940",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296591.958",
        "Y": "5045562.869",
        "Longitude": "-73.605122",
        "Latitude": "45.549931",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11088",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "20963",
        "PANNEAU_ID_RPA": "1387",
        "DESCRIPTION_RPA": "P 02h 09h30-18h LUN. AU SAM.",
        "CODE_RPA": "PS-JK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296543.589",
        "Y": "5045523.495",
        "Longitude": "-73.605741",
        "Latitude": "45.549576",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11088",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20962",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296543.589",
        "Y": "5045523.495",
        "Longitude": "-73.605741",
        "Latitude": "45.549576",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11102",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "20996",
        "PANNEAU_ID_RPA": "1387",
        "DESCRIPTION_RPA": "P 02h 09h30-18h LUN. AU SAM.",
        "CODE_RPA": "PS-JK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296448.461",
        "Y": "5045372.19",
        "Longitude": "-73.606956",
        "Latitude": "45.548213",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11102",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "20995",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296448.461",
        "Y": "5045372.19",
        "Longitude": "-73.606956",
        "Latitude": "45.548213",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11154",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "21118",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298709.087",
        "Y": "5044835.388",
        "Longitude": "-73.577998",
        "Latitude": "45.543406",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14115",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "28422",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298624.162",
        "Y": "5042954.457",
        "Longitude": "-73.579062",
        "Latitude": "45.52648",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17107",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "35966",
        "PANNEAU_ID_RPA": "2176",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298382.428",
        "Y": "5043934.161",
        "Longitude": "-73.58217",
        "Latitude": "45.535294",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20424",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "42422",
        "PANNEAU_ID_RPA": "2176",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295045.6",
        "Y": "5043020.5",
        "Longitude": "-73.624876",
        "Latitude": "45.527034",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11289",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "21373",
        "PANNEAU_ID_RPA": "204",
        "DESCRIPTION_RPA": "\\P 10h-22h CLIGNOTANT 22h-10h FIXE",
        "CODE_RPA": "EU-TG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-01-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301479.004",
        "Y": "5045411.294",
        "Longitude": "-73.542532",
        "Latitude": "45.548607",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11294",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "21387",
        "PANNEAU_ID_RPA": "2692",
        "DESCRIPTION_RPA": "\\P 08h-09h30 LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "301474.261",
        "Y": "5045375.241",
        "Longitude": "-73.542592",
        "Latitude": "45.548283",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11356",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "21487",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-01-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293365.933",
        "Y": "5048561.078",
        "Longitude": "-73.646508",
        "Latitude": "45.576864",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14290",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "28985",
        "PANNEAU_ID_RPA": "2318",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299928.452",
        "Y": "5042608.493",
        "Longitude": "-73.562361",
        "Latitude": "45.523377",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14305",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "29010",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298729.914",
        "Y": "5042476.941",
        "Longitude": "-73.577703",
        "Latitude": "45.522184",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14414",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "29284",
        "PANNEAU_ID_RPA": "2321",
        "DESCRIPTION_RPA": "\\P 11h-12h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "299240.394",
        "Y": "5042338.187",
        "Longitude": "-73.571166",
        "Latitude": "45.52094",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17294",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "36280",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298430.706",
        "Y": "5042055.32",
        "Longitude": "-73.581527",
        "Latitude": "45.518388",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20463",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "42516",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295077.591",
        "Y": "5045339.067",
        "Longitude": "-73.624512",
        "Latitude": "45.547897",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20475",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "42527",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295125.126",
        "Y": "5045339.157",
        "Longitude": "-73.623903",
        "Latitude": "45.547899",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20610",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "42731",
        "PANNEAU_ID_RPA": "2665",
        "DESCRIPTION_RPA": "\\P 09h-10h VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "303813.658",
        "Y": "5052109.141",
        "Longitude": "-73.512645",
        "Latitude": "45.608884",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11466",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "21702",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-01-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298887.712",
        "Y": "5043523.212",
        "Longitude": "-73.575695",
        "Latitude": "45.5316",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11542",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "21907",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300658.874",
        "Y": "5041240.881",
        "Longitude": "-73.553",
        "Latitude": "45.511076",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11637",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22102",
        "PANNEAU_ID_RPA": "2338",
        "DESCRIPTION_RPA": "\\P 08h-18h MAR. MER. VEN. SAM. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SC-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-01-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300141.935",
        "Y": "5041177.985",
        "Longitude": "-73.559615",
        "Latitude": "45.510507",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14458",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "29398",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299598.684",
        "Y": "5041690.225",
        "Longitude": "-73.566573",
        "Latitude": "45.515112",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17608",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "36938",
        "PANNEAU_ID_RPA": "1512",
        "DESCRIPTION_RPA": "PANONCEAU DEBAR. SEULEMENT",
        "CODE_RPA": "PX-PD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297745.724",
        "Y": "5041908.796",
        "Longitude": "-73.590293",
        "Latitude": "45.517063",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17608",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "36937",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297745.724",
        "Y": "5041908.796",
        "Longitude": "-73.590293",
        "Latitude": "45.517063",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17630",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "36983",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297660.9",
        "Y": "5041966",
        "Longitude": "-73.591379",
        "Latitude": "45.517576",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17630",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "36982",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297660.9",
        "Y": "5041966",
        "Longitude": "-73.591379",
        "Latitude": "45.517576",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17630",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "36981",
        "PANNEAU_ID_RPA": "39",
        "DESCRIPTION_RPA": "\\A 06h30-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-DC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297660.9",
        "Y": "5041966",
        "Longitude": "-73.591379",
        "Latitude": "45.517576",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17673",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "37091",
        "PANNEAU_ID_RPA": "1613",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 16h-20h LUNDI AU SAMEDI",
        "CODE_RPA": "R-PZ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297912.736",
        "Y": "5042424.126",
        "Longitude": "-73.588162",
        "Latitude": "45.521701",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20711",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "42924",
        "PANNEAU_ID_RPA": "2435",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-12h LUN. AU VEN.",
        "CODE_RPA": "SL-AN",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295921.313",
        "Y": "5043667",
        "Longitude": "-73.613677",
        "Latitude": "45.532863",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20804",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "43068",
        "PANNEAU_ID_RPA": "2587",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301419.938",
        "Y": "5052318.381",
        "Longitude": "-73.543336",
        "Latitude": "45.610759",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20831",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "43114",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295809.373",
        "Y": "5044212.668",
        "Longitude": "-73.61512",
        "Latitude": "45.537771",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20831",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "43113",
        "PANNEAU_ID_RPA": "1390",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU SAM.",
        "CODE_RPA": "PS-JN",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295809.373",
        "Y": "5044212.668",
        "Longitude": "-73.61512",
        "Latitude": "45.537771",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11710",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22283",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "4",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300313.748",
        "Y": "5041573.754",
        "Longitude": "-73.55742",
        "Latitude": "45.514069",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11719",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22304",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300257.601",
        "Y": "5041996.234",
        "Longitude": "-73.558142",
        "Latitude": "45.51787",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11738",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22341",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300468.28",
        "Y": "5041858.751",
        "Longitude": "-73.555444",
        "Latitude": "45.516634",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11805",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "22470",
        "PANNEAU_ID_RPA": "2168",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300314.663",
        "Y": "5042187.543",
        "Longitude": "-73.557414",
        "Latitude": "45.519592",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11805",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22469",
        "PANNEAU_ID_RPA": "2461",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT EN TOUT TEMPS",
        "CODE_RPA": "SL-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300314.663",
        "Y": "5042187.543",
        "Longitude": "-73.557414",
        "Latitude": "45.519592",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11807",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22473",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300475.975",
        "Y": "5041478.284",
        "Longitude": "-73.555343",
        "Latitude": "45.513211",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "11821",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "22501",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300384.881",
        "Y": "5041537.19",
        "Longitude": "-73.556509",
        "Latitude": "45.51374",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14666",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "29874",
        "PANNEAU_ID_RPA": "2682",
        "DESCRIPTION_RPA": "\\P 06h-07h LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299671.583",
        "Y": "5041785.534",
        "Longitude": "-73.565641",
        "Latitude": "45.51597",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14697",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "29923",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299435.697",
        "Y": "5041436.98",
        "Longitude": "-73.568656",
        "Latitude": "45.512832",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "14711",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "29958",
        "PANNEAU_ID_RPA": "1572",
        "DESCRIPTION_RPA": "\\P RESERVE TITULAIRES DE PERMIS",
        "CODE_RPA": "R-DP",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299547.22",
        "Y": "5041369",
        "Longitude": "-73.567228",
        "Latitude": "45.512221",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "17774",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "37336",
        "PANNEAU_ID_RPA": "2359",
        "DESCRIPTION_RPA": "\\P 09h-21h30",
        "CODE_RPA": "SD-JJ",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298242.19",
        "Y": "5042197.494",
        "Longitude": "-73.583942",
        "Latitude": "45.519665",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20982",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "43486",
        "PANNEAU_ID_RPA": "1586",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-21h",
        "CODE_RPA": "R-PD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297364.157",
        "Y": "5042132.277",
        "Longitude": "-73.59518",
        "Latitude": "45.51907",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "20982",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "43485",
        "PANNEAU_ID_RPA": "2167",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297364.157",
        "Y": "5042132.277",
        "Longitude": "-73.59518",
        "Latitude": "45.51907",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24041",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "49627",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294478.911",
        "Y": "5044835.418",
        "Longitude": "-73.632169",
        "Latitude": "45.543357",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24041",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49626",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294478.911",
        "Y": "5044835.418",
        "Longitude": "-73.632169",
        "Latitude": "45.543357",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24045",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49636",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "294102.458",
        "Y": "5035542.331",
        "Longitude": "-73.636787",
        "Latitude": "45.459728",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24132",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "49881",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299750.024",
        "Y": "5041016.34",
        "Longitude": "-73.564629",
        "Latitude": "45.509049",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24132",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "49880",
        "PANNEAU_ID_RPA": "1567",
        "DESCRIPTION_RPA": "\\P EXCEPTÃ‰ CORPS DIPLOMATIQUES",
        "CODE_RPA": "R-CD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299750.024",
        "Y": "5041016.34",
        "Longitude": "-73.564629",
        "Latitude": "45.509049",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24132",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "49879",
        "PANNEAU_ID_RPA": "2682",
        "DESCRIPTION_RPA": "\\P 06h-07h LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299750.024",
        "Y": "5041016.34",
        "Longitude": "-73.564629",
        "Latitude": "45.509049",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24132",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49878",
        "PANNEAU_ID_RPA": "3",
        "DESCRIPTION_RPA": "\\A 22h-07h",
        "CODE_RPA": "AD-NM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299750.024",
        "Y": "5041016.34",
        "Longitude": "-73.564629",
        "Latitude": "45.509049",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24134",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "49891",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299761.63",
        "Y": "5041035.672",
        "Longitude": "-73.564481",
        "Latitude": "45.509223",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24134",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49890",
        "PANNEAU_ID_RPA": "1567",
        "DESCRIPTION_RPA": "\\P EXCEPTÃ‰ CORPS DIPLOMATIQUES",
        "CODE_RPA": "R-CD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299761.63",
        "Y": "5041035.672",
        "Longitude": "-73.564481",
        "Latitude": "45.509223",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27039",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "56044",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "298674.353",
        "Y": "5043985.996",
        "Longitude": "-73.578433",
        "Latitude": "45.535763",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27092",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "56132",
        "PANNEAU_ID_RPA": "1482",
        "DESCRIPTION_RPA": "PANONCEAU DEBARCADERE RESERVE HANDICAPE",
        "CODE_RPA": "PX-HD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298860.435",
        "Y": "5047021.319",
        "Longitude": "-73.576087",
        "Latitude": "45.563077",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27092",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "56131",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298860.435",
        "Y": "5047021.319",
        "Longitude": "-73.576087",
        "Latitude": "45.563077",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30090",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61584",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300332.545",
        "Y": "5048058.08",
        "Longitude": "-73.557238",
        "Latitude": "45.572417",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30092",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "61589",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300341.553",
        "Y": "5048077.771",
        "Longitude": "-73.557123",
        "Latitude": "45.572595",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30092",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "61588",
        "PANNEAU_ID_RPA": "1683",
        "DESCRIPTION_RPA": "\\P RESERVE TAXIS",
        "CODE_RPA": "R-TA",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300341.553",
        "Y": "5048077.771",
        "Longitude": "-73.557123",
        "Latitude": "45.572595",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30092",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "61587",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300341.553",
        "Y": "5048077.771",
        "Longitude": "-73.557123",
        "Latitude": "45.572595",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30106",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61616",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300422.262",
        "Y": "5048016.386",
        "Longitude": "-73.556089",
        "Latitude": "45.572043",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30138",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61676",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300473.641",
        "Y": "5047993.153",
        "Longitude": "-73.55543",
        "Latitude": "45.571834",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30143",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61683",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300487.317",
        "Y": "5047985.423",
        "Longitude": "-73.555255",
        "Latitude": "45.571765",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30198",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "61781",
        "PANNEAU_ID_RPA": "1588",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-21h LUN. AU VEN.",
        "CODE_RPA": "R-PE",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299741.982",
        "Y": "5048440.656",
        "Longitude": "-73.564809",
        "Latitude": "45.575856",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30198",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61780",
        "PANNEAU_ID_RPA": "2666",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299741.982",
        "Y": "5048440.656",
        "Longitude": "-73.564809",
        "Latitude": "45.575856",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30199",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "61783",
        "PANNEAU_ID_RPA": "1588",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-21h LUN. AU VEN.",
        "CODE_RPA": "R-PE",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299759.79",
        "Y": "5048431.966",
        "Longitude": "-73.564581",
        "Latitude": "45.575778",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30199",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61782",
        "PANNEAU_ID_RPA": "2666",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299759.79",
        "Y": "5048431.966",
        "Longitude": "-73.564581",
        "Latitude": "45.575778",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30220",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61808",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293182.771",
        "Y": "5047362.822",
        "Longitude": "-73.648827",
        "Latitude": "45.566079",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33286",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "67817",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296737.078",
        "Y": "5044026.45",
        "Longitude": "-73.603238",
        "Latitude": "45.536107",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33298",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "67833",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296655.89",
        "Y": "5044079.135",
        "Longitude": "-73.604278",
        "Latitude": "45.53658",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33371",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "67961",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299639.695",
        "Y": "5048793.641",
        "Longitude": "-73.566123",
        "Latitude": "45.579031",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33380",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "67971",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300809.702",
        "Y": "5044608.937",
        "Longitude": "-73.551097",
        "Latitude": "45.541384",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33429",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68066",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300796.819",
        "Y": "5041022.49",
        "Longitude": "-73.551232",
        "Latitude": "45.509111",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24196",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50104",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299646.879",
        "Y": "5040849.034",
        "Longitude": "-73.565947",
        "Latitude": "45.507543",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24276",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "50272",
        "PANNEAU_ID_RPA": "2776",
        "DESCRIPTION_RPA": "\\P EXCEPTE 09h-16h LUNDI ET JEUDI",
        "CODE_RPA": "SX-JK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "303618.438",
        "Y": "5050060.5",
        "Longitude": "-73.515143",
        "Latitude": "45.590449",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24276",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50271",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "303618.438",
        "Y": "5050060.5",
        "Longitude": "-73.515143",
        "Latitude": "45.590449",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24348",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50426",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296107.303",
        "Y": "5043640.573",
        "Longitude": "-73.611295",
        "Latitude": "45.532627",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27245",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "56458",
        "PANNEAU_ID_RPA": "2536",
        "DESCRIPTION_RPA": "\\P 08h-09h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300771.892",
        "Y": "5042595.592",
        "Longitude": "-73.551564",
        "Latitude": "45.523267",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30332",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "62054",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293764.887",
        "Y": "5047042.612",
        "Longitude": "-73.641362",
        "Latitude": "45.563207",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30333",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62055",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300982.579",
        "Y": "5047755.43",
        "Longitude": "-73.548908",
        "Latitude": "45.569698",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30396",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62187",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293731.438",
        "Y": "5047030",
        "Longitude": "-73.64179",
        "Latitude": "45.563093",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33452",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68120",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293675.245",
        "Y": "5044053.293",
        "Longitude": "-73.642442",
        "Latitude": "45.536306",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33484",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68179",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299924.419",
        "Y": "5049492.708",
        "Longitude": "-73.562482",
        "Latitude": "45.585324",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33492",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68193",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299950.096",
        "Y": "5049566.735",
        "Longitude": "-73.562153",
        "Latitude": "45.58599",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33495",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "68202",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299982.063",
        "Y": "5049575",
        "Longitude": "-73.561744",
        "Latitude": "45.586065",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33495",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68201",
        "PANNEAU_ID_RPA": "1390",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU SAM.",
        "CODE_RPA": "PS-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299982.063",
        "Y": "5049575",
        "Longitude": "-73.561744",
        "Latitude": "45.586065",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33599",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68381",
        "PANNEAU_ID_RPA": "2320",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299817.124",
        "Y": "5040615.521",
        "Longitude": "-73.563766",
        "Latitude": "45.505443",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33617",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68425",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293758.33",
        "Y": "5044255.092",
        "Longitude": "-73.641383",
        "Latitude": "45.538124",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24389",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50500",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "304084.368",
        "Y": "5049840.522",
        "Longitude": "-73.509172",
        "Latitude": "45.58847",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24394",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50507",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "304098.835",
        "Y": "5049834.461",
        "Longitude": "-73.508986",
        "Latitude": "45.588416",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24415",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50554",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296167.054",
        "Y": "5043577.417",
        "Longitude": "-73.610529",
        "Latitude": "45.53206",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24422",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "50572",
        "PANNEAU_ID_RPA": "2287",
        "DESCRIPTION_RPA": "\\P 09h-16h LUN. JEU.",
        "CODE_RPA": "SB-RC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "304061.305",
        "Y": "5049851.863",
        "Longitude": "-73.509467",
        "Latitude": "45.588572",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24422",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50571",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "304061.305",
        "Y": "5049851.863",
        "Longitude": "-73.509467",
        "Latitude": "45.588572",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24479",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "50707",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296637.323",
        "Y": "5043877.936",
        "Longitude": "-73.604513",
        "Latitude": "45.53477",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24496",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50742",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296584.402",
        "Y": "5043912.989",
        "Longitude": "-73.605191",
        "Latitude": "45.535084",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27495",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "56985",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "302660.345",
        "Y": "5052129.543",
        "Longitude": "-73.527432",
        "Latitude": "45.609065",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30494",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62308",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294217.316",
        "Y": "5046762.344",
        "Longitude": "-73.63556",
        "Latitude": "45.560692",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30552",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "62376",
        "PANNEAU_ID_RPA": "1588",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-21h LUN. AU VEN.",
        "CODE_RPA": "R-PE",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299746.354",
        "Y": "5048531.195",
        "Longitude": "-73.564754",
        "Latitude": "45.576671",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30552",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62375",
        "PANNEAU_ID_RPA": "2666",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299746.354",
        "Y": "5048531.195",
        "Longitude": "-73.564754",
        "Latitude": "45.576671",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30583",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62432",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296235.539",
        "Y": "5044395.886",
        "Longitude": "-73.609666",
        "Latitude": "45.539425",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30588",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62439",
        "PANNEAU_ID_RPA": "1411",
        "DESCRIPTION_RPA": "P 15 min 07h-18h LUN. AU VEN.",
        "CODE_RPA": "PV-DB",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299894.75",
        "Y": "5048460",
        "Longitude": "-73.562852",
        "Latitude": "45.576031",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30599",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62452",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296239.5",
        "Y": "5044438",
        "Longitude": "-73.609616",
        "Latitude": "45.539804",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21650",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "44868",
        "PANNEAU_ID_RPA": "2350",
        "DESCRIPTION_RPA": "\\P 07h-19h",
        "CODE_RPA": "SD-JA",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294220.021",
        "Y": "5044236.091",
        "Longitude": "-73.635471",
        "Latitude": "45.53796",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21659",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "44880",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "8",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "295794.5",
        "Y": "5044123.5",
        "Longitude": "-73.615309",
        "Latitude": "45.536969",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21704",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "45004",
        "PANNEAU_ID_RPA": "2605",
        "DESCRIPTION_RPA": "\\P 10h-11h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295880.771",
        "Y": "5044084.366",
        "Longitude": "-73.614203",
        "Latitude": "45.536618",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21704",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "45003",
        "PANNEAU_ID_RPA": "9488",
        "DESCRIPTION_RPA": "PANONCEAU - EXCEPTE VEHICULES MUNIS D'UN PERMIS",
        "CODE_RPA": "PX-PR",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295880.771",
        "Y": "5044084.366",
        "Longitude": "-73.614203",
        "Latitude": "45.536618",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "21704",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "45002",
        "PANNEAU_ID_RPA": "1381",
        "DESCRIPTION_RPA": "P 60 min 08h-19h LUN. AU SAM.",
        "CODE_RPA": "PS-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295880.771",
        "Y": "5044084.366",
        "Longitude": "-73.614203",
        "Latitude": "45.536618",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24591",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "50962",
        "PANNEAU_ID_RPA": "1513",
        "DESCRIPTION_RPA": "PANONCEAU FLECHE A GAUCHE",
        "CODE_RPA": "PX-PF",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295071.619",
        "Y": "5036238.028",
        "Longitude": "-73.624408",
        "Latitude": "45.466002",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24591",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50961",
        "PANNEAU_ID_RPA": "2434",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 09h-13h LUN. AU SAM.",
        "CODE_RPA": "SL-AM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295071.619",
        "Y": "5036238.028",
        "Longitude": "-73.624408",
        "Latitude": "45.466002",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24612",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50985",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294467.1",
        "Y": "5045377.971",
        "Longitude": "-73.632331",
        "Latitude": "45.548239",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24618",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "50997",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "295176.81",
        "Y": "5036306.655",
        "Longitude": "-73.623064",
        "Latitude": "45.466621",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24665",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "51109",
        "PANNEAU_ID_RPA": "1516",
        "DESCRIPTION_RPA": "PANONCEAU LIVRAISON SEULEMENT",
        "CODE_RPA": "PX-PL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294813.34",
        "Y": "5044927.5",
        "Longitude": "-73.627888",
        "Latitude": "45.54419",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24665",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51108",
        "PANNEAU_ID_RPA": "2722",
        "DESCRIPTION_RPA": "\\P 09h30-16h LUN. AU VEN.",
        "CODE_RPA": "SV-JQ",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294813.34",
        "Y": "5044927.5",
        "Longitude": "-73.627888",
        "Latitude": "45.54419",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24705",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51211",
        "PANNEAU_ID_RPA": "2609",
        "DESCRIPTION_RPA": "\\P 12h-13h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293886",
        "Y": "5044434.5",
        "Longitude": "-73.639752",
        "Latitude": "45.53974",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24717",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "51241",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "2002-11-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294986.29",
        "Y": "5044873.042",
        "Longitude": "-73.625672",
        "Latitude": "45.543703",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24717",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51240",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "2002-11-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294986.29",
        "Y": "5044873.042",
        "Longitude": "-73.625672",
        "Latitude": "45.543703",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24720",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "51245",
        "PANNEAU_ID_RPA": "1683",
        "DESCRIPTION_RPA": "\\P RESERVE TAXIS",
        "CODE_RPA": "R-TA",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294535.2",
        "Y": "5042947",
        "Longitude": "-73.631408",
        "Latitude": "45.526365",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24720",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51244",
        "PANNEAU_ID_RPA": "2333",
        "DESCRIPTION_RPA": "\\P 07h30-08h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VV",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294535.2",
        "Y": "5042947",
        "Longitude": "-73.631408",
        "Latitude": "45.526365",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27623",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57211",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298406.505",
        "Y": "5047445.1",
        "Longitude": "-73.581907",
        "Latitude": "45.566887",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27625",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57213",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298413.978",
        "Y": "5047442.03",
        "Longitude": "-73.581812",
        "Latitude": "45.566859",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27695",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57364",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296567.303",
        "Y": "5045452.598",
        "Longitude": "-73.605436",
        "Latitude": "45.548938",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27703",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57367",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296666.588",
        "Y": "5045390.102",
        "Longitude": "-73.604163",
        "Latitude": "45.548377",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27708",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "57371",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293851.783",
        "Y": "5047814.836",
        "Longitude": "-73.640266",
        "Latitude": "45.570157",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27708",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57370",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293851.783",
        "Y": "5047814.836",
        "Longitude": "-73.640266",
        "Latitude": "45.570157",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27709",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "57373",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293867.224",
        "Y": "5047840.819",
        "Longitude": "-73.640069",
        "Latitude": "45.570391",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27709",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57372",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293867.224",
        "Y": "5047840.819",
        "Longitude": "-73.640069",
        "Latitude": "45.570391",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30614",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62491",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296292.131",
        "Y": "5044518.278",
        "Longitude": "-73.608944",
        "Latitude": "45.540527",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30630",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62517",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296365.723",
        "Y": "5044633.199",
        "Longitude": "-73.608003",
        "Latitude": "45.541562",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30636",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62524",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296384.57",
        "Y": "5044663.372",
        "Longitude": "-73.607763",
        "Latitude": "45.541834",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30640",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62534",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296416.912",
        "Y": "5044713.977",
        "Longitude": "-73.607349",
        "Latitude": "45.54229",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30678",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62610",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297171.616",
        "Y": "5045924.944",
        "Longitude": "-73.597704",
        "Latitude": "45.553195",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30683",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62620",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297202.333",
        "Y": "5045943.945",
        "Longitude": "-73.597311",
        "Latitude": "45.553367",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30777",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62811",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295853.23",
        "Y": "5043382.778",
        "Longitude": "-73.614543",
        "Latitude": "45.530304",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30785",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "62830",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298307.682",
        "Y": "5047776.182",
        "Longitude": "-73.583178",
        "Latitude": "45.569865",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24745",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51294",
        "PANNEAU_ID_RPA": "2317",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294548.717",
        "Y": "5042979.409",
        "Longitude": "-73.631236",
        "Latitude": "45.526657",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24753",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51310",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295474.789",
        "Y": "5036534.877",
        "Longitude": "-73.619258",
        "Latitude": "45.468679",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24866",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51557",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297240.803",
        "Y": "5043698.866",
        "Longitude": "-73.596783",
        "Latitude": "45.533165",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27725",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "57404",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293917.729",
        "Y": "5047895.184",
        "Longitude": "-73.639423",
        "Latitude": "45.570881",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27725",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57403",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293917.729",
        "Y": "5047895.184",
        "Longitude": "-73.639423",
        "Latitude": "45.570881",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27791",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "57550",
        "PANNEAU_ID_RPA": "2586",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ME",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299202.27",
        "Y": "5047107.368",
        "Longitude": "-73.571709",
        "Latitude": "45.563854",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27791",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57549",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299202.27",
        "Y": "5047107.368",
        "Longitude": "-73.571709",
        "Latitude": "45.563854",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27912",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "57786",
        "PANNEAU_ID_RPA": "1383",
        "DESCRIPTION_RPA": "P 60 min 09h-16h LUN. AU SAM.",
        "CODE_RPA": "PS-JG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296752.016",
        "Y": "5047359.472",
        "Longitude": "-73.603102",
        "Latitude": "45.566099",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27912",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "57785",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296752.016",
        "Y": "5047359.472",
        "Longitude": "-73.603102",
        "Latitude": "45.566099",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30913",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "63143",
        "PANNEAU_ID_RPA": "2451",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 09h30-16h LUN. AU VEN.",
        "CODE_RPA": "SL-JQ",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298512.356",
        "Y": "5048111.295",
        "Longitude": "-73.58056",
        "Latitude": "45.572882",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22131",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "45900",
        "PANNEAU_ID_RPA": "9428",
        "DESCRIPTION_RPA": "\\P EXCEPTE S3R 9h-23h LUN A VEN",
        "CODE_RPA": "R-RY",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296745.904",
        "Y": "5042624.715",
        "Longitude": "-73.603102",
        "Latitude": "45.523494",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22131",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "45899",
        "PANNEAU_ID_RPA": "2321",
        "DESCRIPTION_RPA": "\\P 11h-12h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296745.904",
        "Y": "5042624.715",
        "Longitude": "-73.603102",
        "Latitude": "45.523494",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "24976",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "51788",
        "PANNEAU_ID_RPA": "2315",
        "DESCRIPTION_RPA": "\\P 08h-09h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295828.98",
        "Y": "5044614.137",
        "Longitude": "-73.614876",
        "Latitude": "45.541384",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "27952",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "57885",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298532.193",
        "Y": "5047549.2",
        "Longitude": "-73.580298",
        "Latitude": "45.567824",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28024",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58028",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "296320.175",
        "Y": "5046771.855",
        "Longitude": "-73.608624",
        "Latitude": "45.560806",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28037",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58050",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "296236.694",
        "Y": "5046679.246",
        "Longitude": "-73.609691",
        "Latitude": "45.559972",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28052",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "58079",
        "PANNEAU_ID_RPA": "2771",
        "DESCRIPTION_RPA": "\\P EXCEPTE 09h-17h LUN. ET JEU.",
        "CODE_RPA": "SX-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301095.54",
        "Y": "5043235.864",
        "Longitude": "-73.547426",
        "Latitude": "45.52903",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28069",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58113",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298886.557",
        "Y": "5047391.995",
        "Longitude": "-73.575757",
        "Latitude": "45.566413",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28102",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58190",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298151.228",
        "Y": "5044681.974",
        "Longitude": "-73.58514",
        "Latitude": "45.542021",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31074",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "63492",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "301129.935",
        "Y": "5045266.93",
        "Longitude": "-73.547001",
        "Latitude": "45.547306",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31075",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "63493",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "301123.642",
        "Y": "5045269.35",
        "Longitude": "-73.547082",
        "Latitude": "45.547328",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31145",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "63654",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298896.16",
        "Y": "5048709",
        "Longitude": "-73.57565",
        "Latitude": "45.578264",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22150",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "45966",
        "PANNEAU_ID_RPA": "1628",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 9h-23h LUN A SAM",
        "CODE_RPA": "R-QM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297059.39",
        "Y": "5042425.366",
        "Longitude": "-73.599086",
        "Latitude": "45.521704",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22150",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "45965",
        "PANNEAU_ID_RPA": "2319",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297059.39",
        "Y": "5042425.366",
        "Longitude": "-73.599086",
        "Latitude": "45.521704",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22153",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "45984",
        "PANNEAU_ID_RPA": "2319",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297104.723",
        "Y": "5042397.233",
        "Longitude": "-73.598505",
        "Latitude": "45.521451",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25147",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "52197",
        "PANNEAU_ID_RPA": "2683",
        "DESCRIPTION_RPA": "\\P 06h30-07h30 LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298917.183",
        "Y": "5040343.005",
        "Longitude": "-73.57528",
        "Latitude": "45.502984",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25147",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "52196",
        "PANNEAU_ID_RPA": "1512",
        "DESCRIPTION_RPA": "PANONCEAU DEBAR. SEULEMENT",
        "CODE_RPA": "PX-PD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298917.183",
        "Y": "5040343.005",
        "Longitude": "-73.57528",
        "Latitude": "45.502984",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25147",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "52195",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298917.183",
        "Y": "5040343.005",
        "Longitude": "-73.57528",
        "Latitude": "45.502984",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25192",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "52262",
        "PANNEAU_ID_RPA": "1512",
        "DESCRIPTION_RPA": "PANONCEAU DEBAR. SEULEMENT",
        "CODE_RPA": "PX-PD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299043.465",
        "Y": "5040523.032",
        "Longitude": "-73.573666",
        "Latitude": "45.504605",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25192",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "52261",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299043.465",
        "Y": "5040523.032",
        "Longitude": "-73.573666",
        "Latitude": "45.504605",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28138",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "58244",
        "PANNEAU_ID_RPA": "1610",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h30-21h00 LUNDI AU VENDREDI",
        "CODE_RPA": "R-PX",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300443.799",
        "Y": "5043139.955",
        "Longitude": "-73.555769",
        "Latitude": "45.528163",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28138",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58243",
        "PANNEAU_ID_RPA": "2707",
        "DESCRIPTION_RPA": "\\P 08h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-JB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300443.799",
        "Y": "5043139.955",
        "Longitude": "-73.555769",
        "Latitude": "45.528163",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28287",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58543",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298608.713",
        "Y": "5047609.336",
        "Longitude": "-73.579319",
        "Latitude": "45.568366",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22378",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "46489",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297308.341",
        "Y": "5044048.742",
        "Longitude": "-73.595924",
        "Latitude": "45.536314",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22382",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "46495",
        "PANNEAU_ID_RPA": "2592",
        "DESCRIPTION_RPA": "\\P 13h-14h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ML",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300367.056",
        "Y": "5049014.772",
        "Longitude": "-73.556805",
        "Latitude": "45.581026",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22494",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "46677",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297392.077",
        "Y": "5042340.198",
        "Longitude": "-73.594826",
        "Latitude": "45.520941",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25372",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "52722",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299350.55",
        "Y": "5041363.923",
        "Longitude": "-73.569745",
        "Latitude": "45.512174",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25372",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "52721",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299350.55",
        "Y": "5041363.923",
        "Longitude": "-73.569745",
        "Latitude": "45.512174",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25372",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "52720",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299350.55",
        "Y": "5041363.923",
        "Longitude": "-73.569745",
        "Latitude": "45.512174",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25372",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "52719",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299350.55",
        "Y": "5041363.923",
        "Longitude": "-73.569745",
        "Latitude": "45.512174",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25449",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "52908",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299679.452",
        "Y": "5042708.613",
        "Longitude": "-73.56555",
        "Latitude": "45.524277",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25450",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "52909",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299681.959",
        "Y": "5042717.464",
        "Longitude": "-73.565518",
        "Latitude": "45.524356",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25475",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "52956",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-25 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299746.247",
        "Y": "5042785.781",
        "Longitude": "-73.564696",
        "Latitude": "45.524971",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28354",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58702",
        "PANNEAU_ID_RPA": "2591",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298540.12",
        "Y": "5047720.687",
        "Longitude": "-73.580199",
        "Latitude": "45.569368",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28369",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58726",
        "PANNEAU_ID_RPA": "2591",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298599.607",
        "Y": "5047694.194",
        "Longitude": "-73.579437",
        "Latitude": "45.56913",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28461",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "58877",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301225.688",
        "Y": "5043081.5",
        "Longitude": "-73.545759",
        "Latitude": "45.527642",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28471",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "58897",
        "PANNEAU_ID_RPA": "2591",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298672.324",
        "Y": "5047662.031",
        "Longitude": "-73.578505",
        "Latitude": "45.568841",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31348",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "64057",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300346.262",
        "Y": "5041534.37",
        "Longitude": "-73.557003",
        "Latitude": "45.513715",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31348",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "64056",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300346.262",
        "Y": "5041534.37",
        "Longitude": "-73.557003",
        "Latitude": "45.513715",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31348",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "64055",
        "PANNEAU_ID_RPA": "54",
        "DESCRIPTION_RPA": "\\A 15h30-17h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300346.262",
        "Y": "5041534.37",
        "Longitude": "-73.557003",
        "Latitude": "45.513715",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22523",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "46730",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297448.925",
        "Y": "5042395.503",
        "Longitude": "-73.594099",
        "Latitude": "45.521439",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22542",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "46768",
        "PANNEAU_ID_RPA": "2603",
        "DESCRIPTION_RPA": "\\P 09h-10h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300679.89",
        "Y": "5048478.93",
        "Longitude": "-73.552792",
        "Latitude": "45.576206",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22682",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47032",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293934.39",
        "Y": "5044246.512",
        "Longitude": "-73.639129",
        "Latitude": "45.538049",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25634",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "53331",
        "PANNEAU_ID_RPA": "2174",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293317.474",
        "Y": "5043594.609",
        "Longitude": "-73.647013",
        "Latitude": "45.532173",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25639",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "53340",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297064.429",
        "Y": "5043406.05",
        "Longitude": "-73.599037",
        "Latitude": "45.530528",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28600",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "59118",
        "PANNEAU_ID_RPA": "2591",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298830.263",
        "Y": "5047592.055",
        "Longitude": "-73.57648",
        "Latitude": "45.568213",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28611",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "59129",
        "PANNEAU_ID_RPA": "2350",
        "DESCRIPTION_RPA": "\\P 07h-19h",
        "CODE_RPA": "SD-JA",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-07 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301674.621",
        "Y": "5046089.369",
        "Longitude": "-73.540031",
        "Latitude": "45.55471",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31657",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "64575",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301640.118",
        "Y": "5049896.927",
        "Longitude": "-73.540497",
        "Latitude": "45.588971",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31755",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "64746",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301457.195",
        "Y": "5050048.812",
        "Longitude": "-73.542843",
        "Latitude": "45.590337",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22695",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47061",
        "PANNEAU_ID_RPA": "2562",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293991.007",
        "Y": "5044390.145",
        "Longitude": "-73.638407",
        "Latitude": "45.539343",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22764",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47189",
        "PANNEAU_ID_RPA": "2591",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302177.818",
        "Y": "5047766.431",
        "Longitude": "-73.533595",
        "Latitude": "45.569802",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22792",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47227",
        "PANNEAU_ID_RPA": "2468",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU SAM.",
        "CODE_RPA": "SS-JD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294213.753",
        "Y": "5044900.725",
        "Longitude": "-73.635566",
        "Latitude": "45.54394",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25669",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "53403",
        "PANNEAU_ID_RPA": "2708",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295447.116",
        "Y": "5044126.24",
        "Longitude": "-73.619757",
        "Latitude": "45.536989",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25717",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "53496",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "303147.944",
        "Y": "5050515.087",
        "Longitude": "-73.521175",
        "Latitude": "45.594539",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25736",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "53570",
        "PANNEAU_ID_RPA": "2585",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "303214.665",
        "Y": "5050687.693",
        "Longitude": "-73.52032",
        "Latitude": "45.596092",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "28859",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "59621",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298517.528",
        "Y": "5048085.652",
        "Longitude": "-73.580493",
        "Latitude": "45.572651",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31760",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "64756",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301526.498",
        "Y": "5050013.888",
        "Longitude": "-73.541954",
        "Latitude": "45.590023",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22941",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47488",
        "PANNEAU_ID_RPA": "2351",
        "DESCRIPTION_RPA": "\\P 08h-16h",
        "CODE_RPA": "SD-JB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294913.5",
        "Y": "5042980",
        "Longitude": "-73.626566",
        "Latitude": "45.526667",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "22977",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47574",
        "PANNEAU_ID_RPA": "2609",
        "DESCRIPTION_RPA": "\\P 12h-13h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293876.009",
        "Y": "5044384.185",
        "Longitude": "-73.639879",
        "Latitude": "45.539287",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23057",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47702",
        "PANNEAU_ID_RPA": "2733",
        "DESCRIPTION_RPA": "\\P 13h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301950.024",
        "Y": "5049636.512",
        "Longitude": "-73.536524",
        "Latitude": "45.586629",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "25929",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "53912",
        "PANNEAU_ID_RPA": "65",
        "DESCRIPTION_RPA": "\\A 08h-09h30  16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-QC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300213.464",
        "Y": "5044522.388",
        "Longitude": "-73.558731",
        "Latitude": "45.540601",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29045",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "59930",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298983.45",
        "Y": "5048001.644",
        "Longitude": "-73.574523",
        "Latitude": "45.5719",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29048",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "59933",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299011.272",
        "Y": "5047975.752",
        "Longitude": "-73.574166",
        "Latitude": "45.571667",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29053",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "59938",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299042.071",
        "Y": "5047976.182",
        "Longitude": "-73.573771",
        "Latitude": "45.571671",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29057",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "59947",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299096.32",
        "Y": "5047937.338",
        "Longitude": "-73.573076",
        "Latitude": "45.571322",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "31960",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65089",
        "PANNEAU_ID_RPA": "2586",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ME",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295850.277",
        "Y": "5048636.705",
        "Longitude": "-73.614677",
        "Latitude": "45.577581",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32005",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65199",
        "PANNEAU_ID_RPA": "2586",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ME",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296218.993",
        "Y": "5048404.713",
        "Longitude": "-73.609948",
        "Latitude": "45.575498",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32039",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65246",
        "PANNEAU_ID_RPA": "2667",
        "DESCRIPTION_RPA": "\\P 10h-11h VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296656.393",
        "Y": "5048142.818",
        "Longitude": "-73.60434",
        "Latitude": "45.573147",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32097",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65322",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298535.47",
        "Y": "5047071.5",
        "Longitude": "-73.58025",
        "Latitude": "45.563526",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32108",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65340",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298710.62",
        "Y": "5046994",
        "Longitude": "-73.578006",
        "Latitude": "45.56283",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23088",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47731",
        "PANNEAU_ID_RPA": "2733",
        "DESCRIPTION_RPA": "\\P 13h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301949.859",
        "Y": "5049636.732",
        "Longitude": "-73.536526",
        "Latitude": "45.586631",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23168",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47829",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294893.381",
        "Y": "5042972.239",
        "Longitude": "-73.626823",
        "Latitude": "45.526597",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23181",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "47868",
        "PANNEAU_ID_RPA": "2319",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294594.693",
        "Y": "5043410.561",
        "Longitude": "-73.630656",
        "Latitude": "45.530537",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32252",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65605",
        "PANNEAU_ID_RPA": "2540",
        "DESCRIPTION_RPA": "\\P 10h-11h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299076.318",
        "Y": "5046989.326",
        "Longitude": "-73.573321",
        "Latitude": "45.562791",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32268",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "65633",
        "PANNEAU_ID_RPA": "2358",
        "DESCRIPTION_RPA": "\\P 07h-17h",
        "CODE_RPA": "SD-JI",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294022.862",
        "Y": "5044472.843",
        "Longitude": "-73.638001",
        "Latitude": "45.540087",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32268",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "65632",
        "PANNEAU_ID_RPA": "1516",
        "DESCRIPTION_RPA": "PANONCEAU LIVRAISON SEULEMENT",
        "CODE_RPA": "PX-PL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294022.862",
        "Y": "5044472.843",
        "Longitude": "-73.638001",
        "Latitude": "45.540087",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32268",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65631",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294022.862",
        "Y": "5044472.843",
        "Longitude": "-73.638001",
        "Latitude": "45.540087",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32328",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "65803",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296064.445",
        "Y": "5043111.272",
        "Longitude": "-73.611834",
        "Latitude": "45.527864",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32328",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65802",
        "PANNEAU_ID_RPA": "2707",
        "DESCRIPTION_RPA": "\\P 08h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-JB",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296064.445",
        "Y": "5043111.272",
        "Longitude": "-73.611834",
        "Latitude": "45.527864",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23368",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "48185",
        "PANNEAU_ID_RPA": "2604",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ND",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294518.792",
        "Y": "5045427.926",
        "Longitude": "-73.63167",
        "Latitude": "45.548689",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23371",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "48186",
        "PANNEAU_ID_RPA": "2604",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ND",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294519.353",
        "Y": "5045427.826",
        "Longitude": "-73.631663",
        "Latitude": "45.548688",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23434",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "48312",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "303724.048",
        "Y": "5048801.691",
        "Longitude": "-73.513787",
        "Latitude": "45.579122",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23464",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "48385",
        "PANNEAU_ID_RPA": "2230",
        "DESCRIPTION_RPA": "\\P 07h-08h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-MU",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293654.715",
        "Y": "5034856.075",
        "Longitude": "-73.642496",
        "Latitude": "45.453546",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23464",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "48383",
        "PANNEAU_ID_RPA": "1390",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU SAM.",
        "CODE_RPA": "PS-JN",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293654.715",
        "Y": "5034856.075",
        "Longitude": "-73.642496",
        "Latitude": "45.453546",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26222",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54468",
        "PANNEAU_ID_RPA": "2566",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296148.322",
        "Y": "5046873.945",
        "Longitude": "-73.610827",
        "Latitude": "45.561723",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26263",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "54553",
        "PANNEAU_ID_RPA": "2584",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296204.352",
        "Y": "5047013.239",
        "Longitude": "-73.610112",
        "Latitude": "45.562977",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26276",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54581",
        "PANNEAU_ID_RPA": "2584",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296304.454",
        "Y": "5046949.903",
        "Longitude": "-73.608828",
        "Latitude": "45.562408",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26289",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54613",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296015.293",
        "Y": "5044096.387",
        "Longitude": "-73.612481",
        "Latitude": "45.536728",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26291",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54618",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296042.38",
        "Y": "5044104.488",
        "Longitude": "-73.612134",
        "Latitude": "45.536801",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26293",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54622",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296058.102",
        "Y": "5044127.83",
        "Longitude": "-73.611934",
        "Latitude": "45.537011",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26294",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54623",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296038.842",
        "Y": "5044126.45",
        "Longitude": "-73.61218",
        "Latitude": "45.536998",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26304",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54650",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296076.891",
        "Y": "5044152.953",
        "Longitude": "-73.611693",
        "Latitude": "45.537237",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26340",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54722",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296108.812",
        "Y": "5044201.697",
        "Longitude": "-73.611286",
        "Latitude": "45.537676",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26376",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54810",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296159.127",
        "Y": "5044315.918",
        "Longitude": "-73.610643",
        "Latitude": "45.538705",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26387",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "54825",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296188.549",
        "Y": "5044324.729",
        "Longitude": "-73.610267",
        "Latitude": "45.538785",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29297",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "60315",
        "PANNEAU_ID_RPA": "1506",
        "DESCRIPTION_RPA": "PANONCEAU 1 MAI AU 1 NOV.",
        "CODE_RPA": "PX-MN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300340.002",
        "Y": "5047356.852",
        "Longitude": "-73.557136",
        "Latitude": "45.566108",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29297",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "60314",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300340.002",
        "Y": "5047356.852",
        "Longitude": "-73.557136",
        "Latitude": "45.566108",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29303",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "60321",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301281.828",
        "Y": "5043222.243",
        "Longitude": "-73.545041",
        "Latitude": "45.528908",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29395",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "60470",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "302062.713",
        "Y": "5045496.032",
        "Longitude": "-73.535057",
        "Latitude": "45.549372",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29445",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "60528",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "302141.022",
        "Y": "5045685.11",
        "Longitude": "-73.534055",
        "Latitude": "45.551074",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32361",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "65895",
        "PANNEAU_ID_RPA": "1391",
        "DESCRIPTION_RPA": "P 60 min 09h30-16h LUN. AU SAM.",
        "CODE_RPA": "PS-JR",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296246.204",
        "Y": "5043391.139",
        "Longitude": "-73.609512",
        "Latitude": "45.530384",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32361",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65894",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296246.204",
        "Y": "5043391.139",
        "Longitude": "-73.609512",
        "Latitude": "45.530384",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32382",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "65935",
        "PANNEAU_ID_RPA": "1433",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU VEN.",
        "CODE_RPA": "PV-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296385.453",
        "Y": "5043478.697",
        "Longitude": "-73.607731",
        "Latitude": "45.531174",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32382",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "65934",
        "PANNEAU_ID_RPA": "28",
        "DESCRIPTION_RPA": "\\A 07h-09h LUN. AU VEN.",
        "CODE_RPA": "AV-AC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296385.453",
        "Y": "5043478.697",
        "Longitude": "-73.607731",
        "Latitude": "45.531174",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32389",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65951",
        "PANNEAU_ID_RPA": "1762",
        "DESCRIPTION_RPA": "\\P RESERVE DEBARCADERE HANDICAPES EN TOUT TEMPS",
        "CODE_RPA": "RD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297600.042",
        "Y": "5044219.259",
        "Longitude": "-73.592191",
        "Latitude": "45.537851",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32398",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "65969",
        "PANNEAU_ID_RPA": "2631",
        "DESCRIPTION_RPA": "\\P 19h30-20h30 VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-SJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297612.011",
        "Y": "5044260.883",
        "Longitude": "-73.592039",
        "Latitude": "45.538226",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32398",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65968",
        "PANNEAU_ID_RPA": "1702",
        "DESCRIPTION_RPA": "\\P RESERVE VEHICULES DU SERVICE DE LA POLICE",
        "CODE_RPA": "R-VP",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297612.011",
        "Y": "5044260.883",
        "Longitude": "-73.592039",
        "Latitude": "45.538226",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32408",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "65994",
        "PANNEAU_ID_RPA": "1433",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU VEN.",
        "CODE_RPA": "PV-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296461.98",
        "Y": "5043595.389",
        "Longitude": "-73.606753",
        "Latitude": "45.532225",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32408",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "65993",
        "PANNEAU_ID_RPA": "28",
        "DESCRIPTION_RPA": "\\A 07h-09h LUN. AU VEN.",
        "CODE_RPA": "AV-AC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296461.98",
        "Y": "5043595.389",
        "Longitude": "-73.606753",
        "Latitude": "45.532225",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32416",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "66005",
        "PANNEAU_ID_RPA": "1427",
        "DESCRIPTION_RPA": "P 60 min 09h-16h LUN. AU VEN.",
        "CODE_RPA": "PV-JG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296533.535",
        "Y": "5043677.727",
        "Longitude": "-73.605838",
        "Latitude": "45.532967",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32416",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "66004",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296533.535",
        "Y": "5043677.727",
        "Longitude": "-73.605838",
        "Latitude": "45.532967",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32419",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "66011",
        "PANNEAU_ID_RPA": "1433",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU VEN.",
        "CODE_RPA": "PV-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296551.978",
        "Y": "5043740.493",
        "Longitude": "-73.605603",
        "Latitude": "45.533532",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32419",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "66010",
        "PANNEAU_ID_RPA": "28",
        "DESCRIPTION_RPA": "\\A 07h-09h LUN. AU VEN.",
        "CODE_RPA": "AV-AC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296551.978",
        "Y": "5043740.493",
        "Longitude": "-73.605603",
        "Latitude": "45.533532",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32420",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "66017",
        "PANNEAU_ID_RPA": "1427",
        "DESCRIPTION_RPA": "P 60 min 09h-16h LUN. AU VEN.",
        "CODE_RPA": "PV-JG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296569.489",
        "Y": "5043735.262",
        "Longitude": "-73.605379",
        "Latitude": "45.533485",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32420",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "66016",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296569.489",
        "Y": "5043735.262",
        "Longitude": "-73.605379",
        "Latitude": "45.533485",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26452",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "54949",
        "PANNEAU_ID_RPA": "2173",
        "DESCRIPTION_RPA": "\\P 12h-13h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295068.559",
        "Y": "5049260.136",
        "Longitude": "-73.624706",
        "Latitude": "45.58318",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26483",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "55019",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296816.724",
        "Y": "5045302.794",
        "Longitude": "-73.602239",
        "Latitude": "45.547593",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26488",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "55027",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296780.539",
        "Y": "5045250.268",
        "Longitude": "-73.602702",
        "Latitude": "45.54712",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26490",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "55031",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296774.65",
        "Y": "5045241.828",
        "Longitude": "-73.602777",
        "Latitude": "45.547044",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26583",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "55232",
        "PANNEAU_ID_RPA": "2323",
        "DESCRIPTION_RPA": "\\P 12h-13h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295534.391",
        "Y": "5048934.734",
        "Longitude": "-73.61873",
        "Latitude": "45.580258",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29608",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "60801",
        "PANNEAU_ID_RPA": "1669",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-18h LUN A VEN",
        "CODE_RPA": "R-RX",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300929.831",
        "Y": "5043330.953",
        "Longitude": "-73.549548",
        "Latitude": "45.529885",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29608",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "60800",
        "PANNEAU_ID_RPA": "2174",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300929.831",
        "Y": "5043330.953",
        "Longitude": "-73.549548",
        "Latitude": "45.529885",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32540",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "66364",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299457.729",
        "Y": "5047414.967",
        "Longitude": "-73.56844",
        "Latitude": "45.566624",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32548",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "66368",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299518.065",
        "Y": "5047551.361",
        "Longitude": "-73.567668",
        "Latitude": "45.567852",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32600",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "66418",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299688.319",
        "Y": "5047822.247",
        "Longitude": "-73.56549",
        "Latitude": "45.570291",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23637",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "48753",
        "PANNEAU_ID_RPA": "2733",
        "DESCRIPTION_RPA": "\\P 13h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "302167.499",
        "Y": "5050696.534",
        "Longitude": "-73.533743",
        "Latitude": "45.596168",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23637",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "48752",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "302167.499",
        "Y": "5050696.534",
        "Longitude": "-73.533743",
        "Latitude": "45.596168",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23641",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "48781",
        "PANNEAU_ID_RPA": "2733",
        "DESCRIPTION_RPA": "\\P 13h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "302195.387",
        "Y": "5050684.623",
        "Longitude": "-73.533385",
        "Latitude": "45.596061",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23690",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "48897",
        "PANNEAU_ID_RPA": "1680",
        "DESCRIPTION_RPA": "\\P RESERVE SERVICE D'INCENDIE",
        "CODE_RPA": "R-SI",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "295783.573",
        "Y": "5043867.275",
        "Longitude": "-73.615444",
        "Latitude": "45.534663",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23722",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "48971",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295681.228",
        "Y": "5043926.211",
        "Longitude": "-73.616755",
        "Latitude": "45.535192",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23737",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "49005",
        "PANNEAU_ID_RPA": "1381",
        "DESCRIPTION_RPA": "P 60 min 08h-19h LUN. AU SAM.",
        "CODE_RPA": "PS-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295655.014",
        "Y": "5043919.93",
        "Longitude": "-73.617091",
        "Latitude": "45.535135",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23737",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49004",
        "PANNEAU_ID_RPA": "2540",
        "DESCRIPTION_RPA": "\\P 10h-11h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295655.014",
        "Y": "5043919.93",
        "Longitude": "-73.617091",
        "Latitude": "45.535135",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26645",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "55406",
        "PANNEAU_ID_RPA": "2173",
        "DESCRIPTION_RPA": "\\P 12h-13h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295752.501",
        "Y": "5048828.784",
        "Longitude": "-73.615933",
        "Latitude": "45.579308",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26666",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "55435",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "301674.976",
        "Y": "5049441.843",
        "Longitude": "-73.540048",
        "Latitude": "45.584876",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29728",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61050",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298935.874",
        "Y": "5044326.539",
        "Longitude": "-73.575088",
        "Latitude": "45.538829",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29776",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61110",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301981.673",
        "Y": "5046619.411",
        "Longitude": "-73.536101",
        "Latitude": "45.55948",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29822",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61180",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292615.921",
        "Y": "5047699.625",
        "Longitude": "-73.656097",
        "Latitude": "45.5691",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32803",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "66770",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300060.25",
        "Y": "5048647.5",
        "Longitude": "-73.560733",
        "Latitude": "45.577719",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23860",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49266",
        "PANNEAU_ID_RPA": "2733",
        "DESCRIPTION_RPA": "\\P 13h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "302684.463",
        "Y": "5050469.862",
        "Longitude": "-73.527115",
        "Latitude": "45.59413",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23883",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49304",
        "PANNEAU_ID_RPA": "2287",
        "DESCRIPTION_RPA": "\\P 09h-16h LUN. JEU.",
        "CODE_RPA": "SB-RC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "302989.362",
        "Y": "5050321.038",
        "Longitude": "-73.523207",
        "Latitude": "45.592792",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "23987",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "49505",
        "PANNEAU_ID_RPA": "1427",
        "DESCRIPTION_RPA": "P 60 min 09h-16h LUN. AU VEN.",
        "CODE_RPA": "PV-JG",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297168.977",
        "Y": "5042923.934",
        "Longitude": "-73.597691",
        "Latitude": "45.526191",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "26845",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "55695",
        "PANNEAU_ID_RPA": "2586",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ME",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296542.855",
        "Y": "5048293.222",
        "Longitude": "-73.605797",
        "Latitude": "45.574499",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29857",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61224",
        "PANNEAU_ID_RPA": "2221",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-MK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "299648.661",
        "Y": "5048425.115",
        "Longitude": "-73.566004",
        "Latitude": "45.575715",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29864",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61228",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292543.6",
        "Y": "5047774.382",
        "Longitude": "-73.657025",
        "Latitude": "45.569771",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29968",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61399",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292806.845",
        "Y": "5047618.137",
        "Longitude": "-73.653649",
        "Latitude": "45.56837",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29991",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61431",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292764.688",
        "Y": "5047643.66",
        "Longitude": "-73.65419",
        "Latitude": "45.568599",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "29994",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "61434",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292762.972",
        "Y": "5047642.789",
        "Longitude": "-73.654212",
        "Latitude": "45.568591",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30004",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61440",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292712.988",
        "Y": "5047674.343",
        "Longitude": "-73.654853",
        "Latitude": "45.568874",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "30020",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "61461",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-07 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "301992.173",
        "Y": "5044775.513",
        "Longitude": "-73.535956",
        "Latitude": "45.542888",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32944",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "67057",
        "PANNEAU_ID_RPA": "2271",
        "DESCRIPTION_RPA": "\\P 19h30-20h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-PK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293960.991",
        "Y": "5043858.374",
        "Longitude": "-73.638779",
        "Latitude": "45.534557",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32944",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "67056",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293960.991",
        "Y": "5043858.374",
        "Longitude": "-73.638779",
        "Latitude": "45.534557",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "32959",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "67082",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294002.917",
        "Y": "5043990.967",
        "Longitude": "-73.638246",
        "Latitude": "45.535751",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44966",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "91101",
        "PANNEAU_ID_RPA": "2573",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297870.43",
        "Y": "5055791.106",
        "Longitude": "-73.588894",
        "Latitude": "45.641981",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45029",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "91184",
        "PANNEAU_ID_RPA": "2685",
        "DESCRIPTION_RPA": "\\P 07h-08h LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299852.732",
        "Y": "5041842.049",
        "Longitude": "-73.563323",
        "Latitude": "45.51648",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45096",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "91285",
        "PANNEAU_ID_RPA": "1280",
        "DESCRIPTION_RPA": "P 03h",
        "CODE_RPA": "PD-TR",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-12 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "300746.99",
        "Y": "5041316.749",
        "Longitude": "-73.551873",
        "Latitude": "45.511759",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45096",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "91284",
        "PANNEAU_ID_RPA": "1696",
        "DESCRIPTION_RPA": "\\P RESERVE VEHICULES DE LA VILLE",
        "CODE_RPA": "R-VA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-12 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "300746.99",
        "Y": "5041316.749",
        "Longitude": "-73.551873",
        "Latitude": "45.511759",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45120",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "91341",
        "PANNEAU_ID_RPA": "1572",
        "DESCRIPTION_RPA": "\\P RESERVE TITULAIRES DE PERMIS",
        "CODE_RPA": "R-DP",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-12 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300670.969",
        "Y": "5041328",
        "Longitude": "-73.552846",
        "Latitude": "45.51186",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45128",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "91357",
        "PANNEAU_ID_RPA": "1572",
        "DESCRIPTION_RPA": "\\P RESERVE TITULAIRES DE PERMIS",
        "CODE_RPA": "R-DP",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-12 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300731.682",
        "Y": "5041301.327",
        "Longitude": "-73.552068",
        "Latitude": "45.51162",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35961",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73785",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293949.138",
        "Y": "5045050.759",
        "Longitude": "-73.638958",
        "Latitude": "45.545286",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35970",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73816",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293961.346",
        "Y": "5045056.73",
        "Longitude": "-73.638801",
        "Latitude": "45.54534",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35972",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73819",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293963.771",
        "Y": "5045061.3",
        "Longitude": "-73.63877",
        "Latitude": "45.545381",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36044",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "74012",
        "PANNEAU_ID_RPA": "1516",
        "DESCRIPTION_RPA": "PANONCEAU LIVRAISON SEULEMENT",
        "CODE_RPA": "PX-PL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297337.729",
        "Y": "5042763.919",
        "Longitude": "-73.595528",
        "Latitude": "45.524753",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36044",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74011",
        "PANNEAU_ID_RPA": "2742",
        "DESCRIPTION_RPA": "\\P 07h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-PK",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297337.729",
        "Y": "5042763.919",
        "Longitude": "-73.595528",
        "Latitude": "45.524753",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36076",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "74124",
        "PANNEAU_ID_RPA": "2723",
        "DESCRIPTION_RPA": "\\P 09h30-18h LUN. AU VEN.",
        "CODE_RPA": "SV-JS",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299447.286",
        "Y": "5040907.009",
        "Longitude": "-73.568502",
        "Latitude": "45.508063",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36076",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74123",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299447.286",
        "Y": "5040907.009",
        "Longitude": "-73.568502",
        "Latitude": "45.508063",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36102",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "74185",
        "PANNEAU_ID_RPA": "1593",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 15h-21h",
        "CODE_RPA": "R-PI",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299034.656",
        "Y": "5041838.619",
        "Longitude": "-73.573794",
        "Latitude": "45.516443",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39139",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79875",
        "PANNEAU_ID_RPA": "2223",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 MAR. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-MM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295665.737",
        "Y": "5044969.871",
        "Longitude": "-73.616973",
        "Latitude": "45.544583",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36146",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74306",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297870.678",
        "Y": "5041977.142",
        "Longitude": "-73.588694",
        "Latitude": "45.517679",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36153",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74319",
        "PANNEAU_ID_RPA": "56",
        "DESCRIPTION_RPA": "\\A 16h-18h LUN. AU VEN.",
        "CODE_RPA": "AV-PJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297886.638",
        "Y": "5041961.461",
        "Longitude": "-73.58849",
        "Latitude": "45.517538",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36172",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74360",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297867.337",
        "Y": "5041931.978",
        "Longitude": "-73.588737",
        "Latitude": "45.517272",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36176",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "74367",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299586.16",
        "Y": "5041313.5",
        "Longitude": "-73.566729",
        "Latitude": "45.511722",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36196",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "74395",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "291415.428",
        "Y": "5046271.557",
        "Longitude": "-73.671438",
        "Latitude": "45.556227",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36238",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "74529",
        "PANNEAU_ID_RPA": "67",
        "DESCRIPTION_RPA": "\\A 08h-09h30  16h-18h LUN. AU VEN.",
        "CODE_RPA": "AV-QE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299768.62",
        "Y": "5041939.5",
        "Longitude": "-73.564401",
        "Latitude": "45.517356",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39290",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80193",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299710.399",
        "Y": "5041166.784",
        "Longitude": "-73.565138",
        "Latitude": "45.510403",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39303",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80225",
        "PANNEAU_ID_RPA": "2762",
        "DESCRIPTION_RPA": "\\P 07h-09h LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-VA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299659.912",
        "Y": "5041201.468",
        "Longitude": "-73.565784",
        "Latitude": "45.510714",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39313",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80245",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300042.172",
        "Y": "5040966.715",
        "Longitude": "-73.56089",
        "Latitude": "45.508605",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39316",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80251",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300110.154",
        "Y": "5040922.381",
        "Longitude": "-73.560019",
        "Latitude": "45.508206",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42131",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "85592",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-03 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "294190.864",
        "Y": "5045413.234",
        "Longitude": "-73.63587",
        "Latitude": "45.548552",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42156",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "85633",
        "PANNEAU_ID_RPA": "2550",
        "DESCRIPTION_RPA": "\\P 14h30-15h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-03-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297612.819",
        "Y": "5055848.372",
        "Longitude": "-73.592199",
        "Latitude": "45.642494",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42239",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "85746",
        "PANNEAU_ID_RPA": "1669",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-18h LUN A VEN",
        "CODE_RPA": "R-RX",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-03 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294711.242",
        "Y": "5045188.863",
        "Longitude": "-73.629201",
        "Latitude": "45.54654",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42239",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "85745",
        "PANNEAU_ID_RPA": "2604",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ND",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-03 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294711.242",
        "Y": "5045188.863",
        "Longitude": "-73.629201",
        "Latitude": "45.54654",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42250",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "85758",
        "PANNEAU_ID_RPA": "2604",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-ND",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-03 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294786.689",
        "Y": "5045154.339",
        "Longitude": "-73.628234",
        "Latitude": "45.546231",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42261",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "85768",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "305939.843",
        "Y": "5062031.599",
        "Longitude": "-73.485363",
        "Latitude": "45.698168",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42265",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "85772",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "305953.849",
        "Y": "5062099.945",
        "Longitude": "-73.485183",
        "Latitude": "45.698783",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45320",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "91767",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": "Robin",
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299987.84",
        "Y": "5042014.866",
        "Longitude": "-73.561595",
        "Latitude": "45.518036",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45460",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "92066",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "284676.758",
        "Y": "5041044.762",
        "Longitude": "-73.757535",
        "Latitude": "45.509033",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36401",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74841",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297299.185",
        "Y": "5043350.535",
        "Longitude": "-73.59603",
        "Latitude": "45.530031",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36404",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74844",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297304.216",
        "Y": "5043349.685",
        "Longitude": "-73.595966",
        "Latitude": "45.530024",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36415",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74880",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297303.119",
        "Y": "5043350.155",
        "Longitude": "-73.59598",
        "Latitude": "45.530028",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36418",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74887",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297311.5",
        "Y": "5043349.495",
        "Longitude": "-73.595873",
        "Latitude": "45.530022",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36422",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74893",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297286.458",
        "Y": "5043335.714",
        "Longitude": "-73.596193",
        "Latitude": "45.529898",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36429",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "74910",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297310.436",
        "Y": "5043308.401",
        "Longitude": "-73.595886",
        "Latitude": "45.529652",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36429",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74909",
        "PANNEAU_ID_RPA": "1611",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-20h LUNDI AU SAMEDI",
        "CODE_RPA": "R-PY",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297310.436",
        "Y": "5043308.401",
        "Longitude": "-73.595886",
        "Latitude": "45.529652",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36452",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "74984",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299741.182",
        "Y": "5040618.941",
        "Longitude": "-73.564738",
        "Latitude": "45.505473",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39335",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "80294",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297710.801",
        "Y": "5043672.606",
        "Longitude": "-73.590765",
        "Latitude": "45.532934",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39339",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80301",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300205.414",
        "Y": "5040861.495",
        "Longitude": "-73.5588",
        "Latitude": "45.507659",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39357",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "80334",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297639.684",
        "Y": "5043700.099",
        "Longitude": "-73.591676",
        "Latitude": "45.53318",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39357",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80333",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297639.684",
        "Y": "5043700.099",
        "Longitude": "-73.591676",
        "Latitude": "45.53318",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39368",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "80358",
        "PANNEAU_ID_RPA": "2762",
        "DESCRIPTION_RPA": "\\P 07h-09h LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-VA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300062.1",
        "Y": "5040933.272",
        "Longitude": "-73.560634",
        "Latitude": "45.508304",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39368",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80357",
        "PANNEAU_ID_RPA": "2445",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 09h-17h LUN. AU VEN.",
        "CODE_RPA": "SL-JH",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300062.1",
        "Y": "5040933.272",
        "Longitude": "-73.560634",
        "Latitude": "45.508304",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42385",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "85994",
        "PANNEAU_ID_RPA": "1613",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 16h-20h LUNDI AU SAMEDI",
        "CODE_RPA": "R-PZ",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296662.629",
        "Y": "5043983.476",
        "Longitude": "-73.604191",
        "Latitude": "45.53572",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42385",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "85993",
        "PANNEAU_ID_RPA": "2164",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296662.629",
        "Y": "5043983.476",
        "Longitude": "-73.604191",
        "Latitude": "45.53572",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42385",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "85992",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296662.629",
        "Y": "5043983.476",
        "Longitude": "-73.604191",
        "Latitude": "45.53572",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42472",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86144",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "290866.594",
        "Y": "5044024.5",
        "Longitude": "-73.678404",
        "Latitude": "45.535997",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42473",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86145",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "290876.688",
        "Y": "5044020",
        "Longitude": "-73.678274",
        "Latitude": "45.535957",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42478",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86155",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "290954.512",
        "Y": "5043979.366",
        "Longitude": "-73.677277",
        "Latitude": "45.535592",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33622",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68430",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293773.688",
        "Y": "5044249.122",
        "Longitude": "-73.641186",
        "Latitude": "45.53807",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33628",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68436",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299862.325",
        "Y": "5040557.265",
        "Longitude": "-73.563187",
        "Latitude": "45.504919",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33630",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68437",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299868.932",
        "Y": "5040556.535",
        "Longitude": "-73.563103",
        "Latitude": "45.504913",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33633",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68441",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299873.683",
        "Y": "5040551.425",
        "Longitude": "-73.563042",
        "Latitude": "45.504867",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33747",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68655",
        "PANNEAU_ID_RPA": "2742",
        "DESCRIPTION_RPA": "\\P 07h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-PK",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "292315.996",
        "Y": "5045010.575",
        "Longitude": "-73.659871",
        "Latitude": "45.544897",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33750",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68658",
        "PANNEAU_ID_RPA": "2742",
        "DESCRIPTION_RPA": "\\P 07h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-PK",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "292346.614",
        "Y": "5044997.984",
        "Longitude": "-73.659478",
        "Latitude": "45.544785",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36505",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "75087",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300091.785",
        "Y": "5042756.468",
        "Longitude": "-73.560272",
        "Latitude": "45.52471",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36522",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "75113",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300137.275",
        "Y": "5042856.617",
        "Longitude": "-73.559691",
        "Latitude": "45.525612",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36553",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "75183",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300151.12",
        "Y": "5042850",
        "Longitude": "-73.559513",
        "Latitude": "45.525552",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36616",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "75318",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "292624.986",
        "Y": "5045770.439",
        "Longitude": "-73.655933",
        "Latitude": "45.55174",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36647",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "75385",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300156.543",
        "Y": "5041304.158",
        "Longitude": "-73.559429",
        "Latitude": "45.511642",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36647",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "75384",
        "PANNEAU_ID_RPA": "38",
        "DESCRIPTION_RPA": "\\A 06h30-09h30  15h30-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-DB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300156.543",
        "Y": "5041304.158",
        "Longitude": "-73.559429",
        "Latitude": "45.511642",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39524",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80777",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292465.34",
        "Y": "5046646.343",
        "Longitude": "-73.657999",
        "Latitude": "45.559619",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39534",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80803",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292467.98",
        "Y": "5046661.137",
        "Longitude": "-73.657966",
        "Latitude": "45.559752",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39570",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80851",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "295147.248",
        "Y": "5045977.459",
        "Longitude": "-73.623633",
        "Latitude": "45.553643",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39577",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80858",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "295161.369",
        "Y": "5045984.579",
        "Longitude": "-73.623452",
        "Latitude": "45.553707",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39580",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80861",
        "PANNEAU_ID_RPA": "2668",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293020.361",
        "Y": "5046429.062",
        "Longitude": "-73.650885",
        "Latitude": "45.557674",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39607",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80884",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "294907.585",
        "Y": "5045789.391",
        "Longitude": "-73.626699",
        "Latitude": "45.551947",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39662",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "80950",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296429.325",
        "Y": "5043125.363",
        "Longitude": "-73.607163",
        "Latitude": "45.527995",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39679",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "80983",
        "PANNEAU_ID_RPA": "1704",
        "DESCRIPTION_RPA": "\\P EXCEPTE VEHICULES D'URGENCE",
        "CODE_RPA": "R-VU",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295303.034",
        "Y": "5045542.137",
        "Longitude": "-73.621629",
        "Latitude": "45.549728",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42528",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86309",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298850.454",
        "Y": "5042544.197",
        "Longitude": "-73.57616",
        "Latitude": "45.52279",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42530",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86310",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298878.763",
        "Y": "5042531.376",
        "Longitude": "-73.575798",
        "Latitude": "45.522675",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42541",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86319",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298995.402",
        "Y": "5042456.199",
        "Longitude": "-73.574304",
        "Latitude": "45.522",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42545",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86320",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299037.386",
        "Y": "5042421.735",
        "Longitude": "-73.573766",
        "Latitude": "45.52169",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42554",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86322",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299266.335",
        "Y": "5042288.012",
        "Longitude": "-73.570834",
        "Latitude": "45.520489",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42561",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86325",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299330.02",
        "Y": "5042238.158",
        "Longitude": "-73.570018",
        "Latitude": "45.520041",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33837",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68788",
        "PANNEAU_ID_RPA": "2609",
        "DESCRIPTION_RPA": "\\P 12h-13h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294064.409",
        "Y": "5044303.547",
        "Longitude": "-73.637465",
        "Latitude": "45.538564",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33841",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "68790",
        "PANNEAU_ID_RPA": "2609",
        "DESCRIPTION_RPA": "\\P 12h-13h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294167.405",
        "Y": "5044260.423",
        "Longitude": "-73.636145",
        "Latitude": "45.538178",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33900",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "69004",
        "PANNEAU_ID_RPA": "2609",
        "DESCRIPTION_RPA": "\\P 12h-13h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294089.088",
        "Y": "5044351.002",
        "Longitude": "-73.63715",
        "Latitude": "45.538992",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "33904",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "69005",
        "PANNEAU_ID_RPA": "2609",
        "DESCRIPTION_RPA": "\\P 12h-13h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294198.097",
        "Y": "5044305.417",
        "Longitude": "-73.635753",
        "Latitude": "45.538583",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36806",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "75724",
        "PANNEAU_ID_RPA": "1512",
        "DESCRIPTION_RPA": "PANONCEAU DEBAR. SEULEMENT",
        "CODE_RPA": "PX-PD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300469.649",
        "Y": "5041240.771",
        "Longitude": "-73.555421",
        "Latitude": "45.511074",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36806",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "75723",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300469.649",
        "Y": "5041240.771",
        "Longitude": "-73.555421",
        "Latitude": "45.511074",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39721",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81065",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300010.523",
        "Y": "5040486.089",
        "Longitude": "-73.56129",
        "Latitude": "45.50428",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39753",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81092",
        "PANNEAU_ID_RPA": "2566",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295959.28",
        "Y": "5045129.5",
        "Longitude": "-73.613217",
        "Latitude": "45.546023",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39888",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81377",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300732.605",
        "Y": "5041732.089",
        "Longitude": "-73.55206",
        "Latitude": "45.515496",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39888",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "81376",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300732.605",
        "Y": "5041732.089",
        "Longitude": "-73.55206",
        "Latitude": "45.515496",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42715",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "86648",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "291632.557",
        "Y": "5046356.895",
        "Longitude": "-73.668659",
        "Latitude": "45.556999",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42715",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "86647",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "291632.557",
        "Y": "5046356.895",
        "Longitude": "-73.668659",
        "Latitude": "45.556999",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "42761",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "86728",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-05 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293897.925",
        "Y": "5044957.93",
        "Longitude": "-73.639611",
        "Latitude": "45.54445",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34049",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "69288",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296551.557",
        "Y": "5043076.379",
        "Longitude": "-73.605597",
        "Latitude": "45.527556",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34150",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "69486",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297480.112",
        "Y": "5042420.245",
        "Longitude": "-73.5937",
        "Latitude": "45.521662",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "36992",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "76152",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-22 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "294104.57",
        "Y": "5045284.142",
        "Longitude": "-73.636972",
        "Latitude": "45.547389",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39922",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "81458",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300148.946",
        "Y": "5040732.472",
        "Longitude": "-73.559521",
        "Latitude": "45.506498",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39922",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81457",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300148.946",
        "Y": "5040732.472",
        "Longitude": "-73.559521",
        "Latitude": "45.506498",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39938",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81499",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298716.601",
        "Y": "5043335.444",
        "Longitude": "-73.577884",
        "Latitude": "45.529909",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39941",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81501",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298734.062",
        "Y": "5043338.124",
        "Longitude": "-73.57766",
        "Latitude": "45.529934",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39982",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "81580",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300779.094",
        "Y": "5041798",
        "Longitude": "-73.551466",
        "Latitude": "45.51609",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39982",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81579",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300779.094",
        "Y": "5041798",
        "Longitude": "-73.551466",
        "Latitude": "45.51609",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39983",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "81582",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300754.035",
        "Y": "5041762.232",
        "Longitude": "-73.551786",
        "Latitude": "45.515768",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "39983",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81581",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300754.035",
        "Y": "5041762.232",
        "Longitude": "-73.551786",
        "Latitude": "45.515768",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34191",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "69587",
        "PANNEAU_ID_RPA": "2451",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 09h30-16h LUN. AU VEN.",
        "CODE_RPA": "SL-JQ",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300477.666",
        "Y": "5042422.866",
        "Longitude": "-73.555329",
        "Latitude": "45.521711",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34215",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "69627",
        "PANNEAU_ID_RPA": "2451",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 09h30-16h LUN. AU VEN.",
        "CODE_RPA": "SL-JQ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300400.396",
        "Y": "5042279.692",
        "Longitude": "-73.556317",
        "Latitude": "45.520422",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34215",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "69626",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300400.396",
        "Y": "5042279.692",
        "Longitude": "-73.556317",
        "Latitude": "45.520422",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "40104",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "81784",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "290020.984",
        "Y": "5044192.636",
        "Longitude": "-73.689236",
        "Latitude": "45.537492",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "40146",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "81845",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "290761.17",
        "Y": "5043690.755",
        "Longitude": "-73.679744",
        "Latitude": "45.532992",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43111",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "87425",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-06 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297587.447",
        "Y": "5042970.658",
        "Longitude": "-73.592334",
        "Latitude": "45.526616",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43121",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "87450",
        "PANNEAU_ID_RPA": "2318",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297727.908",
        "Y": "5042880.93",
        "Longitude": "-73.590535",
        "Latitude": "45.52581",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43214",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "87719",
        "PANNEAU_ID_RPA": "1609",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 15h00-18h00 LUNDI AU VENDREDI",
        "CODE_RPA": "R-PW",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292527.03",
        "Y": "5045611.5",
        "Longitude": "-73.657183",
        "Latitude": "45.550308",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43214",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "87718",
        "PANNEAU_ID_RPA": "2572",
        "DESCRIPTION_RPA": "\\P 13h-14h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292527.03",
        "Y": "5045611.5",
        "Longitude": "-73.657183",
        "Latitude": "45.550308",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "37313",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "76767",
        "PANNEAU_ID_RPA": "2383",
        "DESCRIPTION_RPA": "\\P 18h-09h",
        "CODE_RPA": "SD-NH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "291559.419",
        "Y": "5046592.848",
        "Longitude": "-73.669602",
        "Latitude": "45.559121",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "37318",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "76769",
        "PANNEAU_ID_RPA": "2383",
        "DESCRIPTION_RPA": "\\P 18h-09h",
        "CODE_RPA": "SD-NH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "291618.106",
        "Y": "5046567.976",
        "Longitude": "-73.66885",
        "Latitude": "45.558899",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "37349",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "76837",
        "PANNEAU_ID_RPA": "2565",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294668.392",
        "Y": "5045429.016",
        "Longitude": "-73.629755",
        "Latitude": "45.548701",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "40429",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "82296",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "290650.108",
        "Y": "5043623.621",
        "Longitude": "-73.681164",
        "Latitude": "45.532385",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "40431",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "82298",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "290649.539",
        "Y": "5043583.638",
        "Longitude": "-73.68117",
        "Latitude": "45.532025",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43229",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "87744",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "292222.844",
        "Y": "5047478.5",
        "Longitude": "-73.661127",
        "Latitude": "45.567103",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43395",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "88039",
        "PANNEAU_ID_RPA": "2593",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MM",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299493.848",
        "Y": "5045171.821",
        "Longitude": "-73.567953",
        "Latitude": "45.54644",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43395",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88038",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299493.848",
        "Y": "5045171.821",
        "Longitude": "-73.567953",
        "Latitude": "45.54644",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43412",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88053",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292791.338",
        "Y": "5044334.75",
        "Longitude": "-73.653767",
        "Latitude": "45.538824",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34544",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "70269",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299577.404",
        "Y": "5041094.637",
        "Longitude": "-73.566839",
        "Latitude": "45.509753",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34566",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "70347",
        "PANNEAU_ID_RPA": "2686",
        "DESCRIPTION_RPA": "\\P 07h30-08h30 LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299640.19",
        "Y": "5041030.151",
        "Longitude": "-73.566035",
        "Latitude": "45.509173",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34566",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "70346",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299640.19",
        "Y": "5041030.151",
        "Longitude": "-73.566035",
        "Latitude": "45.509173",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34592",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "70391",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299768.946",
        "Y": "5040968.795",
        "Longitude": "-73.564387",
        "Latitude": "45.508622",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34593",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "70392",
        "PANNEAU_ID_RPA": "2686",
        "DESCRIPTION_RPA": "\\P 07h30-08h30 LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299776.254",
        "Y": "5040963.205",
        "Longitude": "-73.564293",
        "Latitude": "45.508571",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34614",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "70437",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299894.065",
        "Y": "5040892.458",
        "Longitude": "-73.562785",
        "Latitude": "45.507936",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43450",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88130",
        "PANNEAU_ID_RPA": "2610",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NK",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "287198.755",
        "Y": "5042666.589",
        "Longitude": "-73.725318",
        "Latitude": "45.523695",
        "NOM_ARROND": "Saint-Laurent"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43494",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88252",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292437.032",
        "Y": "5046585.597",
        "Longitude": "-73.658361",
        "Latitude": "45.559072",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43499",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88265",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "291441.468",
        "Y": "5046146.975",
        "Longitude": "-73.671101",
        "Latitude": "45.555107",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43527",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88327",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292433.972",
        "Y": "5046572.236",
        "Longitude": "-73.658399",
        "Latitude": "45.558952",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43529",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88329",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292442.253",
        "Y": "5046568.016",
        "Longitude": "-73.658293",
        "Latitude": "45.558914",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43530",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88330",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292451.887",
        "Y": "5046564.735",
        "Longitude": "-73.65817",
        "Latitude": "45.558885",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43568",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "88392",
        "PANNEAU_ID_RPA": "2540",
        "DESCRIPTION_RPA": "\\P 10h-11h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "289368.954",
        "Y": "5044500.336",
        "Longitude": "-73.697594",
        "Latitude": "45.540247",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43568",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88391",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "289368.954",
        "Y": "5044500.336",
        "Longitude": "-73.697594",
        "Latitude": "45.540247",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "40797",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "82925",
        "PANNEAU_ID_RPA": "2319",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299174.63",
        "Y": "5043426.122",
        "Longitude": "-73.572021",
        "Latitude": "45.530729",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43741",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "88664",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293259.307",
        "Y": "5047247.781",
        "Longitude": "-73.647843",
        "Latitude": "45.565045",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43757",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88683",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300100.9",
        "Y": "5049060.436",
        "Longitude": "-73.560216",
        "Latitude": "45.581435",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34948",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "71180",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293836.673",
        "Y": "5044912.126",
        "Longitude": "-73.640395",
        "Latitude": "45.544037",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34948",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "71179",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293836.673",
        "Y": "5044912.126",
        "Longitude": "-73.640395",
        "Latitude": "45.544037",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "34948",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "71178",
        "PANNEAU_ID_RPA": "70",
        "DESCRIPTION_RPA": "\\A 05h30-09h  16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-QH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293836.673",
        "Y": "5044912.126",
        "Longitude": "-73.640395",
        "Latitude": "45.544037",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35007",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71326",
        "PANNEAU_ID_RPA": "2685",
        "DESCRIPTION_RPA": "\\P 07h-08h LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300245.072",
        "Y": "5041552.211",
        "Longitude": "-73.558299",
        "Latitude": "45.513875",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35038",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "71388",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293729.816",
        "Y": "5044688.814",
        "Longitude": "-73.641758",
        "Latitude": "45.542026",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35038",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71387",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293729.816",
        "Y": "5044688.814",
        "Longitude": "-73.641758",
        "Latitude": "45.542026",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35048",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71412",
        "PANNEAU_ID_RPA": "2687",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300239.075",
        "Y": "5041584.105",
        "Longitude": "-73.558376",
        "Latitude": "45.514162",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35066",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "71454",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293926.241",
        "Y": "5045026.607",
        "Longitude": "-73.63925",
        "Latitude": "45.545069",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35066",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71453",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293926.241",
        "Y": "5045026.607",
        "Longitude": "-73.63925",
        "Latitude": "45.545069",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "37891",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "77825",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294162.58",
        "Y": "5045526.565",
        "Longitude": "-73.636235",
        "Latitude": "45.549571",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "37894",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "77826",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297675.993",
        "Y": "5043634.823",
        "Longitude": "-73.59121",
        "Latitude": "45.532593",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "37895",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "77827",
        "PANNEAU_ID_RPA": "2317",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297657.805",
        "Y": "5043636.303",
        "Longitude": "-73.591443",
        "Latitude": "45.532606",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43849",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "88869",
        "PANNEAU_ID_RPA": "2380",
        "DESCRIPTION_RPA": "\\P 17h-09h",
        "CODE_RPA": "SD-NE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "290509.185",
        "Y": "5044205.938",
        "Longitude": "-73.682985",
        "Latitude": "45.537622",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43948",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "89037",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "293944.932",
        "Y": "5045171.471",
        "Longitude": "-73.639014",
        "Latitude": "45.546372",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "43957",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "89053",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "294003.157",
        "Y": "5045124.936",
        "Longitude": "-73.638267",
        "Latitude": "45.545955",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35074",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71468",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296346.661",
        "Y": "5043633.322",
        "Longitude": "-73.60823",
        "Latitude": "45.532565",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35118",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "71573",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293915.782",
        "Y": "5045041.918",
        "Longitude": "-73.639385",
        "Latitude": "45.545206",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35118",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "71572",
        "PANNEAU_ID_RPA": "70",
        "DESCRIPTION_RPA": "\\A 05h30-09h  16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-QH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293915.782",
        "Y": "5045041.918",
        "Longitude": "-73.639385",
        "Latitude": "45.545206",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35118",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71571",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293915.782",
        "Y": "5045041.918",
        "Longitude": "-73.639385",
        "Latitude": "45.545206",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35127",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "71592",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293886.377",
        "Y": "5044992.734",
        "Longitude": "-73.63976",
        "Latitude": "45.544763",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35127",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "71591",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293886.377",
        "Y": "5044992.734",
        "Longitude": "-73.63976",
        "Latitude": "45.544763",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35127",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71590",
        "PANNEAU_ID_RPA": "70",
        "DESCRIPTION_RPA": "\\A 05h30-09h  16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-QH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293886.377",
        "Y": "5044992.734",
        "Longitude": "-73.63976",
        "Latitude": "45.544763",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35135",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71607",
        "PANNEAU_ID_RPA": "2311",
        "DESCRIPTION_RPA": "\\P 19h-24h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SX",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296952.45",
        "Y": "5043241.105",
        "Longitude": "-73.600468",
        "Latitude": "45.529043",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35165",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "71689",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "294070",
        "Y": "5045266",
        "Longitude": "-73.637415",
        "Latitude": "45.547225",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35165",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71688",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "294070",
        "Y": "5045266",
        "Longitude": "-73.637415",
        "Latitude": "45.547225",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35171",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "71702",
        "PANNEAU_ID_RPA": "2725",
        "DESCRIPTION_RPA": "\\P 08h-20h   LUN A VEN",
        "CODE_RPA": "SV-JU",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297104.277",
        "Y": "5043133.644",
        "Longitude": "-73.598522",
        "Latitude": "45.528077",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35171",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "71701",
        "PANNEAU_ID_RPA": "1381",
        "DESCRIPTION_RPA": "P 60 min 08h-19h LUN. AU SAM.",
        "CODE_RPA": "PS-JE",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297104.277",
        "Y": "5043133.644",
        "Longitude": "-73.598522",
        "Latitude": "45.528077",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35171",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71700",
        "PANNEAU_ID_RPA": "2198",
        "DESCRIPTION_RPA": "\\P 19h-20h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-LI",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297104.277",
        "Y": "5043133.644",
        "Longitude": "-73.598522",
        "Latitude": "45.528077",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35176",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "71716",
        "PANNEAU_ID_RPA": "2725",
        "DESCRIPTION_RPA": "\\P 08h-20h   LUN A VEN",
        "CODE_RPA": "SV-JU",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297141.246",
        "Y": "5043128.774",
        "Longitude": "-73.598049",
        "Latitude": "45.528034",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35245",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "71938",
        "PANNEAU_ID_RPA": "7",
        "DESCRIPTION_RPA": "\\A 08h-21h30",
        "CODE_RPA": "AD-TB",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297518.499",
        "Y": "5042879.17",
        "Longitude": "-73.593216",
        "Latitude": "45.525792",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35249",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "71966",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293284.604",
        "Y": "5043564.256",
        "Longitude": "-73.647433",
        "Latitude": "45.5319",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38009",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "78074",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300830.843",
        "Y": "5041764.652",
        "Longitude": "-73.550803",
        "Latitude": "45.51579",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38206",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "78457",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297327.658",
        "Y": "5043626.772",
        "Longitude": "-73.59567",
        "Latitude": "45.532517",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38206",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78456",
        "PANNEAU_ID_RPA": "65",
        "DESCRIPTION_RPA": "\\A 08h-09h30  16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-QC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297327.658",
        "Y": "5043626.772",
        "Longitude": "-73.59567",
        "Latitude": "45.532517",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41194",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "83684",
        "PANNEAU_ID_RPA": "2435",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-12h LUN. AU VEN.",
        "CODE_RPA": "SL-AN",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-02 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293237.49",
        "Y": "5045537.006",
        "Longitude": "-73.648083",
        "Latitude": "45.54965",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44001",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "89148",
        "PANNEAU_ID_RPA": "2741",
        "DESCRIPTION_RPA": "\\P 07h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PJ",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "304573.377",
        "Y": "5054974.227",
        "Longitude": "-73.502907",
        "Latitude": "45.634665",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44003",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "89154",
        "PANNEAU_ID_RPA": "2741",
        "DESCRIPTION_RPA": "\\P 07h-16h LUN. AU VEN.",
        "CODE_RPA": "SV-PJ",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "304576.578",
        "Y": "5054987.469",
        "Longitude": "-73.502866",
        "Latitude": "45.634784",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44036",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "89208",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "6- Base amovible",
        "X": "304764.013",
        "Y": "5055724.6",
        "Longitude": "-73.500462",
        "Latitude": "45.641417",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35275",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72038",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300383.306",
        "Y": "5041491.466",
        "Longitude": "-73.556529",
        "Latitude": "45.513329",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35314",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72164",
        "PANNEAU_ID_RPA": "48",
        "DESCRIPTION_RPA": "\\A 08h-19h LUN. AU VEN.",
        "CODE_RPA": "AV-JD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300463.512",
        "Y": "5041437.28",
        "Longitude": "-73.555502",
        "Latitude": "45.512842",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35316",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72169",
        "PANNEAU_ID_RPA": "48",
        "DESCRIPTION_RPA": "\\A 08h-19h LUN. AU VEN.",
        "CODE_RPA": "AV-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300483.391",
        "Y": "5041424.409",
        "Longitude": "-73.555247",
        "Latitude": "45.512726",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35321",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "72183",
        "PANNEAU_ID_RPA": "1629",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 16h-23h LUN A SAM",
        "CODE_RPA": "R-QN",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297622.667",
        "Y": "5042811.053",
        "Longitude": "-73.591881",
        "Latitude": "45.52518",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35321",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "72182",
        "PANNEAU_ID_RPA": "2324",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297622.667",
        "Y": "5042811.053",
        "Longitude": "-73.591881",
        "Latitude": "45.52518",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35321",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72181",
        "PANNEAU_ID_RPA": "2425",
        "DESCRIPTION_RPA": "\\P 08h-16h JOURS D'ECOLE",
        "CODE_RPA": "SE-JB",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297622.667",
        "Y": "5042811.053",
        "Longitude": "-73.591881",
        "Latitude": "45.52518",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35322",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "72193",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293637.789",
        "Y": "5044343.661",
        "Longitude": "-73.642929",
        "Latitude": "45.538919",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35322",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "72192",
        "PANNEAU_ID_RPA": "64",
        "DESCRIPTION_RPA": "\\A 07h-09h30  16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-QB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293637.789",
        "Y": "5044343.661",
        "Longitude": "-73.642929",
        "Latitude": "45.538919",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35357",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72301",
        "PANNEAU_ID_RPA": "2684",
        "DESCRIPTION_RPA": "\\P 09h-11h30 LUN. AU VEN.",
        "CODE_RPA": "SV-AC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "291223.457",
        "Y": "5046152.346",
        "Longitude": "-73.673893",
        "Latitude": "45.555151",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35422",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72457",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293865.962",
        "Y": "5044878.963",
        "Longitude": "-73.640019",
        "Latitude": "45.543739",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35422",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "72456",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293865.962",
        "Y": "5044878.963",
        "Longitude": "-73.640019",
        "Latitude": "45.543739",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38211",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "78470",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295481.528",
        "Y": "5044842.219",
        "Longitude": "-73.61933",
        "Latitude": "45.543432",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38211",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78469",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295481.528",
        "Y": "5044842.219",
        "Longitude": "-73.61933",
        "Latitude": "45.543432",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38213",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "78473",
        "PANNEAU_ID_RPA": "65",
        "DESCRIPTION_RPA": "\\A 08h-09h30  16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-QC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297288.446",
        "Y": "5043658.345",
        "Longitude": "-73.596173",
        "Latitude": "45.532801",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38213",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78472",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297288.446",
        "Y": "5043658.345",
        "Longitude": "-73.596173",
        "Latitude": "45.532801",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38327",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78687",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294243.009",
        "Y": "5044480.184",
        "Longitude": "-73.635182",
        "Latitude": "45.540157",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38343",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78711",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294353.842",
        "Y": "5044433.67",
        "Longitude": "-73.633762",
        "Latitude": "45.53974",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38348",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78725",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294516.318",
        "Y": "5044366.083",
        "Longitude": "-73.63168",
        "Latitude": "45.539134",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38383",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "78774",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294630.92",
        "Y": "5044318.098",
        "Longitude": "-73.630211",
        "Latitude": "45.538704",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41231",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "83765",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-02 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293215.599",
        "Y": "5045448.598",
        "Longitude": "-73.648361",
        "Latitude": "45.548854",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41242",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "83782",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293488.552",
        "Y": "5044737.719",
        "Longitude": "-73.644849",
        "Latitude": "45.542462",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44245",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "89609",
        "PANNEAU_ID_RPA": "2611",
        "DESCRIPTION_RPA": "\\P 13h-14h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298002.725",
        "Y": "5054711.172",
        "Longitude": "-73.587181",
        "Latitude": "45.632265",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35432",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "72476",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293916.063",
        "Y": "5044960.32",
        "Longitude": "-73.639379",
        "Latitude": "45.544472",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35432",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72475",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293916.063",
        "Y": "5044960.32",
        "Longitude": "-73.639379",
        "Latitude": "45.544472",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35435",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72480",
        "PANNEAU_ID_RPA": "2698",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN.AU VEN.",
        "CODE_RPA": "SV-AQ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "291416.187",
        "Y": "5046060.127",
        "Longitude": "-73.671422",
        "Latitude": "45.554325",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35436",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "72482",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293944.536",
        "Y": "5045007.365",
        "Longitude": "-73.639016",
        "Latitude": "45.544896",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35436",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72481",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293944.536",
        "Y": "5045007.365",
        "Longitude": "-73.639016",
        "Latitude": "45.544896",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35472",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72635",
        "PANNEAU_ID_RPA": "1762",
        "DESCRIPTION_RPA": "\\P RESERVE DEBARCADERE HANDICAPES EN TOUT TEMPS",
        "CODE_RPA": "RD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "2000-03-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301911.092",
        "Y": "5047812.356",
        "Longitude": "-73.537012",
        "Latitude": "45.570215",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35500",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72705",
        "PANNEAU_ID_RPA": "2573",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294577.429",
        "Y": "5044705.626",
        "Longitude": "-73.630904",
        "Latitude": "45.54219",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35511",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "72720",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "294951.342",
        "Y": "5045802.022",
        "Longitude": "-73.626138",
        "Latitude": "45.552061",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35511",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72719",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "294951.342",
        "Y": "5045802.022",
        "Longitude": "-73.626138",
        "Latitude": "45.552061",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35563",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "72851",
        "PANNEAU_ID_RPA": "2449",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 07h-18h LUN. AU SAM.",
        "CODE_RPA": "SL-JL",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294145.127",
        "Y": "5044105.958",
        "Longitude": "-73.636427",
        "Latitude": "45.536788",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35563",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "72850",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294145.127",
        "Y": "5044105.958",
        "Longitude": "-73.636427",
        "Latitude": "45.536788",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38467",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78884",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296225.147",
        "Y": "5044361.173",
        "Longitude": "-73.609799",
        "Latitude": "45.539113",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38484",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "78907",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295038.139",
        "Y": "5044121.48",
        "Longitude": "-73.624993",
        "Latitude": "45.53694",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38484",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "78906",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295038.139",
        "Y": "5044121.48",
        "Longitude": "-73.624993",
        "Latitude": "45.53694",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41395",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84036",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292169.102",
        "Y": "5047222.369",
        "Longitude": "-73.661809",
        "Latitude": "45.564797",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41408",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84062",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292204.941",
        "Y": "5044877.452",
        "Longitude": "-73.661289",
        "Latitude": "45.543697",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41429",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84091",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "8- Pilier",
        "X": "293802.186",
        "Y": "5044788.214",
        "Longitude": "-73.640834",
        "Latitude": "45.542922",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41440",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "84110",
        "PANNEAU_ID_RPA": "2228",
        "DESCRIPTION_RPA": "\\P 13h-14h MAR. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-MS",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293728.215",
        "Y": "5045326.056",
        "Longitude": "-73.641793",
        "Latitude": "45.54776",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41440",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84109",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293728.215",
        "Y": "5045326.056",
        "Longitude": "-73.641793",
        "Latitude": "45.54776",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41514",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84239",
        "PANNEAU_ID_RPA": "2571",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294301.34",
        "Y": "5044597",
        "Longitude": "-73.634438",
        "Latitude": "45.541209",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41552",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84293",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294410.384",
        "Y": "5044553.291",
        "Longitude": "-73.63304",
        "Latitude": "45.540817",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41556",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84305",
        "PANNEAU_ID_RPA": "2572",
        "DESCRIPTION_RPA": "\\P 13h-14h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294450.892",
        "Y": "5044534.469",
        "Longitude": "-73.632521",
        "Latitude": "45.540648",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41561",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "84320",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294512.729",
        "Y": "5044509.327",
        "Longitude": "-73.631729",
        "Latitude": "45.540423",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44364",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "89826",
        "PANNEAU_ID_RPA": "2396",
        "DESCRIPTION_RPA": "\\P MARS 01 A DEC. 01",
        "CODE_RPA": "SD-OE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "305066.594",
        "Y": "5054909.5",
        "Longitude": "-73.496581",
        "Latitude": "45.634083",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44395",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "89882",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "305907.848",
        "Y": "5061920.708",
        "Longitude": "-73.485774",
        "Latitude": "45.69717",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35624",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "72971",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294531.791",
        "Y": "5044286.615",
        "Longitude": "-73.63148",
        "Latitude": "45.538419",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38629",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79132",
        "PANNEAU_ID_RPA": "1592",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 15h-09h",
        "CODE_RPA": "R-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296432.023",
        "Y": "5043291.679",
        "Longitude": "-73.607131",
        "Latitude": "45.529492",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38664",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79179",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296645.134",
        "Y": "5044089.476",
        "Longitude": "-73.604416",
        "Latitude": "45.536673",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38686",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79208",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297716.665",
        "Y": "5042476.051",
        "Longitude": "-73.590673",
        "Latitude": "45.522167",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38692",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79218",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297809.236",
        "Y": "5042415.945",
        "Longitude": "-73.589487",
        "Latitude": "45.521627",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38705",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79231",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297678.814",
        "Y": "5042479.231",
        "Longitude": "-73.591158",
        "Latitude": "45.522195",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38753",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79299",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296761.073",
        "Y": "5044013.449",
        "Longitude": "-73.602931",
        "Latitude": "45.53599",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "41673",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "84583",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-02-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "291522.31",
        "Y": "5046349.055",
        "Longitude": "-73.670071",
        "Latitude": "45.556927",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44563",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90340",
        "PANNEAU_ID_RPA": "2150",
        "DESCRIPTION_RPA": "\\P 07h-09h MAR. ET VEN. 1er MARS AU 1er DEC.",
        "CODE_RPA": "SB-AI",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-11-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "305415.778",
        "Y": "5055824.759",
        "Longitude": "-73.492101",
        "Latitude": "45.642318",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44610",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90402",
        "PANNEAU_ID_RPA": "2319",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-11 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299000.698",
        "Y": "5042401.773",
        "Longitude": "-73.574235",
        "Latitude": "45.52151",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44714",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90573",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-11 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292495.686",
        "Y": "5046385.558",
        "Longitude": "-73.657604",
        "Latitude": "45.557273",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35826",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73394",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298601.85",
        "Y": "5041318.989",
        "Longitude": "-73.579327",
        "Latitude": "45.511763",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35829",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73401",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295216",
        "Y": "5043338.5",
        "Longitude": "-73.622701",
        "Latitude": "45.529897",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35838",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "73421",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298491.71",
        "Y": "5041471.574",
        "Longitude": "-73.580739",
        "Latitude": "45.513135",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35838",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "73420",
        "PANNEAU_ID_RPA": "58",
        "DESCRIPTION_RPA": "\\A 15h30-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298491.71",
        "Y": "5041471.574",
        "Longitude": "-73.580739",
        "Latitude": "45.513135",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35838",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73419",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298491.71",
        "Y": "5041471.574",
        "Longitude": "-73.580739",
        "Latitude": "45.513135",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35870",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73494",
        "PANNEAU_ID_RPA": "1602",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h30-16h LUNDI AU VENDREDI",
        "CODE_RPA": "R-PQ",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293526.107",
        "Y": "5045235.577",
        "Longitude": "-73.644379",
        "Latitude": "45.546943",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "35914",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "73618",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298733.815",
        "Y": "5041276.665",
        "Longitude": "-73.577638",
        "Latitude": "45.511384",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38823",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79401",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "296979.55",
        "Y": "5043869.359",
        "Longitude": "-73.600131",
        "Latitude": "45.534696",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38906",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79528",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293736.604",
        "Y": "5046319.812",
        "Longitude": "-73.641708",
        "Latitude": "45.556702",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "38982",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "79611",
        "PANNEAU_ID_RPA": "55",
        "DESCRIPTION_RPA": "\\A 16h-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294501.388",
        "Y": "5045956.877",
        "Longitude": "-73.631905",
        "Latitude": "45.553448",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44756",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90664",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-11 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299499.713",
        "Y": "5042030.608",
        "Longitude": "-73.567844",
        "Latitude": "45.518174",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44768",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90683",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-11 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299547.569",
        "Y": "5042009.366",
        "Longitude": "-73.567231",
        "Latitude": "45.517983",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44800",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90780",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299707.595",
        "Y": "5041900.975",
        "Longitude": "-73.565181",
        "Latitude": "45.517009",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44802",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "90787",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299715.662",
        "Y": "5041896.675",
        "Longitude": "-73.565078",
        "Latitude": "45.516971",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44802",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90786",
        "PANNEAU_ID_RPA": "2315",
        "DESCRIPTION_RPA": "\\P 08h-09h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299715.662",
        "Y": "5041896.675",
        "Longitude": "-73.565078",
        "Latitude": "45.516971",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44819",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "90820",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-12 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299586.188",
        "Y": "5041986.153",
        "Longitude": "-73.566736",
        "Latitude": "45.517775",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44830",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "90829",
        "PANNEAU_ID_RPA": "2548",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-12-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "304966.913",
        "Y": "5055578.626",
        "Longitude": "-73.497859",
        "Latitude": "45.640104",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "44906",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "91003",
        "PANNEAU_ID_RPA": "1581",
        "DESCRIPTION_RPA": "\\P RESERVE MOTOS",
        "CODE_RPA": "R-MO",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-12 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299765.111",
        "Y": "5041869.832",
        "Longitude": "-73.564445",
        "Latitude": "45.516729",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "56560",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "114899",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "305319.793",
        "Y": "5055021.512",
        "Longitude": "-73.493333",
        "Latitude": "45.63509",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "56639",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "115041",
        "PANNEAU_ID_RPA": "1482",
        "DESCRIPTION_RPA": "PANONCEAU DEBARCADERE RESERVE HANDICAPE",
        "CODE_RPA": "PX-HD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "305496",
        "Y": "5055458.5",
        "Longitude": "-73.491072",
        "Latitude": "45.639022",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "56639",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "115040",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "305496",
        "Y": "5055458.5",
        "Longitude": "-73.491072",
        "Latitude": "45.639022",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47944",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96727",
        "PANNEAU_ID_RPA": "2742",
        "DESCRIPTION_RPA": "\\P 07h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-PK",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297338.109",
        "Y": "5046044.695",
        "Longitude": "-73.595573",
        "Latitude": "45.554275",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47973",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96793",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294901.926",
        "Y": "5047685.924",
        "Longitude": "-73.626809",
        "Latitude": "45.569013",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47975",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96796",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294904.789",
        "Y": "5047683.783",
        "Longitude": "-73.626773",
        "Latitude": "45.568993",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47982",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96803",
        "PANNEAU_ID_RPA": "2585",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295028.66",
        "Y": "5047604",
        "Longitude": "-73.625184",
        "Latitude": "45.568277",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50745",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "102036",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292941.746",
        "Y": "5044851.12",
        "Longitude": "-73.651854",
        "Latitude": "45.543473",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50788",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "102115",
        "PANNEAU_ID_RPA": "2300",
        "DESCRIPTION_RPA": "\\P 19h-20h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292953.805",
        "Y": "5044880.613",
        "Longitude": "-73.6517",
        "Latitude": "45.543739",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50798",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "102142",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293027.149",
        "Y": "5045014.936",
        "Longitude": "-73.650764",
        "Latitude": "45.544949",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53699",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "108318",
        "PANNEAU_ID_RPA": "2182",
        "DESCRIPTION_RPA": "\\P 13h-14h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JS",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "292603.541",
        "Y": "5039887.601",
        "Longitude": "-73.656061",
        "Latitude": "45.498804",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53775",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "108428",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293570.425",
        "Y": "5038864.602",
        "Longitude": "-73.643666",
        "Latitude": "45.489615",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "56697",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "115137",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "10- FÃ»t et feux",
        "X": "298128.25",
        "Y": "5054927",
        "Longitude": "-73.585574",
        "Latitude": "45.634208",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "56812",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "115283",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "303954.869",
        "Y": "5057907.44",
        "Longitude": "-73.510845",
        "Latitude": "45.661058",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48010",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96862",
        "PANNEAU_ID_RPA": "2290",
        "DESCRIPTION_RPA": "\\P 20h-21h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295140.567",
        "Y": "5047496.635",
        "Longitude": "-73.623748",
        "Latitude": "45.567313",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48033",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96896",
        "PANNEAU_ID_RPA": "2290",
        "DESCRIPTION_RPA": "\\P 20h-21h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295252.8",
        "Y": "5047425.5",
        "Longitude": "-73.622309",
        "Latitude": "45.566674",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48053",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96937",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295399.803",
        "Y": "5047351.551",
        "Longitude": "-73.620424",
        "Latitude": "45.566011",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48114",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "97017",
        "PANNEAU_ID_RPA": "2564",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295771.662",
        "Y": "5047152.842",
        "Longitude": "-73.615657",
        "Latitude": "45.564228",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48174",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "97105",
        "PANNEAU_ID_RPA": "2540",
        "DESCRIPTION_RPA": "\\P 10h-11h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296551.887",
        "Y": "5046619.501",
        "Longitude": "-73.605653",
        "Latitude": "45.559438",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48182",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "97110",
        "PANNEAU_ID_RPA": "2612",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298128.685",
        "Y": "5045717.444",
        "Longitude": "-73.585443",
        "Latitude": "45.551338",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51003",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "102581",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293865.055",
        "Y": "5041051.073",
        "Longitude": "-73.639945",
        "Latitude": "45.509294",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53881",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "108734",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294719.424",
        "Y": "5038189.117",
        "Longitude": "-73.628952",
        "Latitude": "45.483554",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53921",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "108839",
        "PANNEAU_ID_RPA": "2508",
        "DESCRIPTION_RPA": "\\P 09h-17h MAR. MER. VEN.",
        "CODE_RPA": "ST-JA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-08 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295338.79",
        "Y": "5038754.851",
        "Longitude": "-73.62104",
        "Latitude": "45.488654",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53936",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "108886",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293443.797",
        "Y": "5039002.825",
        "Longitude": "-73.645289",
        "Latitude": "45.490857",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53937",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "108887",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293428.142",
        "Y": "5039013.196",
        "Longitude": "-73.645489",
        "Latitude": "45.49095",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48298",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "97407",
        "PANNEAU_ID_RPA": "2572",
        "DESCRIPTION_RPA": "\\P 13h-14h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298616.615",
        "Y": "5045504.193",
        "Longitude": "-73.579191",
        "Latitude": "45.549424",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51088",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "102761",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294398.656",
        "Y": "5041489.5",
        "Longitude": "-73.633125",
        "Latitude": "45.513248",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51105",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "102785",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "294065.514",
        "Y": "5038604.177",
        "Longitude": "-73.637326",
        "Latitude": "45.487279",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54048",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "109158",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294890.948",
        "Y": "5038080.026",
        "Longitude": "-73.626756",
        "Latitude": "45.482575",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54115",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "109361",
        "PANNEAU_ID_RPA": "2593",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295557.94",
        "Y": "5040968.825",
        "Longitude": "-73.618278",
        "Latitude": "45.508579",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54170",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "109499",
        "PANNEAU_ID_RPA": "26",
        "DESCRIPTION_RPA": "\\A 07h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293542.232",
        "Y": "5038613.998",
        "Longitude": "-73.644021",
        "Latitude": "45.487359",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45558",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "92242",
        "PANNEAU_ID_RPA": "1508",
        "DESCRIPTION_RPA": "PANONCEAU 1 SEPT. AU 30 JUIN",
        "CODE_RPA": "PX-MP",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296386.55",
        "Y": "5045824.894",
        "Longitude": "-73.607757",
        "Latitude": "45.552286",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45558",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "92241",
        "PANNEAU_ID_RPA": "1453",
        "DESCRIPTION_RPA": "P 15 min 07h30-9h ET 14h30-16h30 LUN. AU VEN.",
        "CODE_RPA": "PV-QA",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296386.55",
        "Y": "5045824.894",
        "Longitude": "-73.607757",
        "Latitude": "45.552286",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45558",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "92240",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296386.55",
        "Y": "5045824.894",
        "Longitude": "-73.607757",
        "Latitude": "45.552286",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48366",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "97547",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296237.098",
        "Y": "5036755.188",
        "Longitude": "-73.609513",
        "Latitude": "45.470671",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48445",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "97674",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298135.944",
        "Y": "5045849.446",
        "Longitude": "-73.585352",
        "Latitude": "45.552526",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48505",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "97809",
        "PANNEAU_ID_RPA": "1762",
        "DESCRIPTION_RPA": "\\P RESERVE DEBARCADERE HANDICAPES EN TOUT TEMPS",
        "CODE_RPA": "RD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298518.84",
        "Y": "5045680",
        "Longitude": "-73.580446",
        "Latitude": "45.551005",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48505",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "97808",
        "PANNEAU_ID_RPA": "2667",
        "DESCRIPTION_RPA": "\\P 10h-11h VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298518.84",
        "Y": "5045680",
        "Longitude": "-73.580446",
        "Latitude": "45.551005",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48511",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "97814",
        "PANNEAU_ID_RPA": "2667",
        "DESCRIPTION_RPA": "\\P 10h-11h VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298538.742",
        "Y": "5045670.389",
        "Longitude": "-73.580191",
        "Latitude": "45.550918",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51346",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "103567",
        "PANNEAU_ID_RPA": "2167",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295055.56",
        "Y": "5039677.59",
        "Longitude": "-73.624682",
        "Latitude": "45.496953",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51346",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "103566",
        "PANNEAU_ID_RPA": "2164",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JA",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295055.56",
        "Y": "5039677.59",
        "Longitude": "-73.624682",
        "Latitude": "45.496953",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54218",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "109605",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293673.488",
        "Y": "5038856.431",
        "Longitude": "-73.642347",
        "Latitude": "45.489543",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54233",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "109637",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293689.028",
        "Y": "5038846.71",
        "Longitude": "-73.642148",
        "Latitude": "45.489456",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54368",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "109931",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293232.401",
        "Y": "5039131.978",
        "Longitude": "-73.647997",
        "Latitude": "45.492015",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45736",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "92573",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301225.624",
        "Y": "5042912.533",
        "Longitude": "-73.545758",
        "Latitude": "45.526121",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45736",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "92572",
        "PANNEAU_ID_RPA": "1426",
        "DESCRIPTION_RPA": "P 60 min 08h-18h LUN. AU VEN.",
        "CODE_RPA": "PV-JF",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301225.624",
        "Y": "5042912.533",
        "Longitude": "-73.545758",
        "Latitude": "45.526121",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45736",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "92571",
        "PANNEAU_ID_RPA": "2325",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301225.624",
        "Y": "5042912.533",
        "Longitude": "-73.545758",
        "Latitude": "45.526121",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48617",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "98031",
        "PANNEAU_ID_RPA": "2573",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299130.048",
        "Y": "5045431.886",
        "Longitude": "-73.572615",
        "Latitude": "45.548777",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48667",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "98123",
        "PANNEAU_ID_RPA": "1683",
        "DESCRIPTION_RPA": "\\P RESERVE TAXIS",
        "CODE_RPA": "R-TA",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294660.209",
        "Y": "5037576.598",
        "Longitude": "-73.629697",
        "Latitude": "45.478042",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51386",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "103669",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-24 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295561.563",
        "Y": "5041022",
        "Longitude": "-73.618233",
        "Latitude": "45.509057",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51503",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "103988",
        "PANNEAU_ID_RPA": "1683",
        "DESCRIPTION_RPA": "\\P RESERVE TAXIS",
        "CODE_RPA": "R-TA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292494.16",
        "Y": "5039787",
        "Longitude": "-73.657458",
        "Latitude": "45.497897",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51532",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "104043",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292554.306",
        "Y": "5039826.485",
        "Longitude": "-73.656689",
        "Latitude": "45.498253",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51532",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "104042",
        "PANNEAU_ID_RPA": "2729",
        "DESCRIPTION_RPA": "\\P 08h-18h LUN. AU VEN.",
        "CODE_RPA": "SV-OD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292554.306",
        "Y": "5039826.485",
        "Longitude": "-73.656689",
        "Latitude": "45.498253",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54383",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "109972",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "293249.013",
        "Y": "5039122.397",
        "Longitude": "-73.647784",
        "Latitude": "45.491929",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54405",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "110021",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293442.708",
        "Y": "5039801.882",
        "Longitude": "-73.645321",
        "Latitude": "45.498047",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54456",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "110224",
        "PANNEAU_ID_RPA": "2380",
        "DESCRIPTION_RPA": "\\P 17h-09h",
        "CODE_RPA": "SD-NE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295294.414",
        "Y": "5041560.972",
        "Longitude": "-73.621662",
        "Latitude": "45.513904",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54488",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "110315",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295385.156",
        "Y": "5041484.5",
        "Longitude": "-73.620499",
        "Latitude": "45.513217",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54488",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "110314",
        "PANNEAU_ID_RPA": "1411",
        "DESCRIPTION_RPA": "P 15 min 07h-18h LUN. AU VEN.",
        "CODE_RPA": "PV-DB",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295385.156",
        "Y": "5041484.5",
        "Longitude": "-73.620499",
        "Latitude": "45.513217",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "45919",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "92956",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293377.01",
        "Y": "5047903.795",
        "Longitude": "-73.646351",
        "Latitude": "45.57095",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48867",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "98525",
        "PANNEAU_ID_RPA": "2164",
        "DESCRIPTION_RPA": "\\P 08h-09h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293931.058",
        "Y": "5036358.15",
        "Longitude": "-73.638997",
        "Latitude": "45.467066",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48867",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "98524",
        "PANNEAU_ID_RPA": "1390",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU SAM.",
        "CODE_RPA": "PS-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293931.058",
        "Y": "5036358.15",
        "Longitude": "-73.638997",
        "Latitude": "45.467066",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48874",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "98536",
        "PANNEAU_ID_RPA": "1513",
        "DESCRIPTION_RPA": "PANONCEAU FLECHE A GAUCHE",
        "CODE_RPA": "PX-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293941.313",
        "Y": "5036338.5",
        "Longitude": "-73.638865",
        "Latitude": "45.46689",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48874",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "98535",
        "PANNEAU_ID_RPA": "12",
        "DESCRIPTION_RPA": "\\A POMPIER URGENCE",
        "CODE_RPA": "AD-TU",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293941.313",
        "Y": "5036338.5",
        "Longitude": "-73.638865",
        "Latitude": "45.46689",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48874",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "98534",
        "PANNEAU_ID_RPA": "1390",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU SAM.",
        "CODE_RPA": "PS-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293941.313",
        "Y": "5036338.5",
        "Longitude": "-73.638865",
        "Latitude": "45.46689",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48874",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "98533",
        "PANNEAU_ID_RPA": "2317",
        "DESCRIPTION_RPA": "\\P 09h-10h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293941.313",
        "Y": "5036338.5",
        "Longitude": "-73.638865",
        "Latitude": "45.46689",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48889",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "98567",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "293953.337",
        "Y": "5036397.654",
        "Longitude": "-73.638712",
        "Latitude": "45.467422",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51599",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "104204",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294966.445",
        "Y": "5038918.277",
        "Longitude": "-73.625807",
        "Latitude": "45.490119",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51703",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "104525",
        "PANNEAU_ID_RPA": "1594",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 17h-23h",
        "CODE_RPA": "R-PJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300740.549",
        "Y": "5041271.664",
        "Longitude": "-73.551955",
        "Latitude": "45.511353",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51703",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "104524",
        "PANNEAU_ID_RPA": "2230",
        "DESCRIPTION_RPA": "\\P 07h-08h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-MU",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300740.549",
        "Y": "5041271.664",
        "Longitude": "-73.551955",
        "Latitude": "45.511353",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46073",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93281",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294922.712",
        "Y": "5036103.745",
        "Longitude": "-73.62631",
        "Latitude": "45.464792",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46129",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93390",
        "PANNEAU_ID_RPA": "2610",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294806.675",
        "Y": "5036159.321",
        "Longitude": "-73.627795",
        "Latitude": "45.46529",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46148",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93452",
        "PANNEAU_ID_RPA": "1762",
        "DESCRIPTION_RPA": "\\P RESERVE DEBARCADERE HANDICAPES EN TOUT TEMPS",
        "CODE_RPA": "RD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "294419.5",
        "Y": "5036413",
        "Longitude": "-73.632751",
        "Latitude": "45.467567",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46182",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93515",
        "PANNEAU_ID_RPA": "2440",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-17h LUN. AU VEN.",
        "CODE_RPA": "SL-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-13 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299134.485",
        "Y": "5044120.749",
        "Longitude": "-73.572543",
        "Latitude": "45.536979",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48941",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "98705",
        "PANNEAU_ID_RPA": "2333",
        "DESCRIPTION_RPA": "\\P 07h30-08h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VV",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294020.758",
        "Y": "5036479.152",
        "Longitude": "-73.637852",
        "Latitude": "45.468157",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "48941",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "98704",
        "PANNEAU_ID_RPA": "1390",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU SAM.",
        "CODE_RPA": "PS-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294020.758",
        "Y": "5036479.152",
        "Longitude": "-73.637852",
        "Latitude": "45.468157",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51785",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "104693",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300841.203",
        "Y": "5041241.491",
        "Longitude": "-73.550666",
        "Latitude": "45.511082",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51808",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "104733",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300785.923",
        "Y": "5041276.905",
        "Longitude": "-73.551374",
        "Latitude": "45.511401",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "51808",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "104732",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "300785.923",
        "Y": "5041276.905",
        "Longitude": "-73.551374",
        "Latitude": "45.511401",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54839",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "111208",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297210.75",
        "Y": "5039124.5",
        "Longitude": "-73.597097",
        "Latitude": "45.492003",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54839",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "111207",
        "PANNEAU_ID_RPA": "9488",
        "DESCRIPTION_RPA": "PANONCEAU - EXCEPTE VEHICULES MUNIS D'UN PERMIS",
        "CODE_RPA": "PX-PR",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297210.75",
        "Y": "5039124.5",
        "Longitude": "-73.597097",
        "Latitude": "45.492003",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54839",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "111206",
        "PANNEAU_ID_RPA": "11690",
        "DESCRIPTION_RPA": "P 02 h 09h30-17h LUN A VEN",
        "CODE_RPA": "PV-OH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297210.75",
        "Y": "5039124.5",
        "Longitude": "-73.597097",
        "Latitude": "45.492003",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54839",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "111205",
        "PANNEAU_ID_RPA": "2702",
        "DESCRIPTION_RPA": "\\P 07h-09h30 LUN A VEN",
        "CODE_RPA": "SV-AU",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297210.75",
        "Y": "5039124.5",
        "Longitude": "-73.597097",
        "Latitude": "45.492003",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54861",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "111267",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297299.469",
        "Y": "5039260.5",
        "Longitude": "-73.595964",
        "Latitude": "45.493227",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54861",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "111266",
        "PANNEAU_ID_RPA": "9488",
        "DESCRIPTION_RPA": "PANONCEAU - EXCEPTE VEHICULES MUNIS D'UN PERMIS",
        "CODE_RPA": "PX-PR",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297299.469",
        "Y": "5039260.5",
        "Longitude": "-73.595964",
        "Latitude": "45.493227",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54861",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "111265",
        "PANNEAU_ID_RPA": "11690",
        "DESCRIPTION_RPA": "P 02 h 09h30-17h LUN A VEN",
        "CODE_RPA": "PV-OH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297299.469",
        "Y": "5039260.5",
        "Longitude": "-73.595964",
        "Latitude": "45.493227",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54861",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "111264",
        "PANNEAU_ID_RPA": "2323",
        "DESCRIPTION_RPA": "\\P 12h-13h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297299.469",
        "Y": "5039260.5",
        "Longitude": "-73.595964",
        "Latitude": "45.493227",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54861",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "111263",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297299.469",
        "Y": "5039260.5",
        "Longitude": "-73.595964",
        "Latitude": "45.493227",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46322",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93836",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295378.193",
        "Y": "5037634.383",
        "Longitude": "-73.620514",
        "Latitude": "45.478572",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46330",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93845",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295349.594",
        "Y": "5037693",
        "Longitude": "-73.620881",
        "Latitude": "45.479099",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46331",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93846",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295304.073",
        "Y": "5037754.885",
        "Longitude": "-73.621465",
        "Latitude": "45.479655",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46332",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "93848",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295275.023",
        "Y": "5037789.098",
        "Longitude": "-73.621837",
        "Latitude": "45.479962",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "49082",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "99072",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297212.718",
        "Y": "5046394.029",
        "Longitude": "-73.597185",
        "Latitude": "45.557417",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "49156",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "99188",
        "PANNEAU_ID_RPA": "1434",
        "DESCRIPTION_RPA": "P 02h 08h-16h LUN. AU VEN.",
        "CODE_RPA": "PV-JO",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-19 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297448.166",
        "Y": "5046279.678",
        "Longitude": "-73.594167",
        "Latitude": "45.55639",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54920",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "111409",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299953.939",
        "Y": "5037699.52",
        "Longitude": "-73.561987",
        "Latitude": "45.479205",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54927",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "111419",
        "PANNEAU_ID_RPA": "2173",
        "DESCRIPTION_RPA": "\\P 12h-13h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "300160.947",
        "Y": "5037710.871",
        "Longitude": "-73.559339",
        "Latitude": "45.479308",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "54957",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "111511",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296923.12",
        "Y": "5039573.5",
        "Longitude": "-73.600784",
        "Latitude": "45.49604",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52268",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "105365",
        "PANNEAU_ID_RPA": "1589",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-23h",
        "CODE_RPA": "R-PF",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300362.14",
        "Y": "5041392.846",
        "Longitude": "-73.556799",
        "Latitude": "45.512441",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52268",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "105364",
        "PANNEAU_ID_RPA": "2320",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300362.14",
        "Y": "5041392.846",
        "Longitude": "-73.556799",
        "Latitude": "45.512441",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52344",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "105460",
        "PANNEAU_ID_RPA": "1589",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-23h",
        "CODE_RPA": "R-PF",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295666.75",
        "Y": "5043696",
        "Longitude": "-73.616936",
        "Latitude": "45.53312",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52370",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "105501",
        "PANNEAU_ID_RPA": "1461",
        "DESCRIPTION_RPA": "PANONCEAU 15 AVRIL AU 1 NOV.",
        "CODE_RPA": "PX-AF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-08-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298103.495",
        "Y": "5046788.597",
        "Longitude": "-73.58578",
        "Latitude": "45.560976",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52370",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "105500",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-08-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298103.495",
        "Y": "5046788.597",
        "Longitude": "-73.58578",
        "Latitude": "45.560976",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55159",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "112027",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298380.688",
        "Y": "5039158.36",
        "Longitude": "-73.582129",
        "Latitude": "45.492319",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55159",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "112026",
        "PANNEAU_ID_RPA": "54",
        "DESCRIPTION_RPA": "\\A 15h30-17h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298380.688",
        "Y": "5039158.36",
        "Longitude": "-73.582129",
        "Latitude": "45.492319",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55159",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112025",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298380.688",
        "Y": "5039158.36",
        "Longitude": "-73.582129",
        "Latitude": "45.492319",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55198",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112153",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297020.969",
        "Y": "5039581.201",
        "Longitude": "-73.599533",
        "Latitude": "45.49611",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55199",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112155",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296978.276",
        "Y": "5039597.393",
        "Longitude": "-73.600079",
        "Latitude": "45.496255",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55203",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112162",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296911.019",
        "Y": "5039631.976",
        "Longitude": "-73.60094",
        "Latitude": "45.496566",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55204",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "112166",
        "PANNEAU_ID_RPA": "1451",
        "DESCRIPTION_RPA": "P 02h 09h-18h LUN. AU VEN.",
        "CODE_RPA": "PV-PB",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296888.435",
        "Y": "5039637.567",
        "Longitude": "-73.601229",
        "Latitude": "45.496616",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55204",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "112165",
        "PANNEAU_ID_RPA": "2640",
        "DESCRIPTION_RPA": "\\P 18h-19h LUNDI 1ER MARS AU 1ER DEC.",
        "CODE_RPA": "SU-SS",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296888.435",
        "Y": "5039637.567",
        "Longitude": "-73.601229",
        "Latitude": "45.496616",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55204",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112164",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296888.435",
        "Y": "5039637.567",
        "Longitude": "-73.601229",
        "Latitude": "45.496616",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55206",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112169",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296919.614",
        "Y": "5039687.571",
        "Longitude": "-73.600831",
        "Latitude": "45.497066",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46649",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "94547",
        "PANNEAU_ID_RPA": "2353",
        "DESCRIPTION_RPA": "\\P 08h-19h",
        "CODE_RPA": "SD-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297649.169",
        "Y": "5042744.717",
        "Longitude": "-73.591541",
        "Latitude": "45.524584",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46649",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "94546",
        "PANNEAU_ID_RPA": "27",
        "DESCRIPTION_RPA": "\\A 08h-09h30 LUN. AU VEN.",
        "CODE_RPA": "AV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297649.169",
        "Y": "5042744.717",
        "Longitude": "-73.591541",
        "Latitude": "45.524584",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46689",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "94673",
        "PANNEAU_ID_RPA": "1686",
        "DESCRIPTION_RPA": "\\P RESERVE HANDICAPES (PICTO)",
        "CODE_RPA": "R-TD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298841.456",
        "Y": "5044468.833",
        "Longitude": "-73.576299",
        "Latitude": "45.540109",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46689",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "94672",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298841.456",
        "Y": "5044468.833",
        "Longitude": "-73.576299",
        "Latitude": "45.540109",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52461",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "105700",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296408.696",
        "Y": "5043239.104",
        "Longitude": "-73.607429",
        "Latitude": "45.529018",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52470",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "105708",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-26 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "296513.16",
        "Y": "5043091.5",
        "Longitude": "-73.606089",
        "Latitude": "45.527691",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55233",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112221",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "301452.824",
        "Y": "5046078.568",
        "Longitude": "-73.542871",
        "Latitude": "45.554611",
        "NOM_ARROND": "Mercier - Hochelaga-Maisonneuve"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55295",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "112350",
        "PANNEAU_ID_RPA": "208",
        "DESCRIPTION_RPA": "\\P 07h-19h CLIGNOTANT 19h-07h FIXE",
        "CODE_RPA": "EU-TO",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-14 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298064.101",
        "Y": "5039071.372",
        "Longitude": "-73.586179",
        "Latitude": "45.491533",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46761",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "94854",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299018.877",
        "Y": "5046197.85",
        "Longitude": "-73.574047",
        "Latitude": "45.555669",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46774",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "94887",
        "PANNEAU_ID_RPA": "1425",
        "DESCRIPTION_RPA": "P 60 min 08h-19h LUN. AU VEN.",
        "CODE_RPA": "PV-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297166.53",
        "Y": "5043313.5",
        "Longitude": "-73.597728",
        "Latitude": "45.529697",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46867",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "95148",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "293707.174",
        "Y": "5034824.772",
        "Longitude": "-73.641825",
        "Latitude": "45.453265",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46871",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "95152",
        "PANNEAU_ID_RPA": "2315",
        "DESCRIPTION_RPA": "\\P 08h-09h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VA",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293720.322",
        "Y": "5036646.218",
        "Longitude": "-73.641698",
        "Latitude": "45.469655",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46895",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "95206",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "293711.092",
        "Y": "5034826.192",
        "Longitude": "-73.641775",
        "Latitude": "45.453278",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52664",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106153",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-30 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299052.481",
        "Y": "5043733.962",
        "Longitude": "-73.573588",
        "Latitude": "45.533498",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52756",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "106267",
        "PANNEAU_ID_RPA": "2708",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295357.795",
        "Y": "5047559.991",
        "Longitude": "-73.620967",
        "Latitude": "45.567886",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52756",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106266",
        "PANNEAU_ID_RPA": "2291",
        "DESCRIPTION_RPA": "\\P 20h-21h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295357.795",
        "Y": "5047559.991",
        "Longitude": "-73.620967",
        "Latitude": "45.567886",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "46946",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "95281",
        "PANNEAU_ID_RPA": "2545",
        "DESCRIPTION_RPA": "\\P 12h-13h JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295744.36",
        "Y": "5045957.527",
        "Longitude": "-73.615985",
        "Latitude": "45.553471",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47057",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "95421",
        "PANNEAU_ID_RPA": "2541",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "296782.782",
        "Y": "5045312.945",
        "Longitude": "-73.602674",
        "Latitude": "45.547684",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52797",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106334",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-08-31 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292084.5",
        "Y": "5043433",
        "Longitude": "-73.662794",
        "Latitude": "45.530698",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52898",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "106453",
        "PANNEAU_ID_RPA": "2295",
        "DESCRIPTION_RPA": "\\P 22h-23h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299575.952",
        "Y": "5042833.125",
        "Longitude": "-73.566876",
        "Latitude": "45.525396",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52898",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "106452",
        "PANNEAU_ID_RPA": "1411",
        "DESCRIPTION_RPA": "P 15 min 07h-18h LUN. AU VEN.",
        "CODE_RPA": "PV-DB",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299575.952",
        "Y": "5042833.125",
        "Longitude": "-73.566876",
        "Latitude": "45.525396",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52898",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106451",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299575.952",
        "Y": "5042833.125",
        "Longitude": "-73.566876",
        "Latitude": "45.525396",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52899",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106460",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299584.134",
        "Y": "5042828.175",
        "Longitude": "-73.566771",
        "Latitude": "45.525352",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52906",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106469",
        "PANNEAU_ID_RPA": "2588",
        "DESCRIPTION_RPA": "\\P 11h-12h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-01-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293944.437",
        "Y": "5048096.463",
        "Longitude": "-73.639085",
        "Latitude": "45.572692",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "52910",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106473",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-01-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299178.358",
        "Y": "5044261.663",
        "Longitude": "-73.571983",
        "Latitude": "45.538248",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55649",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "113131",
        "PANNEAU_ID_RPA": "2435",
        "DESCRIPTION_RPA": "\\P LIVRAISON SEULEMENT 08h-12h LUN. AU VEN.",
        "CODE_RPA": "SL-AN",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298627.8",
        "Y": "5039413",
        "Longitude": "-73.578971",
        "Latitude": "45.494613",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55668",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "113197",
        "PANNEAU_ID_RPA": "2323",
        "DESCRIPTION_RPA": "\\P 12h-13h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-15 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297401.126",
        "Y": "5039232.968",
        "Longitude": "-73.594663",
        "Latitude": "45.492981",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55674",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "113214",
        "PANNEAU_ID_RPA": "10848",
        "DESCRIPTION_RPA": "P 2h 09h-17h MAR ET VEN",
        "CODE_RPA": "PB-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297387.401",
        "Y": "5039189.953",
        "Longitude": "-73.594838",
        "Latitude": "45.492594",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55674",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "113213",
        "PANNEAU_ID_RPA": "2512",
        "DESCRIPTION_RPA": "\\P 09h-17h LUN. MER. JEU.",
        "CODE_RPA": "ST-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297387.401",
        "Y": "5039189.953",
        "Longitude": "-73.594838",
        "Latitude": "45.492594",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55675",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "113219",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297387.665",
        "Y": "5039223.987",
        "Longitude": "-73.594835",
        "Latitude": "45.4929",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55675",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "113218",
        "PANNEAU_ID_RPA": "9488",
        "DESCRIPTION_RPA": "PANONCEAU - EXCEPTE VEHICULES MUNIS D'UN PERMIS",
        "CODE_RPA": "PX-PR",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297387.665",
        "Y": "5039223.987",
        "Longitude": "-73.594835",
        "Latitude": "45.4929",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55675",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "113217",
        "PANNEAU_ID_RPA": "10848",
        "DESCRIPTION_RPA": "P 2h 09h-17h MAR ET VEN",
        "CODE_RPA": "PB-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297387.665",
        "Y": "5039223.987",
        "Longitude": "-73.594835",
        "Latitude": "45.4929",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55675",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "113216",
        "PANNEAU_ID_RPA": "2512",
        "DESCRIPTION_RPA": "\\P 09h-17h LUN. MER. JEU.",
        "CODE_RPA": "ST-JJ",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297387.665",
        "Y": "5039223.987",
        "Longitude": "-73.594835",
        "Latitude": "45.4929",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55707",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "113325",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "3",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298458.065",
        "Y": "5039819.274",
        "Longitude": "-73.581148",
        "Latitude": "45.498267",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47255",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "95708",
        "PANNEAU_ID_RPA": "2572",
        "DESCRIPTION_RPA": "\\P 13h-14h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297563.609",
        "Y": "5045415.424",
        "Longitude": "-73.592676",
        "Latitude": "45.548615",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50074",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "100668",
        "PANNEAU_ID_RPA": "2719",
        "DESCRIPTION_RPA": "\\P 08h-22h LUN. AU VEN.",
        "CODE_RPA": "SV-JN",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294002.711",
        "Y": "5046531.292",
        "Longitude": "-73.638304",
        "Latitude": "45.558609",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53059",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106841",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295190.535",
        "Y": "5039443.418",
        "Longitude": "-73.62295",
        "Latitude": "45.494848",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53060",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "106843",
        "PANNEAU_ID_RPA": "2587",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "295208.64",
        "Y": "5039472.181",
        "Longitude": "-73.622719",
        "Latitude": "45.495107",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53144",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "107048",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-03 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292932.137",
        "Y": "5040485.428",
        "Longitude": "-73.651871",
        "Latitude": "45.504189",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53147",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "107055",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-03 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "292914.255",
        "Y": "5040490.089",
        "Longitude": "-73.6521",
        "Latitude": "45.504231",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "55877",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "113645",
        "PANNEAU_ID_RPA": "2167",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-16 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298481.73",
        "Y": "5038960.761",
        "Longitude": "-73.580834",
        "Latitude": "45.490542",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47309",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "95751",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298228.053",
        "Y": "5044996.454",
        "Longitude": "-73.584161",
        "Latitude": "45.544851",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47353",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "95789",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-17 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298625.91",
        "Y": "5044732.098",
        "Longitude": "-73.579062",
        "Latitude": "45.542476",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50268",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101038",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293760.516",
        "Y": "5038420.819",
        "Longitude": "-73.641224",
        "Latitude": "45.485625",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53245",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "107313",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-03 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "9- Autres",
        "X": "294444.763",
        "Y": "5038364.674",
        "Longitude": "-73.632469",
        "Latitude": "45.48513",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53295",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "107436",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295589.094",
        "Y": "5041414.5",
        "Longitude": "-73.617888",
        "Latitude": "45.51259",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47516",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96019",
        "PANNEAU_ID_RPA": "2539",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297127.867",
        "Y": "5046024.843",
        "Longitude": "-73.598266",
        "Latitude": "45.554094",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47555",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96060",
        "PANNEAU_ID_RPA": "2611",
        "DESCRIPTION_RPA": "\\P 13h-14h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NL",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "295655.32",
        "Y": "5036212.236",
        "Longitude": "-73.616943",
        "Latitude": "45.465778",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50416",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101370",
        "PANNEAU_ID_RPA": "2198",
        "DESCRIPTION_RPA": "\\P 19h-20h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-LI",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292684.737",
        "Y": "5044165.284",
        "Longitude": "-73.655128",
        "Latitude": "45.537298",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50419",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "101372",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292663.258",
        "Y": "5044181.415",
        "Longitude": "-73.655403",
        "Latitude": "45.537442",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50419",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101371",
        "PANNEAU_ID_RPA": "2300",
        "DESCRIPTION_RPA": "\\P 19h-20h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-SM",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292663.258",
        "Y": "5044181.415",
        "Longitude": "-73.655403",
        "Latitude": "45.537442",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50476",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101500",
        "PANNEAU_ID_RPA": "2184",
        "DESCRIPTION_RPA": "\\P 17h30-18h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JU",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294573.297",
        "Y": "5041531.249",
        "Longitude": "-73.630891",
        "Latitude": "45.513626",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53386",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "107627",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-07-09 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "293868.363",
        "Y": "5039235.598",
        "Longitude": "-73.639862",
        "Latitude": "45.492958",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53422",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "107703",
        "PANNEAU_ID_RPA": "2167",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294135.344",
        "Y": "5039390.433",
        "Longitude": "-73.63645",
        "Latitude": "45.494355",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53469",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "107766",
        "PANNEAU_ID_RPA": "2350",
        "DESCRIPTION_RPA": "\\P 07h-19h",
        "CODE_RPA": "SD-JA",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "2001-04-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298203.663",
        "Y": "5042573.57",
        "Longitude": "-73.58444",
        "Latitude": "45.523049",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47730",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "96379",
        "PANNEAU_ID_RPA": "2426",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN A VEN SEPT A JUIN",
        "CODE_RPA": "SE-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297894.095",
        "Y": "5045517.054",
        "Longitude": "-73.588445",
        "Latitude": "45.549532",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47730",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "96378",
        "PANNEAU_ID_RPA": "2610",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297894.095",
        "Y": "5045517.054",
        "Longitude": "-73.588445",
        "Latitude": "45.549532",
        "NOM_ARROND": "Rosemont - La Petite-Patrie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47812",
        "POSITION_POP": "2",
        "PANNEAU_ID_PAN": "96500",
        "PANNEAU_ID_RPA": "2566",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-LE",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296521.484",
        "Y": "5046537.673",
        "Longitude": "-73.606041",
        "Latitude": "45.558701",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "47812",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "96499",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-18 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "296521.484",
        "Y": "5046537.673",
        "Longitude": "-73.606041",
        "Latitude": "45.558701",
        "NOM_ARROND": "Villeray - Saint-Michel - Parc-Extension"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50540",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101608",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "295029.932",
        "Y": "5035771.153",
        "Longitude": "-73.624932",
        "Latitude": "45.461801",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50542",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101613",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295018.129",
        "Y": "5035766.773",
        "Longitude": "-73.625083",
        "Latitude": "45.461761",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50649",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101849",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292889.667",
        "Y": "5044726.328",
        "Longitude": "-73.652517",
        "Latitude": "45.54235",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50685",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101908",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "292961.188",
        "Y": "5038913.807",
        "Longitude": "-73.651461",
        "Latitude": "45.490048",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50687",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101909",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-08-23 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "293018.604",
        "Y": "5038875.613",
        "Longitude": "-73.650726",
        "Latitude": "45.489705",
        "NOM_ARROND": {
        }
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "50698",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "101929",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "292898.875",
        "Y": "5044747",
        "Longitude": "-73.6524",
        "Latitude": "45.542536",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53570",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "107984",
        "PANNEAU_ID_RPA": "2618",
        "DESCRIPTION_RPA": "\\P 07h-08h MER. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-NS",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298963.423",
        "Y": "5043566.446",
        "Longitude": "-73.574726",
        "Latitude": "45.53199",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53570",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "107983",
        "PANNEAU_ID_RPA": "2319",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VE",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298963.423",
        "Y": "5043566.446",
        "Longitude": "-73.574726",
        "Latitude": "45.53199",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "53570",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "107982",
        "PANNEAU_ID_RPA": "1597",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 17h-21h",
        "CODE_RPA": "R-PL",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298963.423",
        "Y": "5043566.446",
        "Longitude": "-73.574726",
        "Latitude": "45.53199",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "56421",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "114716",
        "PANNEAU_ID_RPA": "2365",
        "DESCRIPTION_RPA": "\\P 09h-22h30",
        "CODE_RPA": "SD-JP",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "297314.123",
        "Y": "5054404.592",
        "Longitude": "-73.596009",
        "Latitude": "45.629499",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59460",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "121278",
        "PANNEAU_ID_RPA": "2176",
        "DESCRIPTION_RPA": "\\P 13h30-14h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JM",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297716.74",
        "Y": "5036906.553",
        "Longitude": "-73.590592",
        "Latitude": "45.47205",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59473",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "121305",
        "PANNEAU_ID_RPA": "2318",
        "DESCRIPTION_RPA": "\\P 09h30-10h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298696.104",
        "Y": "5037814.571",
        "Longitude": "-73.578077",
        "Latitude": "45.48023",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59492",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "121360",
        "PANNEAU_ID_RPA": "2353",
        "DESCRIPTION_RPA": "\\P 08h-19h",
        "CODE_RPA": "SD-JD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297585.69",
        "Y": "5037232.934",
        "Longitude": "-73.592272",
        "Latitude": "45.474986",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62417",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "126584",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298298.089",
        "Y": "5039605.313",
        "Longitude": "-73.583192",
        "Latitude": "45.49634",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62426",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "126608",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293771.42",
        "Y": "5040544.164",
        "Longitude": "-73.641132",
        "Latitude": "45.504732",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62449",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "126656",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "293775.041",
        "Y": "5040570.617",
        "Longitude": "-73.641086",
        "Latitude": "45.50497",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62471",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "126692",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293876.132",
        "Y": "5040466.067",
        "Longitude": "-73.63979",
        "Latitude": "45.50403",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62473",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "126694",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-04 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "293893.594",
        "Y": "5040507.261",
        "Longitude": "-73.639568",
        "Latitude": "45.504401",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62588",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "126990",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298621.34",
        "Y": "5039601.5",
        "Longitude": "-73.579056",
        "Latitude": "45.496309",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62593",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "127000",
        "PANNEAU_ID_RPA": "2344",
        "DESCRIPTION_RPA": "\\P 07h-08h 1 MARS AU 1 DEC.",
        "CODE_RPA": "SD-AD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-04-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298599.945",
        "Y": "5039591.622",
        "Longitude": "-73.57933",
        "Latitude": "45.49622",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65370",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "132453",
        "PANNEAU_ID_RPA": "2169",
        "DESCRIPTION_RPA": "\\P 10h30-11h30 LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297944.773",
        "Y": "5043173.078",
        "Longitude": "-73.587763",
        "Latitude": "45.528441",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65429",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "132570",
        "PANNEAU_ID_RPA": "2168",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298771.683",
        "Y": "5042861.068",
        "Longitude": "-73.577173",
        "Latitude": "45.525641",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65439",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "132597",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-21 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298529.892",
        "Y": "5043030.064",
        "Longitude": "-73.58027",
        "Latitude": "45.52716",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65488",
        "POSITION_POP": "3",
        "PANNEAU_ID_PAN": "132714",
        "PANNEAU_ID_RPA": "1589",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-23h",
        "CODE_RPA": "R-PF",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "4",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298944.089",
        "Y": "5042749.897",
        "Longitude": "-73.574964",
        "Latitude": "45.524642",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65488",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "132713",
        "PANNEAU_ID_RPA": "1514",
        "DESCRIPTION_RPA": "PANONCEAU EXCEPTE PERIODE INTERDITE",
        "CODE_RPA": "PX-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "4",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298944.089",
        "Y": "5042749.897",
        "Longitude": "-73.574964",
        "Latitude": "45.524642",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65488",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "132712",
        "PANNEAU_ID_RPA": "1433",
        "DESCRIPTION_RPA": "P 60 min 09h-18h LUN.AU VEN.",
        "CODE_RPA": "PV-JN",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "4",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298944.089",
        "Y": "5042749.897",
        "Longitude": "-73.574964",
        "Latitude": "45.524642",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65488",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "132711",
        "PANNEAU_ID_RPA": "2170",
        "DESCRIPTION_RPA": "\\P 11h-12h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JG",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "4",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298944.089",
        "Y": "5042749.897",
        "Longitude": "-73.574964",
        "Latitude": "45.524642",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59555",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "121451",
        "PANNEAU_ID_RPA": "2709",
        "DESCRIPTION_RPA": "\\P 08h-19h LUN. AU VEN.",
        "CODE_RPA": "SV-JD",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298133.948",
        "Y": "5037881.397",
        "Longitude": "-73.585269",
        "Latitude": "45.480826",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59557",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "121454",
        "PANNEAU_ID_RPA": "2708",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298210.047",
        "Y": "5037829.202",
        "Longitude": "-73.584295",
        "Latitude": "45.480357",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59558",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "121456",
        "PANNEAU_ID_RPA": "2708",
        "DESCRIPTION_RPA": "\\P 08h-17h LUN. AU VEN.",
        "CODE_RPA": "SV-JC",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298221.322",
        "Y": "5037821.521",
        "Longitude": "-73.584151",
        "Latitude": "45.480288",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59630",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "121639",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "297837.767",
        "Y": "5037328.894",
        "Longitude": "-73.58905",
        "Latitude": "45.475852",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59640",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "121656",
        "PANNEAU_ID_RPA": "2420",
        "DESCRIPTION_RPA": "\\P 09h-17h LUN. JEU.",
        "CODE_RPA": "SD-ZD",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297935.906",
        "Y": "5037219.033",
        "Longitude": "-73.587793",
        "Latitude": "45.474864",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59640",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "121655",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-24 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "297935.906",
        "Y": "5037219.033",
        "Longitude": "-73.587793",
        "Latitude": "45.474864",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62627",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "127071",
        "PANNEAU_ID_RPA": "2686",
        "DESCRIPTION_RPA": "\\P 07h30-08h30 LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298816.067",
        "Y": "5039927.615",
        "Longitude": "-73.576569",
        "Latitude": "45.499245",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62723",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "127259",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "297229.701",
        "Y": "5039476.361",
        "Longitude": "-73.59686",
        "Latitude": "45.495169",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65662",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "133118",
        "PANNEAU_ID_RPA": "2582",
        "DESCRIPTION_RPA": "\\P 08h-09h MAR. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SU-MA",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298759.484",
        "Y": "5041761.332",
        "Longitude": "-73.577315",
        "Latitude": "45.515745",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "65662",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "133117",
        "PANNEAU_ID_RPA": "2166",
        "DESCRIPTION_RPA": "\\P 09h-10h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JC",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298759.484",
        "Y": "5041761.332",
        "Longitude": "-73.577315",
        "Latitude": "45.515745",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59864",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "122154",
        "PANNEAU_ID_RPA": "1581",
        "DESCRIPTION_RPA": "\\P RESERVE MOTOS",
        "CODE_RPA": "R-MO",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299682.322",
        "Y": "5040229.464",
        "Longitude": "-73.565487",
        "Latitude": "45.501968",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62777",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "127401",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295263.137",
        "Y": "5037875.827",
        "Longitude": "-73.621991",
        "Latitude": "45.480743",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62777",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "127400",
        "PANNEAU_ID_RPA": "67",
        "DESCRIPTION_RPA": "\\A 08h-09h30  16h-18h LUN. AU VEN.",
        "CODE_RPA": "AV-QE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295263.137",
        "Y": "5037875.827",
        "Longitude": "-73.621991",
        "Latitude": "45.480743",
        "NOM_ARROND": "CÃ´te-des-Neiges - Notre-Dame-de-GrÃ¢ce"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "62780",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "127410",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299259.274",
        "Y": "5039545.338",
        "Longitude": "-73.570893",
        "Latitude": "45.495809",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "57220",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "115767",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-09-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "304030.787",
        "Y": "5058386.267",
        "Longitude": "-73.509872",
        "Latitude": "45.665367",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59899",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "122199",
        "PANNEAU_ID_RPA": "2324",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298661.22",
        "Y": "5037706.5",
        "Longitude": "-73.578522",
        "Latitude": "45.479257",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59903",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "122200",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298728.825",
        "Y": "5037774.967",
        "Longitude": "-73.577658",
        "Latitude": "45.479874",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "59904",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "122201",
        "PANNEAU_ID_RPA": "1581",
        "DESCRIPTION_RPA": "\\P RESERVE MOTOS",
        "CODE_RPA": "R-MO",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "299655.829",
        "Y": "5040169.898",
        "Longitude": "-73.565826",
        "Latitude": "45.501432",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "60026",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "122420",
        "PANNEAU_ID_RPA": "2319",
        "DESCRIPTION_RPA": "\\P 10h-11h MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-27 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "4- Poteau en bois",
        "X": "298517.024",
        "Y": "5037590.149",
        "Longitude": "-73.580365",
        "Latitude": "45.478209",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "63070",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "128044",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-05-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298970.484",
        "Y": "5040094.401",
        "Longitude": "-73.574595",
        "Latitude": "45.500747",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "66048",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "133970",
        "PANNEAU_ID_RPA": "1589",
        "DESCRIPTION_RPA": "\\P RESERVE S3R 09h-23h",
        "CODE_RPA": "R-PF",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-10-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298124.025",
        "Y": "5039192.694",
        "Longitude": "-73.585414",
        "Latitude": "45.492626",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "66048",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "133969",
        "PANNEAU_ID_RPA": "2168",
        "DESCRIPTION_RPA": "\\P 10h-11h LUN. JEU. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-JE",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-10-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "298124.025",
        "Y": "5039192.694",
        "Longitude": "-73.585414",
        "Latitude": "45.492626",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "66054",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "133983",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "3",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": "1999-10-28 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "291392.803",
        "Y": "5044879.693",
        "Longitude": "-73.67169",
        "Latitude": "45.543703",
        "NOM_ARROND": "Ahuntsic - Cartierville"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "57388",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "116158",
        "PANNEAU_ID_RPA": "2324",
        "DESCRIPTION_RPA": "\\P 12h30-13h30 MAR. VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SB-VK",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "300324.099",
        "Y": "5037708.89",
        "Longitude": "-73.557252",
        "Latitude": "45.479291",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "57418",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "116215",
        "PANNEAU_ID_RPA": "2411",
        "DESCRIPTION_RPA": "\\P DEUX COTES",
        "CODE_RPA": "SD-TC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299032.47",
        "Y": "5040741.863",
        "Longitude": "-73.573809",
        "Latitude": "45.506574",
        "NOM_ARROND": "Le Plateau-Mont-Royal"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "60198",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "122777",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298401.202",
        "Y": "5037855.595",
        "Longitude": "-73.58185",
        "Latitude": "45.480596",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "63190",
        "POSITION_POP": "4",
        "PANNEAU_ID_PAN": "128328",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299129.338",
        "Y": "5039577.541",
        "Longitude": "-73.572556",
        "Latitude": "45.496098",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "63190",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "128327",
        "PANNEAU_ID_RPA": "38",
        "DESCRIPTION_RPA": "\\A 06h30-09h30  15h30-18h30 LUN. AU VEN.",
        "CODE_RPA": "AV-DB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "Archive",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "299129.338",
        "Y": "5039577.541",
        "Longitude": "-73.572556",
        "Latitude": "45.496098",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "63206",
        "POSITION_POP": "5",
        "PANNEAU_ID_PAN": "128361",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299079.015",
        "Y": "5040576.037",
        "Longitude": "-73.573212",
        "Latitude": "45.505082",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "63206",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "128360",
        "PANNEAU_ID_RPA": "54",
        "DESCRIPTION_RPA": "\\A 15h30-17h30 LUN. AU VEN.",
        "CODE_RPA": "AV-PB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299079.015",
        "Y": "5040576.037",
        "Longitude": "-73.573212",
        "Latitude": "45.505082",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "63206",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "128359",
        "PANNEAU_ID_RPA": "2683",
        "DESCRIPTION_RPA": "\\P 06h30-07h30 LUN. AU VEN. 1 MARS AU 1 DEC.",
        "CODE_RPA": "SV-AB",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "299079.015",
        "Y": "5040576.037",
        "Longitude": "-73.573212",
        "Latitude": "45.505082",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "63214",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "128376",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-06-10 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298861.293",
        "Y": "5038870.603",
        "Longitude": "-73.575977",
        "Latitude": "45.489734",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "66165",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "134170",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-29 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "1- Tige et base",
        "X": "294584.044",
        "Y": "5034490.54",
        "Longitude": "-73.630607",
        "Latitude": "45.450271",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "66168",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "134171",
        "PANNEAU_ID_RPA": "2413",
        "DESCRIPTION_RPA": "\\P EN TOUT TEMPS",
        "CODE_RPA": "SD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-29 00:00:00",
        "PAS_SUR_RUE": "1",
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "294539.313",
        "Y": "5034466.5",
        "Longitude": "-73.631178",
        "Latitude": "45.450054",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "66222",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "134220",
        "PANNEAU_ID_RPA": "11",
        "DESCRIPTION_RPA": "\\A EN TOUT TEMPS",
        "CODE_RPA": "AD-TT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-10-29 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "295183.719",
        "Y": "5034920",
        "Longitude": "-73.622949",
        "Latitude": "45.454144",
        "NOM_ARROND": "Le Sud-Ouest"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "57443",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "116284",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298864.155",
        "Y": "5039723.085",
        "Longitude": "-73.575951",
        "Latitude": "45.497405",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "57448",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "116299",
        "PANNEAU_ID_RPA": "1528",
        "DESCRIPTION_RPA": "PANONCEAU ZONE DE REMORQUAGE",
        "CODE_RPA": "PX-ZT",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-PANNONC.",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298868.073",
        "Y": "5039700.933",
        "Longitude": "-73.5759",
        "Latitude": "45.497206",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "57456",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "116313",
        "PANNEAU_ID_RPA": "140",
        "DESCRIPTION_RPA": "PARCOMETRE",
        "CODE_RPA": "D-PH",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STAT-$",
        "POTEAU_VERSION_POT": "0",
        "DATE_CONCEPTION_POT": "1999-09-20 00:00:00",
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298757.908",
        "Y": "5039775.47",
        "Longitude": "-73.577311",
        "Latitude": "45.497876",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "57514",
        "POSITION_POP": "7",
        "PANNEAU_ID_PAN": "116430",
        "PANNEAU_ID_RPA": "2343",
        "DESCRIPTION_RPA": "\\P 07h30-08h30 1 MARS AU 1 DEC.",
        "CODE_RPA": "SD-AC",
        "FLECHE_PAN": "0",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "2",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "EnlevÃ©",
        "DESCRIPTION_RTP": "2- Tige et manchon",
        "X": "298979.631",
        "Y": "5039521.765",
        "Longitude": "-73.574471",
        "Latitude": "45.495594",
        "NOM_ARROND": "Ville-Marie"
      }
    },
    {
      "record": {
        "POTEAU_ID_POT": "60326",
        "POSITION_POP": "6",
        "PANNEAU_ID_PAN": "122960",
        "PANNEAU_ID_RPA": "2175",
        "DESCRIPTION_RPA": "\\P 09h-17h MAR. VEN.",
        "CODE_RPA": "SB-JL",
        "FLECHE_PAN": "2",
        "TOPONYME_PAN": {
        },
        "DESCRIPTION_CAT": "STATIONNEMENT",
        "POTEAU_VERSION_POT": "1",
        "DATE_CONCEPTION_POT": {
        },
        "PAS_SUR_RUE": {
        },
        "DESCRIPTION_REP": "RÃ©el",
        "DESCRIPTION_RTP": "3- FÃ»t",
        "X": "298032.813",
        "Y": "5054321",
        "Longitude": "-73.58679",
        "Latitude": "45.628754",
        "NOM_ARROND": "RiviÃ¨re-des-Prairies - Pointe-aux-Trembles"
      }
    }
  ]


// Initialize the map and set its view to the first data point
const map = L.map('map').setView([data[0].record.Latitude, data[0].record.Longitude], 13);

// Add a tile layer to add to our map, in this case, it's a OSM tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers to the map
data.forEach(item => {
    const marker = L.marker([item.record.Latitude, item.record.Longitude]).addTo(map);
    const popupContent = `
        <table>
            <tr><td>POTEAU ID</td><td>${item.record.POTEAU_ID_POT}</td></tr>
            <tr><td>POSITION POP</td><td>${item.record.POSITION_POP}</td></tr>
            <tr><td>PANNEAU ID PAN</td><td>${item.record.PANNEAU_ID_PAN}</td></tr>
            <tr><td>PANNEAU ID RPA</td><td>${item.record.PANNEAU_ID_RPA}</td></tr>
            <tr><td>DESCRIPTION RPA</td><td>${item.record.DESCRIPTION_RPA}</td></tr>
            <tr><td>CODE RPA</td><td>${item.record.CODE_RPA}</td></tr>
            <tr><td>FLECHE PAN</td><td>${item.record.FLECHE_PAN}</td></tr>
            <tr><td>TOPONYME PAN</td><td>${item.record.TOPONYME_PAN}</td></tr>
            <tr><td>DESCRIPTION CAT</td><td>${item.record.DESCRIPTION_CAT}</td></tr>
            <tr><td>DATE CONCEPTION</td><td>${item.record.DATE_CONCEPTION_POT}</td></tr>
            <tr><td>DESCRIPTION REP</td><td>${item.record.DESCRIPTION_REP}</td></tr>
            <tr><td>DESCRIPTION RTP</td><td>${item.record.DESCRIPTION_RTP}</td></tr>
            <tr><td>ARRONDISSEMENT</td><td>${item.record.NOM_ARROND}</td></tr>
        </table>
    `;
    marker.bindPopup(popupContent);
});
