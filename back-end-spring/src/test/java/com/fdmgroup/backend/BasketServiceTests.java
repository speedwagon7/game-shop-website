package com.fdmgroup.backend;

import com.fdmgroup.model.Basket;
import com.fdmgroup.model.Game;
import com.fdmgroup.service.BasketServiceImp;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.when;

import java.util.Map;

@SpringBootTest
public class BasketServiceTests {
    private BasketServiceImp basketService;
    private Basket basket;
    private Game mockGame1;
    private Game mockGame2;

    @BeforeEach
    public void setup() {
        basketService = new BasketServiceImp();
        basket = basketService.getBasket();
        mockGame1 = new Game(6L, "Mock Game 1", null, null, 49.99, 0, 0, null, null);
        mockGame2 = new Game(7L, "Mock Game 2", null, null, 39.99, 0, 0, null, null);
    }

    @Test
    void addGameToBasket_shouldAddGameToBasket() {
        Game game = new Game(0, "Game 1", null, null, 50, 0, 0, null, null);
        int quantity = 2;
        basketService.addGameToBasket(game, quantity);
        Map<Long, Integer> gamesInBasket = basketService.getGamesInBasket();
        assertEquals(quantity, gamesInBasket.get(game.getId()));
    }


    


    @Test
    public void test_calculateBasketTotal_returnsCorrectTotal() {
        int quantity1 = 2;
        int quantity2 = 1;
        double expectedTotal = (mockGame1.getPrice() * quantity1) + (mockGame2.getPrice() * quantity2);
        basketService.addGameToBasket(mockGame1, quantity1);
        basketService.addGameToBasket(mockGame2, quantity2);
        double actualTotal = basketService.calculateBasketTotal();
        assertEquals(expectedTotal, actualTotal);
    }

    @Test
    public void test_removeGameFromBasket_removesGameFromBasket() {
        Game game1 = new Game(0, "Game 1", null, null, 50, 0, 0, null, null);
        int quantity1 = 2;
        basketService.addGameToBasket(game1, quantity1);

        Game game2 = new Game(quantity1, "Game 2", null, null, 60, quantity1, quantity1, null, null);
        int quantity2 = 1;
        basketService.addGameToBasket(game2, quantity2);

        basketService.removeGameFromBasket(game1);
        Map<Long, Integer> gamesInBasket = basketService.getGamesInBasket();
        assertNull(gamesInBasket.get(game1.getId()));
        assertEquals(quantity2, gamesInBasket.get(game2.getId()));

    }
    @Test
public void test_removeAllGamesfromBasket_removesAllGamesFromBasket() {
    basketService.addGameToBasket(mockGame1, 1);
    basketService.addGameToBasket(mockGame2, 2);
    basketService.removeAllGamesfromBasket();
    assertEquals(0, basket.getGamesInBasket().size());
}
@Test
public void test_updateGameInBasket_updatesQuantityOfGameInBasket() {
    Game game1 = new Game(0, "Game 1", null, null, 50, 0, 0, null, null);
        int quantity1 = 2;
        basketService.addGameToBasket(game1, quantity1);
        Game game2 = new Game(quantity1, "Game 2", null, null, 60, quantity1, quantity1, null, null);
        int quantity2 = 1;
        basketService.addGameToBasket(game2, quantity2);
        int newQuantity = 5;
        basketService.updateGameInBasket(game1, newQuantity);
        Map<Long, Integer> gamesInBasket = basketService.getGamesInBasket();
        assertEquals(newQuantity, gamesInBasket.get(game1.getId()));
}


@Test
public void test_getGamesInBasket_returnsMapOfGamesInBasket() {
    basketService.addGameToBasket(mockGame1, 1);
    basketService.addGameToBasket(mockGame2, 2);
    Map<Long, Integer> gamesInBasket = basketService.getGamesInBasket();
    assertEquals(2, gamesInBasket.size());
    assertEquals(true, gamesInBasket.containsKey(mockGame1.getId()));
    assertEquals(true, gamesInBasket.containsKey(mockGame2.getId()));
    assertEquals(1, gamesInBasket.get(mockGame1.getId()));
    assertEquals(2, gamesInBasket.get(mockGame2.getId()));
}


    
}
