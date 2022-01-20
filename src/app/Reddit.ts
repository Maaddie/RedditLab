// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
    kind?: string;
    data?: WelcomeData;
}

export interface WelcomeData {
    after?:      string;
    dist?:       number;
    modhash?:    string;
    geo_filter?: null;
    children?:   Child[];
    before?:     null;
}

export interface Child {
    kind?: Kind;
    data?: Reddit;
}

export interface Reddit {
    approved_at_utc?:               null;
    subreddit?:                     Subreddit;
    selftext?:                      string;
    author_fullname?:               string;
    saved?:                         boolean;
    mod_reason_title?:              null;
    gilded?:                        number;
    clicked?:                       boolean;
    title?:                         string;
    link_flair_richtext?:           any[];
    subreddit_name_prefixed?:       SubredditNamePrefixed;
    hidden?:                        boolean;
    pwls?:                          number;
    link_flair_css_class?:          null | string;
    downs?:                         number;
    thumbnail_height?:              number;
    top_awarded_type?:              null | string;
    hide_score?:                    boolean;
    name?:                          string;
    quarantine?:                    boolean;
    link_flair_text_color?:         FlairTextColor;
    upvote_ratio?:                  number;
    author_flair_background_color?: null | string;
    subreddit_type?:                SubredditType;
    ups?:                           number;
    total_awards_received?:         number;
    media_embed?:                   MediaEmbed;
    thumbnail_width?:               number;
    author_flair_template_id?:      null;
    is_original_content?:           boolean;
    user_reports?:                  any[];
    secure_media?:                  Media | null;
    is_reddit_media_domain?:        boolean;
    is_meta?:                       boolean;
    category?:                      null;
    secure_media_embed?:            MediaEmbed;
    link_flair_text?:               null;
    can_mod_post?:                  boolean;
    score?:                         number;
    approved_by?:                   null;
    is_created_from_ads_ui?:        boolean;
    author_premium?:                boolean;
    thumbnail?:                     string;
    edited?:                        boolean;
    author_flair_css_class?:        null | string;
    author_flair_richtext?:         FlairRichtext[];
    gildings?:                      DataGildings;
    post_hint?:                     PostHint;
    content_categories?:            null;
    is_self?:                       boolean;
    mod_note?:                      null;
    created?:                       number;
    link_flair_type?:               AuthorFlairType;
    wls?:                           number;
    removed_by_category?:           null;
    banned_by?:                     null;
    author_flair_type?:             AuthorFlairType;
    domain?:                        Domain;
    allow_live_comments?:           boolean;
    selftext_html?:                 null;
    likes?:                         null;
    suggested_sort?:                null | string;
    banned_at_utc?:                 null;
    url_overridden_by_dest?:        string;
    view_count?:                    null;
    archived?:                      boolean;
    no_follow?:                     boolean;
    is_crosspostable?:              boolean;
    pinned?:                        boolean;
    over_18?:                       boolean;
    preview?:                       Preview;
    all_awardings?:                 AllAwarding[];
    awarders?:                      any[];
    media_only?:                    boolean;
    can_gild?:                      boolean;
    spoiler?:                       boolean;
    locked?:                        boolean;
    author_flair_text?:             null | string;
    treatment_tags?:                string[];
    visited?:                       boolean;
    removed_by?:                    null;
    num_reports?:                   null;
    distinguished?:                 null;
    subreddit_id?:                  SubredditID;
    author_is_blocked?:             boolean;
    mod_reason_by?:                 null;
    removal_reason?:                null;
    link_flair_background_color?:   string;
    id?:                            string;
    is_robot_indexable?:            boolean;
    report_reasons?:                null;
    author?:                        string;
    discussion_type?:               null;
    num_comments?:                  number;
    send_replies?:                  boolean;
    whitelist_status?:              WhitelistStatus;
    contest_mode?:                  boolean;
    mod_reports?:                   any[];
    author_patreon_flair?:          boolean;
    author_flair_text_color?:       FlairTextColor | null;
    permalink?:                     string;
    parent_whitelist_status?:       WhitelistStatus;
    stickied?:                      boolean;
    url?:                           string;
    subreddit_subscribers?:         number;
    created_utc?:                   number;
    num_crossposts?:                number;
    media?:                         Media | null;
    is_video?:                      boolean;
    crosspost_parent_list?:         CrosspostParentList[];
    crosspost_parent?:              string;
    is_gallery?:                    boolean;
    media_metadata?:                { [key: string]: MediaMetadatum };
    gallery_data?:                  GalleryData;
}

