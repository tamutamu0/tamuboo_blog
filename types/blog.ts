import {
    MicroCMSListResponse,
    MicroCMSImage,
    MicroCMSListContent
} from 'microcms-js-sdk'


export type Blog = {
    id: string;
    title: string;
    content: string;
    tags: Tag[];
    image: BlogImage;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
}

export type BlogImage = {
    url: string;
    height: number;
    weight: number;
}

export type Tag = {
    id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
}