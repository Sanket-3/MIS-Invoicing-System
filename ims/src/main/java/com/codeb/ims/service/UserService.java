package com.codeb.ims.service;

import com.codeb.ims.model.User;

public interface UserService {
    void register(User user);
    User login(String email, String password);
    boolean existsByEmail(String email);
}
