package com.fdmgroup.profitcreatornator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.stereotype.Service;

import com.fdmgroup.profitcreatornator.models.Trader;
import com.fdmgroup.profitcreatornator.models.User;
import com.fdmgroup.profitcreatornator.repository.TraderRepository;
import com.fdmgroup.profitcreatornator.repository.UserRepository;

@Service
public class UserService {

	@Autowired
    private UserRepository userRepo;
	@Autowired
	private TraderRepository traderRepo;
     
    public void processOAuthPostLogin(DefaultOidcUser user) {
    	String email = user.getAttribute("email");
        User existUser = userRepo.getUserByEmail(email);
         
        if (existUser == null) {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFirstName(user.getAttribute("given_name"));
            newUser.setLastName(user.getAttribute("family_name"));
            newUser.setEnabled(true);          
            userRepo.save(newUser);   
            
            Trader trader = new Trader();
            trader.setUser(newUser);
            trader.setName(user.getAttribute("given_name"));
            traderRepo.save(trader); 
            userRepo.save(newUser); 
            
        }
         
    }
     
}

