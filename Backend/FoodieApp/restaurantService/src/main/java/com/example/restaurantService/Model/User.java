package com.example.restaurantService.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User
{
    @Id
    private String firstName;
    private String lastName;
    private String userName;
    private String emailId;
    private String password;
    private List<Restaurant> restaurantList;
}
