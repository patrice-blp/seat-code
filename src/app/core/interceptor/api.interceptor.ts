import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

import {VEHICLES_API} from "../const/const";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let requestUrl = request.url;

    if (request.url.includes("@clientApi")) {
      requestUrl = requestUrl.replace("@clientApi", VEHICLES_API);
    }

    const apiReq = request.clone({ url: requestUrl });
    return next.handle(apiReq);
  }
}