export interface AllAwarding {
    giver_coin_reward?:                    number | null;
    subreddit_id?:                         null;
    is_new?:                               boolean;
    days_of_drip_extension?:               number;
    coin_price?:                           number;
    id?:                                   string;
    penny_donate?:                         number | null;
    award_sub_type?:                       AwardSubType;
    coin_reward?:                          number;
    icon_url?:                             string;
    days_of_premium?:                      number;
    tiers_by_required_awardings?:          { [key: string]: TiersByRequiredAwarding } | null;
    resized_icons?:                        ResizedIcon[];
    icon_width?:                           number;
    static_icon_width?:                    number;
    start_date?:                           null;
    is_enabled?:                           boolean;
    awardings_required_to_grant_benefits?: number | null;
    description?:                          string;
    end_date?:                             null;
    subreddit_coin_reward?:                number;
    count?:                                number;
    static_icon_height?:                   number;
    name?:                                 string;
    resized_static_icons?:                 ResizedIcon[];
    icon_format?:                          Format | null;
    icon_height?:                          number;
    penny_price?:                          number | null;
    award_type?:                           AwardType;
    static_icon_url?:                      string;
}

export enum AwardSubType {
    Appreciation = "APPRECIATION",
    Global = "GLOBAL",
    Group = "GROUP",
    Premium = "PREMIUM",
}

export enum AwardType {
    Global = "global",
}

export enum Format {
    Apng = "APNG",
    PNG = "PNG",
}

export interface ResizedIcon {
    url?:    string;
    width?:  number;
    height?: number;
    format?: Format | null;
}

export interface TiersByRequiredAwarding {
    resized_icons?:        ResizedIcon[];
    awardings_required?:   number;
    static_icon?:          ResizedIcon;
    resized_static_icons?: ResizedIcon[];
    icon?:                 ResizedIcon;
}

export interface FlairRichtext {
    e?: AuthorFlairType;
    t?: string;
}

export enum AuthorFlairType {
    Richtext = "richtext",
    Text = "text",
}

export enum FlairTextColor {
    Dark = "dark",
}

export interface CrosspostParentList {
    approved_at_utc?:               null;
    subreddit?:                     string;
    selftext?:                      string;
    author_fullname?:               string;
    saved?:                         boolean;
    mod_reason_title?:              null;
    gilded?:                        number;
    clicked?:                       boolean;
    title?:                         string;
    link_flair_richtext?:           FlairRichtext[];
    subreddit_name_prefixed?:       string;
    hidden?:                        boolean;
    pwls?:                          number;
    link_flair_css_class?:          null | string;
    downs?:                         number;
    thumbnail_height?:              number;
    top_awarded_type?:              null;
    hide_score?:                    boolean;
    name?:                          string;
    quarantine?:                    boolean;
    link_flair_text_color?:         FlairTextColor;
    upvote_ratio?:                  number;
    author_flair_background_color?: null | string;
    subreddit_type?:                SubredditType;
    ups?:                           number;
    total_awards_received?:         number;
    media_embed?:                   MediaEmbed;
    thumbnail_width?:               number;
    author_flair_template_id?:      null | string;
    is_original_content?:           boolean;
    user_reports?:                  any[];
    secure_media?:                  Media;
    is_reddit_media_domain?:        boolean;
    is_meta?:                       boolean;
    category?:                      null;
    secure_media_embed?:            MediaEmbed;
    link_flair_text?:               null | string;
    can_mod_post?:                  boolean;
    score?:                         number;
    approved_by?:                   null;
    is_created_from_ads_ui?:        boolean;
    author_premium?:                boolean;
    thumbnail?:                     string;
    edited?:                        boolean;
    author_flair_css_class?:        null;
    author_flair_richtext?:         FlairRichtext[];
    gildings?:                      CrosspostParentListGildings;
    content_categories?:            null;
    is_self?:                       boolean;
    mod_note?:                      null;
    created?:                       number;
    link_flair_type?:               AuthorFlairType;
    wls?:                           number;
    removed_by_category?:           null | string;
    banned_by?:                     null;
    author_flair_type?:             AuthorFlairType;
    domain?:                        Domain;
    allow_live_comments?:           boolean;
    selftext_html?:                 null;
    likes?:                         null;
    suggested_sort?:                null;
    banned_at_utc?:                 null;
    url_overridden_by_dest?:        string;
    view_count?:                    null;
    archived?:                      boolean;
    no_follow?:                     boolean;
    is_crosspostable?:              boolean;
    pinned?:                        boolean;
    over_18?:                       boolean;
    all_awardings?:                 AllAwarding[];
    awarders?:                      any[];
    media_only?:                    boolean;
    can_gild?:                      boolean;
    spoiler?:                       boolean;
    locked?:                        boolean;
    author_flair_text?:             null | string;
    treatment_tags?:                any[];
    visited?:                       boolean;
    removed_by?:                    null;
    num_reports?:                   null;
    distinguished?:                 null;
    subreddit_id?:                  string;
    author_is_blocked?:             boolean;
    mod_reason_by?:                 null;
    removal_reason?:                null;
    link_flair_background_color?:   string;
    id?:                            string;
    is_robot_indexable?:            boolean;
    report_reasons?:                null;
    author?:                        string;
    discussion_type?:               null;
    num_comments?:                  number;
    send_replies?:                  boolean;
    whitelist_status?:              WhitelistStatus;
    contest_mode?:                  boolean;
    mod_reports?:                   any[];
    author_patreon_flair?:          boolean;
    author_flair_text_color?:       FlairTextColor | null;
    permalink?:                     string;
    parent_whitelist_status?:       WhitelistStatus;
    stickied?:                      boolean;
    url?:                           string;
    subreddit_subscribers?:         number;
    created_utc?:                   number;
    num_crossposts?:                number;
    media?:                         Media;
    is_video?:                      boolean;
    post_hint?:                     PostHint;
    preview?:                       Preview;
    link_flair_template_id?:        string;
}

