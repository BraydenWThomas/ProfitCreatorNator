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
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Option {
	@Id
	@GeneratedValue
	private Long id;
	private Long stock_id;
	private Long taker_id;
	private Long writer_id;
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
	
	public Option(Long stock_id, Long taker_id, Long writer_id, String style, double strike_price, String type,
			double premium, LocalDateTime expiration_date, boolean exercised, LocalDateTime purchase_date,
			String status, Trader trader) {
		super();
		this.stock_id = stock_id;
		this.taker_id = taker_id;
		this.writer_id = writer_id;
		this.style = style;
		this.strike_price = strike_price;
		this.type = type;
		this.premium = premium;
		this.expiration_date = expiration_date;
		this.exercised = exercised;
		this.purchase_date = purchase_date;
		this.status = status;
		this.trader = trader;
	}
	
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
