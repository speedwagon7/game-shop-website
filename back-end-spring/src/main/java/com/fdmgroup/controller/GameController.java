package com.fdmgroup.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fdmgroup.model.Game;
import com.fdmgroup.service.GameService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/games")
@AllArgsConstructor
public class GameController {
    private GameService gameService;
	private final static Logger log = LoggerFactory.getLogger(GameController.class);
	@PostMapping
 	 public ResponseEntity<?> createGame(@Valid @RequestBody Game game) {
    	System.err.println(game.getName());
		log.info("Created new game.");
   		 return new ResponseEntity<>(
      		gameService.addGame(game),
      		HttpStatus.CREATED
    	);
  }
 	 @GetMapping("/id/{id}")
  	public ResponseEntity<?> getGameById(@PathVariable Long id) {
		log.info(" Getting game by ID.");
		return new ResponseEntity<>(
			gameService.searchById(id), 
			HttpStatus.OK
		);
	}
  	@GetMapping("/{name}")
  	public ResponseEntity<?> getGameByName(@PathVariable String name) {
		log.info("Getting Game by name.");
		return new ResponseEntity<>(
			gameService.searchByName(name), 
			HttpStatus.OK
		);
	}
	@GetMapping
	public ResponseEntity<?> findAllGames(){
		log.info("Finding all games.");
		return new ResponseEntity<>(
      		this.gameService.findAllGames(),
      		HttpStatus.OK
    	);
	}
	@DeleteMapping("/deleteById/{id}")
  	public ResponseEntity<?> deleteGameByGameId(@PathVariable Long id){
		log.info("Deleting game.");
    	this.gameService.deleteGameById(id);
    	return new ResponseEntity<>(HttpStatus.OK);
  }

  @PutMapping
	public ResponseEntity<Game> updateGame(@Valid @RequestBody Game game) {
          log.info("Updating Game.");
            return new ResponseEntity<>(
                this.gameService.updateGame(game),
            HttpStatus.OK
        );
	}
}