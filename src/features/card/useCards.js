import { useQuery } from "@tanstack/react-query";
import { getCards } from "../../services/apiCards";
import { getAllTasks } from "../../services/apiTasks";

export function useCards() {
  const {
    data: cards,
    isLoading: isCardsLoading,
    error: cardsError,
  } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
    retry: false,
  });

  const {
    data: tasks,
    isLoading: isTasksLoading,
    error: tasksError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllTasks,
    retry: false,
  });

  const cardsWithTasks = cards?.map((card) => ({
    ...card,
    tasks: tasks?.filter((task) => task.card_id === card.id),
  }));

  return {
    cards: cardsWithTasks,
    isLoading: isCardsLoading || isTasksLoading,
    error: cardsError || tasksError,
  };
}

export default useCards;
