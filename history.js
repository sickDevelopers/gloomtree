var treeData = [
  {
    name: "Tumulo Nero",
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
                    parent: "Magazzino di Gloomhaven",
                    state: States.TODO,
                    trials: [
                        {
                            team: [
                              Heroes.CRAGHEART,
                              Heroes.BRUTE,
                              Heroes.SPELLWEAVER,
                              Heroes.SCOUNDREL,
                            ],
                            date: "25.05.2020"
                          }
                    ]
                  },
                  {
                    name: "Tempio del veggente",
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
                        parent: "Tempio del veggente",
                        state: States.TODO,
                      },
                    ],
                  },

                  {
                    name: "Conca ghiacciata",
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
                parent: "Accampamento Inox",
                state: States.BLOCKED,
              },
            ],
          },
          {
            name: "Cripta dei dannati",
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
                        date: "20.05.2020"
                      },
                      {
                        team: [
                          Heroes.CRAGHEART,
                          Heroes.SCOUNDREL,
                          Heroes.SPELLWEAVER,
                          Heroes.MINDTHIEF,
                        ],
                        date: "10.06.2020"
                      }
                    ],
                  },
                  {
                    name: "Cripta Dimenticata",
                    parent: "Cripta in rovina",
                    state: States.TODO,
                    trials: [],
                  },
                ],
              },
              {
                name: "Cripta Marcescente",
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
