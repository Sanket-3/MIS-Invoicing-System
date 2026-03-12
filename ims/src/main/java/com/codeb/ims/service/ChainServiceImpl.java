package com.codeb.ims.service;

import com.codeb.ims.model.Chain;
import com.codeb.ims.repository.ChainRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChainServiceImpl implements ChainService {

    private final ChainRepository chainRepository;

    public ChainServiceImpl(ChainRepository chainRepository) {
        this.chainRepository = chainRepository;
    }

    @Override
    public Chain createChain(Chain chain) {
        return chainRepository.save(chain);
    }

    @Override
    public List<Chain> getAllChains() {
        return chainRepository.findByIsActiveTrue();
    }

    @Override
    public Chain updateChain(Long id, Chain updatedChain) {

        Chain chain = chainRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Chain not found"));

        chain.setCompanyName(updatedChain.getCompanyName());
        chain.setGstn(updatedChain.getGstn());
        chain.setGroup(updatedChain.getGroup());

        return chainRepository.save(chain);
    }

    @Override
    public void deleteChain(Long id) {

        Chain chain = chainRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Chain not found"));

        chain.setIsActive(false);

        chainRepository.save(chain);
    }
}