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
@RequestMapping("option")
@CrossOrigin(origins = "*", maxAge = 3600)
public class OptionController {

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

	/* --------------------- Options --------------------- */
	// Get all options
	@GetMapping("")
	public List<Options> getAllOptions() {
		return optionRepository.findAll();
	}

	// Get specific option
	@GetMapping("{optionId}")
	public Options getOptionbyId(@PathVariable long optionId) {
		return optionRepository.findById(optionId)
				.orElseThrow(() -> new NotFoundException("Can't find Option with id: " + optionId));
	}

	// Create option for existing stock
	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Options createOption(@RequestBody Options option) {
		return optionRepository.save(option);
	}

	// Get taker options by trader id
	@GetMapping("{traderId}/taker")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Options> getTakerByTraderId(@PathVariable long traderId) {
		Trader trader = traderRepository.findById(traderId)
				.orElseThrow(() -> new NotFoundException("Can't find trader with id: " + traderId));
		return trader.getTakerOptions();
	}

	// Get writer options by trader id
	@GetMapping("{traderId}/writer")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Options> getWriterByTraderId(@PathVariable long traderId) {
		Trader trader = traderRepository.findById(traderId)
				.orElseThrow(() -> new NotFoundException("Can't find trader with id: " + traderId));
		return trader.getWriterOptions();
	}
	
	// Get all options by trader id
	@GetMapping("{traderId}/all")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Options> getAllOptionsByTraderId(@PathVariable long traderId) {
		Trader trader = traderRepository.findById(traderId).orElseThrow(() -> new NotFoundException("Can't find trader with id: " + traderId));
		List<Options> combinedList = new ArrayList<Options>();
		combinedList.addAll(trader.getWriterOptions());
		combinedList.addAll(trader.getTakerOptions());
		return combinedList;
	}

	// Modify option
	@PutMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Options modifyOption(@RequestBody Options option) {
		if (optionRepository.findById(option.getId()).isEmpty()) {
			throw new NotFoundException("Can't find option with id: " + option.getId());
		}
		return optionRepository.save(option);
	}
}
