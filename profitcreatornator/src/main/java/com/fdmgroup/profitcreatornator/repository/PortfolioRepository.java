package com.fdmgroup.profitcreatornator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.fdmgroup.profitcreatornator.models.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long>{

	List<Portfolio> getByTraderId(@Param("traderId") long traderId);
	
//	@Query(value = 
//			"SELECT s.symbol, s.name, s.currentPrice FROM Portfolio p INNER JOIN Stock s ON p.stock = s.id WHERE p.traderId = traderId")
//	List<Portfolio>  getByTraderIdDetailed(@Param("traderId") long traderId);
	
}
