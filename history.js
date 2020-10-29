var treeData = [
  {
    name: "Tumulo Nero",
    number: 1,
    parent: "null",
    state: States.DONE,
    trials: [
      {
        team: [
          Heroes.BRUTE,
          Heroes.SPELLWEAVER,
          Heroes.MINDTHIEF,
          Heroes.SCOUNDREL,
        ],
        date: "04.03.2020",
      },
      {
        team: [Heroes.CRAGHEART, Heroes.TINKERER],
        date: "12.03.2020",
      },
    ],
    children: [
      {
        name: "Biblioteca Arcana",
        number: 67,
        parent: "Tumulo Nero",
        state: States.EXTRA,
        trials: [
          {
            team: [Heroes.SPELLWEAVER, Heroes.BRUTE],
            date: "02.05.2020",
          },
        ],
      },
      {
        name: "Tana del Tumulo",
        number: 2,
        parent: "Tumulo Nero",
        state: States.DONE,
        trials: [
          {
            team: [Heroes.CRAGHEART, Heroes.TINKERER],
            date: "13.03.2020",
          },
          {
            team: [Heroes.CRAGHEART, Heroes.TINKERER],
            date: "15.03.2020",
          },
          {
            team: [Heroes.SPELLWEAVER, Heroes.SCOUNDREL],
            date: "18.03.2020",
          },

          {
            team: [Heroes.CRAGHEART, Heroes.TINKERER],
            date: "20.03.2020",
          },
        ],
        children: [
          {
            name: "Accampamento Inox",
            number: 3,
            parent: "Tana del tumulo",
            state: States.DONE,
            trials: [
              {
                team: [Heroes.CRAGHEART, Heroes.TINKERER],
                date: "25.03.2020",
              },
            ],
            children: [
              {
                name: "Magazzino di Gloomhaven",
                number: 8,
                parent: "Accampamento Inox",
                state: States.DONE,
                trials: [
                  {
                    team: [Heroes.CRAGHEART, Heroes.TINKERER],
                    date: "14.03.2020",
                  },
                ],
                children: [
                  {
                    name: "Grotta Vibrante",
                    number: 7,
                    parent: "Magazzino di Gloomhaven",
                    state: States.DONE,
                    trials: [
                      {
                        team: [
                          Heroes.CRAGHEART,
                          Heroes.BRUTE,
                          Heroes.SPELLWEAVER,
                          Heroes.SCOUNDREL,
                        ],
                        date: "25.05.2020",
                      },
                      {
                        team: [
                          Heroes.CRAGHEART,
                          Heroes.BRUTE,
                          Heroes.SPELLWEAVER,
                          Heroes.SCOUNDREL,
                          Heroes.MINDTHIEF,
                        ],
                        date: "22.07.2020",
                      },
                      {
                        team: [Heroes.CRAGHEART, Heroes.SPELLWEAVER],
                        date: "04.08.2020",
                      },
                    ],
                    children: [
                      {
                        name: "Rifugio della Negromante",
                        number: 20,
                        parent: "Grotta Vibrante",
                        state: States.DONE,
                        trials: [
                          {
                            team: [
                              Heroes.CRAGHEART,
                              Heroes.SCOUNDREL,
                              Heroes.SPELLWEAVER,
                            ],
                            date: "11.08.2020",
                          },
                          {
                            team: [
                              Heroes.BRUTE,
                              Heroes.MINDTHIEF,
                              Heroes.SPELLWEAVER,
                              Heroes.NIGHTSHROUD,
                            ],
                            date: "24.08.2020",
                          },
                        ],
                        children: [
                          {
                            name: "Passo di montagna",
                            number: 16,
                            state: States.DONE,
                            trials: [
                              {
                                team: [
                                  Heroes.CRAGHEART,
                                  Heroes.SPELLWEAVER,
                                  Heroes.MINDTHIEF,
                                  Heroes.SCOUNDREL,
                                ],
                                date: "31.08.2020",
                              },
                            ],
                            children: [
                              {
                                name: "Camera dell'Eco",
                                number: 24,
                                state: States.DONE,
                                trials: [
                                  {
                                    team: [
                                      Heroes.NIGHTSHROUD,
                                      Heroes.SPELLWEAVER,
                                      Heroes.MINDTHIEF,
                                      Heroes.BRUTE,
                                    ],
                                    date: "23.10.2020"
                                  }
                                ],
                                children: [
                                  {
                                    name: "Fossa di magma",
                                    number: 63,
                                    state: States.EXTRA
                                  },
                                  {
                                    name: "Santuiario delle profonmdità",
                                    number: 30,
                                    state: States.TODO,
                                    trials: []
                                  },
                                  {
                                    name: "Bosco decrepito",
                                    number: 32,
                                    state: States.DONE,
                                    trials: [
                                      {
                                        team: [
                                          Heroes.NIGHTSHROUD,
                                          Heroes.SPELLWEAVER,
                                          Heroes.MINDTHIEF,
                                          Heroes.SCOUNDREL,
                                          Heroes.BRUTE,
                                        ],
                                        date: "28.10.2020"
                                      }
                                    ],
                                    children: [
                                      {
                                        name: "Rete di Antiche Difese",
                                        number: 40,
                                        state: States.TODO
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                name: "Valico di Rupegelida",
                                number: 25,
                                state: States.DONE,
                                trials: [
                                  {
                                    team: [
                                      Heroes.NIGHTSHROUD,
                                      Heroes.SPELLWEAVER,
                                      Heroes.MINDTHIEF,
                                      Heroes.SCOUNDREL,
                                      Heroes.BRUTE,
                                    ],
                                    date: "07.09.2020",
                                  },
                                ],
                                children: [
                                  {
                                    name: "Armeria Savvas",
                                    number: 33,
                                    state: States.TODO,
                                    trials: [
                                      {
                                        team: [
                                          Heroes.NIGHTSHROUD,
                                          Heroes.SPELLWEAVER,
                                          Heroes.MINDTHIEF,
                                          Heroes.SCOUNDREL,
                                          Heroes.BRUTE,
                                        ],
                                        date: "14.09.2020",
                                      },
                                    ],
                                  },
                                  {
                                    name: "Cima Rovente",
                                    number: 34,
                                    state: States.TODO,
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: "Fognature Abbandonate",
                            number: 18,
                            state: States.DONE,
                            trials: [
                              {
                                team: [Heroes.NIGHTSHROUD, Heroes.CRAGHEART],
                                date: "28.08.2020",
                              },
                              {
                                team: [Heroes.NIGHTSHROUD, Heroes.CRAGHEART],
                                date: "03.09.2020",
                              },
                            ],
                            children: [
                              {
                                name: "Rovine Profonde",
                                number: 23,
                                state: States.DONE,
                                trials: [
                                  {
                                    team: [
                                      Heroes.NIGHTSHROUD,
                                      Heroes.CRAGHEART,
                                    ],
                                    date: "06.09.2020",
                                  },
                                ],
                              },
                              {
                                name: "Antica Cisterna",
                                number: 26,
                                state: States.DONE,
                                trials: [
                                  {
                                    team: [
                                      Heroes.CRAGHEART,
                                      Heroes.MINDTHIEF,
                                      Heroes.SCOUNDREL,
                                      Heroes.SPELLWEAVER,
                                    ],
                                    date: "01.10.2020",
                                  },
                                ],
                                children: [
                                  {
                                    name: "Caserme Ovest",
                                    number: 57,
                                    state: States.SIDEQUEST_DONE,
                                    trials: [
                                      {
                                        team: [
                                          Heroes.NIGHTSHROUD,
                                          Heroes.CRAGHEART,
                                        ],
                                        date: "06.10.2020",
                                      },
                                    ],
                                    children: [
                                      {
                                        name: "Baracca Cremisi",
                                        number: 58,
                                        state: States.SIDEQUEST,
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "Nido dei drachi",
                                number: 43,
                                state: States.DONE,
                                trials: [
                                  {
                                    team: [
                                      Heroes.NIGHTSHROUD,
                                      Heroes.BRUTE,
                                      Heroes.SPELLWEAVER,
                                    ],
                                    date: "29.09.2020",
                                  },
                                ],
                                children: [
                                  {
                                    name: "Montagna Bruciante",
                                    number: 82,
                                    state: States.EXTRA,
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: "Camera esterna del rituale",
                            number: 28,
                            state: States.TODO,
                          },
                          {
                            name: "Relitto Sommerso",
                            number: 93,
                            state: States.EXTRA_DONE,
                            trials: [
                              {
                                team: [Heroes.CRAGHEART, Heroes.NIGHTSHROUD],
                                date: "26.08.2020",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Tempio del veggente",
                    number: 13,
                    parent: "Magazzino di Gloomhaven",
                    state: States.DONE,
                    trials: [
                      {
                        team: [Heroes.BRUTE, Heroes.MINDTHIEF],
                        date: "23.04.2020",
                      },
                    ],
                    children: [
                      {
                        name: "Isola Perduta",
                        number: 17,
                        parent: "Tempio del veggente",
                        state: States.TODO,
                        trials: [
                          {
                            team: [
                              Heroes.BRUTE,
                              Heroes.MINDTHIEF,
                              Heroes.CRAGHEART,
                              Heroes.SCOUNDREL,
                            ],
                            date: "28.07.2020",
                          },
                        ],
                      },
                    ],
                  },

                  {
                    name: "Conca ghiacciata",
                    number: 14,
                    parent: "Magazzino di Gloomhaven",
                    state: States.DONE,
                    trials: [
                      {
                        team: [Heroes.BRUTE, Heroes.MINDTHIEF],
                        date: "12.04.2020",
                      },
                    ],
                  },
                  {
                    name: "Brughiera Tossica",
                    number: 68,
                    parent: "Magazzino di Gloomhaven",
                    state: States.EXTRA_DONE,
                    trials: [
                      {
                        team: [Heroes.CRAGHEART, Heroes.TINKERER],
                        date: "18.06.2020",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Miniera di Diamanti",
                number: 9,
                parent: "Accampamento Inox",
                state: States.BLOCKED,
              },
            ],
          },
          {
            name: "Cripta dei dannati",
            number: 4,
            parent: "Tumulo Nero",
            state: States.DONE,
            trials: [
              {
                team: [Heroes.BRUTE, Heroes.SCOUNDREL],
                date: "28.04.2020",
              },
            ],
            children: [
              {
                name: "Cripta in rovina",
                number: 5,
                parent: "Cripta dei dannati",
                state: States.DONE,
                trials: [
                  {
                    team: [Heroes.TINKERER, Heroes.CRAGHEART],
                    date: "16.05.2020",
                  },
                ],
                children: [
                  {
                    name: "Piano del potere Elementale",
                    number: 10,
                    parent: "Cripta in rovina",
                    state: States.DONE,
                    trials: [
                      {
                        team: [
                          Heroes.CRAGHEART,
                          Heroes.BRUTE,
                          Heroes.SPELLWEAVER,
                          Heroes.MINDTHIEF,
                        ],
                        date: "20.05.2020",
                      },
                      {
                        team: [
                          Heroes.CRAGHEART,
                          Heroes.SCOUNDREL,
                          Heroes.SPELLWEAVER,
                          Heroes.MINDTHIEF,
                        ],
                        date: "10.06.2020",
                      },
                    ],
                    children: [
                      {
                        name: "Tempio degli Elementi",
                        number: 22,
                        parent: "Piano del potere Elementale",
                        state: States.DONE,
                        trials: [
                          {
                            team: [
                              Heroes.CRAGHEART,
                              Heroes.BRUTE,
                              Heroes.SCOUNDREL,
                              Heroes.MINDTHIEF,
                            ],
                            date: "13.07.2020",
                          },
                        ],
                        children: [
                          {
                            name: "Piano della notte",
                            number: 31,
                            parent: "Tempio degli elementi",
                            state: States.TODO,
                          },
                          {
                            name: "Bastioni di Gloomhaven A",
                            number: 35,
                            parent: "Tempio degli elementi",
                            state: States.DONE,
                            trials: [
                              {
                                team: [
                                  Heroes.NIGHTSHROUD,
                                  Heroes.SPELLWEAVER,
                                  Heroes.BRUTE,
                                  Heroes.SCOUNDREL,
                                  Heroes.MINDTHIEF,
                                ],
                                date: "24.09.2020",
                              },
                            ],
                            children: [
                              {
                                name: "Palude dei Ribelli",
                                number: 45,
                                state: States.DONE,
                                trials: [
                                  {
                                    team: [
                                      Heroes.NIGHTSHROUD,
                                      Heroes.SPELLWEAVER,
                                      Heroes.BRUTE,
                                      Heroes.SCOUNDREL,
                                      Heroes.MINDTHIEF
                                    ],
                                    date: "08.10.2020"
                                  }
                                ],
                                children: [
                                  {
                                    name: "Avamposto dei ribelli",
                                    number: 49,
                                    state: States.DONE,
                                    trials: [
                                      {
                                        team: [
                                          Heroes.NIGHTSHROUD,
                                          Heroes.SPELLWEAVER,
                                          Heroes.BRUTE,
                                          Heroes.SCOUNDREL,
                                          Heroes.MINDTHIEF
                                        ],
                                        date: "15.10.2020"
                                      }
                                    ],
                                    children: [
                                      {
                                        name: "Miniera sulfurea",
                                        number: 65,
                                        state: States.EXTRA,
                                        trials: []
                                      }
                                    ]
                                  },
                                  {
                                    name: "Fortezza Fantasma",
                                    number: 50,
                                    state: States.TODO
                                  }
                                ]
                              },
                            ],
                          },
                          {
                            name: "Bastioni di Gloomhaven B",
                            number: 36,
                            parent: "Tempio degli elementi",
                            state: States.BLOCKED,
                          },
                        ],
                      },
                      {
                        name: "Trono Infernale",
                        parent: "Piano del potere Elementale",
                        state: States.TODO,
                      },
                    ],
                  },
                  {
                    name: "Cripta Dimenticata",
                    number: 19,
                    parent: "Cripta in rovina",
                    state: States.DONE,
                    trials: [
                      {
                        team: [
                          Heroes.SCOUNDREL,
                          Heroes.CRAGHEART,
                          Heroes.MINDTHIEF,
                          Heroes.SPELLWEAVER,
                        ],
                        date: "10.08.2020",
                      },
                      {
                        team: [Heroes.TINKERER, Heroes.CRAGHEART],
                        date: "10.08.2020",
                      },
                    ],
                    children: [
                      {
                        name: "Varco Rovinoso",
                        number: 27,
                        parent: "Cripta Dimenticata",
                        state: States.TODO,
                      },
                      {
                        name: "Faro Evanescente",
                        number: 61,
                        parent: "",
                        state: States.SIDEQUEST_DONE,
                        trials: [
                          {
                            team: [Heroes.TINKERER, Heroes.CRAGHEART],
                            date: "11.08.2020",
                          },
                        ],
                        children: [
                          {
                            name: "Fossa delle Anime",
                            number: 62,
                            state: States.SIDEQUEST_DONE,
                            trials: [
                              {
                                team: [Heroes.TINKERER, Heroes.SPELLWEAVER],
                                date: "12.08.2020",
                              },
                              {
                                team: [Heroes.TINKERER, Heroes.CRAGHEART],
                                date: "18.08.2020",
                              },
                              {
                                team: [Heroes.TINKERER, Heroes.CRAGHEART],
                                date: "18.08.2020",
                              },
                              {
                                team: [
                                  Heroes.TINKERER,
                                  Heroes.SCOUNDREL,
                                  Heroes.BRUTE,
                                  Heroes.SPELLWEAVER,
                                ],
                                date: "19.08.2020",
                              },
                              {
                                team: [
                                  Heroes.TINKERER,
                                  Heroes.CRAGHEART,
                                  Heroes.MINDTHIEF,
                                ],
                                date: "20.08.2020",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Cripta Marcescente",
                number: 6,
                parent: "Cripta dei dannati",
                state: States.DONE,
                trials: [
                  {
                    team: [Heroes.TINKERER, Heroes.CRAGHEART],
                    date: "09.05.2020",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