export enum Domain {
    DiscordGg = "discord.gg",
    IReddIt = "i.redd.it",
    RedditCOM = "reddit.com",
    VReddIt = "v.redd.it",
}

export interface CrosspostParentListGildings {
    gid_1?: number;
}

export interface Media {
    reddit_video?: RedditVideo;
}

export interface RedditVideo {
    bitrate_kbps?:       number;
    fallback_url?:       string;
    height?:             number;
    width?:              number;
    scrubber_media_url?: string;
    dash_url?:           string;
    duration?:           number;
    hls_url?:            string;
    is_gif?:             boolean;
    transcoding_status?: TranscodingStatus;
}

export enum TranscodingStatus {
    Completed = "completed",
}

export interface MediaEmbed {
}

export enum WhitelistStatus {
    AllAds = "all_ads",
}

export enum PostHint {
    HostedVideo = "hosted:video",
    Image = "image",
    Link = "link",
}

export interface Preview {
    images?:  Image[];
    enabled?: boolean;
}

export interface Image {
    source?:      ResizedIcon;
    resolutions?: ResizedIcon[];
    variants?:    MediaEmbed;
    id?:          string;
}

export enum SubredditType {
    Public = "public",
}

export interface GalleryData {
    items?: Item[];
}

export interface Item {
    media_id?: string;
    id?:       number;
}

export interface DataGildings {
    gid_1?: number;
    gid_2?: number;
}

export interface MediaMetadatum {
    status?: string;
    e?:      string;
    m?:      string;
    p?:      S[];
    s?:      S;
    id?:     string;
}

export interface S {
    y?: number;
    x?: number;
    u?: string;
}

export enum Subreddit {
    Aww = "aww",
}

export enum SubredditID {
    T52Qh1O = "t5_2qh1o",
}

export enum SubredditNamePrefixed {
    RAww = "r/aww",
}

export enum Kind {
    T3 = "t3",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toReddit(json: string): Reddit {
        return JSON.parse(json);
    }

