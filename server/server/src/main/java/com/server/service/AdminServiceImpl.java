package com.server.service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.dto.UserDTO;
import com.server.entity.User;
import com.server.repository.UserRepository;


@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	SessionFactory hibernateFactory;
	
	@Autowired
	UserRepository repository;
	
	@Override
	public boolean addUser(UserDTO dto) {
		User entityUser = new User();
		BeanUtils.copyProperties(dto, entityUser);

		try (Session hibernateSession = hibernateFactory.openSession()) {
			hibernateSession.beginTransaction();
			hibernateSession.persist(entityUser);
			hibernateSession.getTransaction().commit();
		}
		return true;
	}

	@Override
	public boolean removeUser(String userName) {
		try (Session hibernateSession = hibernateFactory.openSession()) {
			User userEntity = hibernateSession.get(User.class, userName);
            hibernateSession.beginTransaction();
            hibernateSession.remove(userEntity);
            hibernateSession.getTransaction().commit();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
	}

	@Override
	public boolean updateUser(String userName, UserDTO dto) {
	    try (Session hibernateSession = hibernateFactory.openSession()) {
	        User userEntity = hibernateSession.get(User.class, userName);

	        if (userEntity == null) {
	            return false;
	        }

	        hibernateSession.beginTransaction();
	        
	        userEntity.setUserName(dto.getUserName());
	        userEntity.setPassword(dto.getPassword());
	        
	        hibernateSession.merge(userEntity);
	        hibernateSession.getTransaction().commit();
	        return true;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return false;
	    }
	}

	@Override
	public User getUser(String userName) {
	    try (Session hibernateSession = hibernateFactory.openSession()) {
	    	User userEntity = hibernateSession.get(User.class, userName);
	        return userEntity;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return null; 
	    }
	}

	@Override
	public List<User> getAllUsers() {
		return repository.findAll();
	}

}
