export const arvore = {
  "nome": "A célula tem Núcleo?",
  "filhos": [
    {
      "nome": "Sim",
      "filhos": [
        {
          "nome": "realiza fotosintese",
          "filhos": [
            {
              "nome": "Sim",
              "filhos": [
                {
                  "nome": "é Unicelular?",
                  "filhos": [
                    {
                      "nome": "Sim",
                      "filhos": [
                        { "nome": "Reino Protista algas", "filhos": [] }
                      ]
                    },
                    {
                      "nome": "Não",
                      "filhos": [
                        {
                          "nome": "diferenciação de tecidos",
                          "filhos": [
                            {
                              "nome": "Sim",
                              "filhos": [
                                { "nome": "Reino Vegetal", "filhos": [] }
                              ]
                            },
                            {
                              "nome": "Não",
                              "filhos": [
                                { "nome": "Reino Protista algas pluri", "filhos": [] }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nome": "Não",
              "filhos": [
                {
                  "nome": "é unicelular?",
                  "filhos": [
                    {
                      "nome": "Sim",
                      "filhos": [
                        {
                          "nome": "Tem parede celular",
                          "filhos": [
                            {
                              "nome": "Sim",
                              "filhos": [
                                { "nome": "Reino Fungi", "filhos": [] }
                              ]
                            },
                            {
                              "nome": "Não",
                              "filhos": [
                                { "nome": "Reino Protista", "filhos": [] }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nome": "Não",
                      "filhos": [
                        {
                          "nome": "celula tipo hifas reino fungi",
                          "filhos": [
                            {
                              "nome": "Sim",
                              "filhos": [
                                { "nome": "Reino Fungos", "filhos": [] }
                              ]
                            },
                            {
                              "nome": "Não",
                              "filhos": [
                                { "nome": "Reino Animalia", "filhos": [] }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nome": "Não",
      "filhos": [
        { "nome": "Reino Monera", "filhos": [] }
      ]
    }
  ]
};