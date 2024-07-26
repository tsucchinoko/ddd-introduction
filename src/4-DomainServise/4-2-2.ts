class UserService {
  public exists(user: User): boolean {
    // 重複を確認するコード
  }
}

const user = new User(new UserId("1"), new UserName("name"));
const userService = new UserService();
// ドメインサービスに問い合わせ
// 自身のオブジェクトに問い合わせたり、確認専用のオブジェクトを作るみたいな不自然さがない
const duplicateCheckResult = userService.exists(user);
