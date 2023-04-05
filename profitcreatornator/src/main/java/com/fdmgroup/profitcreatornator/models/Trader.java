package com.fdmgroup.profitcreatornator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Trader {
	@Id
	@GeneratedValue
	private Long traderId;
	
	@OneToOne
	@JsonIgnore
	private User user;
	
	private String name;
	
//	@OneToMany
//	@JsonIgnore
//	private List<Options> options;
	
	
}
