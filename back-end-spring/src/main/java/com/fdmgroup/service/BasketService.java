package com.fdmgroup.service;

import java.util.Map;

import com.fdmgroup.model.Basket;
import com.fdmgroup.model.Game;

public interface BasketService {
    void addGameToBasket(Game game, int quantity);
    double calculateBasketTotal();
    void removeGameFromBasket(Game game);
    Basket getBasket();
    Map<Long, Integer> getGamesInBasket();
    void removeAllGamesfromBasket();
    void updateGameInBasket(Game game, int quantity);
}
