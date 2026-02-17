package com.codeb.ims.dto;

public class LoginRequest {

    private String email;
    private String password;

    // ✅ ADD THESE TWO METHODS ONLY
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
