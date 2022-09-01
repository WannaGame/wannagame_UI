export interface User {
  id: number;
  discordId: string;
  username: string;
  discriminator: string;
  avatar?: string;
  banner?: string;
  accessToken: string;
  refreshToken: string;
}
