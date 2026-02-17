package com.codeb.ims.controller;

import com.codeb.ims.model.Group;
import com.codeb.ims.repository.GroupRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
@CrossOrigin(origins = "http://localhost:5173")
public class GroupController {

    private final GroupRepository repo;

    public GroupController(GroupRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Group> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Group create(@RequestBody Group group) {
        repo.findByNameIgnoreCase(group.getName())
                .ifPresent(g -> { throw new RuntimeException("Group already exists"); });

        return repo.save(group);
    }

    @PutMapping("/{id}")
    public Group update(@PathVariable Long id, @RequestBody Group group) {
        Group g = repo.findById(id).orElseThrow();
        g.setName(group.getName());
        g.setType(group.getType());
        g.setStatus(group.getStatus());
        return repo.save(g);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
