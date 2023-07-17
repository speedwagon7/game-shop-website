package com.fdmgroup.service;

import com.fdmgroup.model.Basket;
import com.fdmgroup.model.Game;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service
public class BasketServiceImp implements BasketService {
    private Basket basket;
    private final static Logger log = LoggerFactory.getLogger(BasketServiceImp.class);

    @Autowired
    public BasketServiceImp (){
        basket = new Basket();
    }
    @Override
    public void addGameToBasket(Game game, int quantity) {
        log.info("Adding game to basket.");
        basket.addGameToBasket(game, quantity);
    }

    @Override
    public double calculateBasketTotal() {
        log.info("Calculating basket total.");
        return basket.basketTotal();
    }

    @Override
    public void removeGameFromBasket(Game game) {
        log.info("Removing game from basket.");
        basket.removeGameFromBasket(game);
    }

    //we added this
    @Override
    public void removeAllGamesfromBasket() {
        log.info("Removing all games from the basket.");
        basket.removeAllGamesfromBasket();
    }

    @Override
    public Basket getBasket(){
        log.info("Getting basket.");
        return this.basket;
    }
    @Override
    public Map<Long, Integer> getGamesInBasket() {
        log.info("Getting games in basket.");
        return basket.getGamesInBasket();
    }
        @Override
    public void updateGameInBasket(Game game, int quantity) {
        basket.updateGameInBasket(game, quantity);
    }
}
