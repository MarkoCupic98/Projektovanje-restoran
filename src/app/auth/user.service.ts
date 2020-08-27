import { Injectable } from '@angular/core';

export interface User {
    id: number;
    email: string;
    password: string;
    fName: string;
    lName: string;
    date: Date;
}

@Injectable()
export class UserService {

    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: "test@test.com",
            password: "123456",
            fName: "test",
            lName: "ts",
            date: new Date("2019-05-22 17:00")
        }
    ]

    getUserName(user: User) : string {
        return user.email;
    }

    getUserById(id: number) : User {
        var foundUser: User;
        UserService.dummyUserList.forEach(user => {
            if (user.id == id) {
                foundUser = user;
            }
        });

        return foundUser;
    }

    getUser(userEmail: string) : User {
        return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail);
    }

    isPasswordCorrect(userEmail: string, password: string) : boolean {
        return UserService.dummyUserList.find(userToFind => 
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(email: string, password: string, fName: string, lName: string, date: Date) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if(maxId < user.id) {
                maxId = user.id;
            }
        });

        var id = ++maxId;
        var user: User = {id, email, password, fName, lName, date};

        UserService.dummyUserList.push(user);

        console.log(user);
        return user;
    }
 }