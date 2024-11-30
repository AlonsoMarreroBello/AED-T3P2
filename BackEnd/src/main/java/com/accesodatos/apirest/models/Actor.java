package com.accesodatos.apirest.models;

import java.sql.Timestamp;

public class Actor {
	
	private long id;
	private String firstName;
	private String lastName;
	private Timestamp lastUpdate;
	
	public Actor() {
		super();
	}

	public Actor(long id, String firstName, String lastName, Timestamp lastUpdate) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.lastUpdate = lastUpdate;
	}
	
	public Actor(String firstName, String lastName, Timestamp lastUpdate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.lastUpdate = lastUpdate;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Timestamp getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	@Override
	public String toString() {
		return "Actor [id=" + id + ", firstName=" + firstName + ", LastName=" + lastName + ", lastUpdate="
				+ lastUpdate + "]";
	}

}
