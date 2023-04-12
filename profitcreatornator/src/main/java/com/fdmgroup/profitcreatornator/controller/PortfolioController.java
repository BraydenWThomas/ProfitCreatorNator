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
@RequestMapping("portfolio")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PortfolioController {
	
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
	

	/* --------------------- Portfolio --------------------- */
	// Get all portfolios
	@GetMapping("")
	public List<Portfolio> getAllPortfolios() {
		return portfolioRepository.findAll();
	}
	
	// Get specific portfolio
	@GetMapping("{portfolioId}")
	public Portfolio getPortfoliobyId(@PathVariable long portfolioId) {
		return portfolioRepository.findById(portfolioId)
				.orElseThrow(() -> new NotFoundException("Can't find Portfolio with id: " + portfolioId));
	}
	
	// Modify portfolio
	@PutMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Portfolio modifyPortfolio(@RequestBody Portfolio portfolio) {
		if (portfolioRepository.findById(portfolio.getId()).isEmpty()) {
			throw new NotFoundException("Can't find portfolio with id: " + portfolio.getId());
		}
		return portfolioRepository.save(portfolio);
	}
}
