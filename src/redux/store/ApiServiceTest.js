// /* eslint react/jsx-filename-extension: 0 */
// /* eslint prefer-arrow-callback: 0 */
// /* eslint func-names: 0 */
//
// import { setupChaiWithEnzyme } from 'testHelper';
// import fetchMock from 'fetch-mock';
// import apiRequest, { createRequest } from './ApiService';
//
// const expect = setupChaiWithEnzyme();
//
// describe('Api Service', function () {
//   const method = 'testmethod';
//   const url = 'testurl';
//   const body = {};
//
//   it('should CreateRequests of the right structure', function (done) {
//     // Set up
//     const result = createRequest(method, body);
//
//     // Assert
//     expect(result.body).to.be.an('object');
//     expect(result.headers).to.be.an('object');
//     expect(result.method).to.be.an('string');
//
//     // Tear down
//     done();
//   });
//
//   it('should CreateRequests that send the right headers', function (done) {
//     // Set up
//     const result = createRequest(method, body);
//
//     // Assert
//     expect(result.headers['Content-Type']).to.equal('application/json');
//     expect(result.headers.Accept).to.equal('application/json');
//     expect(result.headers['X-Requested-By']).to.equal('dinero');
//
//     // Tear down
//     done();
//   });
//
//   it('should give valid response for a successful request', function (done) {
//     const successfulResponse =
//       {
//         code: 200,
//         message: 'Success',
//       };
//
//     fetchMock.get('*', successfulResponse, 200);
//
//     apiRequest(url, method, body)
//       .then(response => response.json())
//       .then((result) => {
//         expect(result.code).to.equal(successfulResponse.code);
//         expect(result.message).to.equal(successfulResponse.message);
//         fetchMock.restore();
//         done();
//       });
//   });
//
//   it('should give valid response for an error-filled request', function (done) {
//     const unsuccessfulResponse =
//       {
//         code: 500,
//         message: 'Bad!',
//       };
//
//     fetchMock.get('*', unsuccessfulResponse, 500);
//
//     apiRequest(url, method, body)
//       .then(response => response.json())
//       .then((result) => {
//         expect(result.code).to.equal(unsuccessfulResponse.code);
//         expect(result.message).to.equal(unsuccessfulResponse.message);
//         fetchMock.restore();
//         done();
//       });
//   });
// });
