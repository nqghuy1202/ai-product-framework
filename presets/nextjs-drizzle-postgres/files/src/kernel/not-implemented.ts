// Helper cho khung code của ai-product-framework: planner để lại thân hàm bằng
//   throw notImplemented('<module>.<hàm>')   // APF:IMPLEMENT — <việc phải làm>
// để test chấp nhận đỏ với cùng một dạng lỗi. Coder xoá cả hai dòng khi viết xong.
export class NotImplementedError extends Error {
  constructor(readonly symbol: string) {
    super(`NOT_IMPLEMENTED: ${symbol}`);
    this.name = 'NotImplementedError';
  }
}

export function notImplemented(symbol: string): never {
  throw new NotImplementedError(symbol);
}
