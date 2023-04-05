package com.fdmgroup.profitcreatornator.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Trader {
	@Id
	@GeneratedValue
	private Long traderId;
	
	@OneToOne
	@JsonIgnore
	private User user;
	
//	@OneToMany
//	@JsonIgnore
//	private List<Options> options;
}
