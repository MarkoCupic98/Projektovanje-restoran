import { Injectable } from '@angular/core';

export interface User {
    id: number;
    email: string;
    password: string;
    fName: string;
    lName: string;
    adress: string;
    date: Date;
    admin: boolean;
}

@Injectable()
export class UserService {

    currentUser: User = UserService.dummyUserList[0];

    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: "test@gmail.com",
            password: "123456",
            fName: "test1",
            lName: "test2",
            adress: "test adress 123",
            date: new Date("2019-05-22 17:00"),
            admin: false
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

        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User {
       this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail);
       return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string) : boolean {
        return UserService.dummyUserList.find(userToFind => 
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(email: string, password: string, fName: string, lName: string, adress: string, date: Date, admin: boolean) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if(maxId < user.id) {
                maxId = user.id;
            }
        });

        var id = ++maxId;
        var user: User = {id, email, password, fName, lName, adress, date, admin};

        UserService.dummyUserList.push(user);

        this.currentUser = user;
        console.log(user);
        return user;
    }
 }