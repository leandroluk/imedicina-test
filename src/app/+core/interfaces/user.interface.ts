import { IAvatarUrl } from "@core/interfaces/avatar-url.interface";
import { ILinks } from "@core/interfaces/links.interfaces";

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
}