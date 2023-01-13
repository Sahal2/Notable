package com.example.demo;

import com.example.demo.model.Appointments;
import com.example.demo.model.User;
import com.example.demo.repository.AppointmentsRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@SpringBootApplication
public class NotableApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(NotableApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AppointmentsRepository appointmentsRepository;

	@Override
	public void run(String...args) throws Exception {
		var user1 = new User("Krieger, Algernop");
		var user2 = new User("Hibbert, Julius");
		var user3 = new User("Rivera, Nick");
		this.userRepository.save(user1);
		this.userRepository.save(user2);
		this.userRepository.save(user3);
		var appointment1 = new Appointments("Sterling Archer","8:00AM","New Patient",user1);
		var appointment2 = new Appointments("Cyril Figis","8:30AM","New Patient",user1);
		var appointment3 = new Appointments("Ray Gilette", "9:00AM","New Patient",user1);
		var appointment4 = new Appointments("Sterling B","8:00AM","New Patient",user2);
		var appointment5 = new Appointments("Cyril B","8:30AM","New Patient",user2);
		var appointment6 = new Appointments("Ray B", "9:00AM","New Patient",user2);
		var appointment7 = new Appointments("Sterling C","8:00AM","New Patient",user3);
		var appointment8 = new Appointments("Cyril C","8:30AM","New Patient",user3);
		var appointment9 = new Appointments("Ray C", "9:00AM","New Patient",user3);
		this.appointmentsRepository.save(appointment1);
		this.appointmentsRepository.save(appointment2);
		this.appointmentsRepository.save(appointment3);
		this.appointmentsRepository.save(appointment4);
		this.appointmentsRepository.save(appointment5);
		this.appointmentsRepository.save(appointment6);
		this.appointmentsRepository.save(appointment7);
		this.appointmentsRepository.save(appointment8);
		this.appointmentsRepository.save(appointment9);

	}
}
