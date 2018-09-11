import { ILinks } from "@core/interfaces/links.interfaces";
import { IObjectState } from "@core/interfaces/object-state.interface";

export interface IPost {
    id?: number;
    date?: Date;
    date_gmt?: Date;
    guid?: IObjectState | string;
    modified?: Date;
    modified_gmt?: Date;
    slug?: string;
    status?: string;
    password?: string;
    type?: string;
    link?: string;
    title?: IObjectState | string;
    content?: IObjectState | string;
    excerpt?: IObjectState | string;
    author?: number;
    featured_media?: number;
    comment_status?: string;
    ping_status?: string;
    sticky?: boolean;
    template?: string;
    format?: string;
    meta?: any[];
    categories?: number[];
    tags?: string[];
    _links?: ILinks;
    liveblog_likes?: number;
}
