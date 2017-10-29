export class UsersService {
    private registeredUsers = ['Bulcsú', 'Dorka', 'Csenge'];

    getUsers () {
        return this.registeredUsers
    }
}