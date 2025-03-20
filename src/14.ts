export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUserById(id: number): Promise<User> {
    return this.http.get(`https://api.example.com/users/${id}`).toPromise();
  }

  createUser(user: User): Promise<User> {
    return this.http.post('https://api.example.com/users', user).toPromise();
  }

  updateUser(id: number, user: User): Promise<User> {
    return this.http.put(`https://api.example.com/users/${id}`, user).toPromise();
  }

  deleteUser(id: number): Promise<void> {
    return this.http.delete(`https://api.example.com/users/${id}`).toPromise();
  }
}
