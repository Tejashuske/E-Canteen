package com.server.service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.dto.UserDTO;
import com.server.entity.USER_ROLE;
import com.server.entity.User;
import com.server.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	SessionFactory hibernateFactory;
	
	@Autowired
	AdminRepository repository;
	
	@Override
	public boolean addStudent(UserDTO dto) {
		User entityUser = new User();
		BeanUtils.copyProperties(dto, entityUser);
		entityUser.setRole(USER_ROLE.ROLE_STUDENT);

		try (Session hibernateSession = hibernateFactory.openSession()) {
			hibernateSession.beginTransaction();
			hibernateSession.persist(entityUser);
			hibernateSession.getTransaction().commit();
		}
		return true;
	}

	@Override
	public boolean removeStudent(String userName) {
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
	public boolean updateStudent(String userName, UserDTO dto) {
	    try (Session hibernateSession = hibernateFactory.openSession()) {
	        User userEntity = hibernateSession.get(User.class, userName);

	        if (userEntity == null) {
	            return false;
	        }

	        hibernateSession.beginTransaction();
	        
	        userEntity.setName(dto.getName());
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
	public User getStudent(String userName) {
	    try (Session hibernateSession = hibernateFactory.openSession()) {
	    	User userEntity = hibernateSession.get(User.class, userName);
	        return userEntity;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return null; 
	    }
	}

	@Override
	public List<User> getAllStudents() {
		return repository.getAllStudents();
	}

	@Override
	public boolean addVendor(UserDTO dto) {
		User entityUser = new User();
		BeanUtils.copyProperties(dto, entityUser);
		entityUser.setRole(USER_ROLE.ROLE_VENDOR);

		try (Session hibernateSession = hibernateFactory.openSession()) {
			hibernateSession.beginTransaction();
			hibernateSession.persist(entityUser);
			hibernateSession.getTransaction().commit();
		}
		return true;
	}

	@Override
	public List<User> getAllVendors() {
		return repository.getAllVendors();
	}

}
