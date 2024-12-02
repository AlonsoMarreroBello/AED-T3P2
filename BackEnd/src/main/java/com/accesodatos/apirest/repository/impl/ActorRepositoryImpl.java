package com.accesodatos.apirest.repository.impl;

import java.sql.ResultSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.accesodatos.apirest.models.Actor;
import com.accesodatos.apirest.repository.ActorRepository;

/**
 * Implementation of the {@link ActorRepository} interface that provides CRUD operations for the {@link Actor} entity.
 * This class interacts with the database using {@link JdbcTemplate} to execute SQL queries for adding, updating, retrieving, and deleting actors.
 */
@Repository 
public class ActorRepositoryImpl implements ActorRepository {

	@Autowired 
    private JdbcTemplate jdbcTemplate;
	
	private final String SQL_SELECT_ALL = "SELECT * FROM actor";
	private final String SQL_SELECT_BY_ID = "SELECT * FROM actor WHERE actor_id = ?";
	private final String SQL_SELECT_BY_NAME = "SELECT * FROM actor WHERE first_name LIKE CONCAT(?, '%')";
	private final String SQL_INSERT = "INSERT INTO actor (first_name, last_name) VALUES (?,?)";
	private final String SQL_UPDATE = "UPDATE actor SET first_name=?, last_name=? WHERE actor_id = ?";
	private final String SQL_DELETE = "DELETE FROM actor WHERE actor_id = ?";
	
	/**
	 * RowMapper for mapping ResutltSet rows to Actor objects.
	 */
	private RowMapper<Actor> rowMapper = (ResultSet rs, int rowNum) -> {
        Actor actor = new Actor();
        actor.setId(rs.getLong("actor_id"));
        actor.setFirstName(rs.getString("first_name"));
        actor.setLastName(rs.getString("last_name"));
        actor.setLastUpdate(rs.getTimestamp("last_update"));
        return actor;
    };
	
    /**
     * {@inheritDoc}
     */
	@Override
	public int addActor(Actor actor) {
		return jdbcTemplate.update(SQL_INSERT, 
				new Object[] {actor.getFirstName(), actor.getLastName()});
	}

	/**
     * {@inheritDoc}
     */
	@Override
	public int updateActor(Actor actor) {
		return jdbcTemplate.update(SQL_UPDATE, 
				new Object[] {actor.getFirstName(), actor.getLastName(), actor.getId()});
	}

	/**
     * {@inheritDoc}
     */
	@Override
	public List<Actor> getAllActors() {
		return jdbcTemplate.query(SQL_SELECT_ALL, rowMapper);
	}

	/**
     * {@inheritDoc}
     */
	@Override
	public Actor getActorById(long id) {
		try {
			Actor actor = jdbcTemplate.queryForObject(
					SQL_SELECT_BY_ID, 
					rowMapper, 
					id);
			return actor;
		} catch (IncorrectResultSizeDataAccessException e) {
			return null;
		}
	}

	/**
     * {@inheritDoc}
     */
	@Override
	public int deleteActor(long id) {
		return jdbcTemplate.update(SQL_DELETE, 
				new Object[] {id});
	}

	/**
     * {@inheritDoc}
     */
	@Override
	public List<Actor> getActorsByName(String name) {
		try {
			List<Actor> actors = jdbcTemplate.query(
					SQL_SELECT_BY_NAME, 
					rowMapper, 
					name);
			return actors;
		} catch (IncorrectResultSizeDataAccessException e) {
			return null;
		}
	}

}
