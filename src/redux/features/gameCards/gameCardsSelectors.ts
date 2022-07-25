import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectGameCard = (state: RootState) => state.gameCards;

export const selectGameCards = createSelector(
  [selectGameCard],
  (gameCards) => gameCards.cards,
);

export const selectActiveGameCards = createSelector(
  [selectGameCard],
  (gameCards) => gameCards.activeCards,
);

export const selectGameInProgress = createSelector(
  [selectGameCard],
  (gameCards) => gameCards.gameInProgress,
);
