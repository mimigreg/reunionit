import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  backendServiceUrl: string;

  // TODO to fix, asynchronous constructors as this can generate errors (if functions called before finished initialized...)
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.getConfig();
  }

  private async getConfig() {
    const configSet = await this.configService.getConfig().toPromise();
    this.backendServiceUrl = configSet.usersServiceUrl;
  }
}
