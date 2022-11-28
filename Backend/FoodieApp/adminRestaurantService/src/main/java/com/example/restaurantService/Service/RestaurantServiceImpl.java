package com.example.restaurantService.Service;

import com.example.restaurantService.Exceptions.CuisineNotFoundException;
import com.example.restaurantService.Exceptions.RestaurantNotFoundException;
import com.example.restaurantService.Exceptions.UserAlreadyExistException;
import com.example.restaurantService.Model.*;
import com.example.restaurantService.Proxy.UserProxy;
import com.example.restaurantService.Repository.RestaurantRepository;
import com.example.restaurantService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService{

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserProxy userProxy;

    @Override
    public User registerAdmin(CommonUser commonUser) throws UserAlreadyExistException {
        User user = new User(commonUser.getEmailId(), commonUser.getProfilePicture(), commonUser.getFirstName(), commonUser.getLastName(), commonUser.getRole(), commonUser.getPassword(), new ArrayList<>());

        if (userRepository.findById(user.getEmailId()).isPresent())
        {
            throw new UserAlreadyExistException();
        }

        UserDTO userDTO = new UserDTO();
        userDTO.setEmailId(commonUser.getEmailId());
        userDTO.setPassword(commonUser.getPassword());
        ResponseEntity<?> responseEntity = userProxy.sendUserObjectToAuth(userDTO);
        return userRepository.insert(user);
    }

    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepository.insert(restaurant);
    }

    @Override
    public Restaurant addCuisineToRestaurant(Cuisine cuisine, String restaurantId) throws RestaurantNotFoundException {
        if(restaurantRepository.findById(restaurantId).isEmpty())
        {
            throw new RestaurantNotFoundException();
        }
        Restaurant restaurant = restaurantRepository.findById(restaurantId).get();
        if (restaurant.getCuisineList() == null)
        {
            restaurant.setCuisineList(Arrays.asList(cuisine));
        }
        else
        {
            List<Cuisine> cuisineList = restaurant.getCuisineList();
            cuisineList.add(cuisine);
            restaurant.setCuisineList(cuisineList);
        }

        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant deleteCuisineFromRestaurant(String restaurantId, String cuisineId) throws RestaurantNotFoundException, CuisineNotFoundException {
        boolean cuisineIdPresent = false;
        if (restaurantRepository.findById(restaurantId).isEmpty())
        {
            throw new RestaurantNotFoundException();
        }
        Restaurant restaurant = restaurantRepository.findById(restaurantId).get();
        List<Cuisine> cuisineList= restaurant.getCuisineList();
        cuisineIdPresent = cuisineList.removeIf(d->d.getCuisineId().equals(cuisineId));
        if (!cuisineIdPresent)
        {
            throw new CuisineNotFoundException();
        }
        restaurant.setCuisineList(cuisineList);
        return restaurantRepository.save(restaurant);
    }

    @Override
    public List<Cuisine> getAllCuisine(String restaurantId) throws CuisineNotFoundException {
        if (restaurantRepository.findById(restaurantId).isEmpty())
        {
            throw new CuisineNotFoundException();
        }
        return restaurantRepository.findById(restaurantId).get().getCuisineList();
    }

    @Override
    public List<Restaurant> getAllRestaurant() throws RestaurantNotFoundException {
        return restaurantRepository.findAll();
    }

    @Override
    public Restaurant getRestaurantDetails(String restaurantId) throws RestaurantNotFoundException {
        return restaurantRepository.findById(restaurantId).get();
    }
}
