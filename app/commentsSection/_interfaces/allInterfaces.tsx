export interface comments {
    id: number| string;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies?: Reply[];
};

export interface User {
    image: {
        png: string;
        webp: string;
    };
    username: string;
};

export interface Reply {
    id: number |string;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo: string;
}