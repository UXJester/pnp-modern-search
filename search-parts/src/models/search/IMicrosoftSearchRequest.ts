import { EntityType } from "../../dataSources/MicrosoftSearchDataSource";

export interface IMicrosoftSearchQuery {
    requests: IMicrosoftSearchRequest[];
}

/**
 * https://docs.microsoft.com/en-us/graph/api/resources/searchrequest?view=graph-rest-beta
 */
export interface IMicrosoftSearchRequest {
    entityTypes: EntityType[];
    query: {
        queryString: string;
        queryTemplate?: string;
    };
    fields?: string[];
    aggregations?: ISearchRequestAggregation[];
    aggregationFilters?: string[];
    from?: number;
    size?: number;
    enableTopResults?: boolean;
    sortProperties?: ISearchSortProperty[];
    contentSources?: string[];
    queryAlterationOptions?: IQueryAlterationOptions;
    resultTemplateOptions?:  {
        enableResultTemplate: boolean;
    };
    trimDuplicates?: boolean;
    collapseProperties?: ICollapseProperty[];
    sharePointOneDriveOptions:{
        includeHiddenContent: boolean;
    };
}

export interface ISearchSortProperty {
    name: string;
    isDescending: boolean;
}

export interface ISearchRequestAggregation {
    field: string;
    size?: number;
    bucketDefinition: IBucketDefinition;
}

export interface IBucketDefinition {
    sortBy: SearchAggregationSortBy;
    isDescending: boolean;
    minimumCount: number;
    ranges?: IBucketRangeDefinition[];
}

export enum SearchAggregationSortBy {
    Count = 'count',
    KeyAsNumber = 'keyAsNumber',
    KeyAsString = 'keyAsString'
}

export interface IBucketRangeDefinition {
    from?: number | string;
    to?: number | string;
}

export interface IQueryAlterationOptions {
    enableSuggestion: boolean;
    enableModification: boolean;
}

export interface ICollapseProperty {
    fields: string[];
    limit: number;
}