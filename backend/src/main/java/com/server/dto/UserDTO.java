package com.server.dto;

import com.server.entity.USER_ROLE;

public class UserDTO {

	private String userName;
	
    private String password;
	
	private USER_ROLE role;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public USER_ROLE getRole() {
		return role;
	}

	public void setRole(USER_ROLE role) {
		this.role = role;
	}

    
    
}
