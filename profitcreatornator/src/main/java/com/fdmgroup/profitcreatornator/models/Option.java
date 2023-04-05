package com.fdmgroup.profitcreatornator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Option {
	@Id
	@GeneratedValue
	private long id;
	private long stock_id;
	private long taker_id;
	private long writer_id;
	private String style; // TODO maybe better set as enum
	private double strike_price;
	private String type; // TODO maybe better set as enum
	private double premium;
	private LocalDateTime expiration_date;
	private boolean exercised;
	private LocalDateTime purchase_date;
	private String status; // TODO maybe better set as enum
	@ManyToOne
	@JsonIgnore
	private Trader trader;
	
	
	// function for remove linked entities
	public void removeTrader() {
		this.trader.getOptions().remove(this);
		this.trader = null;
	}
	public void addTrader(Trader trader) {
		this.trader = trader;
		trader.getOptions().add(this);
	}
	
	// remove all relationships associated with the current entity
	public void removeAllRelation() {
		// TODO add code
	}
	
}
