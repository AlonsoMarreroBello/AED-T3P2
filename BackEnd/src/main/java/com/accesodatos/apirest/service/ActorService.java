package com.accesodatos.apirest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accesodatos.apirest.models.Actor;
import com.accesodatos.apirest.repository.impl.ActorRepositoryImpl;


/**
 * Service class responsible for handling business logic related to {@link Actor}.
 */
@Service
public class ActorService {
	
	@Autowired
	ActorRepositoryImpl actorRepository;

	/**
	 * Retrieves a list of all actors.
	 * 
	 * @return A list of all actors.
	 */
	public List<Actor> getAllActors() {
        List<Actor> actorList = actorRepository.getAllActors();
        return actorList;
    }
	
	/**
	 * Retrieves an actor by its ID.
	 * 
	 * @param id The identifier of the actor.
	 * @return The actor with the specified ID, or {@code null} if not found.
	 */
	public Actor getById(long id) {
		return actorRepository.getActorById(id);
	}

	/**
	 * Retrieves a list of actors whose name matches the provided name.
	 * 
	 * @param name The name or part of it to search for.
	 * @return A list of actors whose names match the search.
	 */
	public List<Actor> getActorsByName(String name) {
		return actorRepository.getActorsByName(name);
	}
	
	/**
	 * Adds a new actor to the database.
	 * 
	 * @param actor The {@link Actor} to be added.
	 * @return The number of rows affected.
	 */
	public int addActor(Actor actor) {
		return actorRepository.addActor(actor);
	}
	
	/**
	 * Updates an existing actor's information.
	 * 
	 * @param actor The {@link Actor} with updated information.
	 * @return The number of rows affected.
	 */
	public int update(Actor actor) {
		return actorRepository.updateActor(actor);
	}
	
	/**
	 * Deletes an actor from the database based on its ID.
	 * 
	 * @param id The identifier of the actor to be deleted.
	 * @return The number of rows affected.
	 */
	public int delete(long id) {
		return actorRepository.deleteActor(id);
	}
	
}
