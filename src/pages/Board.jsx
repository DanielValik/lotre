import Card from "../features/card/Card";
import { useCards } from "../features/card/useCards";

function Board() {
  const { cards, isLoading, error } = useCards();

  return (
    <div style={{ padding: "30px" }}>
      {cards?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Board;
