"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_PATH = 'https://app.fastlinkperu.com:8443';
/*export const SERVER_PATH = 'https://127.0.0.1:8443';*/
/*
import {Observable} from "rxjs/Observable";

export function extractData(res: Response) {
    let body = res.json();
    return body || {};
}

export function handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}*/
