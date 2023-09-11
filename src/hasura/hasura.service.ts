/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class HasuraService {
  constructor(private readonly httpService: HttpService) {}

  async getAuthors(): Promise<AxiosResponse<any>> {
    try {
      const apiUrl = process.env.HASURA_GRAPHQL_API_ENDPOINT;
      console.log(`Connecting to Hasura API at: ${apiUrl}`);
      
      const response = await this.httpService.post(
        apiUrl,
        {
          query: `
            query {
              authors {
                id
                name
              }
            }
          `,
        },
      ).toPromise();

      if (response && response.data && response.data.data) {
        return response.data.data.authors;
      } else {
        throw new Error('Invalid or empty response from Hasura');
      }
    } catch (error) {
      throw new Error(`Error fetching data from Hasura: ${error.message}`);
    }
  }  
}
