package com.fdmgroup.profitcreatornator.models;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Options {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String style; // TODO maybe better set as enum
	private double strike_price;
	private String type; // TODO maybe better set as enum
	private double premium;
	private LocalDateTime expiration_date;
	private LocalDateTime purchase_date;
	private String status; // TODO maybe better set as enum
	private int quantity;
	
	@ManyToOne
	@JoinTable(
			name = "stocks_options",
			joinColumns = @JoinColumn(name = "option_id"),
			inverseJoinColumns = @JoinColumn(name = "stock_id"))
	@JsonIgnore
	private Stock stock;
	
	@ManyToOne
	@JoinTable(
			name = "takers_options",
			joinColumns = @JoinColumn(name = "option_id"),
			inverseJoinColumns = @JoinColumn(name = "taker_id"))
	@JsonIgnore
	private Trader taker;
	
	@ManyToOne
	@JoinTable(
			name = "writers_options",
			joinColumns = @JoinColumn(name = "option_id"),
			inverseJoinColumns = @JoinColumn(name = "writer_id"))
	@JsonIgnore
	private Trader writer;

	
	public Options(Stock stock, Trader taker, Trader writer, String style, double strike_price, String type,
			double premium, LocalDateTime expiration_date, LocalDateTime purchase_date,
			String status, int quantity) {
		super();
		this.stock = stock;
		this.taker = taker;
		this.writer = writer;
		this.style = style;
		this.strike_price = strike_price;
		this.type = type;
		this.premium = premium;
		this.expiration_date = expiration_date;
		this.purchase_date = purchase_date;
		this.status = status;
		this.quantity = quantity;
	}
	
//	// function for remove linked entities
//	public void removeTrader() {
//		this.trader.getOptions().remove(this);
//		this.trader = null;
//	}
//	public void addTrader(Trader trader) {
//		this.trader = trader;
//		trader.getOptions().add(this);
//	}
	
	// remove all relationships associated with the current entity
	public void removeAllRelation() {
		// TODO add code
	}




	
	
}
