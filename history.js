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
                          Heroes.MINDTHIEF
                        ],
                        date: "22.07.2020",
                      },
                      {
                        team: [Heroes.CRAGHEART, Heroes.SPELLWEAVER],
                        date: "04.08.2020",
                      },
                    ],
                    children:[
                      {
                        name: "Rifugio della Negromante",
                        number: 20,
                        parent: "Grotta Vibrante",
                        state: States.TODO,
                        trials: [
                          {
                           team: [
                             Heroes.CRAGHEARTH, 
                             Heroes.SCOUNDREL, 
                             Heroes.SPELLWEAVER
                           ],
                            date: "11.08.2020"
                          }
                        ]
                      }
                    ]
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
                            state: States.TODO,
                          },
                          {
                            name: "Bastioni di Gloomhaven B",
                            number: 36,
                            parent: "Tempio degli elementi",
                            state: States.TODO,
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
                        state: States.SIDEQUEST
                      }
                    ]
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
