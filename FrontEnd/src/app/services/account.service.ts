import { Injectable } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';
import { config } from '../../config/local';


@Injectable()
export class AccountService {
  publicUrl = `${config.apiUrl}/api/public/account`;

  url = `${config.apiUrl}/api/account`;

  constructor( private apollo: Apollo) {
  }

  createAccount(firstName: string, lastName: string, email: string, password: string) {
    const GET_PRODUCT_BY_ID = gql`

    mutation addUsersDetails($firstName:String!,$lastName:String!,$email:String!,$password:String!)
    {
        addUsers(firstName:$firstName,lastName:$lastName,email:$email,password:$password){
          email
        }
    }

  `;
    return this.apollo
      .mutate({
        mutation: GET_PRODUCT_BY_ID,
        variables: {
          firstName,
          lastName,
          email,
          password,
        },

      });
  }

}
