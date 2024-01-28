export interface Launch {
    fairings: Fairings | null;
    links: Links;
    static_fire_date_utc: Date | null;
    static_fire_date_unix: number | null;
    net: boolean;
    window: number | null;
    rocket: string;
    success: boolean | null;
    failures: Failure[];
    details: null | string;
    crew: Crew[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: Date;
    date_unix: number;
    date_local: Date;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: null | string;
    id: string;
}

export interface Core {
    core: null | string;
    flight: number | null;
    gridfins: boolean | null;
    legs: boolean | null;
    reused: boolean | null;
    landing_attempt: boolean | null;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
}

export interface Crew {
    crew: string;
    role: string;
}

export interface Failure {
    time: number;
    altitude: number | null;
    reason: string;
}

export interface Fairings {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
}

export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: null | string;
    webcast: null | string;
    youtube_id: null | string;
    article: null | string;
    wikipedia: null | string;
}

export interface Flickr {
    small: any[];
    original: string[];
}

export interface Patch {
    small: null | string;
    large: null | string;
}

export interface Reddit {
    campaign: null | string;
    launch: null | string;
    media: null | string;
    recovery: null | string;
}
