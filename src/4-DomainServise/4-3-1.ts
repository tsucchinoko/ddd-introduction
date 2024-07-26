class UserService {
  public exists(user: User): boolean {
    // 重複を確認するコード
  }

  public changeUserName(user: User, name: UserName): void {
    // ユーザ名を変更するコード
    if (user === null) {
      throw new Error("user is null");
    }
    if (name === null) {
      throw new Error("name is null");
    }

    user.name = name;
  }
}
class User {
  private readonly id: UserId;

  constructor(id: UserId, name: UserName) {
    if (id === null) throw new Error("id is null");
    if (name === null) throw new Error("name is null");

    this.id = id;
    this.name = name;
  }

  // publicなgetterのみ残る
  public get name(): UserName {
    return this.name;
  }

  public;

  // 追加した重複確認のふるまい
  public exists(user: User): boolean {
    // 重複を確認するコード
    return false;
  }
}
