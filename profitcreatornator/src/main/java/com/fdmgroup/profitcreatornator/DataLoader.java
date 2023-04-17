package com.fdmgroup.profitcreatornator;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Service;

import com.fdmgroup.profitcreatornator.models.BarrierOption;
import com.fdmgroup.profitcreatornator.models.Options;
import com.fdmgroup.profitcreatornator.models.Portfolio;
import com.fdmgroup.profitcreatornator.models.Stock;
import com.fdmgroup.profitcreatornator.models.Trader;
import com.fdmgroup.profitcreatornator.models.User;
import com.fdmgroup.profitcreatornator.repository.BarrierOptionRepository;
import com.fdmgroup.profitcreatornator.repository.OptionRepository;
import com.fdmgroup.profitcreatornator.repository.PortfolioRepository;
import com.fdmgroup.profitcreatornator.repository.StockRepository;
import com.fdmgroup.profitcreatornator.repository.TraderRepository;
import com.fdmgroup.profitcreatornator.repository.UserRepository;

@Service
public class DataLoader implements ApplicationRunner {
	
	private BarrierOptionRepository barrierOptionRepository;
	private OptionRepository optionRepository;
	private PortfolioRepository portfolioRepository;
	private StockRepository stockRepository;
	private TraderRepository traderRepository;
	private UserRepository userRepository;
	//private PasswordEncoder encoder;

	
	@Autowired
	public DataLoader(BarrierOptionRepository barrierOptionRepository, OptionRepository optionRepository,
			PortfolioRepository portfolioRepository, StockRepository stockRepository, TraderRepository traderRepository,
			UserRepository userRepository
			//, PasswordEncoder encoder
			) {
		super();
		this.barrierOptionRepository = barrierOptionRepository;
		this.optionRepository = optionRepository;
		this.portfolioRepository = portfolioRepository;
		this.stockRepository = stockRepository;
		this.traderRepository = traderRepository;
		this.userRepository = userRepository;
		//this.encoder = encoder;
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println(
				"*********************************************************************\n"
				+ "*********************************************************************\n"
				+ "*********************************************************************\n"
				+ "***********************---SYSTEM IS RUNNING---***********************\n"
				+ "*********************************************************************\n"
				+ "*********************************************************************\n"
				+ "*********************************************************************\n");
		
		
		
		//USERS
		List<User> userList = new ArrayList<>(); 
		//userList.add(new User("user1@gmail.com",encoder.encode("user1"),"Cynthia", "Shepard", null, null, null));
		userList.add(new User("user1@gmail.com","user1","Cynthia", "Shepard", null, null, null));
		userList.add(new User("user2@gmail.com","user2","Darrell", "Hunnicutt", null, null, null));
		userList.add(new User("user3@gmail.com","user3","Jenelle", "Carpenter", null, null, null));
		userList.add(new User("user4@gmail.com","user4","Jenson", "Ott", null, null, null));
		this.userRepository.saveAll(userList);
		
		//TRADERS
		List<Trader> traderList = new ArrayList<>(); 
		traderList.add(new Trader(null, "Cynthia Shepard", null, null));
		traderList.add(new Trader(null, "Darrell Hunnicutt", null, null));
		traderList.add(new Trader(null, "Jenelle Carpenter", null, null));
		traderList.add(new Trader(null, "Jenson Ott", null, null));
		this.traderRepository.saveAll(traderList);
		
		//STOCKS
		List<Stock> stockList = new ArrayList<>();
		stockList.add(new Stock("Apple", "AAPL", 162.03, null));
		stockList.add(new Stock("Google", "GOOG", 106.95, null));
		stockList.add(new Stock("Microsoft", "MSFT", 289.39, null));
		stockList.add(new Stock("Amazon", "AMZN", 102.17, null));
		this.stockRepository.saveAll(stockList);
		
		
		
		//LINK TRADERS TO USERS
		traderList.get(0).setUser(userList.get(0));
		traderList.get(1).setUser(userList.get(1));
		traderList.get(2).setUser(userList.get(2));
		traderList.get(3).setUser(userList.get(3));
		this.traderRepository.saveAll(traderList);
		
		
		//PORTFOLIOS
		List<Portfolio> portfolioList = new ArrayList<>();
		//Trader 1
		portfolioList.add(new Portfolio( 610, stockList.get(0), traderList.get(0)));
		portfolioList.add(new Portfolio( 120, stockList.get(1), traderList.get(0)));
		portfolioList.add(new Portfolio( 660, stockList.get(2), traderList.get(0)));
		portfolioList.add(new Portfolio( 880, stockList.get(3), traderList.get(0)));	
		//Trader 2
		portfolioList.add(new Portfolio( 590, stockList.get(0), traderList.get(1)));
		portfolioList.add(new Portfolio( 940, stockList.get(2), traderList.get(1)));
		portfolioList.add(new Portfolio( 250, stockList.get(3), traderList.get(1)));	
		//Trader 3
		portfolioList.add(new Portfolio( 980, stockList.get(0), traderList.get(2)));
		portfolioList.add(new Portfolio( 910, stockList.get(1), traderList.get(2)));
		portfolioList.add(new Portfolio( 550, stockList.get(2), traderList.get(2)));
		portfolioList.add(new Portfolio( 270, stockList.get(3), traderList.get(2)));	
		//Trader 4
		portfolioList.add(new Portfolio( 190, stockList.get(2), traderList.get(3)));
		portfolioList.add(new Portfolio( 260, stockList.get(3), traderList.get(3)));	
		this.portfolioRepository.saveAll(portfolioList);
		
		
		//BARRIER - double threshold, String type, String status
		List<BarrierOption> barrierList = new ArrayList<>();
		barrierList.add(new BarrierOption(172.52,null,null));
		barrierList.add(new BarrierOption(642.13,null,null));
		this.barrierOptionRepository.saveAll(barrierList);
		
		

		//OPTIONS
		List<Options> optionList = new ArrayList<>();
		//1
		optionList.add(new Options(stockList.get(0), traderList.get(3), traderList.get(0), "American", 122.83, "put", 0.32, LocalDateTime.of(2023, 4, 21, 0, 0), LocalDateTime.of(2023, 4, 4, 0, 0), "waiting_exercise", 8,null));
		//barrier
		optionList.add(new Options(stockList.get(1), traderList.get(2), traderList.get(3), "European", 162.13, "put", 0.72, LocalDateTime.of(2023, 4, 22, 0, 0), LocalDateTime.of(2023, 4, 4, 0, 0), "waiting_exercise", 4,null));
		optionList.get(1).setBarrierOption(barrierList.get(0));	
		//2 
		optionList.add(new Options(stockList.get(1), traderList.get(3), traderList.get(1), "American", 157.63, "call", 0.91, LocalDateTime.of(2023, 4, 18, 0, 0), LocalDateTime.of(2023, 4, 5, 0, 0), "exercised", 7,null));
		optionList.add(new Options(stockList.get(3), null, traderList.get(1), "European", 114.63, "put", 0.58, LocalDateTime.of(2023, 4, 17, 0, 0), null, "waiting_taker", 2,null));
		//3 
		//4 
		optionList.add(new Options(stockList.get(3), traderList.get(0), traderList.get(3), "American", 185.71, "call", 0.22, LocalDateTime.of(2023, 4, 19, 0, 0), LocalDateTime.of(2023, 4, 6, 0, 0), "waiting_exercise", 6,null));
		optionList.add(new Options(stockList.get(2), null, traderList.get(3), "European", 181.75, "put", 0.51, LocalDateTime.of(2023, 4, 18, 0, 0), null, "waiting_taker", 9,null));
		//barrier
		optionList.add(new Options(stockList.get(0), null, traderList.get(1), "American", 623.12, "call", 0.52, LocalDateTime.of(2023, 4, 23, 0, 0), null, "waiting_taker", 6,null));
		optionList.get(6).setBarrierOption(barrierList.get(1));		
		this.optionRepository.saveAll(optionList);
		
		
		
		
		
		this.barrierOptionRepository.saveAll(barrierList);
		this.optionRepository.saveAll(optionList);	
		this.portfolioRepository.saveAll(portfolioList);
		this.stockRepository.saveAll(stockList);
		this.traderRepository.saveAll(traderList);
		this.userRepository.saveAll(userList);
	}



	
}
