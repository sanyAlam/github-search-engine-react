export type SearchResponse = {
    success: boolean;
    data: Repository[];
    totalCount: number;
};

export type Repository = {
    repoName: string;
    author: string;
    topContributor: TopContributor;
    language: string;
    description: string;
    lastUpdated: Date;
    repoUrl: string;
};

export type TopContributor = {
    author: string;
    a: number;
    d: number;
    c: number;
};
