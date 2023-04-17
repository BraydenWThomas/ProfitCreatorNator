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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Portfolio {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private int quantity;
	
	@ManyToOne
	private Stock stock;
	
	@ManyToOne
	@JsonIgnore
	private Trader trader;

	public Portfolio(int quantity, Stock stock, Trader trader) {
		super();
		this.quantity = quantity;
		this.stock = stock;
		this.trader = trader;
	}
	
	
	
}
