/* eslint-disable import/no-anonymous-default-export */
const isProd = true;

export default {
  host: isProd
    ? process.env.NEXT_PUBLIC_BASE_URL_PROD
    : process.env.NEXT_PUBLIC_BASE_URL,

  auth: `${
    isProd
      ? process.env.NEXT_PUBLIC_BASE_URL_PROD
      : process.env.NEXT_PUBLIC_BASE_URL
  }/auth-service`,

  flight: isProd
    ? process.env.NEXT_PUBLIC_FLIGHT_SEARCH_BASE_URL_PROD
    : process.env.NEXT_PUBLIC_FLIGHT_SEARCH_BASE_URL,

  host_aws: isProd ? process.env.AWS_BASE_URL_PROD : process.env.AWS_BASE_URL,

  aws_cdn_url: process.env.AWS_CDN_URL,

  google_client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
};