    public static redditToJson(value:Reddit): string{
        return JSON.stringify(value);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "kind", js: "kind", typ: u(undefined, "") },
        { json: "data", js: "data", typ: u(undefined, r("WelcomeData")) },
    ], false),
    "WelcomeData": o([
        { json: "after", js: "after", typ: u(undefined, "") },
        { json: "dist", js: "dist", typ: u(undefined, 0) },
        { json: "modhash", js: "modhash", typ: u(undefined, "") },
        { json: "geo_filter", js: "geo_filter", typ: u(undefined, null) },
        { json: "children", js: "children", typ: u(undefined, a(r("Child"))) },
        { json: "before", js: "before", typ: u(undefined, null) },
    ], false),
    "Child": o([
        { json: "kind", js: "kind", typ: u(undefined, r("Kind")) },
        { json: "data", js: "data", typ: u(undefined, r("ChildData")) },
    ], false),
    "ChildData": o([
        { json: "approved_at_utc", js: "approved_at_utc", typ: u(undefined, null) },
        { json: "subreddit", js: "subreddit", typ: u(undefined, r("Subreddit")) },
        { json: "selftext", js: "selftext", typ: u(undefined, "") },
        { json: "author_fullname", js: "author_fullname", typ: u(undefined, "") },
        { json: "saved", js: "saved", typ: u(undefined, true) },
        { json: "mod_reason_title", js: "mod_reason_title", typ: u(undefined, null) },
        { json: "gilded", js: "gilded", typ: u(undefined, 0) },
        { json: "clicked", js: "clicked", typ: u(undefined, true) },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "link_flair_richtext", js: "link_flair_richtext", typ: u(undefined, a("any")) },
        { json: "subreddit_name_prefixed", js: "subreddit_name_prefixed", typ: u(undefined, r("SubredditNamePrefixed")) },
        { json: "hidden", js: "hidden", typ: u(undefined, true) },
        { json: "pwls", js: "pwls", typ: u(undefined, 0) },
        { json: "link_flair_css_class", js: "link_flair_css_class", typ: u(undefined, u(null, "")) },
        { json: "downs", js: "downs", typ: u(undefined, 0) },
        { json: "thumbnail_height", js: "thumbnail_height", typ: u(undefined, 0) },
        { json: "top_awarded_type", js: "top_awarded_type", typ: u(undefined, u(null, "")) },
        { json: "hide_score", js: "hide_score", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "quarantine", js: "quarantine", typ: u(undefined, true) },
        { json: "link_flair_text_color", js: "link_flair_text_color", typ: u(undefined, r("FlairTextColor")) },
        { json: "upvote_ratio", js: "upvote_ratio", typ: u(undefined, 3.14) },
        { json: "author_flair_background_color", js: "author_flair_background_color", typ: u(undefined, u(null, "")) },
        { json: "subreddit_type", js: "subreddit_type", typ: u(undefined, r("SubredditType")) },
        { json: "ups", js: "ups", typ: u(undefined, 0) },
        { json: "total_awards_received", js: "total_awards_received", typ: u(undefined, 0) },
        { json: "media_embed", js: "media_embed", typ: u(undefined, r("MediaEmbed")) },
        { json: "thumbnail_width", js: "thumbnail_width", typ: u(undefined, 0) },
        { json: "author_flair_template_id", js: "author_flair_template_id", typ: u(undefined, null) },
        { json: "is_original_content", js: "is_original_content", typ: u(undefined, true) },
        { json: "user_reports", js: "user_reports", typ: u(undefined, a("any")) },
        { json: "secure_media", js: "secure_media", typ: u(undefined, u(r("Media"), null)) },
        { json: "is_reddit_media_domain", js: "is_reddit_media_domain", typ: u(undefined, true) },
        { json: "is_meta", js: "is_meta", typ: u(undefined, true) },
        { json: "category", js: "category", typ: u(undefined, null) },
        { json: "secure_media_embed", js: "secure_media_embed", typ: u(undefined, r("MediaEmbed")) },
        { json: "link_flair_text", js: "link_flair_text", typ: u(undefined, null) },
        { json: "can_mod_post", js: "can_mod_post", typ: u(undefined, true) },
        { json: "score", js: "score", typ: u(undefined, 0) },
        { json: "approved_by", js: "approved_by", typ: u(undefined, null) },
        { json: "is_created_from_ads_ui", js: "is_created_from_ads_ui", typ: u(undefined, true) },
        { json: "author_premium", js: "author_premium", typ: u(undefined, true) },
        { json: "thumbnail", js: "thumbnail", typ: u(undefined, "") },
        { json: "edited", js: "edited", typ: u(undefined, true) },
        { json: "author_flair_css_class", js: "author_flair_css_class", typ: u(undefined, u(null, "")) },
        { json: "author_flair_richtext", js: "author_flair_richtext", typ: u(undefined, a(r("FlairRichtext"))) },
        { json: "gildings", js: "gildings", typ: u(undefined, r("DataGildings")) },
        { json: "post_hint", js: "post_hint", typ: u(undefined, r("PostHint")) },
        { json: "content_categories", js: "content_categories", typ: u(undefined, null) },
        { json: "is_self", js: "is_self", typ: u(undefined, true) },
        { json: "mod_note", js: "mod_note", typ: u(undefined, null) },
        { json: "created", js: "created", typ: u(undefined, 0) },
        { json: "link_flair_type", js: "link_flair_type", typ: u(undefined, r("AuthorFlairType")) },
        { json: "wls", js: "wls", typ: u(undefined, 0) },
        { json: "removed_by_category", js: "removed_by_category", typ: u(undefined, null) },
        { json: "banned_by", js: "banned_by", typ: u(undefined, null) },
        { json: "author_flair_type", js: "author_flair_type", typ: u(undefined, r("AuthorFlairType")) },
        { json: "domain", js: "domain", typ: u(undefined, r("Domain")) },
        { json: "allow_live_comments", js: "allow_live_comments", typ: u(undefined, true) },
        { json: "selftext_html", js: "selftext_html", typ: u(undefined, null) },
        { json: "likes", js: "likes", typ: u(undefined, null) },
        { json: "suggested_sort", js: "suggested_sort", typ: u(undefined, u(null, "")) },
        { json: "banned_at_utc", js: "banned_at_utc", typ: u(undefined, null) },
        { json: "url_overridden_by_dest", js: "url_overridden_by_dest", typ: u(undefined, "") },
        { json: "view_count", js: "view_count", typ: u(undefined, null) },
        { json: "archived", js: "archived", typ: u(undefined, true) },
        { json: "no_follow", js: "no_follow", typ: u(undefined, true) },
        { json: "is_crosspostable", js: "is_crosspostable", typ: u(undefined, true) },
        { json: "pinned", js: "pinned", typ: u(undefined, true) },
        { json: "over_18", js: "over_18", typ: u(undefined, true) },
        { json: "preview", js: "preview", typ: u(undefined, r("Preview")) },
        { json: "all_awardings", js: "all_awardings", typ: u(undefined, a(r("AllAwarding"))) },
        { json: "awarders", js: "awarders", typ: u(undefined, a("any")) },
        { json: "media_only", js: "media_only", typ: u(undefined, true) },
        { json: "can_gild", js: "can_gild", typ: u(undefined, true) },
        { json: "spoiler", js: "spoiler", typ: u(undefined, true) },
        { json: "locked", js: "locked", typ: u(undefined, true) },
        { json: "author_flair_text", js: "author_flair_text", typ: u(undefined, u(null, "")) },
        { json: "treatment_tags", js: "treatment_tags", typ: u(undefined, a("")) },
        { json: "visited", js: "visited", typ: u(undefined, true) },
        { json: "removed_by", js: "removed_by", typ: u(undefined, null) },
        { json: "num_reports", js: "num_reports", typ: u(undefined, null) },
        { json: "distinguished", js: "distinguished", typ: u(undefined, null) },
        { json: "subreddit_id", js: "subreddit_id", typ: u(undefined, r("SubredditID")) },
        { json: "author_is_blocked", js: "author_is_blocked", typ: u(undefined, true) },
        { json: "mod_reason_by", js: "mod_reason_by", typ: u(undefined, null) },
        { json: "removal_reason", js: "removal_reason", typ: u(undefined, null) },
        { json: "link_flair_background_color", js: "link_flair_background_color", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "is_robot_indexable", js: "is_robot_indexable", typ: u(undefined, true) },
        { json: "report_reasons", js: "report_reasons", typ: u(undefined, null) },
        { json: "author", js: "author", typ: u(undefined, "") },
        { json: "discussion_type", js: "discussion_type", typ: u(undefined, null) },
        { json: "num_comments", js: "num_comments", typ: u(undefined, 0) },
        { json: "send_replies", js: "send_replies", typ: u(undefined, true) },
        { json: "whitelist_status", js: "whitelist_status", typ: u(undefined, r("WhitelistStatus")) },
        { json: "contest_mode", js: "contest_mode", typ: u(undefined, true) },
        { json: "mod_reports", js: "mod_reports", typ: u(undefined, a("any")) },
        { json: "author_patreon_flair", js: "author_patreon_flair", typ: u(undefined, true) },
        { json: "author_flair_text_color", js: "author_flair_text_color", typ: u(undefined, u(r("FlairTextColor"), null)) },
        { json: "permalink", js: "permalink", typ: u(undefined, "") },
        { json: "parent_whitelist_status", js: "parent_whitelist_status", typ: u(undefined, r("WhitelistStatus")) },
        { json: "stickied", js: "stickied", typ: u(undefined, true) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "subreddit_subscribers", js: "subreddit_subscribers", typ: u(undefined, 0) },
        { json: "created_utc", js: "created_utc", typ: u(undefined, 0) },
        { json: "num_crossposts", js: "num_crossposts", typ: u(undefined, 0) },
        { json: "media", js: "media", typ: u(undefined, u(r("Media"), null)) },
        { json: "is_video", js: "is_video", typ: u(undefined, true) },
        { json: "crosspost_parent_list", js: "crosspost_parent_list", typ: u(undefined, a(r("CrosspostParentList"))) },
        { json: "crosspost_parent", js: "crosspost_parent", typ: u(undefined, "") },
        { json: "is_gallery", js: "is_gallery", typ: u(undefined, true) },
        { json: "media_metadata", js: "media_metadata", typ: u(undefined, m(r("MediaMetadatum"))) },
        { json: "gallery_data", js: "gallery_data", typ: u(undefined, r("GalleryData")) },
    ], false),
    "AllAwarding": o([
        { json: "giver_coin_reward", js: "giver_coin_reward", typ: u(undefined, u(0, null)) },
        { json: "subreddit_id", js: "subreddit_id", typ: u(undefined, null) },
        { json: "is_new", js: "is_new", typ: u(undefined, true) },
        { json: "days_of_drip_extension", js: "days_of_drip_extension", typ: u(undefined, 0) },
        { json: "coin_price", js: "coin_price", typ: u(undefined, 0) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "penny_donate", js: "penny_donate", typ: u(undefined, u(0, null)) },
        { json: "award_sub_type", js: "award_sub_type", typ: u(undefined, r("AwardSubType")) },
        { json: "coin_reward", js: "coin_reward", typ: u(undefined, 0) },
        { json: "icon_url", js: "icon_url", typ: u(undefined, "") },
        { json: "days_of_premium", js: "days_of_premium", typ: u(undefined, 0) },
        { json: "tiers_by_required_awardings", js: "tiers_by_required_awardings", typ: u(undefined, u(m(r("TiersByRequiredAwarding")), null)) },
        { json: "resized_icons", js: "resized_icons", typ: u(undefined, a(r("ResizedIcon"))) },
        { json: "icon_width", js: "icon_width", typ: u(undefined, 0) },
        { json: "static_icon_width", js: "static_icon_width", typ: u(undefined, 0) },
        { json: "start_date", js: "start_date", typ: u(undefined, null) },
        { json: "is_enabled", js: "is_enabled", typ: u(undefined, true) },
        { json: "awardings_required_to_grant_benefits", js: "awardings_required_to_grant_benefits", typ: u(undefined, u(0, null)) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "end_date", js: "end_date", typ: u(undefined, null) },
        { json: "subreddit_coin_reward", js: "subreddit_coin_reward", typ: u(undefined, 0) },
        { json: "count", js: "count", typ: u(undefined, 0) },
        { json: "static_icon_height", js: "static_icon_height", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "resized_static_icons", js: "resized_static_icons", typ: u(undefined, a(r("ResizedIcon"))) },
        { json: "icon_format", js: "icon_format", typ: u(undefined, u(r("Format"), null)) },
        { json: "icon_height", js: "icon_height", typ: u(undefined, 0) },
        { json: "penny_price", js: "penny_price", typ: u(undefined, u(0, null)) },
        { json: "award_type", js: "award_type", typ: u(undefined, r("AwardType")) },
        { json: "static_icon_url", js: "static_icon_url", typ: u(undefined, "") },
    ], false),
    "ResizedIcon": o([
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "width", js: "width", typ: u(undefined, 0) },
        { json: "height", js: "height", typ: u(undefined, 0) },
        { json: "format", js: "format", typ: u(undefined, u(r("Format"), null)) },
    ], false),
    "TiersByRequiredAwarding": o([
        { json: "resized_icons", js: "resized_icons", typ: u(undefined, a(r("ResizedIcon"))) },
        { json: "awardings_required", js: "awardings_required", typ: u(undefined, 0) },
        { json: "static_icon", js: "static_icon", typ: u(undefined, r("ResizedIcon")) },
        { json: "resized_static_icons", js: "resized_static_icons", typ: u(undefined, a(r("ResizedIcon"))) },
        { json: "icon", js: "icon", typ: u(undefined, r("ResizedIcon")) },
    ], false),
    "FlairRichtext": o([
        { json: "e", js: "e", typ: u(undefined, r("AuthorFlairType")) },
        { json: "t", js: "t", typ: u(undefined, "") },
    ], false),
    "CrosspostParentList": o([
        { json: "approved_at_utc", js: "approved_at_utc", typ: u(undefined, null) },
        { json: "subreddit", js: "subreddit", typ: u(undefined, "") },
        { json: "selftext", js: "selftext", typ: u(undefined, "") },
        { json: "author_fullname", js: "author_fullname", typ: u(undefined, "") },
        { json: "saved", js: "saved", typ: u(undefined, true) },
        { json: "mod_reason_title", js: "mod_reason_title", typ: u(undefined, null) },
        { json: "gilded", js: "gilded", typ: u(undefined, 0) },
        { json: "clicked", js: "clicked", typ: u(undefined, true) },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "link_flair_richtext", js: "link_flair_richtext", typ: u(undefined, a(r("FlairRichtext"))) },
        { json: "subreddit_name_prefixed", js: "subreddit_name_prefixed", typ: u(undefined, "") },
        { json: "hidden", js: "hidden", typ: u(undefined, true) },
        { json: "pwls", js: "pwls", typ: u(undefined, 0) },
        { json: "link_flair_css_class", js: "link_flair_css_class", typ: u(undefined, u(null, "")) },
        { json: "downs", js: "downs", typ: u(undefined, 0) },
        { json: "thumbnail_height", js: "thumbnail_height", typ: u(undefined, 0) },
        { json: "top_awarded_type", js: "top_awarded_type", typ: u(undefined, null) },
        { json: "hide_score", js: "hide_score", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "quarantine", js: "quarantine", typ: u(undefined, true) },
        { json: "link_flair_text_color", js: "link_flair_text_color", typ: u(undefined, r("FlairTextColor")) },
        { json: "upvote_ratio", js: "upvote_ratio", typ: u(undefined, 3.14) },
        { json: "author_flair_background_color", js: "author_flair_background_color", typ: u(undefined, u(null, "")) },
        { json: "subreddit_type", js: "subreddit_type", typ: u(undefined, r("SubredditType")) },
        { json: "ups", js: "ups", typ: u(undefined, 0) },
        { json: "total_awards_received", js: "total_awards_received", typ: u(undefined, 0) },
        { json: "media_embed", js: "media_embed", typ: u(undefined, r("MediaEmbed")) },
        { json: "thumbnail_width", js: "thumbnail_width", typ: u(undefined, 0) },
        { json: "author_flair_template_id", js: "author_flair_template_id", typ: u(undefined, u(null, "")) },
        { json: "is_original_content", js: "is_original_content", typ: u(undefined, true) },
        { json: "user_reports", js: "user_reports", typ: u(undefined, a("any")) },
        { json: "secure_media", js: "secure_media", typ: u(undefined, r("Media")) },
        { json: "is_reddit_media_domain", js: "is_reddit_media_domain", typ: u(undefined, true) },
        { json: "is_meta", js: "is_meta", typ: u(undefined, true) },
        { json: "category", js: "category", typ: u(undefined, null) },
        { json: "secure_media_embed", js: "secure_media_embed", typ: u(undefined, r("MediaEmbed")) },
        { json: "link_flair_text", js: "link_flair_text", typ: u(undefined, u(null, "")) },
        { json: "can_mod_post", js: "can_mod_post", typ: u(undefined, true) },
        { json: "score", js: "score", typ: u(undefined, 0) },
        { json: "approved_by", js: "approved_by", typ: u(undefined, null) },
        { json: "is_created_from_ads_ui", js: "is_created_from_ads_ui", typ: u(undefined, true) },
        { json: "author_premium", js: "author_premium", typ: u(undefined, true) },
        { json: "thumbnail", js: "thumbnail", typ: u(undefined, "") },
        { json: "edited", js: "edited", typ: u(undefined, true) },
        { json: "author_flair_css_class", js: "author_flair_css_class", typ: u(undefined, null) },
        { json: "author_flair_richtext", js: "author_flair_richtext", typ: u(undefined, a(r("FlairRichtext"))) },
        { json: "gildings", js: "gildings", typ: u(undefined, r("CrosspostParentListGildings")) },
        { json: "content_categories", js: "content_categories", typ: u(undefined, null) },
        { json: "is_self", js: "is_self", typ: u(undefined, true) },
        { json: "mod_note", js: "mod_note", typ: u(undefined, null) },
        { json: "created", js: "created", typ: u(undefined, 0) },
        { json: "link_flair_type", js: "link_flair_type", typ: u(undefined, r("AuthorFlairType")) },
        { json: "wls", js: "wls", typ: u(undefined, 0) },
        { json: "removed_by_category", js: "removed_by_category", typ: u(undefined, u(null, "")) },
        { json: "banned_by", js: "banned_by", typ: u(undefined, null) },
        { json: "author_flair_type", js: "author_flair_type", typ: u(undefined, r("AuthorFlairType")) },
        { json: "domain", js: "domain", typ: u(undefined, r("Domain")) },
        { json: "allow_live_comments", js: "allow_live_comments", typ: u(undefined, true) },
        { json: "selftext_html", js: "selftext_html", typ: u(undefined, null) },
        { json: "likes", js: "likes", typ: u(undefined, null) },
        { json: "suggested_sort", js: "suggested_sort", typ: u(undefined, null) },
        { json: "banned_at_utc", js: "banned_at_utc", typ: u(undefined, null) },
        { json: "url_overridden_by_dest", js: "url_overridden_by_dest", typ: u(undefined, "") },
        { json: "view_count", js: "view_count", typ: u(undefined, null) },
        { json: "archived", js: "archived", typ: u(undefined, true) },
        { json: "no_follow", js: "no_follow", typ: u(undefined, true) },
        { json: "is_crosspostable", js: "is_crosspostable", typ: u(undefined, true) },
        { json: "pinned", js: "pinned", typ: u(undefined, true) },
        { json: "over_18", js: "over_18", typ: u(undefined, true) },
        { json: "all_awardings", js: "all_awardings", typ: u(undefined, a(r("AllAwarding"))) },
        { json: "awarders", js: "awarders", typ: u(undefined, a("any")) },
        { json: "media_only", js: "media_only", typ: u(undefined, true) },
        { json: "can_gild", js: "can_gild", typ: u(undefined, true) },
        { json: "spoiler", js: "spoiler", typ: u(undefined, true) },
        { json: "locked", js: "locked", typ: u(undefined, true) },
        { json: "author_flair_text", js: "author_flair_text", typ: u(undefined, u(null, "")) },
        { json: "treatment_tags", js: "treatment_tags", typ: u(undefined, a("any")) },
        { json: "visited", js: "visited", typ: u(undefined, true) },
        { json: "removed_by", js: "removed_by", typ: u(undefined, null) },
        { json: "num_reports", js: "num_reports", typ: u(undefined, null) },
        { json: "distinguished", js: "distinguished", typ: u(undefined, null) },
        { json: "subreddit_id", js: "subreddit_id", typ: u(undefined, "") },
        { json: "author_is_blocked", js: "author_is_blocked", typ: u(undefined, true) },
        { json: "mod_reason_by", js: "mod_reason_by", typ: u(undefined, null) },
        { json: "removal_reason", js: "removal_reason", typ: u(undefined, null) },
        { json: "link_flair_background_color", js: "link_flair_background_color", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "is_robot_indexable", js: "is_robot_indexable", typ: u(undefined, true) },
        { json: "report_reasons", js: "report_reasons", typ: u(undefined, null) },
        { json: "author", js: "author", typ: u(undefined, "") },
        { json: "discussion_type", js: "discussion_type", typ: u(undefined, null) },
        { json: "num_comments", js: "num_comments", typ: u(undefined, 0) },
        { json: "send_replies", js: "send_replies", typ: u(undefined, true) },
        { json: "whitelist_status", js: "whitelist_status", typ: u(undefined, r("WhitelistStatus")) },
        { json: "contest_mode", js: "contest_mode", typ: u(undefined, true) },
        { json: "mod_reports", js: "mod_reports", typ: u(undefined, a("any")) },
        { json: "author_patreon_flair", js: "author_patreon_flair", typ: u(undefined, true) },
        { json: "author_flair_text_color", js: "author_flair_text_color", typ: u(undefined, u(r("FlairTextColor"), null)) },
        { json: "permalink", js: "permalink", typ: u(undefined, "") },
        { json: "parent_whitelist_status", js: "parent_whitelist_status", typ: u(undefined, r("WhitelistStatus")) },
        { json: "stickied", js: "stickied", typ: u(undefined, true) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "subreddit_subscribers", js: "subreddit_subscribers", typ: u(undefined, 0) },
        { json: "created_utc", js: "created_utc", typ: u(undefined, 0) },
        { json: "num_crossposts", js: "num_crossposts", typ: u(undefined, 0) },
        { json: "media", js: "media", typ: u(undefined, r("Media")) },
        { json: "is_video", js: "is_video", typ: u(undefined, true) },
        { json: "post_hint", js: "post_hint", typ: u(undefined, r("PostHint")) },
        { json: "preview", js: "preview", typ: u(undefined, r("Preview")) },
        { json: "link_flair_template_id", js: "link_flair_template_id", typ: u(undefined, "") },
    ], false),
    "CrosspostParentListGildings": o([
        { json: "gid_1", js: "gid_1", typ: u(undefined, 0) },
    ], false),
    "Media": o([
        { json: "reddit_video", js: "reddit_video", typ: u(undefined, r("RedditVideo")) },
    ], false),
    "RedditVideo": o([
        { json: "bitrate_kbps", js: "bitrate_kbps", typ: u(undefined, 0) },
        { json: "fallback_url", js: "fallback_url", typ: u(undefined, "") },
        { json: "height", js: "height", typ: u(undefined, 0) },
        { json: "width", js: "width", typ: u(undefined, 0) },
        { json: "scrubber_media_url", js: "scrubber_media_url", typ: u(undefined, "") },
        { json: "dash_url", js: "dash_url", typ: u(undefined, "") },
        { json: "duration", js: "duration", typ: u(undefined, 0) },
        { json: "hls_url", js: "hls_url", typ: u(undefined, "") },
        { json: "is_gif", js: "is_gif", typ: u(undefined, true) },
        { json: "transcoding_status", js: "transcoding_status", typ: u(undefined, r("TranscodingStatus")) },
    ], false),
    "MediaEmbed": o([
    ], false),
    "Preview": o([
        { json: "images", js: "images", typ: u(undefined, a(r("Image"))) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
    ], false),
    "Image": o([
        { json: "source", js: "source", typ: u(undefined, r("ResizedIcon")) },
        { json: "resolutions", js: "resolutions", typ: u(undefined, a(r("ResizedIcon"))) },
        { json: "variants", js: "variants", typ: u(undefined, r("MediaEmbed")) },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "GalleryData": o([
        { json: "items", js: "items", typ: u(undefined, a(r("Item"))) },
    ], false),
    "Item": o([
        { json: "media_id", js: "media_id", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, 0) },
    ], false),
    "DataGildings": o([
        { json: "gid_1", js: "gid_1", typ: u(undefined, 0) },
        { json: "gid_2", js: "gid_2", typ: u(undefined, 0) },
    ], false),
    "MediaMetadatum": o([
        { json: "status", js: "status", typ: u(undefined, "") },
        { json: "e", js: "e", typ: u(undefined, "") },
        { json: "m", js: "m", typ: u(undefined, "") },
        { json: "p", js: "p", typ: u(undefined, a(r("S"))) },
        { json: "s", js: "s", typ: u(undefined, r("S")) },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "S": o([
        { json: "y", js: "y", typ: u(undefined, 0) },
        { json: "x", js: "x", typ: u(undefined, 0) },
        { json: "u", js: "u", typ: u(undefined, "") },
    ], false),
    "AwardSubType": [
        "APPRECIATION",
        "GLOBAL",
        "GROUP",
        "PREMIUM",
    ],
    "AwardType": [
        "global",
    ],
    "Format": [
        "APNG",
        "PNG",
    ],
    "AuthorFlairType": [
        "richtext",
        "text",
    ],
    "FlairTextColor": [
        "dark",
    ],
    "Domain": [
        "discord.gg",
        "i.redd.it",
        "reddit.com",
        "v.redd.it",
    ],
    "TranscodingStatus": [
        "completed",
    ],
    "WhitelistStatus": [
        "all_ads",
    ],
    "PostHint": [
        "hosted:video",
        "image",
        "link",
    ],
    "SubredditType": [
        "public",
    ],
    "Subreddit": [
        "aww",
    ],
    "SubredditID": [
        "t5_2qh1o",
    ],
    "SubredditNamePrefixed": [
        "r/aww",
    ],
    "Kind": [
        "t3",
    ],
};
