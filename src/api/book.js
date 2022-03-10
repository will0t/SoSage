import Axios from 'axios';

/**
 * Get books
 * @param {object} [data]
 * @param {object} [params]
 * @returns {Promise<{data: {}, status: string}>}
 */
export async function findAll(data, params) {
  console.log('sending request to get books...');
  //   const response = await Axios({
  //     url: `book/all-books`,
  //     method: 'get',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     data,
  //     params,
  //   });
  //   return response;
}
