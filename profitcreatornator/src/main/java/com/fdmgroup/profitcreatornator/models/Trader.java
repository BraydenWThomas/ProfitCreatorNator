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
	
    @OneToMany(mappedBy = "taker_id")
    @JsonIgnore
 	private List<Options> takerOptions;
    
    @OneToMany(mappedBy = "writer_id")
    @JsonIgnore
 	private List<Options> writerOptions;

	public Trader(User user, String name, List<Options> takerOptions, List<Options> writerOptions) {
		super();
		this.user = user;
		this.name = name;
		this.takerOptions = takerOptions;
		this.writerOptions = writerOptions;
	}
	
    
    
//	// remove and add function
//    public void addOption(Option option) {
//    	this.options.add(option);
//    	option.setTrader(this);
//    }
//    public void removeOption(Option option) {
//    	this.options.remove(option);
//    	option.setTrader(null);
//    }
}
