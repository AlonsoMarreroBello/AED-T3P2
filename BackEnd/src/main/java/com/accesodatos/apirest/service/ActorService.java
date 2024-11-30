package com.accesodatos.apirest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accesodatos.apirest.models.Actor;
import com.accesodatos.apirest.repository.impl.ActorRepositoryImpl;

@Service
public class ActorService {
	
	@Autowired
	ActorRepositoryImpl actorRepository;

	public List<Actor> getAllActors() {
        List<Actor> actorList = actorRepository.getAllActors();
        return actorList;
    }
	
	public Actor getById(long id) {
		return actorRepository.getActorById(id);
	}

	public List<Actor> getActorsByName(String name) {
		return actorRepository.getActorsByName(name);
	}
	
	public int addActor(Actor actor) {
		return actorRepository.addActor(actor);
	}
	
	public int update(Actor actor) {
		return actorRepository.updateActor(actor);
	}
	
	public int delete(long id) {
		return actorRepository.deleteActor(id);
	}
	
}
