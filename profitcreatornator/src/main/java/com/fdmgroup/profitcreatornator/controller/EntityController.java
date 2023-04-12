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
@CrossOrigin(origins = "*", maxAge = 3600)
public class EntityController {
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
	@GetMapping("/barrierOption")
	public List<BarrierOption> getAllBarrierOptions() {
		return barrierOptionRepository.findAll();
	}
	
	// Get specific BarrierOption 
	@GetMapping("/barrierOption/{barrierOptionId}")
	public BarrierOption getBarrierOptionbyId(@PathVariable long barrierOptionId) {
		return barrierOptionRepository.findById(barrierOptionId)
				.orElseThrow(() -> new NotFoundException("Can't find Barrier Option with id: " + barrierOptionId));
	}
	
	
	// Modify BarrierOption
	@PutMapping("/barrierOption")
	@ResponseStatus(HttpStatus.CREATED)
	public BarrierOption modifyBarrierOption(@RequestBody BarrierOption barrierOption) {
		if (barrierOptionRepository.findById(barrierOption.getId()).isEmpty()) {
			throw new NotFoundException("Can't find barrierOption with id: " + barrierOption.getId());
		}
		return barrierOptionRepository.save(barrierOption);
	}
	
	
	/* --------------------- Options --------------------- */
	// Get all options
	@GetMapping("/option")
	public List<Options> getAllOptions() {
		return optionRepository.findAll();
	}
	
	// Get specific option
	@GetMapping("/option/{optionId}")
	public Options getOptionbyId(@PathVariable long optionId) {
		return optionRepository.findById(optionId)
				.orElseThrow(() -> new NotFoundException("Can't find Option with id: " + optionId));
	}
	
	// Modify option
	@PutMapping("/option")
	@ResponseStatus(HttpStatus.CREATED)
	public Options modifyOption(@RequestBody Options option) {
		if (optionRepository.findById(option.getId()).isEmpty()) {
			throw new NotFoundException("Can't find option with id: " + option.getId());
		}
		return optionRepository.save(option);
	}
	
	/* --------------------- Portfolio --------------------- */
	// Get all portfolios
	@GetMapping("/portfolio")
	public List<Portfolio> getAllPortfolios() {
		return portfolioRepository.findAll();
	}
	
	// Get specific portfolio
	@GetMapping("/portfolio/{portfolioId}")
	public Portfolio getPortfoliobyId(@PathVariable long portfolioId) {
		return portfolioRepository.findById(portfolioId)
				.orElseThrow(() -> new NotFoundException("Can't find Portfolio with id: " + portfolioId));
	}
	
	// Modify portfolio
	@PutMapping("/portfolio")
	@ResponseStatus(HttpStatus.CREATED)
	public Portfolio modifyPortfolio(@RequestBody Portfolio portfolio) {
		if (portfolioRepository.findById(portfolio.getId()).isEmpty()) {
			throw new NotFoundException("Can't find portfolio with id: " + portfolio.getId());
		}
		return portfolioRepository.save(portfolio);
	}
	
	
	/* --------------------- Stock --------------------- */
	// Get all stocks
	@GetMapping("/stock")
	public List<Stock> getAllStocks() {
		return stockRepository.findAll();
	}
	
	// Get specific Stock
	@GetMapping("/stock/{stockId}")
	public Stock getStockbyId(@PathVariable long stockId) {
		return stockRepository.findById(stockId)
				.orElseThrow(() -> new NotFoundException("Can't find Stock with id: " + stockId));
	}
	
	
	// Modify stock
	@PutMapping("/stock")
	@ResponseStatus(HttpStatus.CREATED)
	public Stock modifyStock(@RequestBody Stock stock) {
		if (stockRepository.findById(stock.getId()).isEmpty()) {
			throw new NotFoundException("Can't find stock with id: " + stock.getId());
		}
		return stockRepository.save(stock);
	}
	
	
	/* --------------------- Trader --------------------- */
	// Get all traders
	@GetMapping("/trader")
	public List<Trader> getAllTraders() {
		return traderRepository.findAll();
	}
	
	// Get specific trader
	@GetMapping("/trader/{traderId}")
	public Trader getTraderbyId(@PathVariable long traderId) {
		return traderRepository.findById(traderId)
				.orElseThrow(() -> new NotFoundException("Can't find trader with id: " + traderId));
	}
	
	// Modify Trader
	@PutMapping("/trader")
	@ResponseStatus(HttpStatus.CREATED)
	public Trader modifyTrader(@RequestBody Trader trader) {
		if (traderRepository.findById(trader.getId()).isEmpty()) {
			throw new NotFoundException("Can't find trader with id: " + trader.getId());
		}
		return traderRepository.save(trader);
	}
    
	
	
}
