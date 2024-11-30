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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.accesodatos.apirest.models.Actor;
import com.accesodatos.apirest.service.ActorService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class ActorController {
	
	@Autowired
	ActorService actorService;
	
	@GetMapping("/actors")
	public ResponseEntity<List<Actor>> getActorByName(@RequestParam String name) {
		
		if (name != null && name.trim() != "") {
			
			try {
				List<Actor> actors = actorService.getActorsByName(name);
				
				if (!actors.isEmpty()) {
					return new ResponseEntity<>(actors, HttpStatus.OK);
				} else {
					return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			
		} else {
			
			try {
				List<Actor> actors = new ArrayList<>();
				
				actorService.getAllActors().forEach(actors::add);
				
				if (actors.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				
				return new ResponseEntity<List<Actor>>(actors, HttpStatus.OK);
				
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	}
	
	
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
	
	@DeleteMapping("/actors/{id}")
	public ResponseEntity<String> updateActor(@PathVariable("id") long id) {
		
		Actor actorOld = actorService.getById(id);
		
		if (actorOld != null) {
			
			actorService.delete(id);			
			
			return new ResponseEntity<String>("Actor was deleted succesfully", HttpStatus.OK);
			
		} else {
			return new ResponseEntity<String>("Actor with id " + id + " was not found", HttpStatus.NOT_FOUND);
		}
	}
	
	

}
