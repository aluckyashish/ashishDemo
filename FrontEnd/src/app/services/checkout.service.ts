import { Injectable } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';

@Injectable()
export class CheckoutService {
  constructor(private apollo: Apollo) {
  }

  createOrder(
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    city: string,
    state: string,
    country: string,
    mobileNumber: number,
    product: string) {
    const POST_ORDER = gql`

    mutation addOrder($firstName:String!,$lastName:String!,$email:String!,$address:String!,$city:String!,$state:String!,$country:String!,$mobileNumber:Float!,$product:String!)
    {
        addOrder(firstName:$firstName,lastName:$lastName,email:$email,address:$address,city:$city,state:$state,country:$country,mobileNumber:$mobileNumber,product:$product){
          firstName
        }
    }

  `;
    return this.apollo
      .mutate({
        mutation: POST_ORDER,
        variables: {
          firstName,
          lastName,
          email,
          address,
          city,
          state,
          country,
          mobileNumber,
          product,
        },

      });
  }
}
