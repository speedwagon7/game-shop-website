package com.fdmgroup.model;

import java.util.HashMap;
import java.util.Map;


public class Basket {
    private HashMap<Game, Integer> gamesInBasket = new HashMap<Game, Integer>();
    private double total;

    /**
     * @return List<Game> return the gamesInBasket
     */
    public Map<Long, Integer> getGamesInBasket() {
        Map<Long, Integer> basketContents = new HashMap<>();
        gamesInBasket.forEach((key, value) ->{basketContents.put(key.getId(), value);});
        return basketContents;
    }

    public void addGameToBasket(Game game, int quantity){
        if (gamesInBasket.containsKey(game)) {
            int currentQuantity = gamesInBasket.get(game);
            gamesInBasket.put(game, currentQuantity + quantity);
        } else {
            gamesInBasket.put(game, quantity);
        }
    }
    public double basketTotal() {
        total = 0;
		gamesInBasket.forEach((key, value) ->{total+=key.getPrice()*value;});
		return total;
	}
    public void removeGameFromBasket(Game game){
        gamesInBasket.remove(game);
    }

    //we added this 
    public void removeAllGamesfromBasket(){
        gamesInBasket.clear();
    }
    public void updateGameInBasket(Game game, int quantity){
        gamesInBasket.put(game, quantity);
    }
}

