package com.codeb.ims.service;

import com.codeb.ims.model.Group;

import java.util.List;

public interface GroupService {

    Group create(Group group);

    Group update(Long id, Group group);

    List<Group> getAll();

    void deactivate(Long id);
}
