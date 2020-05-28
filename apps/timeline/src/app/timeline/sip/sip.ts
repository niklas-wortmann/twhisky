export interface Sip {
  userId: UserId;
  content: string;
  date: string;
  likes: number;
  retweets: number;
}

export interface UserId extends String {
  __bla: never;
}

export const asUserId = (userId: string | UserId): UserId => <any>userId;
