package com.accesodatos.apirest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.accesodatos.apirest.models.Actor;
import com.accesodatos.apirest.service.ActorService;

/**
 * Controller class for handling requests related to {@link Actor} entity.
 */
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173/")
public class ActorController {
	
	@Autowired
	ActorService actorService;
	
	/**
	 * Retrieves a list of actors based on the provided name.
	 * If the name is not provided, retrieves all actors.
	 * 
	 * @param name The name or part of the name to search for.
	 * @return A {@link ResponseEntity} containing a list of actors or an error status.
	 */
	@GetMapping("/actors")
	public ResponseEntity<List<Actor>> getActorByName(@RequestParam(name = "name", required = false) String name) {
		
		try {
			
			List<Actor> actors = new ArrayList<>();
			
			if (name != null && name.trim() != "") {
				actors = actorService.getActorsByName(name);
			} else {
				actorService.getAllActors().forEach(actors::add);
			}
			
			if (!actors.isEmpty()) {
				return new ResponseEntity<>(actors, HttpStatus.OK);
			} 
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Retrieves an actor by its ID.
	 * 
	 * @param index The ID of the actor to retrieve.
	 * @return A {@link ResponseEntity} containing the actor or a not found status.
	 */
	@GetMapping("/actors/{index}")
	public ResponseEntity<Actor> getActorById(@PathVariable("index") long index) {
		try {
			Actor actor = actorService.getById(index);
			
			if (actor != null) {
				return new ResponseEntity<>(actor, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Adds a new actor to the database.
	 * 
	 * @param actor The {@link Actor} to be added.
	 * @return A {@link ResponseEntity} with a success message or an error status.
	 */
	@PostMapping("/actors")
	public ResponseEntity<String> addActor(@RequestBody Actor actor) {
		try {
			actorService.addActor(
					new Actor(actor.getFirstName(), actor.getLastName(), actor.getLastUpdate()));
			
			return new ResponseEntity<String>("Actor was created succesfully", HttpStatus.CREATED);
			
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Updates an existing actor's information.
	 * 
	 * @param id The ID of the actor to update.
	 * @param actor The {@link Actor} with updated information.
	 * @return A {@link ResponseEntity} with a success message or a not found status.
	 */
	@PutMapping("/actors/{id}")
	public ResponseEntity<String> updateActor(@PathVariable("id") long id, @RequestBody Actor actor) {
		
		Actor actorOld = actorService.getById(id);
		
		if (actorOld != null) {
			actorOld.setId(id);
			if (actor.getFirstName() != null) {
				actorOld.setFirstName(actor.getFirstName());
			}
			if (actor.getLastName() != null) {
				actorOld.setLastName(actor.getLastName());
			}
			
			actorService.update(actorOld);			
			
			return new ResponseEntity<String>("Actor was updated succesfully", HttpStatus.OK);
			
		} else {
			return new ResponseEntity<String>("Actor with id " + id + " was not found", HttpStatus.NOT_FOUND);
		}
	}
	
	/**
	 * Deletes an actor from the database by its ID.
	 * 
	 * @param id The ID of the actor to be deleted.
	 * @return A {@link ResponseEntity} with a success message or a not found status.
	 */
	@DeleteMapping("/actors/{id}")
	public ResponseEntity<String> deleteActor(@PathVariable("id") long id) {
		
		Actor actorOld = actorService.getById(id);
		
		if (actorOld != null) {
			
			actorService.delete(id);			
			
			return new ResponseEntity<String>("Actor was deleted succesfully", HttpStatus.OK);
			
		} else {
			return new ResponseEntity<String>("Actor with id " + id + " was not found", HttpStatus.NOT_FOUND);
		}
	}
	
	

}
