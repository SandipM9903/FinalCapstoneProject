package com.example.restaurantService.Service;

import com.example.restaurantService.Exceptions.CuisineNotFoundException;
import com.example.restaurantService.Exceptions.RestaurantNotFoundException;
import com.example.restaurantService.Exceptions.UserAlreadyExistException;
import com.example.restaurantService.Model.CommonUser;
import com.example.restaurantService.Model.Cuisine;
import com.example.restaurantService.Model.Restaurant;
import com.example.restaurantService.Model.User;

import java.util.List;

public interface RestaurantService
{
    User registerAdmin(CommonUser commonUser) throws UserAlreadyExistException;
    Restaurant addRestaurant(Restaurant restaurant);
    Restaurant addCuisineToRestaurant(Cuisine cuisine, String restaurantId) throws RestaurantNotFoundException;
    Restaurant deleteCuisineFromRestaurant(String restaurantId, String cuisineId) throws RestaurantNotFoundException, CuisineNotFoundException;
    List<Cuisine> getAllCuisine(String restaurantId) throws CuisineNotFoundException;
    List<Restaurant> getAllRestaurant() throws RestaurantNotFoundException;
    public Restaurant getRestaurantDetails(String restaurantId) throws RestaurantNotFoundException;
}
