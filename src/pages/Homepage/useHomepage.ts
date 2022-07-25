import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

import {
  selectGameCards,
  selectActiveGameCards,
  selectGameInProgress,
} from "../../redux/features/gameCards/gameCardsSelectors";

import { ICard } from "../../types/card";
import getGameCards from "../../helpers/getGameCards";

import {
  setupGame,
  startGame,
  selectCardWithDelay,
} from "../../redux/features/gameCards/gameCardsSlice";

const useHomepage = () => {
  const dispatch = useAppDispatch();
  const gameCards = useSelector(selectGameCards);
  const activeGameCards = useSelector(selectActiveGameCards);
  const gameInProgress = useSelector(selectGameInProgress);

  const isActiveCard = (cardId: ICard["id"]): boolean =>
    activeGameCards.some((card) => card.id === cardId);

  const handleSetupNewGame = useCallback(() => {
    const generatedCards = getGameCards();

    dispatch(setupGame(generatedCards));
  }, [dispatch]);

  useEffect(() => {
    handleSetupNewGame();
  }, [handleSetupNewGame]);

  const handleStartGame = () => dispatch(startGame());

  const handleSelectCard = (selectedCard: ICard) => {
    const isSelectable =
      !selectedCard.isGuessed && !isActiveCard(selectedCard.id);

    if (!isSelectable || !gameInProgress) return;

    dispatch(selectCardWithDelay(selectedCard.id));
  };

  return {
    gameCards,
    gameInProgress,
    isActiveCard,
    handleSetupNewGame,
    handleStartGame,
    handleSelectCard,
  };
};

export default useHomepage;
