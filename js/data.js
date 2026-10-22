/* =========================================================
   BUSTRACKING — Dados do projeto
   Rotas: arquivos LINHAS fornecidos para o projeto.
   Horários: PDF de horários do TCA fornecido para o projeto.
   ========================================================= */

window.BUS_DATA = {
  "city": "Araras-SP",
  "buses": [
    {
      "id": "102-01",
      "number": "102",
      "lineId": "102",
      "status": "Em operação",
      "speed": 32,
      "nextStop": "Rua Coronel Justiniano, 2-52",
      "eta": 3,
      "x": 27,
      "y": 45,
      "direction": "José Ometto · Saída do Terminal"
    },
    {
      "id": "102-02",
      "number": "102",
      "lineId": "102",
      "status": "Em operação",
      "speed": 28,
      "nextStop": "Rua Jarbas Leme de Godoy, 791-1003",
      "eta": 7,
      "x": 56,
      "y": 54,
      "direction": "José Ometto · Saída do Bairro"
    },
    {
      "id": "202-01",
      "number": "202",
      "lineId": "202",
      "status": "Em operação",
      "speed": 25,
      "nextStop": "Avenida Loreto, 806",
      "eta": 5,
      "x": 71,
      "y": 28,
      "direction": "Parque Tiradentes · Saída do Terminal"
    },
    {
      "id": "301-01",
      "number": "301",
      "lineId": "301",
      "status": "Parado",
      "speed": 0,
      "nextStop": "Terminal Urbano",
      "eta": 0,
      "x": 42,
      "y": 70,
      "direction": "Pq. Industrial/Narciso Gomes · Saída do Terminal"
    }
  ],
  "lines": [
    {
      "id": "102",
      "name": "José Ometto",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Luiz Carlos Tunes, 2-74",
            "Avenida Irineu Carrocci, 1245",
            "Avenida Luiz Carlos Tunes, 1374-1438",
            "Rua Luiza Metzner de Moraes, 57",
            "Rua Luiza Metzner de Moraes, 222",
            "Rua Luiza Metzner de Moraes, 232",
            "Rua Laurindo Fazanaro, 177-345",
            "Rua Laurindo Fazanaro, 224",
            "Rua José Kauffmann, 178-240",
            "Rua Carlos Alberto Naitzel, 398-458",
            "Rua Carlos Alberto Naitzel, 709-763",
            "Rua Pedro Moscarde, 101-151",
            "Rua Jarbas Leme de Godoy, 791-1003",
            "Rua Jarbas Leme de Godói, 454",
            "Rua Jarbas Leme de Godoy, 421-531",
            "Rua Jarbas Leme de Godoy, 268",
            "Rua Comerciário, 259-307",
            "Rua Comerciário, 201",
            "Rua da Tecelã, 464",
            "Avenida Lourenço Batistela, 421-469",
            "Avenida Lourenço Batistela, 165-209",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Rua Industriário, 141-263",
            "Avenida Lourenço Batistela, 364-420",
            "Avenida Presidente Vargas, 1-139",
            "Avenida Presidente Vargas, 1024",
            "Avenida Presidente Vargas, 1156-1294",
            "Avenida Presidente Vargas, 1408",
            "Avenida Luiz Carlos Tunes, 2-74"
          ]
        }
      ]
    },
    {
      "id": "103",
      "name": "José Ometto",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Viviane Cristina Hepfner, 51-95",
            "Av Presidente Vargas, 1361",
            "Avenida Presidente Vargas, 1247",
            "Avenida Presidente Vargas, 1013",
            "Avenida Presidente Vargas, 2767-2965",
            "Avenida Presidente Vargas, 777-911",
            "Avenida Lourenço Batistela, 421-469",
            "Avenida Lourenço Batistela, 165-209",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Augusta Viola da Costa, 3172-3370",
            "Rua Industriário, 141-263",
            "Avenida Lourenço Batistela, 364-420",
            "Rua da Tecelã, 464",
            "Rua Comerciário, 56-104",
            "Rua Comerciário, 260-308",
            "Rua Jarbas Leme de Godoy, 306",
            "Rua Jarbas Leme de Godoy, 452",
            "Rua Jarbas Leme de Godói, 860",
            "Rua Pedro Moscarde, 154-206",
            "Rua Carlos Alberto Naitzel, 710-764",
            "Rua Carlos Alberto Naitzel, 397-457",
            "Rua Jose Kauffaman, 104",
            "Rua Giocondo Batistella, 91",
            "Rua Luiza Metzner de Moraes, 232",
            "Rua Luiza Metzner de Moraes, 212",
            "Rua Luiza Metzner de Moraes, 2-72",
            "Avenida Luiz Carlos Tunes, 4065",
            "Avenida Luiz Carlos Tunes, 1215-1247",
            "Avenida Luiz Carlos Tunes, 75-177",
            "Rua Viviane Cristina Hepfner, 51-95"
          ]
        }
      ]
    },
    {
      "id": "104",
      "name": "José Ometto - REFORÇO",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Luiz Carlos Tunes, 2-74",
            "Avenida Irineu Carrocci, 1245",
            "Avenida Luiz Carlos Tunes, 1374-1438",
            "Rua Luiza Metzner de Moraes, 57",
            "Rua Luiza Metzner de Moraes, 222",
            "Rua Luiza Metzner de Moraes, 232",
            "Rua Laurindo Fazanaro, 177-345",
            "Rua Laurindo Fazanaro, 224",
            "Rua José Kauffmann, 178-240",
            "Rua Carlos Alberto Naitzel, 398-458",
            "Rua Carlos Alberto Naitzel, 709-763",
            "Rua Pedro Moscarde, 101-151",
            "Rua Jarbas Leme de Godoy, 791-1003",
            "Rua Jarbas Leme de Godói, 454",
            "Rua Jarbas Leme de Godoy, 421-531",
            "Rua Jarbas Leme de Godoy, 268",
            "Rua Comerciário, 259-307",
            "Rua Comerciário, 201",
            "Rua da Tecelã, 464",
            "Avenida Lourenço Batistela, 421-469",
            "Avenida Lourenço Batistela, 165-209",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Augusta Viola da Costa, 3172-3370",
            "Rua Industriário, 141-263",
            "Avenida Lourenço Batistela, 364-420",
            "Avenida Presidente Vargas, 1-139",
            "Avenida Presidente Vargas, 1024",
            "Avenida Presidente Vargas, 1156-1294",
            "Avenida Presidente Vargas, 1408",
            "Avenida Luiz Carlos Tunes, 2-74"
          ]
        }
      ]
    },
    {
      "id": "105",
      "name": "José Ometto",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Luiz Carlos Tunes, 4065",
            "Avenida Luiz Carlos Tunes, 1215-1247",
            "Avenida Luiz Carlos Tunes, 75-177",
            "Rua Viviane Cristina Hepfner, 51-95",
            "Av Presidente Vargas, 1361",
            "Avenida Presidente Vargas, 1247",
            "Avenida Presidente Vargas, 1013",
            "Avenida Presidente Vargas, 2767-2965",
            "Avenida Presidente Vargas, 777-911",
            "Avenida Lourenço Batistela, 421-469",
            "Avenida Lourenço Batistela, 165-209",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Rua Industriário, 141-263",
            "Avenida Lourenço Batistela, 364-420",
            "Rua da Tecelã, 464",
            "Rua Comerciário, 56-104",
            "Rua Comerciário, 260-308",
            "Rua Jarbas Leme de Godoy, 306",
            "Rua Jarbas Leme de Godoy, 452",
            "Rua Jarbas Leme de Godói, 860",
            "Rua Pedro Moscarde, 154-206",
            "Rua Carlos Alberto Naitzel, 710-764",
            "Rua Carlos Alberto Naitzel, 397-457",
            "Rua Jose Kauffaman, 104",
            "Rua Giocondo Batistella, 91",
            "Rua Luiza Metzner de Moraes, 232",
            "Rua Luiza Metzner de Moraes, 212",
            "Rua Luiza Metzner de Moraes, 2-72",
            "Avenida Luiz Carlos Tunes, 4065"
          ]
        }
      ]
    },
    {
      "id": "201",
      "name": "Parque Tiradentes",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua José Fernandes, 597",
            "Rua Laerte Tognasca, 76",
            "Rua Laerte Tognasca, 63",
            "Rua Ardoino Zaniboni, 286-332",
            "Rua Lourdes Chaib de Oliveira, 282",
            "Avenida Irineu Carrocci, 160-172",
            "Avenida Irineu Carrocci, 301-415",
            "Avenida Augusta Viola da Costa, 2527-2677",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Augusta Viola da Costa, 3740-3814",
            "Avenida Augusta Viola da Costa, 4258-4320",
            "Av Irineu Carrocci - Guerino",
            "Rua Nicola Rici, 68",
            "Rua Valdemar de Ponte, 77",
            "Rua Antônio Alves, 426",
            "Rua Antônio Alves, 666-706",
            "Rua Ângelo Francato, 147",
            "Rua César Zanca, 306",
            "Rua Reinaldo Cavenaghi, 219",
            "Rua Lauro Beinoti, 191",
            "Rua Anderson Bordini - Lado Sonoco",
            "Avenida Luiz Carlos Tunes, 2696-2842",
            "Rua Angelo Ghirardini",
            "Rua Luiz de Ponte",
            "Rua Maria Luiza Finardi Mazetto",
            "Rua Palmyra Pipa Zeni, 100",
            "Rua Palmyra Pipa Zani, 30",
            "Avenida João Alfredo Graf, 643-763",
            "Rua Joao Alfredo Graf, 950",
            "Rua Joao Alfredo Graf, 558",
            "Rua Joao Alfredo Graf, 356",
            "Rua José Fernandes, 709",
            "Rua José Fernandes, 597"
          ]
        }
      ]
    },
    {
      "id": "202",
      "name": "Parque Tiradentes",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Antônio Alves - Adalgisa",
            "Rua Antônio Alves, 426",
            "Rua Antonio Alves, 239",
            "Rua Antônio Alves, 65",
            "Rua Lourdes Chaib de Oliveira, 282",
            "Avenida Irineu Carrocci, 160-172",
            "Avenida Irineu Carrocci, 301-415",
            "Avenida Augusta Viola da Costa, 2527-2677",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Augusta Viola da Costa, 3172-3370",
            "Avenida Augusta Viola da Costa, 3740-3814",
            "Avenida Augusta Viola da Costa, 4258-4320",
            "Av Irineu Carrocci - Guerino",
            "Avenida Irineu Carrocci, 109-139",
            "Rua Antônio Alves, 68-174",
            "Rua Ardoino Zanobio, 19",
            "Rua Laerte Tognasca, 78",
            "Rua Laerte Tognasca, 268",
            "Rua José Fernandes, 350",
            "Rua José Fernandes, 525",
            "Rua José Fernandes, 709",
            "Rua Joao Alfredo Graf, 388",
            "Rua Joao Alfredo Graf, 295",
            "Rua Lauro Benotti, 74",
            "Rua Lauro Beinoti, 211",
            "Rua César Zanca, 299",
            "Rua José Sorrosal - Igreja",
            "Rua Antônio Alves - Adalgisa"
          ]
        }
      ]
    },
    {
      "id": "203",
      "name": "Parque Tiradentes",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Antônio Alves, 666-706",
            "Rua Antônio Alves, 409-463",
            "Rua Antonio Alves, 239",
            "Rua Antônio Alves, 65",
            "Rua Lourdes Chaib de Oliveira, 282",
            "Avenida Irineu Carrocci, 160-172",
            "Avenida Irineu Carrocci, 301-415",
            "Avenida Augusta Viola da Costa, 2527-2677",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Augusta Viola da Costa, 3740-3814",
            "Avenida Augusta Viola da Costa, 4258-4320",
            "Av Irineu Carrocci - Guerino",
            "Avenida Irineu Carrocci, 109-139",
            "Rua Antônio Alves, 65",
            "Rua Ardoino Zanobio, 19",
            "Rua Laerte Tognasca, 78",
            "Rua Laerte Tognasca, 268",
            "Rua José Fernandes, 215",
            "Rua José Fernandes, 350",
            "Rua José Fernandes, 525",
            "Rua José Fernandes, 709",
            "Rua Joao Alfredo Graf, 388",
            "Rua Joao Alfredo Graf, 295",
            "Rua Anderson Bordini - Lado Sonoco",
            "Avenida Luiz Carlos Tunes, 2696-2842",
            "Rua Angelo Ghirardini",
            "Rua Luiz de Ponte",
            "Rua Maria Luiza Finardi Mazetto",
            "Rua Palmyra Pipa Zeni, 100",
            "Rua Palmyra Pipa Zani, 30",
            "Avenida João Alfredo Graf, 643-763",
            "Rua Reinaldo Cavenaghi, 219",
            "Rua César Zanca, 299",
            "Rua José Sorrosal - Igreja",
            "Rua Antônio Alves, 666-706"
          ]
        }
      ]
    },
    {
      "id": "204",
      "name": "Parque Tiradentes - Expresso Alternativo",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Antônio Alves, 666-706",
            "Rua José Fernandes, 597",
            "Rua José Fernandes, 215",
            "Av Orpheu Manente - Moveis Casarin",
            "Rua Tapajós - SENAI",
            "Av. Dona Renata - Sopro Divino",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Rua Pedro de Melo, 990",
            "Rua Pedro de Melo, 2-12",
            "Rua Pedro de Melo, 1554-1612",
            "Avenida Orpheu Manenti, 326",
            "Rua Lourdes Chaib de Oliveira, 282",
            "Avenida Irineu Carrocci, 160-172",
            "Rua Nicola Rici, 68",
            "Rua Valdemar de Ponte, 77",
            "Rua Antônio Alves, 426",
            "Rua Antônio Alves, 666-706"
          ]
        }
      ]
    },
    {
      "id": "206",
      "name": "Parque Tiradentes - Reforço",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Antônio Alves, 666-706",
            "Rua Antônio Alves, 409-463",
            "Rua Antonio Alves, 239",
            "Rua Antônio Alves, 65",
            "Rua Lourdes Chaib de Oliveira, 282",
            "Avenida Irineu Carrocci, 160-172",
            "Avenida Irineu Carrocci, 301-415",
            "Avenida Augusta Viola da Costa, 2527-2677",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Augusta Viola da Costa, 3172-3370",
            "Avenida Augusta Viola da Costa, 3740-3814",
            "Avenida Augusta Viola da Costa, 4258-4320",
            "Av Irineu Carrocci - Guerino",
            "Avenida Irineu Carrocci, 109-139",
            "Rua Antônio Alves, 65",
            "Rua Ardoino Zanobio, 19",
            "Rua Laerte Tognasca, 78",
            "Rua Laerte Tognasca, 268",
            "Rua José Fernandes, 215",
            "Rua José Fernandes, 350",
            "Rua José Fernandes, 525",
            "Rua José Fernandes, 709",
            "Rua Joao Alfredo Graf, 388",
            "Rua Joao Alfredo Graf, 295",
            "Rua Anderson Bordini - Lado Sonoco",
            "Avenida Luiz Carlos Tunes, 2696-2842",
            "Rua Angelo Ghirardini",
            "Rua Luiz de Ponte",
            "Rua Maria Luiza Finardi Mazetto",
            "Rua Palmyra Pipa Zeni, 100",
            "Rua Palmyra Pipa Zani, 30",
            "Rua Palmyra Pipa Zani, 10",
            "Avenida João Alfredo Graf, 643-763",
            "Rua Lauro Benotti, 74",
            "Rua Lauro Beinoti, 211",
            "Rua César Zanca, 299",
            "Rua José Sorrosal - Igreja",
            "Rua Antônio Alves, 666-706"
          ]
        }
      ]
    },
    {
      "id": "207",
      "name": "Parque Tiradentes",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Antônio Alves, 666-706",
            "Rua Antônio Alves, 409-463",
            "Rua Antonio Alves, 239",
            "Rua Antônio Alves, 65",
            "Rua Lourdes Chaib de Oliveira, 282",
            "Avenida Irineu Carrocci, 160-172",
            "Avenida Irineu Carrocci, 301-415",
            "Avenida Augusta Viola da Costa, 2527-2677",
            "Av Augusta Viola da Costa - Meneghin Automoveis",
            "Avenida Augusta Viola da Costa, 3056-3170",
            "Avenida Augusta Viola da Costa, 1632-1760",
            "Av Augusta Viola da Costa - Jd. Celina",
            "Avenida Augusta Viola da Costa, 1098-1192",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Augusta Viola da Costa, 3740-3814",
            "Avenida Augusta Viola da Costa, 4258-4320",
            "Av Irineu Carrocci - Guerino",
            "Avenida Irineu Carrocci, 109-139",
            "Rua Antônio Alves, 65",
            "Rua Ardoino Zanobio, 19",
            "Rua Laerte Tognasca, 78",
            "Rua Laerte Tognasca, 268",
            "Rua José Fernandes, 215",
            "Rua José Fernandes, 350",
            "Rua José Fernandes, 525",
            "Rua José Fernandes, 709",
            "Rua Joao Alfredo Graf, 388",
            "Rua Joao Alfredo Graf, 295",
            "Rua Anderson Bordini - Lado Sonoco",
            "Avenida Luiz Carlos Tunes, 2696-2842",
            "Rua Angelo Ghirardini",
            "Rua Luiz de Ponte",
            "Rua Maria Luiza Finardi Mazetto",
            "Rua Palmyra Pipa Zeni, 100",
            "Rua Palmyra Pipa Zani, 30",
            "Avenida João Alfredo Graf, 643-763",
            "Rua Lauro Benotti, 74",
            "Rua Reinaldo Cavenaghi, 219",
            "Rua César Zanca, 299",
            "Rua José Sorrosal - Igreja",
            "Rua Antônio Alves, 666-706"
          ]
        }
      ]
    },
    {
      "id": "301",
      "name": "Pq. Industrial/Narciso Gomes",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Castelo Branco, 2-214",
            "Avenida Presidente Juscelino Kubitscheck, 50-98",
            "Rua Luiz Stefani, 258",
            "Rua Luiz Stefani, 396",
            "Rua Sebastião dos Santos, 132 Vila Dona Rosa",
            "Rua Alan Kardec, 162",
            "Rua Bahia, 207-255",
            "Rua Padre Ângelo Longhi, 311-401",
            "Rua Clóvis Beviláqua, 128-186",
            "Rua Clóvis Beviláqua, 25-117",
            "Avenida Padre Atílio, 646",
            "Avenida Padre Atílio, 400",
            "Av. Pe Atilio - Camara Municipal",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Avenida Padre Alarico Zacarias, 682-700",
            "Avenida Padre Alarico Zacarias, 946-1020",
            "Avenida Padre Alarico Zacarias, 1172-1216",
            "Avenida Padre Alarico Zacarias, 1414-1516",
            "Avenida Padre Alarico Zacarias, 1526",
            "Rua Paraná, 207-301",
            "Rua Mato Grosso, 247",
            "Rua Maranhão, 300",
            "Rua Paraiba, 401",
            "Avenida Presidente Juscelino Kubitscheck, 50-98",
            "Avenida Castelo Branco, 216-390",
            "Avenida Presidente Catelo Branco, 2-64",
            "Av. Castelo Branco, 718",
            "Av. Pres Costa e Silva, 655",
            "Av. Pres Cafe Filho - Posto de Saude",
            "Avenida Presidente Dutra, 149-251",
            "Avenida Presidente Dutra, 1-147",
            "Avenida Castelo Branco, 54-214",
            "Avenida Castelo Branco, 2-214"
          ]
        }
      ]
    },
    {
      "id": "302",
      "name": "Pq. Industrial/Narciso Gomes",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Castelo Branco, 2-214",
            "Avenida Presidente Juscelino Kubitscheck, 50-98",
            "Rua Paraíba, 382",
            "Rua Alagoas, 310",
            "Rua Mato Grosso, 278-358",
            "Rua Paraná, 208-302",
            "Rua Parana, 412",
            "Avenida Padre Alarico Zacarias, 3161-3261",
            "Avenida Padre Alarico Zacarias, 2969-3029",
            "Av Pe Alarico Zacarias,1037",
            "Avenida Padre Alarico Zacarias, 762",
            "Avenida Padre Alarico Zacarias, 572",
            "Avenida Padre Alarico Zacarias, 242-322",
            "Avenida Padre Alarico Zacarias, 1825-1873",
            "Rua Santa Cruz, 429",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Padre Atílio, 135",
            "Avenida Padre Atílio, 305-357",
            "Avenida Padre Atílio, 447",
            "Rua Clóvis Beviláqua, 60",
            "Rua Clóvis Beviláqua, 125-185",
            "Rua Rondônia, 2-102",
            "Rua Bahia, 114 - Jardim Marabá",
            "Rua Alan Kardec, 72",
            "Rua Sebastião dos Santos, 2-30",
            "Rua Sebastião dos Santos, 132 Vila Dona Rosa",
            "Rua Luiz Stefani, 334-382",
            "Rua Luiz Stefani, 184-208",
            "Avenida Presidente Juscelino Kubitscheck, 50-98",
            "Avenida Castelo Branco, 216-390",
            "Avenida Presidente Catelo Branco, 2-64",
            "Av. Castelo Branco, 718",
            "Av. Pres Costa e Silva, 655",
            "Av. Pres Costa e Silva,509",
            "Avenida Presidente Costa e Silva, 373",
            "Avenida Presidente Costa e Silva, 168-218",
            "Avenida Presidente Dutra, 381-451",
            "Avenida Presidente Dutra, 149-251",
            "Avenida Presidente Dutra, 1-147",
            "Avenida Castelo Branco, 54-214",
            "Avenida Castelo Branco, 2-214"
          ]
        }
      ]
    },
    {
      "id": "401",
      "name": "Pq. das Àrvores/Santa Rosa",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Emílio Pacagnela, 417",
            "Rua Emílio Pacagnela, 157",
            "Rua Romeu Bascheira, 121",
            "Avenida Leme, 91",
            "Avenida Maria Aparecida Muniz Michielin, 2248-2276",
            "Avenida Maria Aparecida Muniz Michielin, 60-90",
            "Avenida Maria Aparecida Muniz Michielin, 240-352",
            "Avenida Maria Aparecida Muniz Michielin, 752-922",
            "Avenida Dona Renata, 104",
            "Rua América, 206",
            "Rua América, 12 - Tonys Grill",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Albino Cardoso, 690-738",
            "Avenida Maria Aparecida Muniz Michielin, 1685",
            "Avenida Maria Aparecida Muniz Michielin, 762-786",
            "Avenida Maria Aparecida Muniz Michielin, 952",
            "Avenida Maria Aparecida Muniz Michielin, 1122-1156",
            "Avenida Leme, 76-118",
            "Avenida Leme, 280",
            "Rua Marcos Freire, 2-168",
            "Rua Marcos Freire,333 - Parque das Árvores",
            "Rua Luís Casonato, 266 - Parque das Árvores",
            "Rua Antônio Corte, 940 - Parque das Árvores",
            "Rua Reinaldo Bacaro, 90 - Parque das Árvores",
            "Avenida Prof Dirçon Kammer, 118-232",
            "Rua Antonio de Ponti, 308",
            "Rua Antonio Felipe, 202",
            "Rua Alcides Agostine, 316",
            "Avenida Prof Dirçon Kammer, 117-231",
            "Rua Reinaldo Bacaro, 333",
            "Rua Orfeu Colombini,275",
            "Rua Orfeu Colombini, 95",
            "Rua Emílio Pacagnela, 797",
            "Rua Emílio Pacagnela, 587",
            "Rua Emílio Pacagnela, 417"
          ]
        }
      ]
    },
    {
      "id": "402",
      "name": "Pq. das Árvores/Alto da Colina",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Emílio Pacagnela, 417",
            "Rua Emílio Pacagnela, 157",
            "Rua Romeu Bascheira, 121",
            "Avenida Leme, 91",
            "Avenida Maria Aparecida Muniz Michielin, 2248-2276",
            "Avenida Maria Aparecida Muniz Michielin, 60-90",
            "Avenida Maria Aparecida Muniz Michielin, 240-352",
            "Avenida Maria Aparecida Muniz Michielin, 752-922",
            "Avenida Dona Renata, 104",
            "Rua América, 206",
            "Rua América, 12 - Tonys Grill",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Albino Cardoso, 690-738",
            "Avenida Maria Aparecida Muniz Michielin, 1685",
            "Avenida Maria Aparecida Muniz Michielin, 762-786",
            "Avenida Maria Aparecida Muniz Michielin, 952",
            "Avenida Maria Aparecida Muniz Michielin, 1122-1156",
            "Avenida Leme, 76-118",
            "Avenida Leme, 280",
            "Rua Marcos Freire, 2-168",
            "Rua Marcos Freire,333 - Parque das Árvores",
            "Rua Luís Casonato, 266 - Parque das Árvores",
            "Rua Antônio Corte, 940 - Parque das Árvores",
            "Rua Reinaldo Bacaro, 90 - Parque das Árvores",
            "Avenida Prof Dirçon Kammer, 118-232",
            "Rua Antonio de Ponti, 308",
            "Rua Antonio Felipe, 202",
            "Rua Alcides Agostine, 316",
            "Avenida Prof Dirçon Kammer, 117-231",
            "Rua Reinaldo Bacaro, 333",
            "Rua Orfeu Colombini,275",
            "Rua Orfeu Colombini, 95",
            "Rua Emílio Pacagnela, 797",
            "Rua Emílio Pacagnela, 587",
            "Rua Emílio Pacagnela, 417"
          ]
        }
      ]
    },
    {
      "id": "501",
      "name": "Jd. Alvorada/Pedras Preciosas",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Emílio Pacagnela, 417",
            "Rua Romeu Bascheira, 121",
            "Avenida Leme, 91",
            "Avenida Maria Aparecida Muniz Michielin, 2248-2276",
            "Avenida Maria Aparecida Muniz Michielin, 60-90",
            "Avenida Maria Aparecida Muniz Michielin, 240-352",
            "Avenida Maria Aparecida Muniz Michielin, 752-922",
            "Avenida Dona Renata, 104",
            "Rua América, 206",
            "Rua América, 12 - Tonys Grill",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Albino Cardoso, 690-738",
            "Avenida Maria Aparecida Muniz Michielin, 1685",
            "Avenida Maria Aparecida Muniz Michielin, 762-786",
            "Avenida Maria Aparecida Muniz Michielin, 952",
            "Avenida Maria Aparecida Muniz Michielin, 1122-1156",
            "Avenida Leme, 76-118",
            "Rua Vivaldo Storoli, 85",
            "Rua Francisco Natal, 136",
            "Rua Francisco Natal, 285",
            "Rua Angelo Ferro, 460",
            "Rua Angelo Cerri, 222",
            "Rua Angelo Cerri, 556",
            "Rua Francisco Batista, 172",
            "Rua Armando Tofolo, 150",
            "Rua Armando Tofolo, 276",
            "Rua Maria M. S. Izidoro, 42",
            "Rua Emílio Pacagnela, 1058",
            "Av Luís Polo,(Frente Ufscar)",
            "Rua César Dezoti - mercearia",
            "Rua César Dezoti - terreno igreja",
            "Rua Cesar Dezotti, 762",
            "Rua Emílio Pacagnela, 32-88",
            "Rua Emílio Pacagnela, 797",
            "Rua Emílio Pacagnela, 587",
            "Rua Emílio Pacagnela, 417"
          ]
        }
      ]
    },
    {
      "id": "502",
      "name": "Jd. Alvorada/Pedras Preciosas",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Cesar Dezotti, 762",
            "Rua Armando Tofolo, 150",
            "Rua Francisco Batista, 172",
            "Rua Angelo Cerri, 556",
            "Rua Angelo Cerri, 222",
            "Rua Angelo Ferro, 460",
            "Rua Francisco Natal, 285",
            "Rua Francisco Natal, 136",
            "Rua Vivaldo Storoli, 85",
            "Avenida Leme, 91",
            "Avenida Maria Aparecida Muniz Michielin, 2248-2276",
            "Avenida Maria Aparecida Muniz Michielin, 60-90",
            "Avenida Maria Aparecida Muniz Michielin, 240-352",
            "Avenida Maria Aparecida Muniz Michielin, 752-922",
            "Avenida Dona Renata, 104",
            "Rua América, 206",
            "Rua América, 12 - Tonys Grill",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Albino Cardoso, 690-738",
            "Avenida Maria Aparecida Muniz Michielin, 1685",
            "Avenida Maria Aparecida Muniz Michielin, 762-786",
            "Avenida Maria Aparecida Muniz Michielin, 952",
            "Avenida Maria Aparecida Muniz Michielin, 1122-1156",
            "Avenida Leme, 76-118",
            "Avenida Leme, 280",
            "Rua Emílio Pacagnela, 416",
            "Rua Emílio Pacagnela, 586",
            "Rua Emílio Pacagnela, 712-796",
            "Rua Maria M. S. Izidoro, 42",
            "Rua Armando Tofolo, 276",
            "Av Luís Polo,(Frente Ufscar)",
            "Universidade Federal de São Carlos, UFSCar - Campus Araras"
          ]
        }
      ]
    },
    {
      "id": "601",
      "name": "Sobradinho/Distrito Industrial",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Oto Barreto - Citrovita",
            "Rua Irineu Tôrres, 1-337",
            "Rua Alcídes Sotini, 405",
            "Avenida Guerino Turati, 510",
            "Avenida Guerino Turati,490",
            "Rua José Graziano, 91",
            "Rua Bruno Fiori - ServFort",
            "Rua Bruno Fiori, 70",
            "Avenida Flamboiant, 2-104",
            "Avenida Otto Barreto, 1281-1321",
            "Rua das Flores, 440",
            "Rua das Flores, 196",
            "Rua João Buzo, 1029",
            "Rua Vitória Régia, 445",
            "Rua Vitória Régia, 1030",
            "Avenida Oto Barreto, 550",
            "Avenida Industrial, 555",
            "Avenida Industrial, 349-555",
            "Rua Tulipas - Saema",
            "Rua Das Tulipas, 705-763",
            "Rua Orquídeas, 257-331",
            "Rua Orquídeas, 55",
            "Avenida Dona Renata, 5003",
            "Rua Silva Jardim, 1-103",
            "Rua Santa Cruz, 429",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Santa Cruz, 1077-1171",
            "Rua dos Antúrios, 250-294",
            "Rua Lírios, 131",
            "Rua Luís Michelin, 224 - Julio Ridolfo",
            "Avenida Oto Barreto - Sayão",
            "Avenida Otto Barreto, 434",
            "Rua Antônio Cantiero, 248-522",
            "Rua Antônio Cantiero, 522",
            "Avenida Oto Barreto - terreno",
            "Avenida Oto Barreto, 1500",
            "Av. Otto Barreto - terreno",
            "Avenida Oto Barreto - Citrovita"
          ]
        }
      ]
    },
    {
      "id": "602",
      "name": "Sobradinho/Distrito Industrial",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Oto Barreto - Citrovita",
            "Rua Irineu Tôrres, 1-337",
            "Rua Alcídes Sotini, 405",
            "Avenida Guerino Turati, 510",
            "Avenida Guerino Turati,490",
            "Rua José Graziano, 91",
            "Rua Bruno Fiori - ServFort",
            "Rua Bruno Fiori, 70",
            "Avenida Flamboiant, 2-104",
            "Avenida Otto Barreto, 1281-1321",
            "Rua das Flores, 440",
            "Rua das Flores, 196",
            "Rua João Buzo, 1029",
            "Rua Vitória Régia, 445",
            "Rua Vitória Régia, 1030",
            "Avenida Oto Barreto, 550",
            "Avenida Industrial, 555",
            "Avenida Industrial, 349-555",
            "Rua Tulipas - Saema",
            "Rua Das Tulipas, 705-763",
            "Rua Orquídeas, 257-331",
            "Rua Orquídeas, 55",
            "Avenida Dona Renata, 5003",
            "Pca Barão - HSBC/ITAU",
            "Rua Santa Cruz, 429",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Santa Cruz, 1077-1171",
            "Rua dos Antúrios, 250-294",
            "Rua Lírios, 131",
            "Rua Luís Michelin, 224 - Julio Ridolfo",
            "Avenida Oto Barreto - Sayão",
            "Avenida Otto Barreto, 434",
            "Rua Antônio Cantiero, 248-522",
            "Rua Antônio Cantiero, 522",
            "Avenida Oto Barreto - terreno",
            "Avenida Oto Barreto, 1500",
            "Av. Otto Barreto - terreno",
            "Avenida Oto Barreto - Citrovita"
          ]
        }
      ]
    },
    {
      "id": "701",
      "name": "São João/Santo Antonio",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Santos, 382",
            "Rua Piracicaba, 1105",
            "Avenida Fábio da Silva Prado, 2460-2540",
            "Avenida São Pedro, 72-132",
            "Rua Eugênio Petroni, 160",
            "Rua Santo Siviero, 765",
            "Avenida São Pedro, 101",
            "Avenida Fábio da Silva Prado, 1376-1410",
            "Estrada Elhiu Hoot, 344-934",
            "Avenida João Rossi - Mercearia",
            "Avenida João Rossi - Ent. Aeroporto",
            "Avenida Fábio da Silva Prado, 2680-2726",
            "Rua Piracicaba, 875",
            "Rua Piracicaba, 749",
            "Rua Piracicaba, 539",
            "Rua Piracicaba, 381",
            "Avenida Fábio da Silva Prado, 619-817",
            "Rua Emílio Ferreira, 422",
            "Rua Emílio Ferreira, 40",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Albino Cardoso, 690-738",
            "Avenida Dona Renata, 104",
            "Rua Lins, 120",
            "Rua França, 28",
            "Rua Ribeirão Preto, 457",
            "Rua Ribeirão Preto, 586-614",
            "Rua Ribeirão Preto, 1070",
            "Rua Ribeirão Preto, 1026",
            "Rua Santos, 1053",
            "Rua Santos, 843",
            "Rua Diadema, 65",
            "Rua Piracicaba, 1105",
            "Avenida Fábio da Silva Prado, 2460-2540",
            "Avenida São Pedro, 72-132",
            "Rua Eugênio Petroni, 160",
            "Rua Santo Siviero, 765",
            "Avenida Fábio da Silva Prado, 1376-1410",
            "Estrada Elhiu Hoot, 344-934",
            "Avenida Fábio da Silva Prado, 16389",
            "Avenida João Rossi, 3599",
            "Avenida João Rossi, 825",
            "Rua João de Oliveira, 233",
            "Rua João de Oliveira, 217",
            "Rua João de Oliveira, 204",
            "Loteamento",
            "Rua Francisco Trevisan, 243",
            "Av. João Rossi, 150",
            "Av. João Rossi, 49",
            "Av. João Rossi - Caixa dágua",
            "Avenida João Rossi, 3367",
            "Avenida João Rossi - Mercearia",
            "Avenida João Rossi - Ent. Aeroporto",
            "Avenida Fábio da Silva Prado, 2680-2726",
            "Rua Piracicaba, 875",
            "Rua Piracicaba, 749",
            "Rua Piracicaba, 539",
            "Rua Piracicaba, 381",
            "Avenida Fábio da Silva Prado, 619-817",
            "Rua Emílio Ferreira, 422",
            "Rua Emílio Ferreira, 40",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        }
      ]
    },
    {
      "id": "702",
      "name": "São João/Santo Antonio",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Ribeirão Preto, 1293",
            "Rua Ribeirão Preto, 1083",
            "Rua Ribeirão Preto, 859",
            "Rua Ribeirão Preto, 659-709",
            "Rua Ribeirão Preto, 457",
            "Rua América, 1227-1273",
            "Rua América, 180",
            "Rua América, 80",
            "Rua América, 206",
            "Rua América, 12 - Tonys Grill",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Vereador de Eolo Camargo Preto, 370-464",
            "Rua Emílio Ferreira, 422",
            "Rua Padre Casemiro, 70-140",
            "Avenida Dona Renata, 1832-1900",
            "Rua São Carlos, 74-134",
            "Rua Piracicaba, 412",
            "Rua Piracicaba, 539",
            "Rua Piracicaba, 746",
            "Rua Piracicaba, 904",
            "Avenida Fábio da Silva Prado, 2460-2540",
            "Avenida São Pedro, 72-132",
            "Rua Eugênio Petroni, 160",
            "Rua Santo Siviero, 765",
            "Avenida São Pedro, 101",
            "Avenida Fábio da Silva Prado, 1376-1410",
            "Estrada Elhiu Hoot, 344-934",
            "Avenida João Rossi, 825",
            "Rua João de Oliveira, 233",
            "Rua João de Oliveira, 217",
            "Rua João de Oliveira, 204",
            "Rua Francisco Trevisan, 243",
            "Av. João Rossi, 150",
            "Av. João Rossi, 49",
            "Av. João Rossi - Caixa dágua",
            "Avenida João Rossi - Mercearia",
            "Avenida João Rossi - Ent. Aeroporto",
            "Avenida Fábio da Silva Prado, 2680-2726",
            "Rua Piracicaba, 1086",
            "Rua Ribeirão Preto, 1293"
          ]
        }
      ]
    },
    {
      "id": "801",
      "name": "Villa Lobos/Tangará",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Melvin Jones, 4134-4196",
            "Rua Luís Golineli, 480",
            "Rua Luís Golineli, 206",
            "Av. Melvin Jones, 1421",
            "Rua José Marquês da Silva - UNIMED",
            "Rua Tapuias, 509",
            "Rua Tapuias, 439",
            "Rua Tapuias, 228",
            "Rua Prof. Vicente Casale Padovani, 601",
            "Rua Prof. Vicente Casale Padovani, 370",
            "Rua Prof. Vicente Casale Padovani, 173",
            "Avenida Washington Luiz, 545-599",
            "Avenida Washington Luiz, 309-321",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Alexandre Fleming, 179",
            "Avenida José Ometto, 70",
            "Rua Prof. Vicente Casale Padovani, 173",
            "Rua Prof. Vicente Casale Padovani, 370",
            "Rua Prof. Vicente Casale Padovani, 601",
            "Rua Tapuias, 439",
            "Rua Tapuias, 509",
            "Rua dos Tapuias, 726",
            "Rua José Marquês da Silva - UNIMED",
            "Rua João Buzolin, 141",
            "Rua João Buzolin, 369-417",
            "Rua João Buzolin, 534-594",
            "Rua Paulo Américo Russo, 192",
            "Rua Silvino Gagliarde, 227",
            "Rua Silvino Gagliarde, 601",
            "Av. D. Maria Dela Coleta, 837",
            "Av. Melvin Jones, 2545",
            "Av. Francisco Borges, 151",
            "Rua Aparecido Orlando Cabrini, 126",
            "Rua João Marreto, 321",
            "Rua Luiz Apolari, 238",
            "Rua Luiz Apolari, 314",
            "Rua Lázaro da Cruz, 125",
            "Rua João Constantino Gosroto, 182",
            "Av. Ângelo Bolis, 166",
            "Rua Laerte Daltro, 366",
            "Rua João Roveroni, 246",
            "Avenida Melvin Jones, 4134-4196"
          ]
        }
      ]
    },
    {
      "id": "802",
      "name": "Villa Lobos/Tangará",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Melvin Jones, 4134-4196",
            "Rua Silvino Gagliarde, 191",
            "Rua Paulo Américo Russo, 192",
            "Rua João Buzolin, 369-417",
            "Rua João Buzolin, 141",
            "Rua Tapuias, 509",
            "Rua Tapuias, 439",
            "Rua Tapuias, 228",
            "Rua Prof. Vicente Casale Padovani, 601",
            "Rua Prof. Vicente Casale Padovani, 370",
            "Rua Prof. Vicente Casale Padovani, 173",
            "Avenida Washington Luiz, 545-599",
            "Avenida Washington Luiz, 309-321",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Alexandre Fleming, 179",
            "Avenida José Ometto, 70",
            "Avenida José Ometto, 318-740",
            "Avenida Melvin Jones, 183-227",
            "Rua Ângelo Pastorelo, 201",
            "Rua dos Tapuias, 726",
            "Av. Melvin Jones, 1510",
            "Avenida Melvin Jones, 3717-3873",
            "Av. Melvin Jones, 2303",
            "Av. Melvin Jones, 2545",
            "Av. Francisco Borges, 151",
            "Rua Aparecido Orlando Cabrini, 126",
            "Rua João Marreto, 321",
            "Rua Luiz Apolari, 238",
            "Rua Luiz Apolari, 314",
            "Rua Lázaro da Cruz, 125",
            "Rua João Constantino Gosroto, 182",
            "Av. Ângelo Bolis, 166",
            "Rua Laerte Daltro, 366",
            "Rua João Roveroni, 249",
            "Rua João Roveroni, 246",
            "Avenida Melvin Jones, 4134-4196"
          ]
        }
      ]
    },
    {
      "id": "901",
      "name": "Jd. Universitário/Ouro Verde/Jd. Nações",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Rua Adão Cacemiro, 28",
            "Avenida Godofredo Teixeira da Silva Teles, 506-574",
            "Rua Godofredo Teixeira da Silva Teles, 1815",
            "Avenida Doutor Olindo Russolo, 67-107",
            "Avenida Doutor Olindo Russolo, 192-252",
            "Rua João Antônio da Silva, 235",
            "Rua Paulo Côrte, 129-169",
            "Rua Alessandro Volta, 152-204",
            "Rua Paz, 1-65",
            "Avenida Goffredo Teixeira da Silva Telles, 405-443",
            "Rua Gonçalves Ledo, 126",
            "Avenida Melvin Jones, 1046-1126",
            "Avenida Melvin Jones, 641-675",
            "Avenida Melvin Jones, 401-409",
            "Avenida da Saudade, 1728-1806",
            "Avenida Washington Luiz, 545-599",
            "Avenida Washington Luiz, 309-321",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Alexandre Fleming, 179",
            "Avenida José Ometto, 70",
            "Avenida José Ometto, 318-740",
            "Avenida José Ometto, 1300",
            "Avenida José Ometto, 1033-1173",
            "Avenida José Ometto, 1900",
            "Rua Benedito Corrente, 50",
            "Rua Catharina Agostini, 215",
            "Rua Mário Neudini, 68",
            "Avenida José Ometto, 2071",
            "Avenida Doutor Maximiliano Baruto, 1752-1790",
            "Avenida Goffredo Teixeira da Silva Telles, 647-783",
            "Rua José Sotini, 20",
            "Rua José Sotini, 75",
            "Rua José Sotini, 2-82",
            "Rua José Sotini, 116-210",
            "Rua José Sotini, 584-634",
            "Rua José Sotini, 594-658",
            "Rua Carlina Passos, 140",
            "Rua Carlina Passos, 320",
            "Avienieda Francisco Borges, 46-74",
            "Avienieda Francisco Borges, 1221",
            "Avienieda Francisco Borges, 442-466",
            "Rua Reverendo Alva Hardie, 164",
            "Rua Francisco Perin, 105",
            "Rua Rua Adão Cacemiro, 28"
          ]
        }
      ]
    },
    {
      "id": "902",
      "name": "Jd. Universitário/Ouro Verde/Jd. Nações",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Rua Adão Cacemiro, 28",
            "Avenida Godofredo Teixeira da Silva Teles, 506-574",
            "Rua Godofredo Teixeira da Silva Teles, 1815",
            "Avenida Doutor Olindo Russolo, 67-107",
            "Avenida Doutor Olindo Russolo, 192-252",
            "Rua João Antônio da Silva, 235",
            "Rua Paulo Côrte, 129-169",
            "Rua Alessandro Volta, 152-204",
            "Rua Paz, 1-65",
            "Avenida Doutor Maximiliano Baruto, 221-429",
            "Avenida José Ometto, 1900",
            "Rua Benedito Corrente, 50",
            "Rua Catharina Agostini, 215",
            "Rua Mário Neudini, 68",
            "Avenida José Ometto, 2071",
            "Avenida José Ometto, 2116-2214",
            "Avenida José Ometto, 2354-2430",
            "Avenida José Ometto, 1300",
            "Avenida da Saudade, 1728-1806",
            "Avenida Washington Luiz, 545-599",
            "Avenida Washington Luiz, 309-321",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Alexandre Fleming, 179",
            "Avenida José Ometto, 70",
            "Avenida Melvin Jones, 183-227",
            "Avenida Melvin Jones, 660-696",
            "Avenida Goffredo Teixeira da Silva Telles, 191",
            "Avenida Goffredo Teixeira da Silva Telles, 472-550",
            "Avenida Goffredo Teixeira da Silva Telles, 647-783",
            "Rua José Sotini, 20",
            "Rua José Sotini, 75",
            "Rua José Sotini, 2-82",
            "Rua José Sotini, 116-210",
            "Rua José Sotini, 584-634",
            "Rua José Sotini, 594-658",
            "Rua Carlina Passos, 140",
            "Rua Carlina Passos, 320",
            "Avienieda Francisco Borges, 46-74",
            "Avienieda Francisco Borges, 1221",
            "Avienieda Francisco Borges, 442-466",
            "Rua Reverendo Alva Hardie, 164",
            "Rua Francisco Perin, 105",
            "Rua Rua Adão Cacemiro, 28"
          ]
        }
      ]
    },
    {
      "id": "1001",
      "name": "YPÊS/COPAC/BELA VISTA/VERSALLES",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Osvaldo Rodrigues, 126-160",
            "Rua Professor Ângelo Carminati, 135",
            "Rua Professor Ângelo Carminati, 60-272",
            "Rua Henrique Dias, 717",
            "Rua Padre Ângelo Longhi, 311-401",
            "Rua Clóvis Beviláqua, 128-186",
            "Rua Clóvis Beviláqua, 25-117",
            "Avenida Padre Atílio, 646",
            "Avenida Padre Atílio, 400",
            "Av. Pe Atilio - Camara Municipal",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Avenida Padre Alarico Zacarias, 682-700",
            "Avenida Padre Alarico Zacarias, 946-1020",
            "Avenida Padre Alarico Zacarias, 1172-1216",
            "Avenida Padre Alarico Zacarias, 1414-1516",
            "Avenida Padre Alarico Zacarias, 1526",
            "Rua Rio Grande do Norte, 144",
            "Rua Santa Catarina, 620",
            "Rua Luiz Campagna, 45",
            "Avenida Castelo Branco, 615-779",
            "Avenida Castelo Branco, 450-614",
            "Avenida Castelo Branco, 101-117",
            "Rua Antônia Maria Milanelo, 126-196",
            "Rua Antônia Maria Milanelo, 292-360",
            "Rua Germano Belatine, 493",
            "Rua José Antônio Cressoni, 330-412",
            "Rua José Antônio Cressoni, 742",
            "Rua Labruna José Batistela, 247-303",
            "José Otavio Fontanetti, 1275",
            "Rua Helison Éden Fioramonte, 492-554",
            "Rua Maria Aparecida Zambon Dala Costa, 129",
            "Rua Helison Éden Fioramonte, 304-362",
            "Rua Antônio Pereira da Silva, 18",
            "Rua Pérsio Galembeck Campos, 415",
            "Rua Antônia Maria Milanelo, 811-849",
            "Rua Eufrásio Brusco, 99",
            "Rua Célso Luz, 66-166",
            "Rua José Antônio Cressoni, 330",
            "Rua Antônio Roveroni, 157 - Jardim Copacabana, Ara",
            "Rua Júlio Storoli, 37-101",
            "Rua Osvaldo Rodrigues, 126-160"
          ]
        }
      ]
    },
    {
      "id": "1002",
      "name": "YPÊS/COPAC/BELA VISTA/VERSALLES",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rua Célso Luz, 66-166",
            "Rua José Antônio Cressoni, 330",
            "Rua Germano Belatine, 112-196",
            "Avenida Castelo Branco, 54-214",
            "Avenida Castelo Branco, 2-214",
            "Avenida Castelo Branco, 216-390",
            "Rua Rio Grande do Sul, 933-975 - Parque Industrial",
            "Rua Rio Grande do Norte, 101-163",
            "Avenida Padre Alarico Zacarias, 3161-3261",
            "Avenida Padre Alarico Zacarias, 2969-3029",
            "Av Pe Alarico Zacarias,1037",
            "Avenida Padre Alarico Zacarias, 762",
            "Avenida Padre Alarico Zacarias, 572",
            "Avenida Padre Alarico Zacarias, 242-322",
            "Avenida Padre Alarico Zacarias, 1825-1873",
            "Rua Santa Cruz, 429",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Padre Atílio, 135",
            "Avenida Padre Atílio, 305-357",
            "Avenida Padre Atílio, 447",
            "Rua Duque de Caxias, 444-806",
            "Rua Osvaldo Rodrigues, 161-207",
            "Rua José Antônio Cressoni, 330-412",
            "Rua José Antônio Cressoni, 742",
            "Rua Labruna José Batistela, 247-303",
            "José Otavio Fontanetti, 1275",
            "Rua Helison Éden Fioramonte, 492-554",
            "Rua Oswaldo Antonio Scabora",
            "Rua Maria Aparecida Zambon Dala Costa, 129",
            "Rua Helison Éden Fioramonte, 304-362",
            "Rua Antônio Pereira da Silva, 18",
            "Rua Pérsio Galembeck Campos, 415",
            "Rua Antônia Maria Milanelo, 811-849",
            "Rua Eufrásio Brusco, 99",
            "Rua Célso Luz, 66-166"
          ]
        }
      ]
    },
    {
      "id": "1101",
      "name": "Jd. Candida/Usina Santa Lucia",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Jeronymo Ometto, 82",
            "Avenida Jeronymo Ometto, 300-456",
            "Avenida Jeronymo Ometto, 564",
            "Rua Ângelo Lussari, 38",
            "Rua Laérte Gressoni, 133-199",
            "Avenida Jeronymo Ometto, 457-521",
            "Rua Recife, 127-179",
            "Rua Florianópolis, 191-315",
            "Rua Ciro Lagazi, 1022-1090",
            "Rua Ciro Lagazi, 1212-1292",
            "Avenida Senador César Lacerda de Vergueiro, 961",
            "Avenida Senador César Lacerda de Vergueiro, 805",
            "Avenida Senador César Lacerda de Vergueiro, 31-55",
            "Rua Vereador Cesário Coimbra, 301-395",
            "Rua Silva Jardim, 1-103",
            "Rua Santa Cruz, 429",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Francisco Leite, 263",
            "Rua Benjamin Constant, 702",
            "Avenida Senador César Lacerda de Vergueiro, 31-55",
            "Avenida Romana Ometo, 190",
            "Avenida Romana Ometo, 296",
            "Rua Afonso Bueno, 232",
            "Rua Afonso Bueno, 390",
            "Rua Ciro Lagazi, 648-756",
            "Rua Nicolau Canônico, 222-378",
            "Rua Nicolau Canônico, 424-454",
            "Rua Júlio Ulson, 223",
            "Rua Otávio Rueger, 250-322",
            "Rua Germano Quenzer, 459",
            "Rua Primo Basqueira, 280",
            "Rua Cândido Torales de Gismenes, 239-309",
            "Rua Cândido Torales de Gismenes, 1-127",
            "Rua Blumenau, 170",
            "Rua Venâncio Pádula, 671-753",
            "Rua Valter de Sá Andrade, 575-653",
            "Rua Padre Santo Marino, 78-164",
            "Avenida Jeronymo Ometto, 82"
          ]
        }
      ]
    },
    {
      "id": "1102",
      "name": "Jd. Candida",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Jeronymo Ometto, 82",
            "Avenida Jeronymo Ometto, 300-456",
            "Avenida Jeronymo Ometto, 564",
            "Avenida Jeronymo Ometto, 457-521",
            "Rua Recife, 127-179",
            "Rua Florianópolis, 191-315",
            "Rua Ciro Lagazi, 1022-1090",
            "Rua Ciro Lagazi, 1212-1292",
            "Avenida Senador César Lacerda de Vergueiro, 961",
            "Avenida Senador César Lacerda de Vergueiro, 805",
            "Avenida Senador César Lacerda de Vergueiro, 31-55",
            "Rua Vereador Cesário Coimbra, 301-395",
            "Rua Silva Jardim, 1-103",
            "Rua Santa Cruz, 429",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Francisco Leite, 263",
            "Rua Benjamin Constant, 702",
            "Avenida Senador César Lacerda de Vergueiro, 31-55",
            "Avenida Romana Ometo, 190",
            "Avenida Romana Ometo, 296",
            "Rua Afonso Bueno, 232",
            "Rua Afonso Bueno, 390",
            "Rua Ciro Lagazi, 648-756",
            "Rua Nicolau Canônico, 222-378",
            "Rua Nicolau Canônico, 424-454",
            "Rua Júlio Ulson, 223",
            "Rua Otávio Rueger, 250-322",
            "Rua Germano Quenzer, 459",
            "Rua Primo Basqueira, 280",
            "Rua Cândido Torales de Gismenes, 239-309",
            "Rua Cândido Torales de Gismenes, 1-127",
            "Rua Blumenau, 170",
            "Rua Venâncio Pádula, 671-753",
            "Rua Valter de Sá Andrade, 575-653",
            "Rua Padre Santo Marino, 78-164",
            "Avenida Jeronymo Ometto, 82"
          ]
        }
      ]
    },
    {
      "id": "1201",
      "name": "Warley Colombini/Costa Verde",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Luiz Carlos Tunes, 4065",
            "Avenida Luiz Carlos Tunes, 1215-1247",
            "Avenida Luiz Carlos Tunes, 75-177",
            "Rua Joao Francisco Basqueira, 204",
            "Rua Joao Luzetti, 270",
            "Rua Joao Luzetti, 70",
            "Rua José Ferreira Marques",
            "Rua Maria do Carmo Fin",
            "Avenida Carola, 1626",
            "Avenida Carola. 1500",
            "Avenida José Pavan, 181-341",
            "Av Jose Pavan - Pq. Ecologico",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Ferdinando Pietro Pavan, 2-122",
            "Rua Sergio Henrique de Oliveira, 140",
            "Rua Rosa Peixoto Grachet, 267",
            "Rua Rivaldo Cornia, 106",
            "Rua Benedito P. Ramos, 142",
            "Rua Fernado Guerreiro L Franco, 58",
            "Rua Joao Turatti, 15",
            "Rua Genésio Gaboli, 22",
            "Rua Genésio Gaboli, 202-246",
            "Avenida Presidente Vargas, 1408",
            "Av Presidente Vargas, 1627",
            "Rua Teresa de Oliveira Silva, 66-124",
            "Rua Teresa de Oliveira Silva, 242-296",
            "Rua Ranulfo Paulino Ramos, 203",
            "Rua Lauro Muller, 58",
            "Avenida Luiz Carlos Tunes, 1374-1438",
            "Avenida Coronel. Primo Beraldo",
            "Portal do Sol",
            "Avenida Luiz Carlos Tunes, 4065"
          ]
        }
      ]
    },
    {
      "id": "1202",
      "name": "Warley Colombini/Terras de Carolina",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida Luiz Carlos Tunes, 4065",
            "Avenida Luiz Carlos Tunes, 1215-1247",
            "Avenida Luiz Carlos Tunes, 75-177",
            "Rua Joao Francisco Basqueira, 204",
            "Rua Joao Luzetti, 270",
            "Rua Joao Luzetti, 70",
            "Rua José Ferreira Marques",
            "Rua Maria do Carmo Fin",
            "Avenida Carola, 1626",
            "Avenida Carola. 1500",
            "Av Jose Pavan - Pq. Ecologico",
            "Avenida Loreto, 390-448",
            "Avenida Loreto, 1281-1415",
            "Avenida Loreto, 979-1009",
            "Avenida Loreto, 1200-1360",
            "Avenida Loreto, 376-432",
            "Rua dos Coroados, 117-135",
            "Rua Domingos Graziano, 450-626",
            "Rua Domingos Graziano, 13 - Cafe Junior",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Coronel Justiniano, 2-52",
            "Rua Domingos Graziano - oposto Curtume",
            "Rua dos Coroados, 143",
            "Avenida Loreto, 387-467",
            "Avenida Loreto, 806",
            "Avenida Loreto, 1092",
            "Avenida Loreto - Pça Carlota",
            "Avenida Loreto, 1592 - Estacionamento",
            "Avenida Loreto, 3174-3280",
            "Avenida Augusta Viola da Costa, 2-100",
            "Avenida Augusta Viola da Costa, 270-478",
            "Avenida Augusta Viola da Costa, 1762-1896",
            "Avenida Augusta Viola da Costa, 1898-2326",
            "Avenida Ferdinando Pietro Pavan, 2-122",
            "Rua Sergio Henrique de Oliveira, 140",
            "Rua Rosa Peixoto Grachet, 267",
            "Rua Rivaldo Cornia, 106",
            "Rua Benedito P. Ramos, 142",
            "Rua Fernado Guerreiro L Franco, 58",
            "Rua Joao Turatti, 15",
            "Rua Genésio Gaboli, 22",
            "Rua Genésio Gaboli, 202-246",
            "Avenida Presidente Vargas, 1408",
            "Av Presidente Vargas, 1627",
            "Rua Teresa de Oliveira Silva, 66-124",
            "Rua Teresa de Oliveira Silva, 242-296",
            "Rua Ranulfo Paulino Ramos, 203",
            "Rua Lauro Muller, 58",
            "Avenida Coronel. Primo Beraldo",
            "Portal do Sol",
            "Avenida Luiz Carlos Tunes, 4065"
          ]
        }
      ]
    },
    {
      "id": "1301",
      "name": "Distrito Industrial V",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Rodovia Anhanguera - Jardim Anhanguera, SP, Brasil",
            "Rodovia Anhanguera, 7313 - Jardim Anhanguera, SP,",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rodovia Anhanguera - Jardim Anhanguera, SP, Brasil"
          ]
        }
      ]
    },
    {
      "id": "1401",
      "name": "Fazenda Cascata",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Bar do Indio",
            "Estrada Elhiu Hoot",
            "Estrada Elhiu Hoot, 5506",
            "Avenida Fábio da Silva Prado, 2680-2726",
            "Avenida Fábio da Silva Prado, 619-817",
            "Rua Emílio Ferreira, 40",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Doutor Armando Sales de Oliveira, 67-95",
            "Avenida Fábio da Silva Prado, 934-1228",
            "Avenida Fábio da Silva Prado, 2460-2540",
            "Avenida Fábio da Silva Prado, 1376-1410",
            "Estrada Elhiu Hoot, 5506",
            "Bar do Indio"
          ]
        }
      ]
    },
    {
      "id": "1402",
      "name": "Fazenda Palmeiras",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Estrada José Baggio Primo",
            "Estrada José Baggio Primo, 11",
            "Rua Emílio Pacagnela, 32-88",
            "Rua Emílio Pacagnela, 797",
            "Rua Emílio Pacagnela, 587",
            "Rua Emílio Pacagnela, 417",
            "Rua Emílio Pacagnela, 157",
            "Avenida Leme, 91",
            "Avenida Maria Aparecida Muniz Michielin, 2248-2276",
            "Avenida Maria Aparecida Muniz Michielin, 60-90",
            "Avenida Maria Aparecida Muniz Michielin, 240-352",
            "Avenida Maria Aparecida Muniz Michielin, 752-922",
            "Rua Santa Cruz, 429",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Albino Cardoso, 690-738",
            "Avenida Maria Aparecida Muniz Michielin, 1685",
            "Avenida Maria Aparecida Muniz Michielin, 762-786",
            "Avenida Maria Aparecida Muniz Michielin, 952",
            "Avenida Maria Aparecida Muniz Michielin, 1122-1156",
            "Avenida Leme, 76-118",
            "Avenida Leme, 280",
            "Rua Emílio Pacagnela, 166",
            "Rua Emílio Pacagnela, 416",
            "Rua Emílio Pacagnela, 586",
            "Rua Emílio Pacagnela, 712-796",
            "Rua Emílio Pacagnela, 1058",
            "Estrada José Baggio Primo, 10",
            "Estrada José Baggio Primo"
          ]
        }
      ]
    },
    {
      "id": "1403",
      "name": "Fazenda São Bento",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "São Bento",
            "Estrada José Baggio Primo",
            "Estrada José Baggio Primo, 10",
            "Rua Emílio Pacagnela, 32-88",
            "Rua Emílio Pacagnela, 797",
            "Rua Emílio Pacagnela, 587",
            "Rua Emílio Pacagnela, 417",
            "Rua Emílio Pacagnela, 157",
            "Avenida Leme, 91",
            "Avenida Maria Aparecida Muniz Michielin, 2248-2276",
            "Avenida Maria Aparecida Muniz Michielin, 240-352",
            "Avenida Maria Aparecida Muniz Michielin, 752-922",
            "Avenida Dona Renata, 104",
            "Rua América, 206",
            "Rua América, 12 - Tonys Grill",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Avenida Dona Renata, 160-232",
            "Rua Silva Jardim, 1-103",
            "Rua Senador Franco Lacerda, 379",
            "Rua Albino Cardoso, 690-738",
            "Avenida Maria Aparecida Muniz Michielin, 1685",
            "Avenida Maria Aparecida Muniz Michielin, 762-786",
            "Avenida Maria Aparecida Muniz Michielin, 952",
            "Avenida Maria Aparecida Muniz Michielin, 1122-1156",
            "Avenida Leme, 76-118",
            "Avenida Leme, 280",
            "Rua Emílio Pacagnela, 166",
            "Rua Emílio Pacagnela, 416",
            "Rua Emílio Pacagnela, 586",
            "Rua Emílio Pacagnela, 712-796",
            "Rua Emílio Pacagnela, 1058",
            "Estrada José Baggio Primo, 10",
            "Estrada José Baggio Primo",
            "São Bento"
          ]
        }
      ]
    },
    {
      "id": "1404",
      "name": "Fazenda Pinhalzinho - U.S.João",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Estrada Geral Pinhalzinho, 30",
            "Estrada Geral Pinhalzinho, 10",
            "Estrada Geral Pinhalzinho, 20",
            "Estrada Geral Pinhalzinho",
            "Avenida José Ometto, 2071",
            "Avenida José Ometto, 2116-2214",
            "Avenida José Ometto, 2354-2430",
            "Avenida da Saudade, 1728-1806",
            "Avenida Washington Luiz, 545-599",
            "Avenida Washington Luiz, 309-321",
            "Rua Silvia Teles, 2-100",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Alexandre Fleming, 179",
            "Avenida José Ometto, 70",
            "Avenida José Ometto, 318-740",
            "Avenida José Ometto, 1300",
            "Avenida José Ometto, 1033-1173",
            "Avenida José Ometto, 1900",
            "Estrada Geral Pinhalzinho",
            "Estrada Geral Pinhalzinho, 20",
            "Estrada Geral Pinhalzinho, 10",
            "Estrada Geral Pinhalzinho, 30"
          ]
        }
      ]
    },
    {
      "id": "1501",
      "name": "Milton Severino/Jardim Apollo",
      "directions": [
        {
          "direction": "Saída do Bairro",
          "stops": [
            "Avenida João Rossi - Mercearia",
            "Avenida João Rossi - Ent. Aeroporto",
            "Avenida Fábio da Silva Prado, 2680-2726",
            "Rua Piracicaba, 1086",
            "Rua Ribeirão Preto, 1293",
            "Rua Ribeirão Preto, 1083",
            "Rua Ribeirão Preto, 859",
            "Rua Ribeirão Preto, 659-709",
            "Rua Ribeirão Preto, 457",
            "Rua América, 1227-1273",
            "Rua América, 180",
            "Rua América, 80",
            "Rua América, 206",
            "Rua América, 12 - Tonys Grill",
            "Rua América, 265",
            "Rua América, 1-91",
            "Rua Nunes Machado, 328",
            "Rua Nunes Machado, 610-650",
            "Avenida Zurita, Camara Municipal",
            "Terminal Urbano"
          ]
        },
        {
          "direction": "Saída do Terminal",
          "stops": [
            "Terminal Urbano",
            "Rua Santa Cruz, 215-299",
            "Rua Silvia Teles, 2-100",
            "Rua Coronel Justiniano, 340-408",
            "Rua Doutor Armando Sales de Oliveira, 67-95",
            "Rua São Carlos, 74-134",
            "Rua Piracicaba, 412",
            "Rua Piracicaba, 539",
            "Rua Piracicaba, 746",
            "Rua Piracicaba, 904",
            "Avenida Fábio da Silva Prado, 2460-2540",
            "Avenida Fábio da Silva Prado, 1376-1410",
            "Estrada Elhiu Hoot, 344-934",
            "Avenida João Rossi, 825",
            "Rua João de Oliveira, 233",
            "Rua João de Oliveira, 217",
            "Rua João de Oliveira, 204",
            "Rua Francisco Trevisan, 243",
            "Av. João Rossi, 150",
            "Av. João Rossi, 49",
            "Av. João Rossi - Caixa dágua",
            "Avenida João Rossi - Mercearia"
          ]
        }
      ]
    }
  ],
  "stops": [
    {"id":"P001","name":"Terminal Urbano","address":"Araras - SP","lines":["102","103","104","105","201","202","203","204","206","207","301","302","401","402","501","502","601","602","701","702","801","802","901","902","1001","1002","1101","1102","1201","1202","1301","1401","1402","1403","1404","1501"],"lat":null,"lng":null,"x":10.02,"y":12.72},
    {"id":"P002","name":"Av Augusta Viola da Costa - Jd. Celina","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207"],"lat":null,"lng":null,"x":21.17,"y":82.02},
    {"id":"P003","name":"Av Augusta Viola da Costa - Meneghin Automoveis","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207"],"lat":null,"lng":null,"x":56.22,"y":44.2},
    {"id":"P004","name":"Av Irineu Carrocci - Guerino","address":"Araras - SP","lines":["201","202","203","206","207"],"lat":null,"lng":null,"x":19.28,"y":73.22999999999999},
    {"id":"P005","name":"Av Jose Pavan - Pq. Ecologico","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":78.11,"y":21.8},
    {"id":"P006","name":"Av Luís Polo,(Frente Ufscar)","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":58.34,"y":29.43},
    {"id":"P007","name":"Av Orpheu Manente - Moveis Casarin","address":"Araras - SP","lines":["204"],"lat":null,"lng":null,"x":80.82,"y":17.36},
    {"id":"P008","name":"Av Pe Alarico Zacarias,1037","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":51.09,"y":66.74000000000001},
    {"id":"P009","name":"Av Presidente Vargas, 1361","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":36.480000000000004,"y":50.56},
    {"id":"P010","name":"Av Presidente Vargas, 1627","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":45.69,"y":40.239999999999995},
    {"id":"P011","name":"Av. Ângelo Bolis, 166","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":11.11,"y":13.379999999999999},
    {"id":"P012","name":"Av. Castelo Branco, 718","address":"Araras - SP","lines":["301","302"],"lat":null,"lng":null,"x":8.76,"y":38.19},
    {"id":"P013","name":"Av. D. Maria Dela Coleta, 837","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":70.03999999999999,"y":55.63},
    {"id":"P014","name":"Av. Dona Renata - Sopro Divino","address":"Araras - SP","lines":["204"],"lat":null,"lng":null,"x":18.740000000000002,"y":72.19},
    {"id":"P015","name":"Av. Francisco Borges, 151","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":39.03,"y":85.69},
    {"id":"P016","name":"Av. João Rossi - Caixa dágua","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":58.08,"y":18.64},
    {"id":"P017","name":"Av. João Rossi, 150","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":65.57,"y":23.740000000000002},
    {"id":"P018","name":"Av. João Rossi, 49","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":41.3,"y":52.89},
    {"id":"P019","name":"Av. Melvin Jones, 1421","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":59.96,"y":44.21},
    {"id":"P020","name":"Av. Melvin Jones, 1510","address":"Araras - SP","lines":["802"],"lat":null,"lng":null,"x":41.71,"y":34.739999999999995},
    {"id":"P021","name":"Av. Melvin Jones, 2303","address":"Araras - SP","lines":["802"],"lat":null,"lng":null,"x":47.46,"y":46.68},
    {"id":"P022","name":"Av. Melvin Jones, 2545","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":77.34,"y":76.59},
    {"id":"P023","name":"Av. Otto Barreto - terreno","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":51.37,"y":50.12},
    {"id":"P024","name":"Av. Pe Atilio - Camara Municipal","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":31.73,"y":26.35},
    {"id":"P025","name":"Av. Pres Cafe Filho - Posto de Saude","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":56.96,"y":51.8},
    {"id":"P026","name":"Av. Pres Costa e Silva, 655","address":"Araras - SP","lines":["301","302"],"lat":null,"lng":null,"x":65.52000000000001,"y":48.59},
    {"id":"P027","name":"Av. Pres Costa e Silva,509","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":52.52,"y":52.47},
    {"id":"P028","name":"Avenida Augusta Viola da Costa, 1098-1192","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207"],"lat":null,"lng":null,"x":84.25,"y":28.78},
    {"id":"P029","name":"Avenida Augusta Viola da Costa, 1632-1760","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207"],"lat":null,"lng":null,"x":11.08,"y":59.26},
    {"id":"P030","name":"Avenida Augusta Viola da Costa, 1762-1896","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":50.78,"y":34.44},
    {"id":"P031","name":"Avenida Augusta Viola da Costa, 1898-2326","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":73.43,"y":27.3},
    {"id":"P032","name":"Avenida Augusta Viola da Costa, 2-100","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":17.43,"y":72.45},
    {"id":"P033","name":"Avenida Augusta Viola da Costa, 2527-2677","address":"Araras - SP","lines":["201","202","203","206","207"],"lat":null,"lng":null,"x":39.72,"y":55.06},
    {"id":"P034","name":"Avenida Augusta Viola da Costa, 270-478","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":84.4,"y":75.00999999999999},
    {"id":"P035","name":"Avenida Augusta Viola da Costa, 3056-3170","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207"],"lat":null,"lng":null,"x":70.83,"y":31.71},
    {"id":"P036","name":"Avenida Augusta Viola da Costa, 3172-3370","address":"Araras - SP","lines":["103","104","202","206"],"lat":null,"lng":null,"x":24.46,"y":57.36},
    {"id":"P037","name":"Avenida Augusta Viola da Costa, 3740-3814","address":"Araras - SP","lines":["201","202","203","206","207"],"lat":null,"lng":null,"x":14.96,"y":80.76},
    {"id":"P038","name":"Avenida Augusta Viola da Costa, 4258-4320","address":"Araras - SP","lines":["201","202","203","206","207"],"lat":null,"lng":null,"x":40.18,"y":23.64},
    {"id":"P039","name":"Avenida Carola, 1626","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":32.66,"y":45.11},
    {"id":"P040","name":"Avenida Carola. 1500","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":83.21,"y":12.73},
    {"id":"P041","name":"Avenida Castelo Branco, 101-117","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":73.21,"y":68.22},
    {"id":"P042","name":"Avenida Castelo Branco, 2-214","address":"Araras - SP","lines":["301","302","1002"],"lat":null,"lng":null,"x":21.15,"y":77.28},
    {"id":"P043","name":"Avenida Castelo Branco, 216-390","address":"Araras - SP","lines":["301","302","1002"],"lat":null,"lng":null,"x":55.59,"y":44.21},
    {"id":"P044","name":"Avenida Castelo Branco, 450-614","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":55.2,"y":37.04},
    {"id":"P045","name":"Avenida Castelo Branco, 54-214","address":"Araras - SP","lines":["301","302","1002"],"lat":null,"lng":null,"x":86.22,"y":34.32},
    {"id":"P046","name":"Avenida Castelo Branco, 615-779","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":27.99,"y":41.81},
    {"id":"P047","name":"Avenida Coronel. Primo Beraldo","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":54.11,"y":76.78},
    {"id":"P048","name":"Avenida da Saudade, 1728-1806","address":"Araras - SP","lines":["901","902","1404"],"lat":null,"lng":null,"x":42.37,"y":59.8},
    {"id":"P049","name":"Avenida Dona Renata, 104","address":"Araras - SP","lines":["401","402","501","502","701","1403"],"lat":null,"lng":null,"x":14.43,"y":56.55},
    {"id":"P050","name":"Avenida Dona Renata, 160-232","address":"Araras - SP","lines":["301","401","402","501","502","601","602","701","1001","1101","1102","1401","1402","1403"],"lat":null,"lng":null,"x":82.35,"y":33.72},
    {"id":"P051","name":"Avenida Dona Renata, 1832-1900","address":"Araras - SP","lines":["702"],"lat":null,"lng":null,"x":87.05,"y":58.35},
    {"id":"P052","name":"Avenida Dona Renata, 5003","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":23.52,"y":69.9},
    {"id":"P053","name":"Avenida Doutor Maximiliano Baruto, 1752-1790","address":"Araras - SP","lines":["901"],"lat":null,"lng":null,"x":52.2,"y":50.76},
    {"id":"P054","name":"Avenida Doutor Maximiliano Baruto, 221-429","address":"Araras - SP","lines":["902"],"lat":null,"lng":null,"x":20.8,"y":85.31},
    {"id":"P055","name":"Avenida Doutor Olindo Russolo, 192-252","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":59.36,"y":58.29},
    {"id":"P056","name":"Avenida Doutor Olindo Russolo, 67-107","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":49.92,"y":79.92},
    {"id":"P057","name":"Avenida Fábio da Silva Prado, 1376-1410","address":"Araras - SP","lines":["701","702","1401","1501"],"lat":null,"lng":null,"x":51,"y":18.4},
    {"id":"P058","name":"Avenida Fábio da Silva Prado, 16389","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":50.91,"y":61.85},
    {"id":"P059","name":"Avenida Fábio da Silva Prado, 2460-2540","address":"Araras - SP","lines":["701","702","1401","1501"],"lat":null,"lng":null,"x":44.7,"y":70.7},
    {"id":"P060","name":"Avenida Fábio da Silva Prado, 2680-2726","address":"Araras - SP","lines":["701","702","1401","1501"],"lat":null,"lng":null,"x":32.68,"y":58.39},
    {"id":"P061","name":"Avenida Fábio da Silva Prado, 619-817","address":"Araras - SP","lines":["701","1401"],"lat":null,"lng":null,"x":32.370000000000005,"y":75.00999999999999},
    {"id":"P062","name":"Avenida Fábio da Silva Prado, 934-1228","address":"Araras - SP","lines":["1401"],"lat":null,"lng":null,"x":61.38,"y":30.3},
    {"id":"P063","name":"Avenida Ferdinando Pietro Pavan, 2-122","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":83.92,"y":25.310000000000002},
    {"id":"P064","name":"Avenida Flamboiant, 2-104","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":34.82,"y":32.620000000000005},
    {"id":"P065","name":"Avenida Godofredo Teixeira da Silva Teles, 506-574","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":16.4,"y":66.67},
    {"id":"P066","name":"Avenida Goffredo Teixeira da Silva Telles, 191","address":"Araras - SP","lines":["902"],"lat":null,"lng":null,"x":31.1,"y":71.91},
    {"id":"P067","name":"Avenida Goffredo Teixeira da Silva Telles, 405-443","address":"Araras - SP","lines":["901"],"lat":null,"lng":null,"x":28.44,"y":71.56},
    {"id":"P068","name":"Avenida Goffredo Teixeira da Silva Telles, 472-550","address":"Araras - SP","lines":["902"],"lat":null,"lng":null,"x":42.73,"y":63.47},
    {"id":"P069","name":"Avenida Goffredo Teixeira da Silva Telles, 647-783","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":23.89,"y":42.03},
    {"id":"P070","name":"Avenida Guerino Turati, 510","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":20.35,"y":36.36},
    {"id":"P071","name":"Avenida Guerino Turati,490","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":88.46,"y":33.730000000000004},
    {"id":"P072","name":"Avenida Industrial, 349-555","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":85.92,"y":17.6},
    {"id":"P073","name":"Avenida Industrial, 555","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":48.07,"y":12.7},
    {"id":"P074","name":"Avenida Irineu Carrocci, 109-139","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":83.19,"y":14.05},
    {"id":"P075","name":"Avenida Irineu Carrocci, 1245","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":18.23,"y":71.8},
    {"id":"P076","name":"Avenida Irineu Carrocci, 160-172","address":"Araras - SP","lines":["201","202","203","204","206","207"],"lat":null,"lng":null,"x":69.11,"y":62.78},
    {"id":"P077","name":"Avenida Irineu Carrocci, 301-415","address":"Araras - SP","lines":["201","202","203","206","207"],"lat":null,"lng":null,"x":65.47999999999999,"y":76.03},
    {"id":"P078","name":"Avenida Jeronymo Ometto, 300-456","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":83.29,"y":60.74},
    {"id":"P079","name":"Avenida Jeronymo Ometto, 457-521","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":16.009999999999998,"y":48.39},
    {"id":"P080","name":"Avenida Jeronymo Ometto, 564","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":38.31,"y":16.14},
    {"id":"P081","name":"Avenida Jeronymo Ometto, 82","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":47.24,"y":87.65},
    {"id":"P082","name":"Avenida João Alfredo Graf, 643-763","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":24.99,"y":36.94},
    {"id":"P083","name":"Avenida João Rossi - Ent. Aeroporto","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":47.63,"y":24.119999999999997},
    {"id":"P084","name":"Avenida João Rossi - Mercearia","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":87.26,"y":41.370000000000005},
    {"id":"P085","name":"Avenida João Rossi, 3367","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":48.45,"y":52.23},
    {"id":"P086","name":"Avenida João Rossi, 3599","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":52.42,"y":75.97999999999999},
    {"id":"P087","name":"Avenida João Rossi, 825","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":43.53,"y":50.24},
    {"id":"P088","name":"Avenida José Ometto, 1033-1173","address":"Araras - SP","lines":["901","1404"],"lat":null,"lng":null,"x":66.47999999999999,"y":83.88},
    {"id":"P089","name":"Avenida José Ometto, 1300","address":"Araras - SP","lines":["901","902","1404"],"lat":null,"lng":null,"x":63.22,"y":22.59},
    {"id":"P090","name":"Avenida José Ometto, 1900","address":"Araras - SP","lines":["901","902","1404"],"lat":null,"lng":null,"x":91.08,"y":79.85},
    {"id":"P091","name":"Avenida José Ometto, 2071","address":"Araras - SP","lines":["901","902","1404"],"lat":null,"lng":null,"x":27.44,"y":24.35},
    {"id":"P092","name":"Avenida José Ometto, 2116-2214","address":"Araras - SP","lines":["902","1404"],"lat":null,"lng":null,"x":69.02000000000001,"y":21.689999999999998},
    {"id":"P093","name":"Avenida José Ometto, 2354-2430","address":"Araras - SP","lines":["902","1404"],"lat":null,"lng":null,"x":56.78,"y":39.64},
    {"id":"P094","name":"Avenida José Ometto, 318-740","address":"Araras - SP","lines":["802","901","1404"],"lat":null,"lng":null,"x":81.98,"y":44.05},
    {"id":"P095","name":"Avenida José Ometto, 70","address":"Araras - SP","lines":["801","802","901","902","1404"],"lat":null,"lng":null,"x":33.21,"y":59.44},
    {"id":"P096","name":"Avenida José Pavan, 181-341","address":"Araras - SP","lines":["1201"],"lat":null,"lng":null,"x":18.009999999999998,"y":64.82},
    {"id":"P097","name":"Avenida Leme, 280","address":"Araras - SP","lines":["401","402","502","1402","1403"],"lat":null,"lng":null,"x":87.02,"y":51.54},
    {"id":"P098","name":"Avenida Leme, 76-118","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":18.7,"y":14.71},
    {"id":"P099","name":"Avenida Leme, 91","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":75.18,"y":58.63},
    {"id":"P100","name":"Avenida Loreto - Pça Carlota","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":83.79,"y":22.7},
    {"id":"P101","name":"Avenida Loreto, 1092","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":68.18,"y":57.4},
    {"id":"P102","name":"Avenida Loreto, 1200-1360","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":81.4,"y":19.58},
    {"id":"P103","name":"Avenida Loreto, 1281-1415","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":76.64,"y":72.44},
    {"id":"P104","name":"Avenida Loreto, 1592 - Estacionamento","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":61.92,"y":23.82},
    {"id":"P105","name":"Avenida Loreto, 3174-3280","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":38.230000000000004,"y":27.02},
    {"id":"P106","name":"Avenida Loreto, 376-432","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":86.84,"y":77.77},
    {"id":"P107","name":"Avenida Loreto, 387-467","address":"Araras - SP","lines":["102","103","104","105","201","202","203","204","206","207","1201","1202"],"lat":null,"lng":null,"x":18.78,"y":71.99000000000001},
    {"id":"P108","name":"Avenida Loreto, 390-448","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":32.89,"y":56.05},
    {"id":"P109","name":"Avenida Loreto, 806","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":10.46,"y":25.240000000000002},
    {"id":"P110","name":"Avenida Loreto, 979-1009","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":19.2,"y":14.98},
    {"id":"P111","name":"Avenida Lourenço Batistela, 165-209","address":"Araras - SP","lines":["102","103","104","105"],"lat":null,"lng":null,"x":56.37,"y":18.06},
    {"id":"P112","name":"Avenida Lourenço Batistela, 364-420","address":"Araras - SP","lines":["102","103","104","105"],"lat":null,"lng":null,"x":8.51,"y":82.01},
    {"id":"P113","name":"Avenida Lourenço Batistela, 421-469","address":"Araras - SP","lines":["102","103","104","105"],"lat":null,"lng":null,"x":19.66,"y":30.12},
    {"id":"P114","name":"Avenida Luiz Carlos Tunes, 1215-1247","address":"Araras - SP","lines":["103","105","1201","1202"],"lat":null,"lng":null,"x":37.54,"y":74.24000000000001},
    {"id":"P115","name":"Avenida Luiz Carlos Tunes, 1374-1438","address":"Araras - SP","lines":["102","104","1201"],"lat":null,"lng":null,"x":45.56,"y":52.89},
    {"id":"P116","name":"Avenida Luiz Carlos Tunes, 2-74","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":14.02,"y":81.63},
    {"id":"P117","name":"Avenida Luiz Carlos Tunes, 2696-2842","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":66.38,"y":56.14},
    {"id":"P118","name":"Avenida Luiz Carlos Tunes, 4065","address":"Araras - SP","lines":["103","105","1201","1202"],"lat":null,"lng":null,"x":13.45,"y":81.69},
    {"id":"P119","name":"Avenida Luiz Carlos Tunes, 75-177","address":"Araras - SP","lines":["103","105","1201","1202"],"lat":null,"lng":null,"x":72,"y":47.34},
    {"id":"P120","name":"Avenida Maria Aparecida Muniz Michielin, 1122-1156","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":83.02,"y":25.57},
    {"id":"P121","name":"Avenida Maria Aparecida Muniz Michielin, 1685","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":54.74,"y":15.04},
    {"id":"P122","name":"Avenida Maria Aparecida Muniz Michielin, 2248-2276","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":61.72,"y":66.91},
    {"id":"P123","name":"Avenida Maria Aparecida Muniz Michielin, 240-352","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":48.99,"y":68.8},
    {"id":"P124","name":"Avenida Maria Aparecida Muniz Michielin, 60-90","address":"Araras - SP","lines":["401","402","501","502","1402"],"lat":null,"lng":null,"x":32.14,"y":60.18},
    {"id":"P125","name":"Avenida Maria Aparecida Muniz Michielin, 752-922","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":58.22,"y":72.19},
    {"id":"P126","name":"Avenida Maria Aparecida Muniz Michielin, 762-786","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":10.69,"y":54.85},
    {"id":"P127","name":"Avenida Maria Aparecida Muniz Michielin, 952","address":"Araras - SP","lines":["401","402","501","502","1402","1403"],"lat":null,"lng":null,"x":91.82,"y":63.9},
    {"id":"P128","name":"Avenida Melvin Jones, 1046-1126","address":"Araras - SP","lines":["901"],"lat":null,"lng":null,"x":73.31,"y":77.48},
    {"id":"P129","name":"Avenida Melvin Jones, 183-227","address":"Araras - SP","lines":["802","902"],"lat":null,"lng":null,"x":72.81,"y":29.14},
    {"id":"P130","name":"Avenida Melvin Jones, 3717-3873","address":"Araras - SP","lines":["802"],"lat":null,"lng":null,"x":84.23,"y":75.75999999999999},
    {"id":"P131","name":"Avenida Melvin Jones, 401-409","address":"Araras - SP","lines":["901"],"lat":null,"lng":null,"x":49.26,"y":56.66},
    {"id":"P132","name":"Avenida Melvin Jones, 4134-4196","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":74,"y":54.85},
    {"id":"P133","name":"Avenida Melvin Jones, 641-675","address":"Araras - SP","lines":["901"],"lat":null,"lng":null,"x":10.77,"y":40.8},
    {"id":"P134","name":"Avenida Melvin Jones, 660-696","address":"Araras - SP","lines":["902"],"lat":null,"lng":null,"x":80.15,"y":22.04},
    {"id":"P135","name":"Avenida Orpheu Manenti, 326","address":"Araras - SP","lines":["204"],"lat":null,"lng":null,"x":73.11,"y":22.09},
    {"id":"P136","name":"Avenida Oto Barreto - Citrovita","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":51,"y":72.65},
    {"id":"P137","name":"Avenida Oto Barreto - Sayão","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":88,"y":19.12},
    {"id":"P138","name":"Avenida Oto Barreto - terreno","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":59.28,"y":35.870000000000005},
    {"id":"P139","name":"Avenida Oto Barreto, 1500","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":86.4,"y":84.1},
    {"id":"P140","name":"Avenida Oto Barreto, 550","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":59,"y":16.240000000000002},
    {"id":"P141","name":"Avenida Otto Barreto, 1281-1321","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":37.72,"y":16.92},
    {"id":"P142","name":"Avenida Otto Barreto, 434","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":30.57,"y":28.27},
    {"id":"P143","name":"Avenida Padre Alarico Zacarias, 1172-1216","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":86.42,"y":37.85},
    {"id":"P144","name":"Avenida Padre Alarico Zacarias, 1414-1516","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":26.22,"y":85.61},
    {"id":"P145","name":"Avenida Padre Alarico Zacarias, 1526","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":28.74,"y":13.14},
    {"id":"P146","name":"Avenida Padre Alarico Zacarias, 1825-1873","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":38.84,"y":53.05},
    {"id":"P147","name":"Avenida Padre Alarico Zacarias, 242-322","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":74.76,"y":46.05},
    {"id":"P148","name":"Avenida Padre Alarico Zacarias, 2969-3029","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":23.05,"y":37.44},
    {"id":"P149","name":"Avenida Padre Alarico Zacarias, 3161-3261","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":57.76,"y":83.27},
    {"id":"P150","name":"Avenida Padre Alarico Zacarias, 572","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":46.62,"y":31.04},
    {"id":"P151","name":"Avenida Padre Alarico Zacarias, 682-700","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":59.8,"y":44.23},
    {"id":"P152","name":"Avenida Padre Alarico Zacarias, 762","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":87.29,"y":78.79},
    {"id":"P153","name":"Avenida Padre Alarico Zacarias, 946-1020","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":54.71,"y":14.46},
    {"id":"P154","name":"Avenida Padre Atílio, 135","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":52.32,"y":73.17},
    {"id":"P155","name":"Avenida Padre Atílio, 305-357","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":64.85,"y":62.48},
    {"id":"P156","name":"Avenida Padre Atílio, 400","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":16.509999999999998,"y":87.37},
    {"id":"P157","name":"Avenida Padre Atílio, 447","address":"Araras - SP","lines":["302","1002"],"lat":null,"lng":null,"x":51.66,"y":61.18},
    {"id":"P158","name":"Avenida Padre Atílio, 646","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":9.23,"y":36.870000000000005},
    {"id":"P159","name":"Avenida Presidente Catelo Branco, 2-64","address":"Araras - SP","lines":["301","302"],"lat":null,"lng":null,"x":50.26,"y":69.78999999999999},
    {"id":"P160","name":"Avenida Presidente Costa e Silva, 168-218","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":56.27,"y":80.75},
    {"id":"P161","name":"Avenida Presidente Costa e Silva, 373","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":88.95,"y":35.230000000000004},
    {"id":"P162","name":"Avenida Presidente Dutra, 1-147","address":"Araras - SP","lines":["301","302"],"lat":null,"lng":null,"x":49.5,"y":27.45},
    {"id":"P163","name":"Avenida Presidente Dutra, 149-251","address":"Araras - SP","lines":["301","302"],"lat":null,"lng":null,"x":53.59,"y":23.55},
    {"id":"P164","name":"Avenida Presidente Dutra, 381-451","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":9.39,"y":26.16},
    {"id":"P165","name":"Avenida Presidente Juscelino Kubitscheck, 50-98","address":"Araras - SP","lines":["301","302"],"lat":null,"lng":null,"x":33.93,"y":43.25},
    {"id":"P166","name":"Avenida Presidente Vargas, 1-139","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":15.41,"y":48.01},
    {"id":"P167","name":"Avenida Presidente Vargas, 1013","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":69.69,"y":44.85},
    {"id":"P168","name":"Avenida Presidente Vargas, 1024","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":9.19,"y":86.06},
    {"id":"P169","name":"Avenida Presidente Vargas, 1156-1294","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":8.38,"y":45.95},
    {"id":"P170","name":"Avenida Presidente Vargas, 1247","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":89.74,"y":24.75},
    {"id":"P171","name":"Avenida Presidente Vargas, 1408","address":"Araras - SP","lines":["102","104","1201","1202"],"lat":null,"lng":null,"x":72.45,"y":55.17},
    {"id":"P172","name":"Avenida Presidente Vargas, 2767-2965","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":20.59,"y":54.84},
    {"id":"P173","name":"Avenida Presidente Vargas, 777-911","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":73.79,"y":79.06},
    {"id":"P174","name":"Avenida Prof Dirçon Kammer, 117-231","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":79.92,"y":76.89},
    {"id":"P175","name":"Avenida Prof Dirçon Kammer, 118-232","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":75.28,"y":75.3},
    {"id":"P176","name":"Avenida Romana Ometo, 190","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":87.87,"y":81.15},
    {"id":"P177","name":"Avenida Romana Ometo, 296","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":45.08,"y":13.09},
    {"id":"P178","name":"Avenida São Pedro, 101","address":"Araras - SP","lines":["701","702"],"lat":null,"lng":null,"x":37.620000000000005,"y":37.42},
    {"id":"P179","name":"Avenida São Pedro, 72-132","address":"Araras - SP","lines":["701","702"],"lat":null,"lng":null,"x":54.92,"y":65.46000000000001},
    {"id":"P180","name":"Avenida Senador César Lacerda de Vergueiro, 31-55","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":40.39,"y":57.06},
    {"id":"P181","name":"Avenida Senador César Lacerda de Vergueiro, 805","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":11.129999999999999,"y":47.62},
    {"id":"P182","name":"Avenida Senador César Lacerda de Vergueiro, 961","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":30.96,"y":77.19},
    {"id":"P183","name":"Avenida Washington Luiz, 309-321","address":"Araras - SP","lines":["801","802","901","902","1404"],"lat":null,"lng":null,"x":49.84,"y":70.55},
    {"id":"P184","name":"Avenida Washington Luiz, 545-599","address":"Araras - SP","lines":["801","802","901","902","1404"],"lat":null,"lng":null,"x":42.87,"y":49.13},
    {"id":"P185","name":"Avenida Zurita, Camara Municipal","address":"Araras - SP","lines":["102","103","104","105","201","202","203","204","206","207","301","302","401","402","501","502","601","602","701","702","801","802","901","902","1001","1002","1101","1102","1201","1202","1401","1402","1403","1404","1501"],"lat":null,"lng":null,"x":78.13,"y":19.32},
    {"id":"P186","name":"Avienieda Francisco Borges, 1221","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":70.69,"y":77.41},
    {"id":"P187","name":"Avienieda Francisco Borges, 442-466","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":74.98,"y":16.46},
    {"id":"P188","name":"Avienieda Francisco Borges, 46-74","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":62.03,"y":14.07},
    {"id":"P189","name":"Bar do Indio","address":"Araras - SP","lines":["1401"],"lat":null,"lng":null,"x":45.78,"y":18.31},
    {"id":"P190","name":"Estrada Elhiu Hoot","address":"Araras - SP","lines":["1401"],"lat":null,"lng":null,"x":15.58,"y":14.09},
    {"id":"P191","name":"Estrada Elhiu Hoot, 344-934","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":20.380000000000003,"y":67.92},
    {"id":"P192","name":"Estrada Elhiu Hoot, 5506","address":"Araras - SP","lines":["1401"],"lat":null,"lng":null,"x":22.98,"y":35.65},
    {"id":"P193","name":"Estrada Geral Pinhalzinho","address":"Araras - SP","lines":["1404"],"lat":null,"lng":null,"x":28.1,"y":16.75},
    {"id":"P194","name":"Estrada Geral Pinhalzinho, 10","address":"Araras - SP","lines":["1404"],"lat":null,"lng":null,"x":79.35,"y":31.23},
    {"id":"P195","name":"Estrada Geral Pinhalzinho, 20","address":"Araras - SP","lines":["1404"],"lat":null,"lng":null,"x":12.84,"y":85.15},
    {"id":"P196","name":"Estrada Geral Pinhalzinho, 30","address":"Araras - SP","lines":["1404"],"lat":null,"lng":null,"x":56.93,"y":71.15},
    {"id":"P197","name":"Estrada José Baggio Primo","address":"Araras - SP","lines":["1402","1403"],"lat":null,"lng":null,"x":67.74000000000001,"y":76.13},
    {"id":"P198","name":"Estrada José Baggio Primo, 10","address":"Araras - SP","lines":["1402","1403"],"lat":null,"lng":null,"x":51.39,"y":71.81},
    {"id":"P199","name":"Estrada José Baggio Primo, 11","address":"Araras - SP","lines":["1402"],"lat":null,"lng":null,"x":23.2,"y":24.43},
    {"id":"P200","name":"José Otavio Fontanetti, 1275","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":23.77,"y":23.060000000000002},
    {"id":"P201","name":"Loteamento","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":22.95,"y":49.69},
    {"id":"P202","name":"Pca Barão - HSBC/ITAU","address":"Araras - SP","lines":["602"],"lat":null,"lng":null,"x":31.07,"y":37.07},
    {"id":"P203","name":"Portal do Sol","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":65.06,"y":51.92},
    {"id":"P204","name":"Rodovia Anhanguera - Jardim Anhanguera, SP, Brasil","address":"Araras - SP","lines":["1301"],"lat":null,"lng":null,"x":86.85,"y":42.15},
    {"id":"P205","name":"Rodovia Anhanguera, 7313 - Jardim Anhanguera, SP,","address":"Araras - SP","lines":["1301"],"lat":null,"lng":null,"x":65.62,"y":23.33},
    {"id":"P206","name":"Rua Afonso Bueno, 232","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":84.57,"y":78.17},
    {"id":"P207","name":"Rua Afonso Bueno, 390","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":60.34,"y":50.28},
    {"id":"P208","name":"Rua Alagoas, 310","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":43.35,"y":16.62},
    {"id":"P209","name":"Rua Alan Kardec, 162","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":73.78,"y":27.89},
    {"id":"P210","name":"Rua Alan Kardec, 72","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":69.42,"y":77.47},
    {"id":"P211","name":"Rua Albino Cardoso, 690-738","address":"Araras - SP","lines":["401","402","501","502","701","1402","1403"],"lat":null,"lng":null,"x":46.01,"y":40.55},
    {"id":"P212","name":"Rua Alcides Agostine, 316","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":60.3,"y":42.7},
    {"id":"P213","name":"Rua Alcídes Sotini, 405","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":47.47,"y":22.43},
    {"id":"P214","name":"Rua Alessandro Volta, 152-204","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":44.86,"y":16.009999999999998},
    {"id":"P215","name":"Rua Alexandre Fleming, 179","address":"Araras - SP","lines":["801","802","901","902","1404"],"lat":null,"lng":null,"x":22.46,"y":58.4},
    {"id":"P216","name":"Rua América, 1-91","address":"Araras - SP","lines":["401","402","501","502","701","702","1401","1403","1501"],"lat":null,"lng":null,"x":86.87,"y":76.77},
    {"id":"P217","name":"Rua América, 12 - Tonys Grill","address":"Araras - SP","lines":["401","402","501","502","702","1403","1501"],"lat":null,"lng":null,"x":45.5,"y":70.31},
    {"id":"P218","name":"Rua América, 1227-1273","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":51.39,"y":31.16},
    {"id":"P219","name":"Rua América, 180","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":22.259999999999998,"y":70.41},
    {"id":"P220","name":"Rua América, 206","address":"Araras - SP","lines":["401","402","501","502","702","1403","1501"],"lat":null,"lng":null,"x":75.13,"y":52.73},
    {"id":"P221","name":"Rua América, 265","address":"Araras - SP","lines":["401","402","501","502","701","702","1401","1403","1501"],"lat":null,"lng":null,"x":73.94,"y":61.6},
    {"id":"P222","name":"Rua América, 80","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":53.11,"y":41.33},
    {"id":"P223","name":"Rua Anderson Bordini - Lado Sonoco","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":69,"y":19.94},
    {"id":"P224","name":"Rua Angelo Cerri, 222","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":87.34,"y":63.37},
    {"id":"P225","name":"Rua Angelo Cerri, 556","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":57.64,"y":26.89},
    {"id":"P226","name":"Rua Angelo Ferro, 460","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":19.25,"y":29.07},
    {"id":"P227","name":"Rua Ângelo Francato, 147","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":32.6,"y":75.11},
    {"id":"P228","name":"Rua Angelo Ghirardini","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":89.8,"y":45.11},
    {"id":"P229","name":"Rua Ângelo Lussari, 38","address":"Araras - SP","lines":["1101"],"lat":null,"lng":null,"x":35.379999999999995,"y":71.74000000000001},
    {"id":"P230","name":"Rua Ângelo Pastorelo, 201","address":"Araras - SP","lines":["802"],"lat":null,"lng":null,"x":24.14,"y":28.25},
    {"id":"P231","name":"Rua Antônia Maria Milanelo, 126-196","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":26.85,"y":27.1},
    {"id":"P232","name":"Rua Antônia Maria Milanelo, 292-360","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":22.32,"y":77.32},
    {"id":"P233","name":"Rua Antônia Maria Milanelo, 811-849","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":64.78999999999999,"y":38.53},
    {"id":"P234","name":"Rua Antônio Alves - Adalgisa","address":"Araras - SP","lines":["202"],"lat":null,"lng":null,"x":39.5,"y":38.489999999999995},
    {"id":"P235","name":"Rua Antonio Alves, 239","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":64.64,"y":42.92},
    {"id":"P236","name":"Rua Antônio Alves, 409-463","address":"Araras - SP","lines":["203","206","207"],"lat":null,"lng":null,"x":43.02,"y":77.13},
    {"id":"P237","name":"Rua Antônio Alves, 426","address":"Araras - SP","lines":["201","202","204"],"lat":null,"lng":null,"x":30.43,"y":13.79},
    {"id":"P238","name":"Rua Antônio Alves, 65","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":64.16,"y":42.03},
    {"id":"P239","name":"Rua Antônio Alves, 666-706","address":"Araras - SP","lines":["201","203","204","206","207"],"lat":null,"lng":null,"x":88.27,"y":67.47999999999999},
    {"id":"P240","name":"Rua Antônio Alves, 68-174","address":"Araras - SP","lines":["202"],"lat":null,"lng":null,"x":39.019999999999996,"y":15.49},
    {"id":"P241","name":"Rua Antônio Cantiero, 248-522","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":46.25,"y":71.33},
    {"id":"P242","name":"Rua Antônio Cantiero, 522","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":89.5,"y":52.22},
    {"id":"P243","name":"Rua Antônio Corte, 940 - Parque das Árvores","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":87.61,"y":61.09},
    {"id":"P244","name":"Rua Antonio de Ponti, 308","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":27.17,"y":38.18},
    {"id":"P245","name":"Rua Antonio Felipe, 202","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":59.88,"y":13.79},
    {"id":"P246","name":"Rua Antônio Pereira da Silva, 18","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":74.55,"y":76.83},
    {"id":"P247","name":"Rua Antônio Roveroni, 157 - Jardim Copacabana, Ara","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":47.68,"y":67.18},
    {"id":"P248","name":"Rua Aparecido Orlando Cabrini, 126","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":10.31,"y":56.89},
    {"id":"P249","name":"Rua Ardoino Zaniboni, 286-332","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":32.06,"y":42.96},
    {"id":"P250","name":"Rua Ardoino Zanobio, 19","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":54.75,"y":81.02},
    {"id":"P251","name":"Rua Armando Tofolo, 150","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":8.44,"y":48.31},
    {"id":"P252","name":"Rua Armando Tofolo, 276","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":61.05,"y":28.97},
    {"id":"P253","name":"Rua Bahia, 114 - Jardim Marabá","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":50.62,"y":51.15},
    {"id":"P254","name":"Rua Bahia, 207-255","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":65.47999999999999,"y":36.42},
    {"id":"P255","name":"Rua Benedito Corrente, 50","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":63.14,"y":70.1},
    {"id":"P256","name":"Rua Benedito P. Ramos, 142","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":38.78,"y":71.3},
    {"id":"P257","name":"Rua Benjamin Constant, 702","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":85.54,"y":29.25},
    {"id":"P258","name":"Rua Blumenau, 170","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":72.48,"y":65.43},
    {"id":"P259","name":"Rua Bruno Fiori - ServFort","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":45.76,"y":38.58},
    {"id":"P260","name":"Rua Bruno Fiori, 70","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":19.95,"y":13.870000000000001},
    {"id":"P261","name":"Rua Cândido Torales de Gismenes, 1-127","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":53.96,"y":73.46000000000001},
    {"id":"P262","name":"Rua Cândido Torales de Gismenes, 239-309","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":25.71,"y":21.189999999999998},
    {"id":"P263","name":"Rua Carlina Passos, 140","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":65.65,"y":28.22},
    {"id":"P264","name":"Rua Carlina Passos, 320","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":48.41,"y":46.51},
    {"id":"P265","name":"Rua Carlos Alberto Naitzel, 397-457","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":78.03,"y":58.96},
    {"id":"P266","name":"Rua Carlos Alberto Naitzel, 398-458","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":64.43,"y":14.43},
    {"id":"P267","name":"Rua Carlos Alberto Naitzel, 709-763","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":33.34,"y":66.58},
    {"id":"P268","name":"Rua Carlos Alberto Naitzel, 710-764","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":69.49000000000001,"y":26.560000000000002},
    {"id":"P269","name":"Rua Catharina Agostini, 215","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":16.36,"y":85.07},
    {"id":"P270","name":"Rua Célso Luz, 66-166","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":31.84,"y":51.96},
    {"id":"P271","name":"Rua César Dezoti - mercearia","address":"Araras - SP","lines":["501"],"lat":null,"lng":null,"x":71.34,"y":42.620000000000005},
    {"id":"P272","name":"Rua César Dezoti - terreno igreja","address":"Araras - SP","lines":["501"],"lat":null,"lng":null,"x":31.66,"y":75.43},
    {"id":"P273","name":"Rua Cesar Dezotti, 762","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":12.870000000000001,"y":32.95},
    {"id":"P274","name":"Rua César Zanca, 299","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":49.2,"y":58.62},
    {"id":"P275","name":"Rua César Zanca, 306","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":82.67,"y":51.65},
    {"id":"P276","name":"Rua Ciro Lagazi, 1022-1090","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":68.32,"y":35.61},
    {"id":"P277","name":"Rua Ciro Lagazi, 1212-1292","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":46.19,"y":67.68},
    {"id":"P278","name":"Rua Ciro Lagazi, 648-756","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":58.69,"y":57.99},
    {"id":"P279","name":"Rua Clóvis Beviláqua, 125-185","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":38.739999999999995,"y":16.27},
    {"id":"P280","name":"Rua Clóvis Beviláqua, 128-186","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":68.84,"y":60.65},
    {"id":"P281","name":"Rua Clóvis Beviláqua, 25-117","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":58.48,"y":37.55},
    {"id":"P282","name":"Rua Clóvis Beviláqua, 60","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":39.489999999999995,"y":80.65},
    {"id":"P283","name":"Rua Comerciário, 201","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":54.91,"y":34.21},
    {"id":"P284","name":"Rua Comerciário, 259-307","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":37.39,"y":35.89},
    {"id":"P285","name":"Rua Comerciário, 260-308","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":65.1,"y":74.00999999999999},
    {"id":"P286","name":"Rua Comerciário, 56-104","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":87.55,"y":53.74},
    {"id":"P287","name":"Rua Coronel Justiniano, 2-52","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":86.07,"y":47.52},
    {"id":"P288","name":"Rua Coronel Justiniano, 340-408","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","702","1201","1202","1501"],"lat":null,"lng":null,"x":45.11,"y":13.64},
    {"id":"P289","name":"Rua da Tecelã, 464","address":"Araras - SP","lines":["102","103","104","105"],"lat":null,"lng":null,"x":31.98,"y":12.17},
    {"id":"P290","name":"Rua das Flores, 196","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":34.54,"y":51.88},
    {"id":"P291","name":"Rua das Flores, 440","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":44.74,"y":86.2},
    {"id":"P292","name":"Rua Das Tulipas, 705-763","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":21.08,"y":54.87},
    {"id":"P293","name":"Rua Diadema, 65","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":25.05,"y":79.14},
    {"id":"P294","name":"Rua Domingos Graziano - oposto Curtume","address":"Araras - SP","lines":["102","103","104","105","201","202","203","204","206","207","1201","1202"],"lat":null,"lng":null,"x":84.76,"y":30.84},
    {"id":"P295","name":"Rua Domingos Graziano, 13 - Cafe Junior","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":53.87,"y":46.58},
    {"id":"P296","name":"Rua Domingos Graziano, 450-626","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":27.8,"y":34.739999999999995},
    {"id":"P297","name":"Rua dos Antúrios, 250-294","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":56.78,"y":47.62},
    {"id":"P298","name":"Rua dos Coroados, 117-135","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","1201","1202"],"lat":null,"lng":null,"x":84.3,"y":42.65},
    {"id":"P299","name":"Rua dos Coroados, 143","address":"Araras - SP","lines":["102","103","104","105","201","202","203","204","206","207","1201","1202"],"lat":null,"lng":null,"x":55.33,"y":13.34},
    {"id":"P300","name":"Rua dos Tapuias, 726","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":19.03,"y":23.58},
    {"id":"P301","name":"Rua Doutor Armando Sales de Oliveira, 67-95","address":"Araras - SP","lines":["1401","1501"],"lat":null,"lng":null,"x":43.14,"y":78.44},
    {"id":"P302","name":"Rua Duque de Caxias, 444-806","address":"Araras - SP","lines":["1002"],"lat":null,"lng":null,"x":75.52,"y":49.13},
    {"id":"P303","name":"Rua Emílio Ferreira, 40","address":"Araras - SP","lines":["701","1401"],"lat":null,"lng":null,"x":72.2,"y":24.11},
    {"id":"P304","name":"Rua Emílio Ferreira, 422","address":"Araras - SP","lines":["701","702"],"lat":null,"lng":null,"x":17.68,"y":63.03},
    {"id":"P305","name":"Rua Emílio Pacagnela, 1058","address":"Araras - SP","lines":["501","1402","1403"],"lat":null,"lng":null,"x":54.88,"y":66.96000000000001},
    {"id":"P306","name":"Rua Emílio Pacagnela, 157","address":"Araras - SP","lines":["401","402","1402","1403"],"lat":null,"lng":null,"x":52.43,"y":58.11},
    {"id":"P307","name":"Rua Emílio Pacagnela, 166","address":"Araras - SP","lines":["1402","1403"],"lat":null,"lng":null,"x":37.67,"y":23.740000000000002},
    {"id":"P308","name":"Rua Emílio Pacagnela, 32-88","address":"Araras - SP","lines":["501","1402","1403"],"lat":null,"lng":null,"x":70.32,"y":44.91},
    {"id":"P309","name":"Rua Emílio Pacagnela, 416","address":"Araras - SP","lines":["502","1402","1403"],"lat":null,"lng":null,"x":89.75,"y":79.42},
    {"id":"P310","name":"Rua Emílio Pacagnela, 417","address":"Araras - SP","lines":["401","402","501","1402","1403"],"lat":null,"lng":null,"x":61.56,"y":32.05},
    {"id":"P311","name":"Rua Emílio Pacagnela, 586","address":"Araras - SP","lines":["502","1402","1403"],"lat":null,"lng":null,"x":55.09,"y":21.79},
    {"id":"P312","name":"Rua Emílio Pacagnela, 587","address":"Araras - SP","lines":["401","402","501","1402","1403"],"lat":null,"lng":null,"x":26.9,"y":50.41},
    {"id":"P313","name":"Rua Emílio Pacagnela, 712-796","address":"Araras - SP","lines":["502","1402","1403"],"lat":null,"lng":null,"x":21.41,"y":68.78},
    {"id":"P314","name":"Rua Emílio Pacagnela, 797","address":"Araras - SP","lines":["401","402","501","1402","1403"],"lat":null,"lng":null,"x":59.89,"y":72.97999999999999},
    {"id":"P315","name":"Rua Eufrásio Brusco, 99","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":89.01,"y":77.11},
    {"id":"P316","name":"Rua Eugênio Petroni, 160","address":"Araras - SP","lines":["701","702"],"lat":null,"lng":null,"x":51.12,"y":76.6},
    {"id":"P317","name":"Rua Fernado Guerreiro L Franco, 58","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":21.96,"y":49.52},
    {"id":"P318","name":"Rua Florianópolis, 191-315","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":85.37,"y":62.05},
    {"id":"P319","name":"Rua França, 28","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":28.72,"y":59.04},
    {"id":"P320","name":"Rua Francisco Batista, 172","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":37.33,"y":46.8},
    {"id":"P321","name":"Rua Francisco Leite, 263","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":59.05,"y":84.68},
    {"id":"P322","name":"Rua Francisco Natal, 136","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":84.23,"y":76.84},
    {"id":"P323","name":"Rua Francisco Natal, 285","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":53.04,"y":44.33},
    {"id":"P324","name":"Rua Francisco Perin, 105","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":45.63,"y":55.55},
    {"id":"P325","name":"Rua Francisco Trevisan, 243","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":49.96,"y":60.07},
    {"id":"P326","name":"Rua Genésio Gaboli, 202-246","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":70.72,"y":54.04},
    {"id":"P327","name":"Rua Genésio Gaboli, 22","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":12.07,"y":47.34},
    {"id":"P328","name":"Rua Germano Belatine, 112-196","address":"Araras - SP","lines":["1002"],"lat":null,"lng":null,"x":76.29,"y":75.12},
    {"id":"P329","name":"Rua Germano Belatine, 493","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":41.84,"y":15.99},
    {"id":"P330","name":"Rua Germano Quenzer, 459","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":18.96,"y":39.19},
    {"id":"P331","name":"Rua Giocondo Batistella, 91","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":66.28,"y":55.74},
    {"id":"P332","name":"Rua Godofredo Teixeira da Silva Teles, 1815","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":71.59,"y":86.1},
    {"id":"P333","name":"Rua Gonçalves Ledo, 126","address":"Araras - SP","lines":["901"],"lat":null,"lng":null,"x":62.84,"y":54.58},
    {"id":"P334","name":"Rua Helison Éden Fioramonte, 304-362","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":90.26,"y":86.54},
    {"id":"P335","name":"Rua Helison Éden Fioramonte, 492-554","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":27.91,"y":54.84},
    {"id":"P336","name":"Rua Henrique Dias, 717","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":68.86,"y":25.03},
    {"id":"P337","name":"Rua Industriário, 141-263","address":"Araras - SP","lines":["102","103","104","105"],"lat":null,"lng":null,"x":64.64,"y":44.89},
    {"id":"P338","name":"Rua Irineu Tôrres, 1-337","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":78.22,"y":32.75},
    {"id":"P339","name":"Rua Jarbas Leme de Godói, 454","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":17.91,"y":57.99},
    {"id":"P340","name":"Rua Jarbas Leme de Godói, 860","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":55.88,"y":87.04},
    {"id":"P341","name":"Rua Jarbas Leme de Godoy, 268","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":57.02,"y":61.19},
    {"id":"P342","name":"Rua Jarbas Leme de Godoy, 306","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":59.89,"y":35.29},
    {"id":"P343","name":"Rua Jarbas Leme de Godoy, 421-531","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":86.97,"y":69.66},
    {"id":"P344","name":"Rua Jarbas Leme de Godoy, 452","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":70.69,"y":74.21000000000001},
    {"id":"P345","name":"Rua Jarbas Leme de Godoy, 791-1003","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":34.2,"y":42.269999999999996},
    {"id":"P346","name":"Rua Joao Alfredo Graf, 295","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":48.49,"y":17.61},
    {"id":"P347","name":"Rua Joao Alfredo Graf, 356","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":57.87,"y":84.58},
    {"id":"P348","name":"Rua Joao Alfredo Graf, 388","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":68,"y":87.9},
    {"id":"P349","name":"Rua Joao Alfredo Graf, 558","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":82.31,"y":49.08},
    {"id":"P350","name":"Rua Joao Alfredo Graf, 950","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":28.51,"y":77.61},
    {"id":"P351","name":"Rua João Antônio da Silva, 235","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":69.63,"y":22.25},
    {"id":"P352","name":"Rua João Buzo, 1029","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":12.219999999999999,"y":25.25},
    {"id":"P353","name":"Rua João Buzolin, 141","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":40.99,"y":35.980000000000004},
    {"id":"P354","name":"Rua João Buzolin, 369-417","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":70.06,"y":87.07},
    {"id":"P355","name":"Rua João Buzolin, 534-594","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":63.8,"y":28.42},
    {"id":"P356","name":"Rua João Constantino Gosroto, 182","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":70.5,"y":31.1},
    {"id":"P357","name":"Rua João de Oliveira, 204","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":88.08,"y":44.56},
    {"id":"P358","name":"Rua João de Oliveira, 217","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":47.6,"y":40.43},
    {"id":"P359","name":"Rua João de Oliveira, 233","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":74.58,"y":35.35},
    {"id":"P360","name":"Rua Joao Francisco Basqueira, 204","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":86.11,"y":36.07},
    {"id":"P361","name":"Rua Joao Luzetti, 270","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":21.96,"y":81.55},
    {"id":"P362","name":"Rua Joao Luzetti, 70","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":70.44,"y":72.78999999999999},
    {"id":"P363","name":"Rua João Marreto, 321","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":13.440000000000001,"y":54.88},
    {"id":"P364","name":"Rua João Roveroni, 246","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":25.24,"y":27.75},
    {"id":"P365","name":"Rua João Roveroni, 249","address":"Araras - SP","lines":["802"],"lat":null,"lng":null,"x":54.57,"y":55.38},
    {"id":"P366","name":"Rua Joao Turatti, 15","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":57.33,"y":32.44},
    {"id":"P367","name":"Rua José Antônio Cressoni, 330","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":30.45,"y":83.29},
    {"id":"P368","name":"Rua José Antônio Cressoni, 330-412","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":88.87,"y":71.03},
    {"id":"P369","name":"Rua José Antônio Cressoni, 742","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":77.04,"y":41.97},
    {"id":"P370","name":"Rua José Fernandes, 215","address":"Araras - SP","lines":["203","204","206","207"],"lat":null,"lng":null,"x":55.6,"y":49.82},
    {"id":"P371","name":"Rua José Fernandes, 350","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":37.8,"y":25.58},
    {"id":"P372","name":"Rua José Fernandes, 525","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":37.260000000000005,"y":80.33},
    {"id":"P373","name":"Rua José Fernandes, 597","address":"Araras - SP","lines":["201","204"],"lat":null,"lng":null,"x":55.11,"y":41.32},
    {"id":"P374","name":"Rua José Fernandes, 709","address":"Araras - SP","lines":["201","202","203","206","207"],"lat":null,"lng":null,"x":88.58,"y":34.65},
    {"id":"P375","name":"Rua José Ferreira Marques","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":23.78,"y":35.510000000000005},
    {"id":"P376","name":"Rua José Graziano, 91","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":33.15,"y":29.89},
    {"id":"P377","name":"Rua Jose Kauffaman, 104","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":43.55,"y":84.35},
    {"id":"P378","name":"Rua José Kauffmann, 178-240","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":49.82,"y":38.28},
    {"id":"P379","name":"Rua José Marquês da Silva - UNIMED","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":74.4,"y":12.74},
    {"id":"P380","name":"Rua José Sorrosal - Igreja","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":61.48,"y":17.63},
    {"id":"P381","name":"Rua José Sotini, 116-210","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":33.760000000000005,"y":51.33},
    {"id":"P382","name":"Rua José Sotini, 2-82","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":80.89,"y":13.81},
    {"id":"P383","name":"Rua José Sotini, 20","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":42.76,"y":56.35},
    {"id":"P384","name":"Rua José Sotini, 584-634","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":45.57,"y":74.72},
    {"id":"P385","name":"Rua José Sotini, 594-658","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":28.66,"y":65.87},
    {"id":"P386","name":"Rua José Sotini, 75","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":82.74,"y":28.38},
    {"id":"P387","name":"Rua Júlio Storoli, 37-101","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":36.8,"y":74},
    {"id":"P388","name":"Rua Júlio Ulson, 223","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":26.25,"y":69.13},
    {"id":"P389","name":"Rua Labruna José Batistela, 247-303","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":57.26,"y":53.12},
    {"id":"P390","name":"Rua Laerte Daltro, 366","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":73.07,"y":55.34},
    {"id":"P391","name":"Rua Laérte Gressoni, 133-199","address":"Araras - SP","lines":["1101"],"lat":null,"lng":null,"x":13.29,"y":62.41},
    {"id":"P392","name":"Rua Laerte Tognasca, 268","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":31.26,"y":75.49000000000001},
    {"id":"P393","name":"Rua Laerte Tognasca, 63","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":82.61,"y":84.65},
    {"id":"P394","name":"Rua Laerte Tognasca, 76","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":40.99,"y":24.259999999999998},
    {"id":"P395","name":"Rua Laerte Tognasca, 78","address":"Araras - SP","lines":["202","203","206","207"],"lat":null,"lng":null,"x":15.65,"y":79.52},
    {"id":"P396","name":"Rua Laurindo Fazanaro, 177-345","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":57.31,"y":25.08},
    {"id":"P397","name":"Rua Laurindo Fazanaro, 224","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":37.41,"y":54.38},
    {"id":"P398","name":"Rua Lauro Beinoti, 191","address":"Araras - SP","lines":["201"],"lat":null,"lng":null,"x":38.31,"y":20.16},
    {"id":"P399","name":"Rua Lauro Beinoti, 211","address":"Araras - SP","lines":["202","206"],"lat":null,"lng":null,"x":52.26,"y":68.78},
    {"id":"P400","name":"Rua Lauro Benotti, 74","address":"Araras - SP","lines":["202","206","207"],"lat":null,"lng":null,"x":86.4,"y":74.58},
    {"id":"P401","name":"Rua Lauro Muller, 58","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":80.14,"y":58.81},
    {"id":"P402","name":"Rua Lázaro da Cruz, 125","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":55.99,"y":35.29},
    {"id":"P403","name":"Rua Lins, 120","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":91.86,"y":27.6},
    {"id":"P404","name":"Rua Lírios, 131","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":35.16,"y":41.870000000000005},
    {"id":"P405","name":"Rua Lourdes Chaib de Oliveira, 282","address":"Araras - SP","lines":["201","202","203","204","206","207"],"lat":null,"lng":null,"x":57.58,"y":43.86},
    {"id":"P406","name":"Rua Luís Casonato, 266 - Parque das Árvores","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":16.89,"y":87.34},
    {"id":"P407","name":"Rua Luís Golineli, 206","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":70.11,"y":76.89},
    {"id":"P408","name":"Rua Luís Golineli, 480","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":46.83,"y":39.8},
    {"id":"P409","name":"Rua Luís Michelin, 224 - Julio Ridolfo","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":31.24,"y":62.59},
    {"id":"P410","name":"Rua Luiz Apolari, 238","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":19.58,"y":30.35},
    {"id":"P411","name":"Rua Luiz Apolari, 314","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":85.27,"y":43.870000000000005},
    {"id":"P412","name":"Rua Luiz Campagna, 45","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":45.68,"y":78.86},
    {"id":"P413","name":"Rua Luiz de Ponte","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":11.46,"y":17.04},
    {"id":"P414","name":"Rua Luiz Stefani, 184-208","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":81.93,"y":84},
    {"id":"P415","name":"Rua Luiz Stefani, 258","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":56.18,"y":61.43},
    {"id":"P416","name":"Rua Luiz Stefani, 334-382","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":27.61,"y":47.04},
    {"id":"P417","name":"Rua Luiz Stefani, 396","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":22.03,"y":37.33},
    {"id":"P418","name":"Rua Luiza Metzner de Moraes, 2-72","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":43.21,"y":75.68},
    {"id":"P419","name":"Rua Luiza Metzner de Moraes, 212","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":68.22,"y":69.71000000000001},
    {"id":"P420","name":"Rua Luiza Metzner de Moraes, 222","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":32.489999999999995,"y":27.72},
    {"id":"P421","name":"Rua Luiza Metzner de Moraes, 232","address":"Araras - SP","lines":["102","103","104","105"],"lat":null,"lng":null,"x":43.64,"y":80.21},
    {"id":"P422","name":"Rua Luiza Metzner de Moraes, 57","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":50.49,"y":36.71},
    {"id":"P423","name":"Rua Maranhão, 300","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":56.83,"y":27.33},
    {"id":"P424","name":"Rua Marcos Freire, 2-168","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":74.81,"y":31.76},
    {"id":"P425","name":"Rua Marcos Freire,333 - Parque das Árvores","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":36.41,"y":58.36},
    {"id":"P426","name":"Rua Maria Aparecida Zambon Dala Costa, 129","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":40.4,"y":57.45},
    {"id":"P427","name":"Rua Maria do Carmo Fin","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":26.41,"y":81.96},
    {"id":"P428","name":"Rua Maria Luiza Finardi Mazetto","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":21.55,"y":49.33},
    {"id":"P429","name":"Rua Maria M. S. Izidoro, 42","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":54.87,"y":47.76},
    {"id":"P430","name":"Rua Mário Neudini, 68","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":63.35,"y":53.9},
    {"id":"P431","name":"Rua Mato Grosso, 247","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":17.98,"y":38.36},
    {"id":"P432","name":"Rua Mato Grosso, 278-358","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":85.33,"y":71.66},
    {"id":"P433","name":"Rua Nicola Rici, 68","address":"Araras - SP","lines":["201","204"],"lat":null,"lng":null,"x":40.04,"y":84.17},
    {"id":"P434","name":"Rua Nicolau Canônico, 222-378","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":21.18,"y":81.53},
    {"id":"P435","name":"Rua Nicolau Canônico, 424-454","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":15.969999999999999,"y":33.15},
    {"id":"P436","name":"Rua Nunes Machado, 328","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","401","402","501","502","701","702","1201","1202","1501"],"lat":null,"lng":null,"x":81.18,"y":51.59},
    {"id":"P437","name":"Rua Nunes Machado, 610-650","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","301","302","401","402","501","502","701","702","801","802","901","902","1001","1002","1201","1202","1401","1403","1404","1501"],"lat":null,"lng":null,"x":21.16,"y":64.14},
    {"id":"P438","name":"Rua Orfeu Colombini, 95","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":29.4,"y":69.09},
    {"id":"P439","name":"Rua Orfeu Colombini,275","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":61.72,"y":69.31},
    {"id":"P440","name":"Rua Orquídeas, 257-331","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":63.88,"y":17.04},
    {"id":"P441","name":"Rua Orquídeas, 55","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":12.4,"y":79.18},
    {"id":"P442","name":"Rua Osvaldo Rodrigues, 126-160","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":71.18,"y":57.24},
    {"id":"P443","name":"Rua Osvaldo Rodrigues, 161-207","address":"Araras - SP","lines":["1002"],"lat":null,"lng":null,"x":17.25,"y":47.39},
    {"id":"P444","name":"Rua Oswaldo Antonio Scabora","address":"Araras - SP","lines":["1002"],"lat":null,"lng":null,"x":84.15,"y":38.28},
    {"id":"P445","name":"Rua Otávio Rueger, 250-322","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":73.76,"y":47.66},
    {"id":"P446","name":"Rua Padre Ângelo Longhi, 311-401","address":"Araras - SP","lines":["301","1001"],"lat":null,"lng":null,"x":43.5,"y":29.63},
    {"id":"P447","name":"Rua Padre Casemiro, 70-140","address":"Araras - SP","lines":["702"],"lat":null,"lng":null,"x":60.89,"y":29.25},
    {"id":"P448","name":"Rua Padre Santo Marino, 78-164","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":46.75,"y":23.32},
    {"id":"P449","name":"Rua Palmyra Pipa Zani, 10","address":"Araras - SP","lines":["206"],"lat":null,"lng":null,"x":38.239999999999995,"y":68.78999999999999},
    {"id":"P450","name":"Rua Palmyra Pipa Zani, 30","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":38.739999999999995,"y":24.880000000000003},
    {"id":"P451","name":"Rua Palmyra Pipa Zeni, 100","address":"Araras - SP","lines":["201","203","206","207"],"lat":null,"lng":null,"x":48.92,"y":36.06},
    {"id":"P452","name":"Rua Paraíba, 382","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":63.18,"y":74.27000000000001},
    {"id":"P453","name":"Rua Paraiba, 401","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":17.58,"y":42.629999999999995},
    {"id":"P454","name":"Rua Paraná, 207-301","address":"Araras - SP","lines":["301"],"lat":null,"lng":null,"x":87.02,"y":26.58},
    {"id":"P455","name":"Rua Paraná, 208-302","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":72.5,"y":54.45},
    {"id":"P456","name":"Rua Parana, 412","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":36.89,"y":16.53},
    {"id":"P457","name":"Rua Paulo Américo Russo, 192","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":13.780000000000001,"y":62.67},
    {"id":"P458","name":"Rua Paulo Côrte, 129-169","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":61.13,"y":19},
    {"id":"P459","name":"Rua Paz, 1-65","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":65.95,"y":44.72},
    {"id":"P460","name":"Rua Pedro de Melo, 1554-1612","address":"Araras - SP","lines":["204"],"lat":null,"lng":null,"x":58.07,"y":14.16},
    {"id":"P461","name":"Rua Pedro de Melo, 2-12","address":"Araras - SP","lines":["204"],"lat":null,"lng":null,"x":12.09,"y":75.47999999999999},
    {"id":"P462","name":"Rua Pedro de Melo, 990","address":"Araras - SP","lines":["204"],"lat":null,"lng":null,"x":77.91,"y":14.11},
    {"id":"P463","name":"Rua Pedro Moscarde, 101-151","address":"Araras - SP","lines":["102","104"],"lat":null,"lng":null,"x":54.51,"y":62.75},
    {"id":"P464","name":"Rua Pedro Moscarde, 154-206","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":11.4,"y":39.43},
    {"id":"P465","name":"Rua Pérsio Galembeck Campos, 415","address":"Araras - SP","lines":["1001","1002"],"lat":null,"lng":null,"x":24.35,"y":68.93},
    {"id":"P466","name":"Rua Piracicaba, 1086","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":44.97,"y":83.84},
    {"id":"P467","name":"Rua Piracicaba, 1105","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":48.91,"y":77.65},
    {"id":"P468","name":"Rua Piracicaba, 381","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":48.2,"y":26.53},
    {"id":"P469","name":"Rua Piracicaba, 412","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":66.37,"y":54.07},
    {"id":"P470","name":"Rua Piracicaba, 539","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":73.41,"y":56.64},
    {"id":"P471","name":"Rua Piracicaba, 746","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":17.77,"y":43.78},
    {"id":"P472","name":"Rua Piracicaba, 749","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":72.44,"y":16.15},
    {"id":"P473","name":"Rua Piracicaba, 875","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":55.5,"y":58.99},
    {"id":"P474","name":"Rua Piracicaba, 904","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":76.17,"y":59.21},
    {"id":"P475","name":"Rua Primo Basqueira, 280","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":8.65,"y":17.15},
    {"id":"P476","name":"Rua Prof. Vicente Casale Padovani, 173","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":45.3,"y":58.55},
    {"id":"P477","name":"Rua Prof. Vicente Casale Padovani, 370","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":91.77,"y":28.99},
    {"id":"P478","name":"Rua Prof. Vicente Casale Padovani, 601","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":62.98,"y":25.93},
    {"id":"P479","name":"Rua Professor Ângelo Carminati, 135","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":29.12,"y":85.69},
    {"id":"P480","name":"Rua Professor Ângelo Carminati, 60-272","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":63.97,"y":31.54},
    {"id":"P481","name":"Rua Ranulfo Paulino Ramos, 203","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":34.91,"y":23.630000000000003},
    {"id":"P482","name":"Rua Recife, 127-179","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":65.97,"y":27.25},
    {"id":"P483","name":"Rua Reinaldo Bacaro, 333","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":53.54,"y":79.17},
    {"id":"P484","name":"Rua Reinaldo Bacaro, 90 - Parque das Árvores","address":"Araras - SP","lines":["401","402"],"lat":null,"lng":null,"x":90.01,"y":78.41},
    {"id":"P485","name":"Rua Reinaldo Cavenaghi, 219","address":"Araras - SP","lines":["201","203","207"],"lat":null,"lng":null,"x":33.83,"y":19.71},
    {"id":"P486","name":"Rua Reverendo Alva Hardie, 164","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":15.21,"y":19.84},
    {"id":"P487","name":"Rua Ribeirão Preto, 1026","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":61.69,"y":86.63},
    {"id":"P488","name":"Rua Ribeirão Preto, 1070","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":16.34,"y":75.47},
    {"id":"P489","name":"Rua Ribeirão Preto, 1083","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":91.64,"y":39.260000000000005},
    {"id":"P490","name":"Rua Ribeirão Preto, 1293","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":55.87,"y":62.26},
    {"id":"P491","name":"Rua Ribeirão Preto, 457","address":"Araras - SP","lines":["701","702","1501"],"lat":null,"lng":null,"x":48.8,"y":76.34},
    {"id":"P492","name":"Rua Ribeirão Preto, 586-614","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":88.39,"y":28.23},
    {"id":"P493","name":"Rua Ribeirão Preto, 659-709","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":11.55,"y":12.18},
    {"id":"P494","name":"Rua Ribeirão Preto, 859","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":74.94,"y":58.08},
    {"id":"P495","name":"Rua Rio Grande do Norte, 101-163","address":"Araras - SP","lines":["1002"],"lat":null,"lng":null,"x":56.76,"y":79.45},
    {"id":"P496","name":"Rua Rio Grande do Norte, 144","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":67.06,"y":29.05},
    {"id":"P497","name":"Rua Rio Grande do Sul, 933-975 - Parque Industrial","address":"Araras - SP","lines":["1002"],"lat":null,"lng":null,"x":91.58,"y":31.92},
    {"id":"P498","name":"Rua Rivaldo Cornia, 106","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":45.11,"y":54.51},
    {"id":"P499","name":"Rua Romeu Bascheira, 121","address":"Araras - SP","lines":["401","402","501"],"lat":null,"lng":null,"x":78.53,"y":25.21},
    {"id":"P500","name":"Rua Rondônia, 2-102","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":47.9,"y":23.95},
    {"id":"P501","name":"Rua Rosa Peixoto Grachet, 267","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":57.63,"y":20.47},
    {"id":"P502","name":"Rua Rua Adão Cacemiro, 28","address":"Araras - SP","lines":["901","902"],"lat":null,"lng":null,"x":26.01,"y":58.72},
    {"id":"P503","name":"Rua Santa Catarina, 620","address":"Araras - SP","lines":["1001"],"lat":null,"lng":null,"x":58.75,"y":69.37},
    {"id":"P504","name":"Rua Santa Cruz, 1077-1171","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":58.88,"y":12.54},
    {"id":"P505","name":"Rua Santa Cruz, 215-299","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","301","302","702","801","802","901","902","1001","1002","1201","1202","1404","1501"],"lat":null,"lng":null,"x":39.93,"y":31.35},
    {"id":"P506","name":"Rua Santa Cruz, 429","address":"Araras - SP","lines":["302","601","602","1002","1101","1102","1402"],"lat":null,"lng":null,"x":56.81,"y":26.97},
    {"id":"P507","name":"Rua Santo Siviero, 765","address":"Araras - SP","lines":["701","702"],"lat":null,"lng":null,"x":74.25,"y":29.58},
    {"id":"P508","name":"Rua Santos, 1053","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":86.24,"y":78.64},
    {"id":"P509","name":"Rua Santos, 382","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":51.88,"y":68.49000000000001},
    {"id":"P510","name":"Rua Santos, 843","address":"Araras - SP","lines":["701"],"lat":null,"lng":null,"x":50.38,"y":34.72},
    {"id":"P511","name":"Rua São Carlos, 74-134","address":"Araras - SP","lines":["702","1501"],"lat":null,"lng":null,"x":12.34,"y":54.45},
    {"id":"P512","name":"Rua Sebastião dos Santos, 132 Vila Dona Rosa","address":"Araras - SP","lines":["301","302"],"lat":null,"lng":null,"x":46.21,"y":27.21},
    {"id":"P513","name":"Rua Sebastião dos Santos, 2-30","address":"Araras - SP","lines":["302"],"lat":null,"lng":null,"x":34,"y":60.72},
    {"id":"P514","name":"Rua Senador Franco Lacerda, 379","address":"Araras - SP","lines":["401","402","501","502","701","1401","1402","1403"],"lat":null,"lng":null,"x":65.67,"y":50.22},
    {"id":"P515","name":"Rua Sergio Henrique de Oliveira, 140","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":30.1,"y":76.44},
    {"id":"P516","name":"Rua Silva Jardim, 1-103","address":"Araras - SP","lines":["401","402","501","502","601","701","1101","1102","1401","1402","1403"],"lat":null,"lng":null,"x":71.45,"y":72.93},
    {"id":"P517","name":"Rua Silvia Teles, 2-100","address":"Araras - SP","lines":["102","103","104","105","201","202","203","206","207","301","302","702","801","802","901","902","1001","1002","1201","1202","1401","1403","1404","1501"],"lat":null,"lng":null,"x":42.52,"y":39.35},
    {"id":"P518","name":"Rua Silvino Gagliarde, 191","address":"Araras - SP","lines":["802"],"lat":null,"lng":null,"x":64.64,"y":76.53},
    {"id":"P519","name":"Rua Silvino Gagliarde, 227","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":50.08,"y":47.52},
    {"id":"P520","name":"Rua Silvino Gagliarde, 601","address":"Araras - SP","lines":["801"],"lat":null,"lng":null,"x":16.72,"y":20.17},
    {"id":"P521","name":"Rua Tapajós - SENAI","address":"Araras - SP","lines":["204"],"lat":null,"lng":null,"x":89.44,"y":12.28},
    {"id":"P522","name":"Rua Tapuias, 228","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":85.6,"y":20.72},
    {"id":"P523","name":"Rua Tapuias, 439","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":74.64,"y":80.1},
    {"id":"P524","name":"Rua Tapuias, 509","address":"Araras - SP","lines":["801","802"],"lat":null,"lng":null,"x":67.12,"y":32.94},
    {"id":"P525","name":"Rua Teresa de Oliveira Silva, 242-296","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":40.2,"y":75.42},
    {"id":"P526","name":"Rua Teresa de Oliveira Silva, 66-124","address":"Araras - SP","lines":["1201","1202"],"lat":null,"lng":null,"x":24.04,"y":57.31},
    {"id":"P527","name":"Rua Tulipas - Saema","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":41.29,"y":52.59},
    {"id":"P528","name":"Rua Valdemar de Ponte, 77","address":"Araras - SP","lines":["201","204"],"lat":null,"lng":null,"x":64.88,"y":75.47},
    {"id":"P529","name":"Rua Valter de Sá Andrade, 575-653","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":18.03,"y":41.16},
    {"id":"P530","name":"Rua Venâncio Pádula, 671-753","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":55.44,"y":21.7},
    {"id":"P531","name":"Rua Vereador Cesário Coimbra, 301-395","address":"Araras - SP","lines":["1101","1102"],"lat":null,"lng":null,"x":46.16,"y":47.43},
    {"id":"P532","name":"Rua Vereador de Eolo Camargo Preto, 370-464","address":"Araras - SP","lines":["702"],"lat":null,"lng":null,"x":37.760000000000005,"y":78.75},
    {"id":"P533","name":"Rua Vitória Régia, 1030","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":70.33,"y":40.54},
    {"id":"P534","name":"Rua Vitória Régia, 445","address":"Araras - SP","lines":["601","602"],"lat":null,"lng":null,"x":9.620000000000001,"y":52.5},
    {"id":"P535","name":"Rua Vivaldo Storoli, 85","address":"Araras - SP","lines":["501","502"],"lat":null,"lng":null,"x":10.93,"y":69.6},
    {"id":"P536","name":"Rua Viviane Cristina Hepfner, 51-95","address":"Araras - SP","lines":["103","105"],"lat":null,"lng":null,"x":63.89,"y":77.65},
    {"id":"P537","name":"São Bento","address":"Araras - SP","lines":["1403"],"lat":null,"lng":null,"x":70.8,"y":51.93},
    {"id":"P538","name":"Universidade Federal de São Carlos, UFSCar - Campus Araras","address":"Araras - SP","lines":["502"],"lat":null,"lng":null,"x":20.21,"y":25.17}
  ],
  "schedules": [
    {
      "id": "102",
      "pdfCode": "0102",
      "name": "José Ometto | Jd. Morumbi",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:20",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:40",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:25",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:45",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "domingo": {
          "terminal": [
            "05:25",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:45",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:25",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:45",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        }
      }
    },
    {
      "id": "101",
      "pdfCode": "0101",
      "name": "José Ometto | Jd. Morumbi",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "06:00",
            "07:20",
            "08:40",
            "10:00",
            "11:20",
            "12:40",
            "14:00",
            "15:20",
            "16:40",
            "18:00"
          ],
          "bairro": [
            "05:00",
            "06:20",
            "07:40",
            "09:00",
            "10:20",
            "11:40",
            "13:00",
            "14:20",
            "15:40",
            "17:00",
            "18:20"
          ]
        },
        "sabado": {
          "terminal": [
            "06:00",
            "07:20",
            "08:40"
          ],
          "bairro": [
            "05:00",
            "06:20",
            "07:40",
            "09:00"
          ]
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "202",
      "pdfCode": "0202",
      "name": "Pq. Tiradentes | Dom Pedro | Jair Della Coletta",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:20",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:40",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:25",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:45",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "domingo": {
          "terminal": [
            "05:25",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:45",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:25",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:40",
            "05:45",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        }
      }
    },
    {
      "id": "201",
      "pdfCode": "0201",
      "name": "Pq. Tiradentes | Dom Pedro | Jair Della Coletta",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "06:00",
            "07:20",
            "08:40",
            "10:00",
            "11:20",
            "12:40",
            "14:00",
            "15:20",
            "16:40",
            "18:00"
          ],
          "bairro": [
            "05:00",
            "06:20",
            "07:40",
            "09:00",
            "10:20",
            "11:40",
            "13:00",
            "14:20",
            "15:40",
            "17:00",
            "18:20"
          ]
        },
        "sabado": {
          "terminal": [
            "06:00",
            "07:20",
            "08:40"
          ],
          "bairro": [
            "05:00",
            "06:20",
            "07:40",
            "09:00"
          ]
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "1201",
      "pdfCode": "1201",
      "name": "Warley Colombini | Costa Verde | Portal do Sol",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "14:30",
            "15:30",
            "16:30",
            "17:30",
            "18:40",
            "20:00"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "14:50",
            "15:50",
            "16:50",
            "17:50",
            "19:00",
            "20:20"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:45",
            "05:50",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:45",
            "05:50",
            "07:00"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:45",
            "05:50",
            "07:00"
          ]
        }
      }
    },
    {
      "id": "1001",
      "pdfCode": "1001",
      "name": "Bela Vista",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        }
      }
    },
    {
      "id": "301",
      "pdfCode": "0301",
      "name": "Narciso Gomes",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        }
      }
    },
    {
      "id": "1003",
      "pdfCode": "1003",
      "name": "Narciso Gomes |Bela Vista",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "sabado": {
          "terminal": [
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "domingo": {
          "terminal": [
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "feriado": {
          "terminal": [
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        }
      }
    },
    {
      "id": "801",
      "pdfCode": "0801",
      "name": "Jardim Fátima |Vila Lobos",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [],
          "bairro": []
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "901",
      "pdfCode": "0901",
      "name": "Jd. Ouro Verde | Jd. das Nações | Abolição",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [],
          "bairro": []
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "803",
      "pdfCode": "0803",
      "name": "Jd. Ouro Verde | Jd. das Nações | Abolição | Jd. Fátima",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "18:40",
            "20:00",
            "21:25"
          ],
          "bairro": [
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "19:00",
            "20:20",
            "21:45"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "21:45",
            "22:50"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "17:20",
            "18:40",
            "20:00",
            "21:25"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "17:40",
            "19:00",
            "20:20",
            "21:45"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "17:20",
            "18:40",
            "20:00",
            "21:25"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "17:40",
            "19:00",
            "20:20",
            "21:45"
          ]
        }
      }
    },
    {
      "id": "401",
      "pdfCode": "0401",
      "name": "Parque das Árvores | Alto da Colina",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "08:30",
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [],
          "bairro": []
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "501",
      "pdfCode": "0501",
      "name": "Jd. Alvorada | Jd. Pedras Preciosas",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "08:30",
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [],
          "bairro": []
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "403",
      "pdfCode": "0403",
      "name": "das Árvores | Alto da Colina | Jd. Alvorada | Jd. Pedras Preciosas",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        }
      }
    },
    {
      "id": "701",
      "pdfCode": "0701",
      "name": "Jd.São João | Jd. São Pedro",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00"
          ]
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "1501",
      "pdfCode": "1501",
      "name": "Jd. Milton Severino",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [],
          "bairro": []
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "1601",
      "pdfCode": "1601",
      "name": "Jd. Apolo | Jd.Vida Nova",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [],
          "bairro": []
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "1502",
      "pdfCode": "1502",
      "name": "Jd. Milton Severino |Jd. Apolo | Jd.Vida Nova",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "18:40",
            "20:00",
            "21:25"
          ],
          "bairro": [
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "19:00",
            "20:20",
            "21:45"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00"
          ]
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    },
    {
      "id": "702",
      "pdfCode": "0702",
      "name": "Jd. Milton Severino |Jd. Apolo | Jd.Vida Nova | Jd. São João",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "sabado": {
          "terminal": [
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30",
            "06:40",
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00",
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        }
      }
    },
    {
      "id": "1101",
      "pdfCode": "1101",
      "name": "Jd. Candida | Jd. Rosana",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        }
      }
    },
    {
      "id": "601",
      "pdfCode": "0601",
      "name": "Jd. Sobradinho | Jd. Nova Olinda",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "08:30",
            "14:30",
            "15:30",
            "16:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "08:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:40"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "07:00"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30"
          ],
          "bairro": [
            "04:50",
            "05:50"
          ]
        }
      }
    },
    {
      "id": "1103",
      "pdfCode": "1103",
      "name": "Jd. Sobradinho | Jd. Cândida",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "09:30",
            "10:40",
            "12:00",
            "13:20",
            "18:40",
            "20:00",
            "21:25",
            "22:30"
          ],
          "bairro": [
            "09:50",
            "11:00",
            "12:20",
            "13:40",
            "19:00",
            "20:20",
            "21:45",
            "22:50"
          ]
        },
        "sabado": {
          "terminal": [
            "08:00",
            "09:20",
            "10:40",
            "12:00",
            "13:20",
            "14:40",
            "16:00",
            "17:20",
            "18:40",
            "21:25"
          ],
          "bairro": [
            "08:20",
            "09:40",
            "11:00",
            "12:20",
            "13:40",
            "15:00",
            "16:20",
            "17:40",
            "19:00",
            "21:45"
          ]
        },
        "domingo": {
          "terminal": [
            "06:40",
            "10:40",
            "12:00",
            "13:20",
            "17:20",
            "18:40",
            "21:25"
          ],
          "bairro": [
            "07:00",
            "11:00",
            "12:20",
            "13:40",
            "17:40",
            "19:00",
            "21:45"
          ]
        },
        "feriado": {
          "terminal": [
            "06:40",
            "10:40",
            "12:00",
            "13:20",
            "17:20",
            "18:40",
            "21:25"
          ],
          "bairro": [
            "07:00",
            "11:00",
            "12:20",
            "13:40",
            "17:40",
            "19:00",
            "21:45"
          ]
        }
      }
    },
    {
      "id": "1301",
      "pdfCode": "1301",
      "name": "Distrito Industrial V | Tenneco | Savegnago",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "11:00",
            "12:30",
            "13:30",
            "14:30",
            "15:30",
            "16:50",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "11:20",
            "12:20",
            "13:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "sabado": {
          "terminal": [
            "05:30",
            "06:30",
            "07:30",
            "11:00",
            "12:30",
            "13:30",
            "14:30",
            "15:30",
            "16:50",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "06:50",
            "07:50",
            "11:20",
            "12:20",
            "13:50",
            "14:50",
            "15:50",
            "16:50",
            "17:50"
          ]
        },
        "domingo": {
          "terminal": [
            "05:30",
            "13:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "13:50",
            "17:50"
          ]
        },
        "feriado": {
          "terminal": [
            "05:30",
            "13:30",
            "17:30"
          ],
          "bairro": [
            "04:50",
            "05:50",
            "13:50",
            "17:50"
          ]
        }
      }
    },
    {
      "id": "1401",
      "pdfCode": "1401",
      "name": "Fazenda Cascata",
      "days": {
        "segunda_sexta": {
          "terminal": [
            "06:30",
            "17:30"
          ],
          "bairro": [
            "07:10",
            "18:10"
          ]
        },
        "sabado": {
          "terminal": [
            "08:00",
            "16:00"
          ],
          "bairro": [
            "08:40",
            "16:40"
          ]
        },
        "domingo": {
          "terminal": [],
          "bairro": []
        },
        "feriado": {
          "terminal": [],
          "bairro": []
        }
      }
    }
  ]
};
