import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class ProductService {
  browsePageSize = 20;

  searchPageSize = 10;

  constructor(private httpClient: HttpClient, private apollo: Apollo) {
  }

  getProducts(sortType: string, category: string) {
    const GET_PRODUCT = gql`
  query GetProductByCategory($name:String!,$sort:String!) {
    getProductByCategory(name: $name,sort:$sort) {
      id
      title
      images
      price{
        amount
      }
    }
  }
`;
    return this.apollo
      .query({
        query: GET_PRODUCT,
        variables: {
          name: category,
          sort: sortType,
        },

      });
  }

  getFullProduct(productUrl: string) {
    const GET_PRODUCT_BY_ID = gql`
    query GetDullProduct($id:String!) {
      getProductById(id:$id)
  {
    id
    title
    category
    descriptionMarkdown
    price{
      amount
    }
    images
  }
    }
  `;
    return this.apollo
      .query({
        query: GET_PRODUCT_BY_ID,
        variables: {
          id: productUrl,
        },

      });
  }

  getFeaturedProduct() {
    return this.apollo
      .query<any>({
        query: gql`
        {
          getFeaturedProduct{
            id
            images
            title
            category
            isFeatured
            price
            {
              amount
            }
          }
        }
      `,
      });
  }

  getNewProduct() {
    return this.apollo
      .query<any>({
        query: gql`
        {
          getLatestProduct{
            id
            images
            title
            category
            isFeatured
            price
            {
              amount
            }
          }
        }
      `,
      });
  }

  getImageSlider() {
    {
      return this.apollo
        .query<any>({
          query: gql`
        {
          getBanners{
            title
            text
            image
          }
        }`,
        });
    }
  }

  getInterested() {
    //  return this.httpClient.get<Array<Product>>(this.publicUrl + '/interested');
  }

  getCategory() {
    {
      return this.apollo
        .query<any>({
          query: gql`
        {
          getCategory {
            name
          }
        }`,
        });
    }
  }
}
