package com.fdmgroup.profitcreatornator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Service;

import com.fdmgroup.profitcreatornator.repository.TraderRepository;
import com.fdmgroup.profitcreatornator.repository.UserRepository;

@Service
public class DataLoader implements ApplicationRunner {
	
	private UserRepository userRepository;
	private TraderRepository traderRepository;
	
	@Autowired
	public DataLoader(UserRepository userRepository, TraderRepository traderRepository) {
		super();
		this.userRepository = userRepository;
		this.traderRepository = traderRepository;
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
	}
	
}
