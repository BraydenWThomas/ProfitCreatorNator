package com.fdmgroup.profitcreatornator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.profitcreatornator.models.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
