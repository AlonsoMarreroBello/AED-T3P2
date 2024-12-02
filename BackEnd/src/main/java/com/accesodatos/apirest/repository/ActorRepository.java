package com.accesodatos.apirest.repository;

import java.util.List;

import com.accesodatos.apirest.models.Actor;

/**
 * Interface for CRUD operations related to the {@link Actor} entity.
 * This interface defines the basic operations required for managing actors in the database.
 */
public interface ActorRepository {

	/**
	 * Adds a new actor to the database.
	 * 
	 * @param actor The {@link Actor} object to be added.
	 * @return The number of rows affected by the insert operation.
	 */
	public int addActor(Actor actor);
	
	/**
	 * Updates an existing actor in the database.
	 * 
	 * @param actor The {@link Actor} object containing the updated information.
	 * @return The number of rows affected by the update operation.
	 */
	public int updateActor(Actor actor);
	
	/**
	 * Retrieves all actors from the database.
	 * 
	 * @return A list of all {@link Actor} objects in the database.
	 */
	public List<Actor> getAllActors();
	
	/**
	 * Retrieves an actor by its ID from the database.
	 * 
	 * @param id The ID of the actor to retrieve.
	 * @return The {@link Actor} with the given ID, or {@code null} if no actor is found with that ID.
	 */
	public Actor getActorById(long id);
	
	/**
	 * Retrieves actors whose names match the given search string.
	 * 
	 * @param name A string representing part of the actor's name to search for.
	 * @return A list of {@link Actor} objects whose names match the search string.
	 */
	public List<Actor> getActorsByName(String name);
	
	/**
	 * Deletes an actor from the database based on its ID.
	 * 
	 * @param id The ID of the actor to delete.
	 * @return The number of rows affected by the delete operation.
	 */
	public int deleteActor(long id);
	
	
}
