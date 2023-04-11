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
public class BarrierOption extends Options {
	@Id
	@GeneratedValue
	//@Getter(AccessLevel.None)
	//@Setter(AccessLevel.None)
	private Long id;
	private double threshold;
	private String type;
	private String status;
}
