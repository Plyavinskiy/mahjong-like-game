import useHomepage from "./useHomepage";
import PageLayout from "../../components/PageLayout/PageLayout";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";
import GameControls from "../../components/GameControls/GameControls";
import Button from "../../components/Button/Button";
import "./Homepage.scss";

const Homepage: React.FC = () => {
  const {
    gameCards,
    gameInProgress,
    isActiveCard,
    handleSetupNewGame,
    handleStartGame,
    handleSelectCard,
  } = useHomepage();

  return (
    <PageLayout>
      <CardsContainer>
        {gameCards.map((card) => (
          <Card
            key={card.id}
            tabIndex={0}
            isVisible={!gameInProgress}
            isActive={isActiveCard(card.id)}
            isGuessed={card.isGuessed}
            onClick={() => handleSelectCard(card)}
          >
            {card.number}
          </Card>
        ))}
      </CardsContainer>
      <GameControls className="homepage__controls">
        <Button
          type="button"
          className="homepage__button"
          option="outlined"
          onClick={handleSetupNewGame}
        >
          Refresh
        </Button>
        <Button
          type="button"
          className="homepage__button"
          option="contained"
          onClick={handleStartGame}
          disabled={gameInProgress}
        >
          Start
        </Button>
      </GameControls>
    </PageLayout>
  );
};

export default Homepage;
