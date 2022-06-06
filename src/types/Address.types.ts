type GeoPosition = {
    lat: string;
    lng: string;
};

export type AuthorAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoPosition;
};
