export type CommentType = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export type CommentsListType = CommentType[];
