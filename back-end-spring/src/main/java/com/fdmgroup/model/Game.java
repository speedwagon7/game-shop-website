package com.fdmgroup.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GAME_ID_GEN")
	@SequenceGenerator(name = "GAME_ID_GEN", sequenceName = "game_id_seq", allocationSize = 1, initialValue = 1001)
    @Column(name = "ID")
    private long id;
    @NotBlank(message = "Game name cannot be blank.")
	@Size(min = 2, max = 100, message = "Game must be between 2 and 100 characters.")
    @Column(name = "NAME")
    private String name;
    @NotBlank(message = "Genre name cannot be blank.")
	@Size(min = 2, max = 100, message = "Genre must be between 2 and 100 characters.")
    @Column(name = "GENRE")
    private String genre;
    @NotBlank(message = "Platform cannot be blank")
    @Size(min = 2, max = 100, message = "Platform must be between 2 and 100 characters.")
    @Column(name = "PLATFORM")
    private String platform;
    @DecimalMin(value = "1", message = "Salary can't be less than one.")
	@DecimalMax(value = "100000", message = "Salary  can't be more than One Million pounds.")
    @Column(name = "PRICE")
    private double price;
    @Column(name = "AGERATING")
    private int ageRating;
    @DecimalMin(value = "1", message = "Rating min is 1.")
	@DecimalMax(value = "10", message = "Rating max is 10.")
    @Column(name = "RATING")
    private double rating;
    @NotBlank(message = "Description name cannot be blank.")
	@Size(min = 2, max = 250, message = "Description must be between 2 and 250 characters.")
    @Column(name = "DESCRIPTION")
    private String description;
    @NotBlank(message = "img url name cannot be blank.")
	@Size(min = 2, max = 250, message = "Img string must be between 2 and 250.")
    @Column(name = "IMGSTRING")
    private String imgstring;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Game)) return false;
        Game game = (Game) o;
        return getId() == game.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}