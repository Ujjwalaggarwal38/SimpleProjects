package com.newapp.journalApp.repository;

import com.newapp.journalApp.entity.JournalEntry;
import com.newapp.journalApp.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByUsername(String username);
}
