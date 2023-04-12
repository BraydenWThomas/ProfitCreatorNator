package com.fdmgroup.profitcreatornator.controller;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.fdmgroup.profitcreatornator.exceptions.*;
import com.fdmgroup.profitcreatornator.models.*;
import com.fdmgroup.profitcreatornator.repository.*;

@RestController
@RequestMapping("barrierOption")
@CrossOrigin(origins = "*", maxAge = 3600)
public class BarrierOptionController {
	
	@Autowired
	private BarrierOptionRepository barrierOptionRepository;
	@Autowired
	private OptionRepository optionRepository;
	@Autowired
	private PortfolioRepository portfolioRepository;
	@Autowired
	private StockRepository stockRepository;
	@Autowired
	private TraderRepository traderRepository;
	@Autowired
	private UserRepository userRepository;
	
	/* --------------------- Barrier Options --------------------- */
	// Get all BarrierOption
	@GetMapping("")
	public List<BarrierOption> getAllBarrierOptions() {
		return barrierOptionRepository.findAll();
	}
	
	// Get specific BarrierOption 
	@GetMapping("{barrierOptionId}")
	public BarrierOption getBarrierOptionbyId(@PathVariable long barrierOptionId) {
		return barrierOptionRepository.findById(barrierOptionId)
				.orElseThrow(() -> new NotFoundException("Can't find Barrier Option with id: " + barrierOptionId));
	}
	
	
	// Modify BarrierOption
	@PutMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public BarrierOption modifyBarrierOption(@RequestBody BarrierOption barrierOption) {
		if (barrierOptionRepository.findById(barrierOption.getId()).isEmpty()) {
			throw new NotFoundException("Can't find barrierOption with id: " + barrierOption.getId());
		}
		return barrierOptionRepository.save(barrierOption);
	}

}
