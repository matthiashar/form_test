const json = {
  "title": "Einsatzprotokoll",
  "pages": [
    {
      "name": "page1",
      "title": "Einsatzdaten",
      "elements": [
        {
          "type": "text",
          "name": "einsatznummer",
          "title": "Einsatznummer",
          "isRequired": true,
          "inputType": "number",
          "min": 1
        },
        {
          "type": "dropdown",
          "name": "kategorie",
          "startWithNewLine": false,
          "title": "Kategorie ",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Alarmgruppe"
            },
            {
              "value": "Item 2",
              "text": "Fachberater"
            },
            {
              "value": "Item 3",
              "text": "Wache Bielatal"
            },
            {
              "value": "Item 4",
              "text": "Wache Rathen"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "question2",
          "title": "Einsatzabbruch",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "question1",
          "startWithNewLine": false,
          "title": "Typ",
          "choices": [
            {
              "value": "Item 1",
              "text": "Medizinischer Notfall"
            },
            {
              "value": "Item 2",
              "text": "Totenbergung"
            },
            {
              "value": "Item 3",
              "text": "Bergnot"
            },
            {
              "value": "Item 4",
              "text": "Sucheinsatz"
            },
            {
              "value": "Item 5",
              "text": "Tierbergung"
            },
            {
              "value": "Item 6",
              "text": "Sachbergung"
            },
            {
              "value": "Item 7",
              "text": "Amtshilfe"
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "matrixdynamic",
          "name": "fahrzeuge_alarmgruppe",
          "visibleIf": "{kategorie} anyof ['Item 1', 'Item 2']",
          "title": "Einsatzfahrzeuge",
          "isRequired": true,
          "columns": [
            {
              "name": "Column 1",
              "title": "Fahrzeug",
              "cellType": "dropdown",
              "isRequired": true,
              "isUnique": true,
              "choices": [
                {
                  "value": 1,
                  "text": "BW SEB 89/1 (Def)"
                },
                {
                  "value": 2,
                  "text": "BW SEB 76/2 (Quad)"
                },
                {
                  "value": 3,
                  "text": "SEB 45/19/1 (KatS)"
                },
                {
                  "value": 4,
                  "text": "BW BS 89/1 (Def)"
                },
                {
                  "value": 5,
                  "text": "BW BS 89/2 (MTW)"
                },
                {
                  "value": 6,
                  "text": "BW BS 76/1 (Quad)"
                },
                {
                  "value": 7,
                  "text": "BW BS 76/2 (Quad)"
                },
                {
                  "value": 8,
                  "text": "BW PIR 89/1"
                }
              ],
              "storeOthersAsComment": true
            },
            {
              "name": "Column 2",
              "title": "Transportnummer",
              "cellType": "text",
              "isRequired": true,
              "isUnique": true,
              "inputType": "number"
            },
            {
              "name": "Column 3",
              "title": "Start km",
              "cellType": "text",
              "isRequired": true,
              "inputType": "number"
            },
            {
              "name": "Column 4",
              "title": "Ende km",
              "cellType": "text",
              "isRequired": true,
              "inputType": "number"
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rowCount": 1,
          "maxRowCount": 20
        },
        {
          "type": "matrixdynamic",
          "name": "fahrzeuge_wache",
          "visibleIf": "{kategorie} anyof ['Item 3', 'Item 4']",
          "title": "Einsatzfahrzeuge",
          "isRequired": true,
          "columns": [
            {
              "name": "Column 1",
              "title": "Fahrzeug",
              "cellType": "dropdown",
              "isRequired": true,
              "isUnique": true,
              "choices": [
                {
                  "value": 9,
                  "text": "BW Rathen"
                },
                {
                  "value": 10,
                  "text": "BW Bielatal"
                }
              ],
              "storeOthersAsComment": true
            },
            {
              "name": "Column 2",
              "title": "Transportnummer",
              "cellType": "text",
              "isRequired": true,
              "isUnique": true,
              "inputType": "number"
            },
            {
              "name": "Column 3",
              "title": "Start km",
              "cellType": "text",
              "isRequired": true,
              "inputType": "number"
            },
            {
              "name": "Column 4",
              "title": "Ende km",
              "cellType": "text",
              "isRequired": true,
              "inputType": "number"
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rowCount": 1,
          "maxRowCount": 20
        },
        {
          "type": "text",
          "name": "Tag",
          "title": "Tag",
          "isRequired": true,
          "inputType": "date"
        },
        {
          "type": "matrixdropdown",
          "name": "Einsatzzeiten",
          "title": "Zeiten",
          "titleLocation": "hidden",
          "isRequired": true,
          "columns": [
            {
              "name": "Column 1",
              "title": "Zeiten",
              "cellType": "text",
              "isRequired": true,
              "inputType": "time"
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rows": [
            {
              "value": "Row 1",
              "text": "Unfallzeit"
            },
            {
              "value": "Row 2",
              "text": "Alarmierung"
            },
            {
              "value": "Row 3",
              "text": "Ankunft"
            },
            {
              "value": "Row 4",
              "text": "Übergabe"
            },
            {
              "value": "Row 5",
              "text": "Einsatzende"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "title": "Einsatzursache",
      "elements": [
        {
          "type": "tagbox",
          "name": "Wetter",
          "title": "Örtliche Bedingungen und Wetter",
          "choices": [
            {
              "value": "Item 1",
              "text": "Regen"
            },
            {
              "value": "Item 2",
              "text": "Schnee"
            },
            {
              "value": "Item 3",
              "text": "Nebel"
            },
            {
              "value": "Item 4",
              "text": "Bewölkt"
            },
            {
              "value": "Item 5",
              "text": "Sonnig"
            },
            {
              "value": "Item 6",
              "text": "Windig"
            },
            {
              "value": "Item 7",
              "text": "Rutschig"
            },
            {
              "value": "Item 8",
              "text": "Heiß"
            }
          ],
          "showOtherItem": true,
          "allowCustomChoices": true
        },
        {
          "type": "panel",
          "name": "Aktivitaet",
          "title": "Aktivität/Betätigung",
          "elements": [
            {
              "type": "dropdown",
              "name": "aktivitaet_1",
              "titleLocation": "hidden",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Klettern"
                },
                {
                  "value": "Item 2",
                  "text": "Wandern"
                },
                {
                  "value": "Item 3",
                  "text": "Fahrad"
                },
                {
                  "value": "Item 4",
                  "text": "Höhle"
                },
                {
                  "value": "Item 5",
                  "text": "Suizid"
                }
              ],
              "showOtherItem": true
            },
            {
              "type": "dropdown",
              "name": "aktivitaet_2",
              "visibleIf": "{aktivitaet_1} = 'Item 1'",
              "titleLocation": "hidden",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Vorstieg"
                },
                {
                  "value": "Item 2",
                  "text": "Nachstieg"
                },
                {
                  "value": "Item 3",
                  "text": "Abseilen"
                },
                {
                  "value": "Item 4",
                  "text": "Zustieg"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "page4",
      "title": "Bergretter",
      "elements": [
        {
          "type": "matrixdynamic",
          "name": "retter",
          "title": "Eingesetzte Bergretter",
          "isRequired": true,
          "columns": [
            {
              "name": "Column 2",
              "title": "Name",
              "cellType": "text",
              "isRequired": true,
              "isUnique": true
            },
            {
              "name": "status",
              "title": "Status",
              "cellType": "dropdown",
              "isRequired": true,
              "isUnique": true,
              "choices": [
                {
                  "value": 3,
                  "text": "EL"
                },
                {
                  "value": "1",
                  "text": "AW"
                },
                {
                  "value": 2,
                  "text": "EK"
                },
                {
                  "value": 4,
                  "text": "SAN"
                },
                {
                  "value": 5,
                  "text": "FR"
                }
              ],
              "storeOthersAsComment": true
            },
            {
              "name": "BW",
              "title": "Bergwacht",
              "cellType": "dropdown",
              "isRequired": true,
              "choices": [
                {
                  "value": "seb",
                  "text": "Sebnitz"
                },
                {
                  "value": "dd",
                  "text": "Dresden"
                },
                {
                  "value": "pir",
                  "text": "Pirna"
                },
                {
                  "value": "item3",
                  "text": "Bad Schandau"
                }
              ]
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rowCount": 1,
          "maxRowCount": 20
        },
        {
          "type": "comment",
          "name": "question3",
          "title": "Kommentar"
        }
      ]
    },
    {
      "name": "page3",
      "title": "Patientendaten",
      "elements": [
        {
          "type": "panel",
          "name": "panel1",
          "elements": [
            {
              "type": "text",
              "name": "question4",
              "title": "Name"
            }
          ]
        }
      ]
    }
  ]
}