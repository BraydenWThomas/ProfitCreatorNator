package com.fdmgroup.profitcreatornator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.fdmgroup.profitcreatornator.models.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long>{

	List<Portfolio> getByTraderId(@Param("traderId") long traderId);
	
	
	
}
