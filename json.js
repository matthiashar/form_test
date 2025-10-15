const json = {
  "title": "Einsatzprotokoll",
  "pages": [
    {
      "name": "page1",
      "title": "Einsatzdaten",
      "elements": [
        {
          "type": "tagbox",
          "name": "question5",
          "title": "Bergwacht",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Bad Schandau"
            },
            {
              "value": "Item 2",
              "text": "Bautzen"
            },
            {
              "value": "Item 3",
              "text": "Dresden"
            },
            {
              "value": "Item 4",
              "text": "Großenhain"
            },
            {
              "value": "Item 5",
              "text": "Pirna"
            },
            {
              "value": "Item 6",
              "text": "Sebnitz"
            }
          ]
        },
        {
          "type": "tagbox",
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
            },
            {
              "value": "Item 5",
              "text": "Höhlenrettung"
            },
            {
              "value": "Item 6",
              "text": "Luftretter"
            }
          ]
        },
        {
          "type": "text",
          "name": "einsatznummer",
          "startWithNewLine": false,
          "title": "Einsatznummer",
          "isRequired": true,
          "inputType": "number",
          "min": 1
        },
        {
          "type": "matrixdynamic",
          "name": "fahrzeuge_alarmgruppe",
          "title": "Einsatzfahrzeuge",
          "description": "Verwendung der Funkkenner: 1. in Alarmgruppe: alle einzelnen Fahrzeuge, 2. bei Hüttendienst: nur BW „Wache“",
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
                },
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
          "type": "boolean",
          "name": "question2",
          "title": "Einsatzabbruch",
          "isRequired": true
        },
        {
          "type": "tagbox",
          "name": "question1",
          "startWithNewLine": false,
          "title": "Typ",
          "isRequired": true,
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
              "text": "Tierrettung"
            },
            {
              "value": "Item 6",
              "text": "Sachbergung"
            },
            {
              "value": "Item 7",
              "text": "Amtshilfe"
            },
            {
              "value": "Item 8",
              "text": "First Responder"
            }
          ],
          "showOtherItem": true,
          "otherText": "Sonstiges"
        },
        {
          "type": "text",
          "name": "Tag",
          "title": "Tag",
          "isRequired": true,
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "question45",
          "startWithNewLine": false,
          "title": "2. Tag",
          "isRequired": true,
          "inputType": "date"
        },
        {
          "type": "matrixdropdown",
          "name": "Einsatzzeiten",
          "startWithNewLine": false,
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
              "text": "Ankunft am Patient"
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
        },
        {
          "type": "tagbox",
          "name": "question6",
          "title": "Übergabe an ...",
          "choices": [
            {
              "value": "Item 1",
              "text": "RTW"
            },
            {
              "value": "Item 2",
              "text": "NEF"
            },
            {
              "value": "Item 3",
              "text": "RTH"
            },
            {
              "value": "Item 4",
              "text": "Sonstiges"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "question8",
          "startWithNewLine": false,
          "title": "Windennutzung"
        },
        {
          "type": "tagbox",
          "name": "question7",
          "startWithNewLine": false,
          "title": "Zielort/Klinik",
          "choices": [
            {
              "value": "Item 1",
              "text": "KH DD-Friedrichstadt"
            },
            {
              "value": "Item 2",
              "text": "KH DD-Uniklinikum"
            },
            {
              "value": "Item 3",
              "text": "KH SEB"
            },
            {
              "value": "Item 4",
              "text": "KH PIR"
            },
            {
              "value": "Item 5",
              "text": "Sonstiges"
            }
          ]
        },
        {
          "type": "text",
          "name": "question10",
          "title": "Gipfel/Kletterweg"
        },
        {
          "type": "dropdown",
          "name": "question11",
          "startWithNewLine": false,
          "title": "Gebiet",
          "choices": [
            {
              "value": "Item 1",
              "text": "Affensteine/ Kl. Zschand"
            },
            {
              "value": "Item 2",
              "text": "Bielatal"
            },
            {
              "value": "Item 3",
              "text": "Gebiet der Steine/ Ergebirgsgrenzgebiet"
            },
            {
              "value": "Item 4",
              "text": "Gr. Zschand/ Wildensteiner Geiet"
            },
            {
              "value": "Item 5",
              "text": "Schrammsteine/ Schmilkaer Gebiet"
            },
            {
              "value": "Item 6",
              "text": "Wehlen/ Rathen/ Brand"
            }
          ]
        },
        {
          "type": "panel",
          "name": "Koordinaten",
          "title": "Koordinaten",
          "elements": [
			{
			  type: "text",
			  name: "lat",
			  title: "Breite (Lat)",
			  inputType: "number",
			  placeholder: "z. B. 51.0504",
			  validators: [{ type: "numeric" }]
			},
			{
			  type: "text",
			  name: "lng",
			  title: "Länge (Lng)",
			  inputType: "number",
			  placeholder: "z. B. 13.7373",
			  validators: [{ type: "numeric" }]
			},
			{
			  type: "html",
			  name: "pick_on_map",
			  html: `<button type="button" id="openMapPicker" style="padding:10px 14px; border:1px solid #0d6efd; border-radius:8px; background:#0d6efd; color:#fff;">
					   Punkt auf Karte wählen
					 </button>
					 <div style="font-size:12px; color:#666; margin-top:6px;">
					   Tippe/Click auf den Button, setze einen Marker und bestätige.
					 </div>`
			}
		  ]
        }
      ]
    },
    {
      "name": "page2",
      "title": "Einsatzursache/Geschehen",
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
              "text": "Rutschig/Nass"
            },
            {
              "value": "Item 8",
              "text": "Heiß"
            }
          ],
          "showOtherItem": true,
          "otherText": "Sonstiges",
          "allowCustomChoices": true
        },
        {
          "type": "panel",
          "name": "Aktivitaet",
          "title": "Aktivität/Betätigung",
          "startWithNewLine": false,
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
                },
                {
                  "value": "Item 6",
                  "text": "Stiegen"
                }
              ],
              "showOtherItem": true,
              "otherText": "Sonstiges"
            },
            {
              "type": "tagbox",
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
                },
                {
                  "value": "Item 5",
                  "text": "Bouldern"
                },
                {
                  "value": "Item 6",
                  "text": "Zustieg"
                },
                {
                  "value": "Item 7",
                  "text": "Abstieg"
                }
              ]
            }
          ]
        },
        {
          "type": "tagbox",
          "name": "question15",
          "title": "verwendete Rettungsmethode",
          "choices": [
            {
              "value": "Item 1",
              "text": "Windenrettung"
            },
            {
              "value": "Item 2",
              "text": "RSG"
            },
            {
              "value": "Item 3",
              "text": "Spalte Schmal"
            },
            {
              "value": "Item 4",
              "text": "Spalte Breit"
            },
            {
              "value": "Item 5",
              "text": "Abseilen mit Schleifkorbtrage"
            },
            {
              "value": "Item 6",
              "text": "Retten aus der Wand"
            },
            {
              "value": "Item 10",
              "text": "Seilbahn"
            },
            {
              "value": "Item 7",
              "text": "Abseilen"
            },
            {
              "value": "Item 8",
              "text": "Klettern"
            },
            {
              "value": "Item 9",
              "text": "Tragen"
            }
          ]
        },
        {
          "type": "tagbox",
          "name": "question16",
          "title": "Transportmittel",
          "choices": [
            {
              "value": "Item 3",
              "text": "Luftrettersack"
            },
            {
              "value": "Item 1",
              "text": "Korbtrage"
            },
            {
              "value": "Item 2",
              "text": "Gebirgstrage"
            },
            {
              "value": "Item 4",
              "text": "BW-KfZ"
            },
            {
              "value": "Item 5",
              "text": "Quad"
            },
            {
              "value": "Item 6",
              "text": "RTH"
            },
            {
              "value": "Item 7",
              "text": "RTW"
            },
            {
              "value": "Item 8",
              "text": "kein Transportmittel"
            },
            {
              "value": "Item 9",
              "text": "Sonstiges"
            }
          ]
        },
        {
          "type": "matrixdynamic",
          "name": "question17",
          "title": "Anzahl mitalarmierter Rettungsmittel",
          "columns": [
            {
              "name": "Column 1",
              "title": "Rettungsmittel",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": 1,
                  "text": "RTW"
                },
                {
                  "value": 2,
                  "text": "RTH"
                },
                {
                  "value": 3,
                  "text": "NEF"
                },
                {
                  "value": 4,
                  "text": "Polizei"
                },
                {
                  "value": 5,
                  "text": "Sonstige"
                }
              ],
              "storeOthersAsComment": true
            },
            {
              "name": "Column 2",
              "title": "Anzahl"
            },
            {
              "name": "Column 3",
              "title": "?"
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
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
              "title": "Vor- und Nachname",
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
                  "value": 4,
                  "text": "SAN"
                },
                {
                  "value": 5,
                  "text": "FR"
                },
                {
                  "value": 2,
                  "text": "EK"
                },
                {
                  "value": "1",
                  "text": "AW"
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
                  "value": "item3",
                  "text": "Bad Schandau"
                },
                {
                  "value": "item5",
                  "text": "Bautzen"
                },
                {
                  "value": "dd",
                  "text": "Dresden"
                },
                {
                  "value": "item4",
                  "text": "Großenhain"
                },
                {
                  "value": "pir",
                  "text": "Pirna"
                },
                {
                  "value": "seb",
                  "text": "Sebnitz"
                }
              ],
              "storeOthersAsComment": true
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
        },
        {
          "type": "dropdown",
          "name": "question18",
          "startWithNewLine": false,
          "title": "Patienten-Status nach Einsatz",
          "choices": [
            {
              "value": "Item 4",
              "text": "keine Angabe"
            },
            {
              "value": "Item 1",
              "text": "vollständig erholt"
            },
            {
              "value": "Item 2",
              "text": "bleibende Schäden"
            },
            {
              "value": "Item 3",
              "text": "gestorben"
            }
          ]
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
              "type": "dropdown",
              "name": "question19",
              "title": "Geschlecht",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "männlich"
                },
                {
                  "value": "Item 2",
                  "text": "weiblich"
                },
                {
                  "value": "Item 3",
                  "text": "divers"
                },
                {
                  "value": "Item 4",
                  "text": "Sonstiges"
                }
              ]
            },
            {
              "type": "text",
              "name": "question21",
              "startWithNewLine": false,
              "title": "Geburtsdatum",
              "inputType": "date"
            },
            {
              "type": "text",
              "name": "question4",
              "title": "Nachname"
            },
            {
              "type": "text",
              "name": "question20",
              "startWithNewLine": false,
              "title": "Vormane"
            },
            {
              "type": "text",
              "name": "question22",
              "title": "Straße"
            },
            {
              "type": "text",
              "name": "question23",
              "startWithNewLine": false,
              "title": "Hausnummer",
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "question24",
              "title": "Postleitzahl",
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "question25",
              "startWithNewLine": false,
              "title": "Ort"
            },
            {
              "type": "text",
              "name": "question26",
              "startWithNewLine": false,
              "title": "Land/Ländercode"
            },
            {
              "type": "text",
              "name": "question27",
              "title": "Krankenkasse"
            },
            {
              "type": "text",
              "name": "question28",
              "startWithNewLine": false,
              "title": "Versichertennummer",
              "inputType": "number"
            }
          ]
        }
      ]
    },
    {
      "name": "page5",
      "title": "Notfallgeschehen/ Anamnese",
      "elements": [
        {
          "type": "panel",
          "name": "panel6",
          "title": "Verletzungsmuster nach xABCDE",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "xABCDE",
              "titleLocation": "hidden",
              "columns": [
                {
                  "name": "Column 1",
                  "title": "xABCDE",
                  "cellType": "dropdown",
                  "choices": [
                    {
                      "value": 1,
                      "text": "c/x"
                    },
                    {
                      "value": 2,
                      "text": "A"
                    },
                    {
                      "value": 3,
                      "text": "B"
                    },
                    {
                      "value": 4,
                      "text": "C"
                    },
                    {
                      "value": 5,
                      "text": "D"
                    },
                    {
                      "value": 6,
                      "text": "E"
                    }
                  ],
                  "storeOthersAsComment": true
                },
                {
                  "name": "Column 2",
                  "title": "...???",
                  "cellType": "dropdown",
                  "choices": [
                    {
                      "value": 1,
                      "text": "keine Angabe"
                    },
                    {
                      "value": 3,
                      "text": "Polytrauma"
                    },
                    {
                      "value": 4,
                      "text": "Reanimation"
                    },
                    {
                      "value": 5,
                      "text": "Kreislauf"
                    },
                    {
                      "value": 6,
                      "text": "Unterzuckerung"
                    },
                    {
                      "value": 7,
                      "text": "Unterkühlung"
                    },
                    {
                      "value": 8,
                      "text": "Fraktur/Stauchung"
                    },
                    {
                      "value": 9,
                      "text": "Dehydrierung"
                    },
                    {
                      "value": 10,
                      "text": "psychisch"
                    },
                    {
                      "value": 11,
                      "text": "Sturz"
                    }
                  ],
                  "storeOthersAsComment": true
                },
                {
                  "name": "Column 3",
                  "title": "Sonstiges???"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "dropdown",
              "name": "question12",
              "visibleIf": "{xABCDE} = 'Item 1'",
              "titleLocation": "hidden",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "keine Angabe"
                },
                {
                  "value": "Item 2",
                  "text": "Polytrauma"
                }
              ]
            },
            {
              "type": "dropdown",
              "name": "question14",
              "visibleIf": "{xABCDE} = 'Item 2'",
              "titleLocation": "hidden",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "keine Angabe"
                },
                {
                  "value": "Item 2",
                  "text": "Reanimation"
                }
              ]
            }
          ]
        },
        {
          "type": "comment",
          "name": "question13",
          "title": "Verdachtsdiagnose"
        },
        {
          "type": "tagbox",
          "name": "question30",
          "title": "Versorgungsmittel/material",
          "choices": [
            {
              "value": "Item 1",
              "text": "Vakuummatratze"
            },
            {
              "value": "Item 2",
              "text": "Vakuumschiene"
            },
            {
              "value": "Item 3",
              "text": "Schaufeltrage"
            },
            {
              "value": "Item 4",
              "text": "Spine-Board"
            },
            {
              "value": "Item 5",
              "text": "BW-Schiene?"
            },
            {
              "value": "Item 6",
              "text": "Kramerschiene?"
            },
            {
              "value": "Item 7",
              "text": "Sam-Splint"
            },
            {
              "value": "Item 8",
              "text": "Stifneck"
            },
            {
              "value": "Item 9",
              "text": "Sonstiges"
            }
          ]
        },
        {
          "type": "panel",
          "name": "question31",
          "title": "Medizinischer Erstbefund",
          "elements": [
            {
              "type": "text",
              "name": "question32",
              "title": "SpO2 (%)",
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "question33",
              "startWithNewLine": false,
              "title": "RR  (?/?)",
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "question34",
              "startWithNewLine": false,
              "title": "BZ (mmol)",
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "question35",
              "startWithNewLine": false,
              "title": "GCS",
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "question36",
              "startWithNewLine": false,
              "title": "Rekap",
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "question37",
              "title": "Puls (bpm)"
            },
            {
              "type": "boolean",
              "name": "question39",
              "startWithNewLine": false,
              "title": "Puls regelmäßig?"
            },
            {
              "type": "comment",
              "name": "question38",
              "startWithNewLine": false,
              "title": "DMS"
            }
          ]
        },
        {
          "type": "panel",
          "name": "question41",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "question40",
              "title": "Verletzungen",
              "columns": [
                {
                  "name": "Column 1",
                  "title": "Körperseite",
                  "cellType": "dropdown",
                  "choices": [
                    {
                      "value": 1,
                      "text": "keine Angabe"
                    },
                    {
                      "value": 2,
                      "text": "rechts"
                    },
                    {
                      "value": 3,
                      "text": "mittig"
                    },
                    {
                      "value": 4,
                      "text": "links"
                    }
                  ],
                  "storeOthersAsComment": true
                },
                {
                  "name": "Column 4",
                  "title": "Körperteil",
                  "cellType": "dropdown",
                  "readOnly": true,
                  "choices": [
                    {
                      "value": 1,
                      "text": "keine Angabe"
                    },
                    {
                      "value": 2,
                      "text": "Kopf"
                    },
                    {
                      "value": 3,
                      "text": "Hals"
                    },
                    {
                      "value": 4,
                      "text": "Arme"
                    },
                    {
                      "value": 5,
                      "text": "Hände"
                    },
                    {
                      "value": 6,
                      "text": "Oberkörper"
                    },
                    {
                      "value": 7,
                      "text": "Hüfte"
                    },
                    {
                      "value": 8,
                      "text": "Beine"
                    },
                    {
                      "value": 9,
                      "text": "Füße"
                    }
                  ],
                  "storeOthersAsComment": true
                },
                {
                  "name": "Column 2",
                  "title": "Art",
                  "cellType": "dropdown",
                  "choices": [
                    {
                      "value": 2,
                      "text": "keine Angabe"
                    },
                    {
                      "value": 3,
                      "text": "Fraktur"
                    },
                    {
                      "value": 4,
                      "text": "Weichteil-"
                    },
                    {
                      "value": 5,
                      "text": "Schürfwunde"
                    },
                    {
                      "value": 6,
                      "text": "oberflächlich"
                    }
                  ],
                  "storeOthersAsComment": true
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "comment",
              "name": "question42",
              "startWithNewLine": false,
              "title": "Anmerkungen"
            }
          ]
        },
        {
          "type": "tagbox",
          "name": "question43",
          "title": "Atmung",
          "choices": [
            {
              "value": "Item 1",
              "text": "normal"
            },
            {
              "value": "Item 2",
              "text": "beschleunigt"
            },
            {
              "value": "Item 3",
              "text": "unregelmäßig"
            },
            {
              "value": "Item 4",
              "text": "Atemgeräusch"
            },
            {
              "value": "Item 5",
              "text": "Stillstand"
            },
            {
              "value": "Item 6",
              "text": "Sonstiges"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel2",
          "elements": [
            {
              "type": "tagbox",
              "name": "question44",
              "title": "Bewusstsein",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "normal/orientiert"
                },
                {
                  "value": "Item 2",
                  "text": "getrübt"
                },
                {
                  "value": "Item 3",
                  "text": "bewusstlos"
                },
                {
                  "value": "Item 7",
                  "text": "Sonstiges"
                }
              ]
            },
            {
              "type": "text",
              "name": "question29",
              "startWithNewLine": false,
              "title": "in Minuten",
              "inputType": "time"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel7",
          "elements": [
            {
              "type": "tagbox",
              "name": "question311",
              "title": "Kreislauf",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "normal"
                },
                {
                  "value": "Item 2",
                  "text": "gestört"
                },
                {
                  "value": "Item 3",
                  "text": "Schock"
                },
                {
                  "value": "Item 6",
                  "text": "Herzstillstand"
                },
                {
                  "value": "Item 7",
                  "text": "Sonstiges"
                }
              ]
            },
            {
              "type": "text",
              "name": "question411",
              "startWithNewLine": false,
              "title": "in Minuten",
              "inputType": "time"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel3",
          "elements": [
            {
              "type": "tagbox",
              "name": "question46",
              "title": "Erkrankung",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Infaktverdacht"
                },
                {
                  "value": "Item 2",
                  "text": "akuter Bauch"
                },
                {
                  "value": "Item 3",
                  "text": "Sonnenstich"
                },
                {
                  "value": "Item 6",
                  "text": "Hitzschlag"
                },
                {
                  "value": "Item 7",
                  "text": "Epilepsie"
                },
                {
                  "value": "Item 8",
                  "text": "Diabetes"
                },
                {
                  "value": "Item 9",
                  "text": "Alkoholvergiftung"
                },
                {
                  "value": "Item 10",
                  "text": "Unterkühlung"
                },
                {
                  "value": "Item 11",
                  "text": "Herzschrittmacher"
                },
                {
                  "value": "Item 12",
                  "text": "Sonstiges"
                }
              ]
            },
            {
              "type": "comment",
              "name": "question47",
              "startWithNewLine": false,
              "title": "Anmerkung"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel4",
          "elements": [
            {
              "type": "tagbox",
              "name": "question48",
              "title": "Pupillen links",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "keine Angabe"
                },
                {
                  "value": "Item 2",
                  "text": "normal"
                },
                {
                  "value": "Item 3",
                  "text": "Lichtreaktion"
                },
                {
                  "value": "Item 4",
                  "text": "eng"
                },
                {
                  "value": "Item 5",
                  "text": "weit"
                },
                {
                  "value": "Item 6",
                  "text": "entrundet"
                },
                {
                  "value": "Item 7",
                  "text": "nicht beurteilbar"
                }
              ]
            },
            {
              "type": "tagbox",
              "name": "question49",
              "startWithNewLine": false,
              "title": "Pupillen rechts",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "keine Angabe"
                },
                {
                  "value": "Item 2",
                  "text": "normal"
                },
                {
                  "value": "Item 3",
                  "text": "Lichtreaktion"
                },
                {
                  "value": "Item 4",
                  "text": "eng"
                },
                {
                  "value": "Item 5",
                  "text": "weit"
                },
                {
                  "value": "Item 6",
                  "text": "entrundet"
                },
                {
                  "value": "Item 7",
                  "text": "nicht beurteilbar"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel5",
          "elements": [
            {
              "type": "tagbox",
              "name": "question50",
              "title": "Medizinische Maßnahmen",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Körpercheck"
                },
                {
                  "value": "Item 2",
                  "text": "Verband"
                },
                {
                  "value": "Item 3",
                  "text": "Schienung"
                },
                {
                  "value": "Item 6",
                  "text": "Reposition"
                },
                {
                  "value": "Item 7",
                  "text": "stabile Seitenlage"
                },
                {
                  "value": "Item 8",
                  "text": "Wärmeschutz"
                },
                {
                  "value": "Item 9",
                  "text": "Infusion"
                },
                {
                  "value": "Item 10",
                  "text": "Intubation"
                },
                {
                  "value": "Item 13",
                  "text": "Beatmung"
                },
                {
                  "value": "Item 14",
                  "text": "Herzdruckmassage"
                },
                {
                  "value": "Item 12",
                  "text": "Sonstiges"
                }
              ]
            },
            {
              "type": "comment",
              "name": "question51",
              "startWithNewLine": false,
              "title": "Anmerkung"
            }
          ]
        },
        {
          "type": "comment",
          "name": "question52",
          "title": "Medikation"
        },
        {
          "type": "comment",
          "name": "question53",
          "title": "Bemerkungen",
          "description": "Allergien, Tel. Angehöriger, Wertsachen, etc."
        },
        {
          "type": "text",
          "name": "question54",
          "title": "behandelnder  Arzt"
        }
      ]
    }
  ],
  "showNavigationButtons": false,
  "showPrevButton": false,
  "autoAdvanceEnabled": true,
  "autoAdvanceAllowComplete": false,
  "questionsOnPageMode": "singlePage"
}