// const flashCards = [
//     {
//       questNumber: 1,
//       question: "O que é JSX?",
//       answer: "Uma extensão de linguagem do JavaScript."
//     },
//     {
//       questNumber: 2,
//       question: "O React é __ ",
//       answer: "Uma biblioteca JavaScript para construção de interfaces."
//     },
//     {
//       questNumber: 3,
//       question: "Componentes devem iniciar com __",
//       answer: "Letra maiúscula."
//     },
//     {
//       questNumber: 4,
//       question: "Podemos colocar __ dentro do JSX",
//       answer: "Expressões."
//     },
//     {
//       questNumber: 5,
//       question: "O ReactDOM nos ajuda __ ",
//       answer: "Interagindo com a DOM para colocar componentes React na mesma."
//     },
//     {
//       questNumber: 6,
//       question: "Usamos o npm para __",
//       answer: "Gerenciar os pacotes necessários e suas dependências."
//     },
//     {
//       questNumber: 7,
//       question: "Usamos props para __",
//       answer: "Passar diferentes informações para componentes."
//     },
//     {
//       questNumber: 8,
//       question: "Usamos estado (state) para __",
//       answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."
//     },
//   ];

const cardsTemplate = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
  {
    question: "O React é __ ",
    answer: "Uma biblioteca JavaScript para construção de interfaces.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
  {
    question: "Componentes devem iniciar com __",
    answer: "Letra maiúscula.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "Expressões.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
  {
    question: "O ReactDOM nos ajuda __ ",
    answer: "Interagindo com a DOM para colocar componentes React na mesma.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
  {
    question: "Usamos o npm para __",
    answer: "Gerenciar os pacotes necessários e suas dependências.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
  {
    question: "Usamos props para __",
    answer: "Passar diferentes informações para componentes.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
  {
    question: "Usamos estado (state) para __",
    answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
    statusCard: "front",
    statusAnswer: "play-outline",
  },
];

const flashCards = cardsTemplate.sort(() => Math.random() - 0.5);

export default flashCards;
