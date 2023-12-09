import { APIGatewayEvent, Handler } from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayEvent) => {

    const { queryStringParameters } = event;

    return queryStringParameters && queryStringParameters['valid'];
}