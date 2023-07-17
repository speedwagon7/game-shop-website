package com.fdmgroup.controller;

import com.fdmgroup.model.Game;
import com.fdmgroup.repository.GameRepository;
import com.fdmgroup.service.BasketService;
import com.fdmgroup.service.GameService;
import com.fdmgroup.service.GameServiceImp;


import jakarta.validation.Valid;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/basket")
public class BasketController {
    private BasketService basketService;
    private GameRepository gameRepository;
    private GameService gameService = new GameServiceImp(gameRepository);
    private final static Logger log = LoggerFactory.getLogger(BasketController.class);

    @Autowired
    public BasketController(BasketService basketService, GameRepository gameRepository, GameService gameService) {
        this.basketService = basketService;
        this.gameRepository = gameRepository;
        this.gameService = gameService;
    }
    @PostMapping("/add/{quantity}/{id}")
    public ResponseEntity<String> addGameToBasket(@PathVariable int quantity,@PathVariable Long id) {
        log.info("Adding game to basket.");
        basketService.addGameToBasket(gameService.searchById(id), quantity);
        return ResponseEntity.ok("Game added to basket.");
    }
    @GetMapping
    public ResponseEntity<?> getBasket() {
        log.info("Getting basket.");
        return new ResponseEntity<>(basketService.getBasket(), HttpStatus.OK);
    }
    @GetMapping("/total")
    public ResponseEntity<?> getTotal (){
        log.info("Getting total in basket.");
        return new ResponseEntity<>(basketService.calculateBasketTotal(), HttpStatus.OK);
    }
    @DeleteMapping("/deleteGameById/{id}")
    public ResponseEntity<?> deleteGameFromBasketById(@PathVariable Long id){
        log.info("Deleting game from basket.");
        this.basketService.removeGameFromBasket(gameService.searchById(id));
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/getGamesInBasket")
    public ResponseEntity<Map<Long, Integer>> getGamesInBasket() {
        log.info("Getting games in basket.");
        Map<Long, Integer> gamesInBasket = basketService.getGamesInBasket();
        return ResponseEntity.ok(gamesInBasket);
}
    //We added this
    @DeleteMapping("/deleteAllGamesInBasket")
    public ResponseEntity<?> removeAllGamesfromBasket(){
        log.info("Deleting all games in basket.");
        this.basketService.removeAllGamesfromBasket();
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/updateGameInBasket/{id}/{quantity}")
    public ResponseEntity<?> updateGameInBasket(@PathVariable Long id, @PathVariable int quantity){
        System.out.println("I am being called meow");
        this.basketService.updateGameInBasket(gameService.searchById(id), quantity);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
