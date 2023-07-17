package com.fdmgroup.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.fdmgroup.model.Game;



public interface GameRepository extends JpaRepository<Game, Long>{
	List<Game> findByNameContainsIgnoreCase(String name);


}
