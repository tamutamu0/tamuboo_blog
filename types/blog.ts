import {
    MicroCMSListResponse,
    MicroCMSImage,
    MicroCMSListContent
} from 'microcms-js-sdk'


export type Blog = {
    id: string;
    title: string;
    tags: Tag[];
    image: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
}

export type Tag = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
}