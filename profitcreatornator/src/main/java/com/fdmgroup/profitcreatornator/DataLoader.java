package com.fdmgroup.profitcreatornator;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fdmgroup.profitcreatornator.models.Option;
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
		traderList.add(new Trader(null, "Cynthia Shepard", null));
		traderList.add(new Trader(null, "Darrell Hunnicutt", null));
		traderList.add(new Trader(null, "Jenelle Carpenter", null));
		traderList.add(new Trader(null, "Jenson Ott", null));
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
		
		
		
//		//OPTIONS
//		List<Option> optionList = new ArrayList<>();
//		optionList.add(new Option(null, null, null, null, 0, null, 0, null, false, null, null, null));
//		
//		this.optionRepository.saveAll(optionList);
		
		
		//this.optionRepository.saveAll(optionList);
		this.portfolioRepository.saveAll(portfolioList);
		this.stockRepository.saveAll(stockList);
		this.traderRepository.saveAll(traderList);
		this.userRepository.saveAll(userList);
	}



	
}
