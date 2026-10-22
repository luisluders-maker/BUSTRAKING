BUSTRACKING — versão estática HTML/CSS3

Estrutura:
- index.html              Tela inicial
- rastrear.html           Rastreamento de ônibus
- itinerarios.html        Itinerários
- horarios.html           Horários
- pontos.html             Pontos de parada
- login.html              Login
- cadastro.html           Cadastro
- components/header.html  Header compartilhado
- css/styles.css          Estilos globais
- js/main.js               Carregamento do header e menu mobile

Observação:
Esta versão reproduz a arquitetura visual e os fluxos principais do site acessível no endereço fornecido,
com dados demonstrativos. Não inclui backend, banco de dados, autenticação real ou GPS real.
Para abrir, mantenha a estrutura de pastas e abra index.html em um servidor local (Live Server, por exemplo).


VERSÃO LOVABLE FIEL: refinamento de hierarquia visual, hero, espaçamentos, cartões, cores, responsividade e componentes reutilizáveis inspirado na página original.


### Rotas específicas
- `/rastrear.html` — sidebar de ônibus + mapa live + popup de previsão.
- `/itinerarios.html` — pesquisa das linhas e itinerários completos, separados por sentido (saída do terminal e saída do bairro).
- `/horarios.html` — consulta dos horários por linha e por tipo de dia, com os sentidos de saída do terminal e saída do bairro.
- `/pontos.html` — lista de pontos + mapa.
- `/login.html` e `/cadastro.html` — layout dividido de autenticação.


### Dados conectados
As telas agora são dirigidas por `js/data.js` e manipuladas por `js/main.js`. Os itinerários e horários foram alimentados pelos arquivos fornecidos para o projeto.
- Rastreamento: busca/filtros, seleção de ônibus, marcadores e atualização simulada de velocidade.
- Itinerários: pesquisa dinâmica das linhas.
- Horários: filtros de linha e dia.
- Pontos: busca e seleção no mapa.
- Home: contadores alimentados pelos dados.

Para dados reais, troque o objeto `BUS_DATA` por `fetch()` para sua API. O formato dos objetos já está separado para facilitar essa substituição.


### Cena cinematográfica da página inicial
A home ganhou uma cena inspirada em tomadas de ônibus/trem vistas pela janela: céu, prédios, árvores e rastros de luz usam velocidades diferentes para criar profundidade e sensação de movimento. O efeito reage ao scroll e inclui moldura, reflexos, vinheta e granulação cinematográfica.
