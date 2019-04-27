package com.ITrator.bike.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ITrator.bike.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
