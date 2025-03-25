import { useQuery } from "@tanstack/react-query";
import { getCards } from "../../services/apiCards";

export function useCards() {
  const {
    data: cards,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cards"],
    queryFn: () => getCards(),
    retry: false,
  });

  return { cards, isLoading, error };
}

export default useCards;
