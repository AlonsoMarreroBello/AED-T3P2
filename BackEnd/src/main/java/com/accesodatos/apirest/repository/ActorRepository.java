package com.accesodatos.apirest.repository;

import java.util.List;

import com.accesodatos.apirest.models.Actor;

public interface ActorRepository {

	public int addActor(Actor actor);
	public int updateActor(Actor actor);
	
	public List<Actor> getAllActors();
	public Actor getActorById(long id);
	public List<Actor> getActorsByName(String name);
	
	public int deleteActor(long id);
	
	
}
