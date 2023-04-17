package com.fdmgroup.profitcreatornator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.profitcreatornator.models.Trader;

public interface TraderRepository extends JpaRepository<Trader, Long>{
	
}
