export default function CompletedCards({ qntAnswers, cards }) {
  return (
    <p>
      {qntAnswers}/{cards.length} CONCLUÍDOS
    </p>
  );
}
