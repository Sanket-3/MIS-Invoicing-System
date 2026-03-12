package com.codeb.ims.controller;

import com.codeb.ims.model.Chain;
import com.codeb.ims.service.ChainService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chains")
@CrossOrigin
public class ChainController {

    private final ChainService chainService;

    public ChainController(ChainService chainService) {
        this.chainService = chainService;
    }

    @PostMapping
    public Chain createChain(@RequestBody Chain chain) {
        return chainService.createChain(chain);
    }

    @GetMapping
    public List<Chain> getAllChains() {
        return chainService.getAllChains();
    }

    @PutMapping("/{id}")
    public Chain updateChain(@PathVariable Long id, @RequestBody Chain chain) {
        return chainService.updateChain(id, chain);
    }

    @DeleteMapping("/{id}")
    public void deleteChain(@PathVariable Long id) {
        chainService.deleteChain(id);
    }
}