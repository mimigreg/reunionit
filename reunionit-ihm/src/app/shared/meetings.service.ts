import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Meeting } from './meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  backendServiceUrl: string;

  // TODO to fix, asynchronous constructors as this can generate errors (if functions called before finished initialized...)
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.getConfig();
  }

  private async getConfig() {
    const configSet = await this.configService.getConfig().toPromise();
    this.backendServiceUrl = configSet.meetingsServiceUrl;
  }

  async getMeetings(from: Date, to: Date, who: String): Promise<Array<Meeting>> {
    if (!this.backendServiceUrl) { await this.getConfig(); }
    return this.http.get<Array<Meeting>>(this.backendServiceUrl).toPromise();
  }

  async getMeeting(id: string): Promise<Meeting> {
    if (!this.backendServiceUrl) { await this.getConfig(); }
    const params = new HttpParams().set('id', id);
    return this.http.get<Meeting>(this.backendServiceUrl + '/' + id).toPromise();
  }
}
