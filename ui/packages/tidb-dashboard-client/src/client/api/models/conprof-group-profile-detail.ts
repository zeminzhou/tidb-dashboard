/* tslint:disable */
/* eslint-disable */
/**
 * Dashboard API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConprofProfileDetail } from './conprof-profile-detail';

/**
 * 
 * @export
 * @interface ConprofGroupProfileDetail
 */
export interface ConprofGroupProfileDetail {
    /**
     * 
     * @type {number}
     * @memberof ConprofGroupProfileDetail
     */
    'profile_duration_secs'?: number;
    /**
     * 
     * @type {string}
     * @memberof ConprofGroupProfileDetail
     */
    'state'?: string;
    /**
     * 
     * @type {Array<ConprofProfileDetail>}
     * @memberof ConprofGroupProfileDetail
     */
    'target_profiles'?: Array<ConprofProfileDetail>;
    /**
     * 
     * @type {number}
     * @memberof ConprofGroupProfileDetail
     */
    'ts'?: number;
}
