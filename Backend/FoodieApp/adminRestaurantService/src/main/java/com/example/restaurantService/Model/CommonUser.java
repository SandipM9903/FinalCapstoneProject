package com.example.restaurantService.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class CommonUser
{
    @Id
    private String emailId;
    private byte[] profilePicture;
    private String firstName;
    private String lastName;
    private String role;
    private String password;
}
