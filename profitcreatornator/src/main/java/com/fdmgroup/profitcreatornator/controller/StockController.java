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
@RequestMapping("stock")
@CrossOrigin(origins = "*", maxAge = 3600)
public class StockController {
	
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
	
	/* --------------------- Stock --------------------- */
	// Get all stocks
	@GetMapping("")
	public List<Stock> getAllStocks() {
		return stockRepository.findAll();
	}
	
	// Get specific Stock
	@GetMapping("{stockId}")
	public Stock getStockbyId(@PathVariable long stockId) {
		return stockRepository.findById(stockId)
				.orElseThrow(() -> new NotFoundException("Can't find Stock with id: " + stockId));
	}
	
	
	// Modify stock
	@PutMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Stock modifyStock(@RequestBody Stock stock) {
		if (stockRepository.findById(stock.getId()).isEmpty()) {
			throw new NotFoundException("Can't find stock with id: " + stock.getId());
		}
		return stockRepository.save(stock);
	}
}
