package com.fdmgroup.profitcreatornator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.profitcreatornator.models.Options;

public interface OptionRepository extends JpaRepository<Options, Long>{
	
}
