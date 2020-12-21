import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Cookies from 'js-cookie';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { config } from '../../config/local';

@Injectable()
export class TokenService {
  url = `${config.authUrl}/oauth/token`;

  constructor(private httpClient: HttpClient, private apollo: Apollo) {
  }

  obtainAccessToken(email: string, password: string) {
    let body: HttpParams = new HttpParams();
    body = body.append('username', email);
    body = body.append('password', password);
    body = body.append('scope', 'read write');
    body = body.append('grant_type', 'password');
    body = body.append('client_id', config.clientId);
    const GET_USER = gql`
    query GetUserSignIn($email:String!,$password:String!) {
      getUserById(email: $email,password :$password) {
        token
        user{
          firstName
          lastName
          email
        }
      }
    }
  `;
    return this.apollo
      .query({
        query: GET_USER,
        variables: {
          email,
          password,
        },

      });

    // return this.httpClient.post(this.url, body, {
    //   headers: {
    //     'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    //     Authorization: 'Basic '
    //       + btoa(`${config.clientId}:${config.clientSecret}`)
    //   }
    // });
  }

  obtainAccessTokenWithRefreshToken(refreshToken: string) {
    let body: HttpParams = new HttpParams();
    body = body.append('refresh_token', refreshToken);
    body = body.append('grant_type', 'refresh_token');
    return this.httpClient.post(this.url, body, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: `Basic ${
          btoa(`${config.clientId}:${config.clientSecret}`)}`,
      },
    });
  }

  saveToken(resData): void {
    const token = { access_token: resData.data.getUserById.token, users: resData.data.getUserById.users };
    Cookies.set('usr', JSON.stringify(token), { expires: 365 });
  }

  removeToken() {
    Cookies.remove('usr');
  }

  getToken() {
    const token = Cookies.get('usr');
    if (!token) {
      return '';
    }
    return JSON.parse(token).access_token;
  }

  getRefreshToken() {
    const token = Cookies.get('usr');
    if (!token) {
      return '';
    }
    return JSON.parse(token).refresh_token;
  }

  checkIfTokenExists() {
    const token = Cookies.get('usr');
    if (!token) {
      return false;
    }
    return JSON.parse(token);
  }
}
