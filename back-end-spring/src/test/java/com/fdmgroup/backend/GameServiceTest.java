package com.fdmgroup.backend;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.fdmgroup.service.GameServiceImp;
import com.fdmgroup.model.Game;
import com.fdmgroup.repository.GameRepository;





@SpringBootTest
class GameServiceTest {

    @Autowired GameServiceImp gameServiceImp;
    
    @MockBean Game mockGame1;
    @MockBean GameRepository mockGameRepo;

    @Test
    void test_findAllGames_callsFindAllFromGameRepo_whenCalled()
    {
        gameServiceImp.findAllGames();
        verify(mockGameRepo).findAll();
    }

    @Test
    void test_searchById_callsfindByID_whenCalled()
    {
        long id = 1l;
        gameServiceImp.searchById(id);
        verify(mockGameRepo).findById(id);
    }

    @Test
    void test_SearchByName_callsfindByNameContainsIgnoreCase_whenCalled()
    {
        gameServiceImp.searchByName("game");
        verify(mockGameRepo).findByNameContainsIgnoreCase("game");
    }

    //addgame

    @Test
	void test_addGame_callsSaveFromGameRepoPassingInGame_whenGameDoesExist()
	{
		long num = 1;
		when(mockGame1.getId()).thenReturn(num);
		when(mockGameRepo.existsById(num)).thenReturn(false);
		
		gameServiceImp.addGame(mockGame1);
		verify(mockGameRepo).save(mockGame1);
	}
	
	
	//may fail as need to add validation for checking if game is alread in repo
    @Test
	void test_addGame_doesntCallSaveFromGameRepoPassingInGame_whenGameAlreadyInDB()
	{
		when(mockGame1.getId()).thenReturn(1l);
		when(mockGameRepo.existsById(1l)).thenReturn(true);
		
		gameServiceImp.addGame(mockGame1);
		verify(mockGameRepo,never()).save(mockGame1);
	}

    //delete

	 @Test
	void test_deleteGameBYId_callsDeleteById_whenCalled()
	{

		gameServiceImp.deleteGameById(1l);
		verify(mockGameRepo).deleteById(1l);
	}

	//update

	@Test
	void test_updateGame_callSaveGame_whenCalled()
	{
		long num = 1;
		when(mockGame1.getId()).thenReturn(num);
		when(mockGameRepo.existsById(1l)).thenReturn(true);
		gameServiceImp.updateGame(mockGame1);
		verify(mockGameRepo).save(mockGame1);
	}

    

}