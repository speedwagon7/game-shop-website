package com.fdmgroup.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fdmgroup.controller.GameController;
import com.fdmgroup.model.Game;
import com.fdmgroup.service.GameService;


@SpringBootTest
@AutoConfigureMockMvc
public class ControllerTest {
    @Autowired GameController gameController;
    @MockBean GameService mockGameService;
    @MockBean Game mockGame1;


    @Test
    void test_createGame_callsAddGame() throws Exception {
        ResponseEntity<Game> testResponseEntity = new ResponseEntity<>(mockGame1, HttpStatus.CREATED);
        when(mockGameService.addGame(mockGame1)).thenReturn(testResponseEntity.getBody());
        gameController.createGame(mockGame1);
        verify(mockGameService, times(1)).addGame(mockGame1);
    }
    @Test
    void test_createGame_returnsHttpStatusCreated() throws Exception {
        ResponseEntity<Game> testResponse = new ResponseEntity<>(mockGame1, HttpStatus.CREATED);
        when(mockGameService.addGame(mockGame1)).thenReturn(testResponse.getBody());
        ResponseEntity<?> responseEntity = gameController.createGame(mockGame1);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
    }
    @Test
    void test_getGameById_callsSearchById() throws Exception {
        ResponseEntity<Game> testResponseEntity = new ResponseEntity<Game>(mockGame1, HttpStatus.OK);
        when(mockGameService.searchById((long) 1)).thenReturn(testResponseEntity.getBody());
        gameController.getGameById((long)1);
        verify(mockGameService, times(1)).searchById((long)1);
    }
    @Test
    void test_getGameById_returnsHttpStatusOkandMockGame() throws Exception {
        ResponseEntity<Game> testResponseEntity = new ResponseEntity<Game>(mockGame1, HttpStatus.OK);
        when(mockGameService.searchById((long) 1)).thenReturn(testResponseEntity.getBody());
        ResponseEntity<?> responseEntity = gameController.getGameById((long)1);
        assertEquals((mockGame1), responseEntity.getBody());
        assertEquals((HttpStatus.OK), responseEntity.getStatusCode());
    }
    @Test
    void test_getGameById_returnsNotNull() throws Exception {
        ResponseEntity<Game> testResponseEntity = new ResponseEntity<Game>(mockGame1, HttpStatus.OK);
        when(mockGameService.searchById((long) 1)).thenReturn(testResponseEntity.getBody());
        ResponseEntity<?> responseEntity = gameController.getGameById((long)1);
        assertNotNull(responseEntity);
    }
    @Test
    void test_getGameByName_callsSearchByName() throws Exception {
        List<Game> mockGameList = new ArrayList<>();
        mockGameList.add(mockGame1);
        when(mockGameService.searchByName("name")).thenReturn(mockGameList);
        gameController.getGameByName("name");
        verify(mockGameService, times(1)).searchByName("name");
    }
    @Test
    void test_getGameByName_returnsHttpStatusOkAndMockGame() throws Exception {
        List<Game> mockGameList = new ArrayList<>();
        mockGameList.add(mockGame1);
        when(mockGameService.searchByName("name")).thenReturn(mockGameList);
        ResponseEntity<?> responseEntity = gameController.getGameByName("name");
        assertEquals((mockGameList), responseEntity.getBody());
        assertEquals((HttpStatus.OK), responseEntity.getStatusCode());
    }
    @Test
    void test_getGameByName_returnsNotNull() throws Exception {
        List<Game> mockGameList = new ArrayList<>();
        mockGameList.add(mockGame1);
        when(mockGameService.searchByName("name")).thenReturn(mockGameList);
        ResponseEntity<?> responseEntity = gameController.getGameByName("name");
        assertNotNull(responseEntity);
    }
    @Test
    void test_findAllGames_callsfindAllGamesFromServiceClass() throws Exception {
        List<Game> mockGameList = new ArrayList<>();
        when(mockGameService.findAllGames()).thenReturn(mockGameList);
        gameController.findAllGames();
        verify(mockGameService, times(1)).findAllGames();
    }
    @Test
    void test_findAllGames_returnsListOfAllGamesAndHttpStatusOk() throws Exception {
        List<Game> mockGameList = new ArrayList<>();
        mockGameList.add(mockGame1);
        mockGameList.add(mockGame1);
        mockGameList.add(mockGame1);
        when(mockGameService.findAllGames()).thenReturn(mockGameList);
        ResponseEntity<?> responseEntity = gameController.findAllGames();
        assertEquals(3, ((List<Game>) responseEntity.getBody()).size());
        assertEquals(mockGameList, (responseEntity.getBody()));
        assertEquals((HttpStatus.OK), responseEntity.getStatusCode());
    }
    @Test
    void test_findAllGames_returnsNotNull() throws Exception {
        List<Game> mockGameList = new ArrayList<>();
        mockGameList.add(mockGame1);
        mockGameList.add(mockGame1);
        mockGameList.add(mockGame1);
        when(mockGameService.findAllGames()).thenReturn(mockGameList);
        ResponseEntity<?> responseEntity = gameController.findAllGames();
        assertNotNull(responseEntity);
    }
    @Test
    void test_deleteGameByGameId_callsdeleteGameByIdInTheServiceClass() throws Exception {
        gameController.deleteGameByGameId((long) 1);
        verify(mockGameService, times(1)).deleteGameById((long) 1);
    }
    @Test
    void test_deleteGameByGameId_returnsHttpStatusOk (){
        ResponseEntity<?> responseEntity = gameController.deleteGameByGameId((long) 1);
        assertEquals((HttpStatus.OK), responseEntity.getStatusCode());
    }
    @Test
    void test_deleteGameByGameId_returnsNotNull (){
        doNothing().when(mockGameService).deleteGameById((long) 1);
        ResponseEntity<?> responseEntity = gameController.deleteGameByGameId((long) 1);
        assertNotNull(responseEntity);
    }
    @Test
    void test_updateGame_callsUpdateGameOfServiceClass() throws Exception {
        gameController.updateGame(mockGame1);
        verify(mockGameService, times(1)).updateGame(mockGame1);
    }
    @Test
    void test_updateGame_returnsHttpStatusOkAndMockGame1() throws Exception {
        ResponseEntity<Game> testResponseEntity = new ResponseEntity<Game>(mockGame1, HttpStatus.OK);
        when(mockGameService.updateGame(mockGame1)).thenReturn(testResponseEntity.getBody());
        ResponseEntity<?> responseEntity = gameController.updateGame(mockGame1);
        assertEquals((HttpStatus.OK), responseEntity.getStatusCode());
        assertEquals(mockGame1, responseEntity.getBody());
        
    }
    @Test
    void test_updateGame_returnsNotNull() throws Exception {
        ResponseEntity<Game> testResponseEntity = new ResponseEntity<Game>(mockGame1, HttpStatus.OK);
        when(mockGameService.updateGame(mockGame1)).thenReturn(testResponseEntity.getBody());
        ResponseEntity<?> responseEntity = gameController.updateGame(mockGame1);
        assertNotNull(responseEntity);
    }
}
