package com.fdmgroup.profitcreatornator.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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

	private User user; // child of the user
	
    @OneToMany(mappedBy = "trader")
    @JsonIgnore
 	private List<Option> options;
	
    
	// remove and add function
    public void addOption(Option option) {
    	this.options.add(option);
    	option.setTrader(this);
    }
    public void removeOption(Option option) {
    	this.options.remove(option);
    	option.setTrader(null);
    }
}
