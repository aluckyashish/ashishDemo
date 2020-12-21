import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class OrdersService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {
  }

  getOrders(userEmail: string) {
    const GET_ORDER_BY_ID = gql`
    query GetOrders($id:String!) {
        getOrderByEmail(id:$id)
  {
      product
  }
    }
  `;
    return this.apollo
      .query({
        query: GET_ORDER_BY_ID,
        variables: {
          id: userEmail,
        },

      });
  }
}
