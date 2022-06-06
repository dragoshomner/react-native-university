import { AuthorAddress } from './Address.types';
import { AuthorCompany } from './Company.types';

export type AuthorItemType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AuthorAddress;
    phone: string;
    website: string;
    company: AuthorCompany;
};

export type AuthorListType = AuthorItemType[];
