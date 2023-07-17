package com.fdmgroup.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import com.fdmgroup.controller.BasketController;
import com.fdmgroup.model.Basket;
import com.fdmgroup.model.Game;
import com.fdmgroup.service.BasketService;
import com.fdmgroup.service.GameService;

@SpringBootTest
@AutoConfigureMockMvc
public class BasketControllerTests {
    @Autowired BasketController basketController;
    @MockBean BasketService basketService;
    @MockBean Game mockGame1;
    @MockBean Basket mockBasket;
    @MockBean GameService gameService;

    @Test
    void test_getBasket_returnsBasketObjectAndHttpStatusOk() throws Exception {
        mockBasket = new Basket();
        mockBasket.addGameToBasket(mockGame1, 1);
        when(basketService.getBasket()).thenReturn(mockBasket);
        ResponseEntity<?> responseEntity = basketController.getBasket();
        verify(basketService, times(1)).getBasket();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(mockBasket, responseEntity.getBody());
        assertNotNull(responseEntity);
    }
    @Test
    void test_addGameToBasket_returnsMessage_gameAddedToBasket() throws Exception {
        doNothing().when(basketService).addGameToBasket(mockGame1, 1);
        when(mockGame1.getId()).thenReturn(1L);
        doNothing().when(mockBasket).addGameToBasket(mockGame1, 1);
        ResponseEntity<?> responseEntity = basketController.addGameToBasket(1, mockGame1.getId());
        assertEquals("Game added to basket.", responseEntity.getBody());
        verify(basketService, times(1)).addGameToBasket(
            eq(gameService.searchById(mockGame1.getId())),
            eq(1)
        );
            }
    @Test
    void test_getTotal() throws Exception {
        when(basketService.calculateBasketTotal()).thenReturn(1.99);
        ResponseEntity<?> responseEntity = basketController.getTotal();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(1.99, responseEntity.getBody());
    }
    @Test
    void test_deleteGameFromBasketById() throws Exception {
        doNothing().when(basketService).removeGameFromBasket(mockGame1);
        when(mockGame1.getId()).thenReturn(1L);
        ResponseEntity<?> responseEntity = basketController.deleteGameFromBasketById(mockGame1.getId());
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        verify(basketService, times(1)).removeGameFromBasket(gameService.searchById(1L));    
    }
    @Test
    void test_getGamesInBasket() throws Exception {
        when(basketService.getGamesInBasket()).thenReturn(Collections.singletonMap(1L, 1));
        ResponseEntity<Map<Long, Integer>> responseEntity = basketController.getGamesInBasket();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(Collections.singletonMap(1L, 1), responseEntity.getBody());

    }
    @Test
    void test_removeAllGamesFromBasket() throws Exception {
        doNothing().when(basketService).removeAllGamesfromBasket();
        ResponseEntity<?> responseEntity = basketController.removeAllGamesfromBasket();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        verify(basketService, times(1)).removeAllGamesfromBasket();    
    }
    @Test
    void test_updateGamesInBasket() throws Exception {
        doNothing().when(basketService).updateGameInBasket(mockGame1, 1);
        when(gameService.searchById(1L)).thenReturn(mockGame1);
        ResponseEntity<?> responseEntity = basketController.updateGameInBasket(1L, 1);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        verify(basketService, times(1)).updateGameInBasket(mockGame1, 1);
    }
}
