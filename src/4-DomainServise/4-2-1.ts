class User {
  private readonly id: UserId;
  private readonly name: UserName;

  constructor(id: UserId, name: UserName) {
    this.id = id;
    this.name = name;
  }

  public create(id: UserId, name: UserName): User {
    if (id === null) {
      throw new Error("id is null");
    }
    if (name === null) {
      throw new Error("name is null");
    }

    return new User(id, name);
  }

  // 追加した重複を確認する振る舞い
  public exists(user: User): boolean {
    // 重複を確認するコード
  }
}

const user = new User(new UserId("1"), new UserName("name"));
// 生成したオブジェクト自身に問い合わせることになる
const duplicateCheckResult = user.exists(user);
