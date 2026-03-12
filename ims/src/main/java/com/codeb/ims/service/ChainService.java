package com.codeb.ims.service;

import com.codeb.ims.model.Chain;
import java.util.List;

public interface ChainService {

    Chain createChain(Chain chain);

    List<Chain> getAllChains();

    Chain updateChain(Long id, Chain chain);

    void deleteChain(Long id);
}