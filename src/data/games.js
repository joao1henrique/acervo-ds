// Jogos do Nintendo DS usados no acervo.
// O ano é o do primeiro lançamento do jogo no DS (em qualquer região).
const games = [
  {
    id: 1,
    title: 'Super Mario 64 DS',
    year: 2004,
    genre: 'Plataforma',
    developer: 'Nintendo EAD',
    description:
      'Versão ampliada do clássico do Nintendo 64, com Yoshi, Luigi e Wario jogáveis e minigames na tela de toque.',
  },
  {
    id: 2,
    title: 'WarioWare: Touched!',
    year: 2004,
    genre: 'Minijogos',
    developer: 'Intelligent Systems',
    description:
      'Centenas de microjogos de poucos segundos, feitos para a caneta e o microfone do DS.',
  },
  {
    id: 3,
    title: 'Kirby: Canvas Curse',
    year: 2005,
    genre: 'Plataforma',
    developer: 'HAL Laboratory',
    description:
      'O Kirby vira uma bola e o jogador desenha arco-íris com a caneta para guiá-lo pelas fases.',
  },
  {
    id: 4,
    title: 'Nintendogs',
    year: 2005,
    genre: 'Simulação',
    developer: 'Nintendo EAD',
    description:
      'Cuide de filhotes de cachorro: dê banho, ensine truques pelo microfone e leve para passear.',
  },
  {
    id: 5,
    title: 'Brain Age',
    year: 2005,
    genre: 'Quebra-cabeça',
    developer: 'Nintendo SPD',
    description:
      'Exercícios rápidos de cálculo e leitura para treinar o raciocínio um pouco por dia.',
  },
  {
    id: 6,
    title: 'Mario Kart DS',
    year: 2005,
    genre: 'Corrida',
    developer: 'Nintendo EAD',
    description:
      'Corridas com os personagens da Nintendo e o primeiro da série com partidas online, pela Nintendo Wi-Fi Connection.',
  },
  {
    id: 7,
    title: 'Animal Crossing: Wild World',
    year: 2005,
    genre: 'Simulação',
    developer: 'Nintendo EAD',
    description:
      'Viva numa vila de animais: pesque, decore a casa e visite a cidade dos amigos.',
  },
  {
    id: 8,
    title: 'Mario & Luigi: Partners in Time',
    year: 2005,
    genre: 'RPG',
    developer: 'AlphaDream',
    description:
      'Mario e Luigi viajam no tempo e lutam ao lado das versões bebês de si mesmos.',
  },
  {
    id: 9,
    title: 'Phoenix Wright: Ace Attorney',
    year: 2005,
    genre: 'Aventura',
    developer: 'Capcom',
    description:
      'Investigue cenas de crime e aponte as contradições das testemunhas no tribunal.',
  },
  {
    id: 10,
    title: 'Castlevania: Dawn of Sorrow',
    year: 2005,
    genre: 'Ação',
    developer: 'Konami',
    description:
      'Exploração de um castelo cheio de segredos, com selos mágicos desenhados na tela de toque.',
  },
  {
    id: 11,
    title: 'Advance Wars: Dual Strike',
    year: 2005,
    genre: 'Estratégia',
    developer: 'Intelligent Systems',
    description:
      'Estratégia por turnos em que as batalhas podem acontecer nas duas telas ao mesmo tempo.',
  },
  {
    id: 12,
    title: 'New Super Mario Bros.',
    year: 2006,
    genre: 'Plataforma',
    developer: 'Nintendo EAD',
    description:
      'Mario volta ao 2D com o cogumelo gigante e o minicogumelo entre os poderes.',
  },
  {
    id: 13,
    title: 'Tetris DS',
    year: 2006,
    genre: 'Quebra-cabeça',
    developer: 'Nintendo SPD',
    description:
      'O Tetris clássico com modos temáticos de jogos da Nintendo e partidas online.',
  },
  {
    id: 14,
    title: 'Metroid Prime Hunters',
    year: 2006,
    genre: 'Tiro',
    developer: 'Nintendo Software Technology',
    description:
      'Tiro em primeira pessoa com Samus Aran, mirando com a caneta na tela de toque.',
  },
  {
    id: 15,
    title: 'Pokémon Diamond e Pearl',
    year: 2006,
    genre: 'RPG',
    developer: 'Game Freak',
    description:
      'Capture e treine Pokémon na região de Sinnoh, com trocas e batalhas online.',
  },
  {
    id: 16,
    title: 'Elite Beat Agents',
    year: 2006,
    genre: 'Ritmo',
    developer: 'iNiS',
    description:
      'Toque nos círculos no ritmo da música para ajudar pessoas em apuros.',
  },
  {
    id: 17,
    title: 'Picross DS',
    year: 2007,
    genre: 'Quebra-cabeça',
    developer: 'Jupiter',
    description:
      'Pinte os quadrados certos seguindo as pistas numéricas para revelar desenhos.',
  },
  {
    id: 18,
    title: 'Professor Layton and the Curious Village',
    year: 2007,
    genre: 'Quebra-cabeça',
    developer: 'Level-5',
    description:
      'O professor Layton e Luke investigam um mistério resolvendo enigmas pelo caminho.',
  },
  {
    id: 19,
    title: 'The Legend of Zelda: Phantom Hourglass',
    year: 2007,
    genre: 'Aventura',
    developer: 'Nintendo EAD',
    description:
      'Link é controlado inteiramente pela caneta, e o jogador faz anotações no próprio mapa.',
  },
  {
    id: 20,
    title: 'The World Ends with You',
    year: 2007,
    genre: 'RPG',
    developer: 'Square Enix e Jupiter',
    description:
      'RPG de ação em Shibuya, com batalhas acontecendo nas duas telas ao mesmo tempo.',
  },
  {
    id: 21,
    title: 'Pokémon Platinum',
    year: 2008,
    genre: 'RPG',
    developer: 'Game Freak',
    description:
      'Versão ampliada de Diamond e Pearl, com o Mundo Distorcido de Giratina.',
  },
  {
    id: 22,
    title: 'Kirby Super Star Ultra',
    year: 2008,
    genre: 'Plataforma',
    developer: 'HAL Laboratory',
    description:
      'Remake do clássico do Super Nintendo, com modos novos e cenas em vídeo.',
  },
  {
    id: 23,
    title: 'Fire Emblem: Shadow Dragon',
    year: 2008,
    genre: 'Estratégia',
    developer: 'Intelligent Systems',
    description:
      'Remake do primeiro Fire Emblem: táticas por turnos em que a unidade derrotada não volta.',
  },
  {
    id: 24,
    title: 'Chrono Trigger',
    year: 2008,
    genre: 'RPG',
    developer: 'Square Enix',
    description:
      'Versão para DS do RPG clássico de viagem no tempo, com conteúdo extra.',
  },
  {
    id: 25,
    title: "Mario & Luigi: Bowser's Inside Story",
    year: 2009,
    genre: 'RPG',
    developer: 'AlphaDream',
    description:
      'Os irmãos exploram o corpo do Bowser enquanto ele luta do lado de fora.',
  },
  {
    id: 26,
    title: 'Pokémon Mystery Dungeon: Explorers of Sky',
    year: 2009,
    genre: 'RPG',
    developer: 'Chunsoft',
    description:
      'O jogador vira um Pokémon e explora masmorras que mudam a cada visita.',
  },
  {
    id: 27,
    title: 'Dragon Quest IX: Sentinels of the Starry Skies',
    year: 2009,
    genre: 'RPG',
    developer: 'Level-5',
    description:
      'RPG em que se cria o próprio herói e se joga com até quatro amigos.',
  },
  {
    id: 28,
    title: 'Pokémon HeartGold e SoulSilver',
    year: 2009,
    genre: 'RPG',
    developer: 'Game Freak',
    description:
      'Remakes de Gold e Silver, com o Pokémon da frente da equipe seguindo o jogador.',
  },
  {
    id: 29,
    title: 'The Legend of Zelda: Spirit Tracks',
    year: 2009,
    genre: 'Aventura',
    developer: 'Nintendo EAD',
    description:
      'Link conduz um trem pelos trilhos de Hyrule e sopra no microfone para tocar a flauta.',
  },
  {
    id: 30,
    title: 'Pokémon Black e White',
    year: 2010,
    genre: 'RPG',
    developer: 'Game Freak',
    description:
      'A região de Unova, só com Pokémon inéditos até o fim da história principal.',
  },
];

export default games;
