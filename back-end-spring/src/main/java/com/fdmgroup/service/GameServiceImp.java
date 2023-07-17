package com.fdmgroup.service;


import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import com.fdmgroup.model.Game;
import com.fdmgroup.repository.GameRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional
@AllArgsConstructor
public class GameServiceImp implements GameService {
    private GameRepository gameRepository;
    private final static Logger log = LoggerFactory.getLogger(GameServiceImp.class);

    @Override
    public Game addGame(Game game) {
        log.info("AddingGame");
    return this.gameRepository.save(game);
    }

    @Override
    public List<Game> findAllGames() {
        log.info("Finding all games.");
        return this.gameRepository.findAll();
    }

    @Override
    public List<Game> searchByName(String name){
        log.info("Searching for game by name.");
        return this.gameRepository.findByNameContainsIgnoreCase(name);
    }

    @Override
    public Game searchById(Long id) {
        log.info("Searhing for game by ID.");
        Optional<Game> game = this.gameRepository.findById(id);
        return game.orElse(null);
    }

    @Override
    public void deleteGameById(Long Id) {
        log.info("Deleting game by ID.");
        this.gameRepository.deleteById(Id);
    }

    @Override
    public Game updateGame(Game game)
    {
        if (gameRepository.existsById(game.getId())) {
            log.info("Updating game.");
			return this.gameRepository.save(game);
		}
		else 
		{
			//throw new GameNotFoundException("No game with id "+game.getId());
			System.out.println("no game with id");
            log.warn("No game with this ID.");
            return null;
		}
    }


}