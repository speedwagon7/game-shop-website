package com.fdmgroup.service;

import java.util.List;

import com.fdmgroup.model.Game;

public interface GameService {

  Game addGame(Game game);
  Game searchById(Long id);
  List<Game> searchByName(String name);
  void deleteGameById(Long Id);
  List<Game> findAllGames();
  Game updateGame(Game game);




}