package com.codeb.ims.service;

import com.codeb.ims.model.Group;
import com.codeb.ims.repository.GroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupServiceImpl implements GroupService {

    private final GroupRepository repo;

    public GroupServiceImpl(GroupRepository repo) {
        this.repo = repo;
    }

    @Override
    public Group create(Group group) {
        repo.findByName(group.getName())
            .ifPresent(g -> { throw new RuntimeException("Group already exists"); });

        return repo.save(group);
    }

    @Override
    public Group update(Long id, Group data) {
        Group group = repo.findById(id).orElseThrow();

        group.setName(data.getName());
        group.setType(data.getType());
        group.setStatus(data.getStatus());

        return repo.save(group);
    }

    @Override
    public List<Group> getAll() {
        return repo.findByIsActiveTrue();
    }

    @Override
    public void deactivate(Long id) {
        Group group = repo.findById(id).orElseThrow();
        group.setIsActive(false);
        group.setStatus("INACTIVE");
        repo.save(group);
    }
}
