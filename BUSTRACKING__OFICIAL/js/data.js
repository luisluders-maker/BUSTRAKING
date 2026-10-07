/* =========================================================
   BUSTRACKING — Dados do projeto
   Rotas: arquivos LINHAS fornecidos para o projeto.
   Horários: PDF de horários do TCA fornecido para o projeto.
   ========================================================= */

window.BUS_DATA = {
  "city": "Araras-SP",
  "buses": [
    {
      "id": "101-01",
      "number": "101",
      "lineId": "101",
      "status": "Em operação",
      "speed": 32,
      "nextStop": "Praça da Matriz",
      "eta": 3,
      "x": 27,
      "y": 45,
      "direction": "Centro → Jardim Aurora"
    },
    {
      "id": "101-02",
      "number": "101",
      "lineId": "101",
      "status": "Em operação",
      "speed": 28,
      "nextStop": "Jardim Aurora",
      "eta": 7,
      "x": 56,
      "y": 54,
      "direction": "Centro → Jardim Aurora"
    },
    {
      "id": "202-01",
      "number": "202",
      "lineId": "202",
      "status": "Em operação",
      "speed": 25,
      "nextStop": "Rua Nova",
      "eta": 5,
      "x": 71,
      "y": 28,
      "direction": "Terminal → Vila Nova"
    },
    {
      "id": "305-01",
      "number": "305",
      "lineId": "305",
      "status": "Parado",
      "speed": 0,
      "nextStop": "Terminal Central",
      "eta": 0,
      "x": 42,
      "y": 70,
      "direction": "Centro → Parque Sul"
    }
  ],
  "lines": [
    {
      "id": "102",
      "name": "José Ometto",
      "directions": [
        {
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
          "direction": "Saída do Terminal",
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
