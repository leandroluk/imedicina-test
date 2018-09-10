import { ILinks } from "@core/interfaces/links.interfaces";
import { IObjectState } from "@core/interfaces/object-state.interface";

export interface IPost {
    id?: number;
    date?: Date;
    date_gmt?: Date;
    guid: IObjectState;
    modified?: Date;
    modified_gmt?: Date;
    slug?: string;
    status?: string;
    type?: string;
    link?: string;
    title?: IObjectState;
    content?: IObjectState;
    excerpt?: IObjectState;
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
    _links: ILinks;
}