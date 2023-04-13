package com.fdmgroup.profitcreatornator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Getter
@Setter
@Table(name="_user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	private String email;
	@JsonIgnore
	private String password;
	private String firstName;
	private String lastName;
	private String role;
	private Boolean enabled;
	
	@OneToOne(mappedBy = "user")
	private Trader trader;
	
	public User(String email, String password, String firstName, String lastName, String role, Boolean enabled, Trader trader) {
		super();
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.role = role;
		this.enabled = enabled;
		this.trader = trader;
	}
	
	
	
}
