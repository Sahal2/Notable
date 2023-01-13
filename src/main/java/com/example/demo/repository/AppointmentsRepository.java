package com.example.demo.repository;

import com.example.demo.model.Appointments;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentsRepository extends JpaRepository<Appointments, Long> {

}