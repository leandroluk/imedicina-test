import { ILink } from "@app/core/interfaces/link.interface";

export interface ILinks {
    self?: ILink[];
    collection?: ILink[];
    about?: ILink[];
    author?: ILink[];
    replies?: ILink[];
    'version-history'?: ILink[];
    'wp:attachment'?: ILink[];
    'wp:term'?: ILink[];
    curries?: ILink[];
}