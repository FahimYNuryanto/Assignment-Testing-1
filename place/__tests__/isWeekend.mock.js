const httpMocks = require('node-mocks-http');
const dayHandler = require('../math');

test('2022-06-10', async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-06-10'));
    const request = httpMocks.createRequest({
        method: 'GET',
        url: '/is-weekend',
    });
    const response = httpMocks.createResponse();
    await dayHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    })
})


test('2022-06-05', async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-06-05'));
    const request = httpMocks.createRequest({
        method: 'GET',
        url: '/is-weekend',
    });
    const response = httpMocks.createResponse();
    await dayHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    })
})
