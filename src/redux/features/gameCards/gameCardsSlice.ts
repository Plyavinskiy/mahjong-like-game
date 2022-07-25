import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../../types/card";
import type { RootState } from "../../store";

interface ICardsState {
  cards: ICard[];
  activeCards: ICard[];
  gameInProgress: boolean;
}

const initialState: ICardsState = {
  cards: [],
  activeCards: [],
  gameInProgress: false,
};

const gameCardsSlice = createSlice({
  name: "gameCards",
  initialState,
  reducers: {
    setupGame(state: ICardsState, action: PayloadAction<ICard[]>) {
      const addedCards = [...action.payload];

      return {
        ...initialState,
        cards: addedCards,
      };
    },

    startGame(state: ICardsState) {
      return {
        ...state,
        gameInProgress: true,
      };
    },

    selectCard(state: ICardsState, action: PayloadAction<ICard["id"]>) {
      const cardId = action.payload;
      const selectedCard = state.cards.find((card) => card.id === cardId);

      if (!selectedCard) {
        return state;
      }

      let activeCards: ICard[];

      if (state.activeCards.length >= 2) {
        activeCards = [];
      } else {
        activeCards = [...state.activeCards];
      }

      const matchedCard = activeCards.find(
        (card) => card.number === selectedCard.number,
      );

      if (matchedCard) {
        const updatedCards = [...state.cards];

        const selectedCardIndex = updatedCards.findIndex(
          (card) => card.id === selectedCard.id,
        );

        const matchedCardIndex = updatedCards.findIndex(
          (card) => card.id === matchedCard.id,
        );

        updatedCards[selectedCardIndex] = { ...selectedCard, isGuessed: true };
        updatedCards[matchedCardIndex] = { ...matchedCard, isGuessed: true };

        return {
          ...state,
          cards: updatedCards,
          activeCards: [],
        };
      }

      return {
        ...state,
        activeCards: [...activeCards, selectedCard],
      };
    },

    unselectCard(state: ICardsState, action: PayloadAction<ICard["id"]>) {
      const cardId = action.payload;
      const filteredActiveCards = state.activeCards.filter(
        (card) => card.id !== cardId,
      );

      return {
        ...state,
        activeCards: filteredActiveCards,
      };
    },
  },
});

export const selectCardWithDelay = createAsyncThunk<
  void,
  ICard["id"],
  { state: RootState }
>("gameCards/selectCardWithDelay", (cardId, { dispatch, getState }) => {
  const { activeCards } = getState().gameCards;

  if (activeCards.length === 1) {
    setTimeout(() => {
      activeCards.forEach((card) =>
        dispatch(gameCardsSlice.actions.unselectCard(card.id)),
      );

      dispatch(gameCardsSlice.actions.unselectCard(cardId));
    }, 750);
  }

  dispatch(gameCardsSlice.actions.selectCard(cardId));
});

export const { setupGame, startGame, selectCard, unselectCard } =
  gameCardsSlice.actions;

export default gameCardsSlice.reducer;
