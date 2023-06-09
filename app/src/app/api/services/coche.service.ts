/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Coche } from '../models/coche';

@Injectable({
  providedIn: 'root',
})
export class CocheService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCocheGet
   */
  static readonly ApiCocheGetPath = '/api/Coche';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCocheGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCocheGet$Plain$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Coche>> {

    const rb = new RequestBuilder(this.rootUrl, CocheService.ApiCocheGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Coche>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCocheGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCocheGet$Plain(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<Coche> {

    return this.apiCocheGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Coche>) => r.body as Coche)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCocheGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCocheGet$Json$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Coche>> {

    const rb = new RequestBuilder(this.rootUrl, CocheService.ApiCocheGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Coche>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCocheGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCocheGet$Json(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<Coche> {

    return this.apiCocheGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Coche>) => r.body as Coche)
    );
  }

}
