package com.fdmgroup.profitcreatornator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Stock {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String symbol;
	private double currentPrice;
	// private HashMap<String, Double> history;

	@JsonIgnore
	@OneToMany(mappedBy = "stock")
	private List<Portfolio> portfolios;

	@JsonIgnore
	@OneToMany(mappedBy = "stock")
	private List<Options> options;

	public Stock(String name, String symbol, double currentPrice, List<Portfolio> portfolios) {
		super();
		this.name = name;
		this.symbol = symbol;
		this.currentPrice = currentPrice;
		this.portfolios = portfolios;
	}

	// add and remove function for parent relationship stock hold
	public void addPortfolio(Portfolio portfolio) {
		this.portfolios.add(portfolio);
		portfolio.setStock(this);
	}

	public void removePortfolio(Portfolio portfolio) {
		this.portfolios.remove(portfolio);
		portfolio.setStock(null);
	}

}
