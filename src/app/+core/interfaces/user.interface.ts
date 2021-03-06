import { IAvatarUrl } from "./avatar-url.interface";
import { ILinks } from "./links.interfaces";

export interface IUser {
  id?: number;
  name?: string;
  url?: string;
  description?: string;
  link?: string;
  slug?: string;
  avatar_urls?: IAvatarUrl[];
  meta?: string[];
  _links?: ILinks;
  token?: string;
  user_display_name?: string;
  user_email?: string;
  user_nicename?: string;
  btoa?: string;
}