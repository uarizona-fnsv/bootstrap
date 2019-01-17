/**
 * docsRedirect.js
 * ---------------
 * This lambda function is used by a cloudfront CDN to route users properly around a docs site hosted in s3.
 * In particular, this is useful for projects which deploy a `latest`, `next` and `x.x.x` versioned sites
 * to s3 (see the .gitlab-ci.yml config for how this project handles it). The primary function of this
 * lambda function is to send users requesting the root to `/latest/`, but otherwise let them proceed.
 *
 * So:
 *     some-project-url.whatever -> some-project-url.whatever/latest/
 *     some-project-url.whatever/next/ -> some-project-url.whatever/next/
 * and so on. Other exceptions could be added as well, such as redirecting a route to
 * another website if needed.
 */

exports.handler = async (event, context, callback) => {
  const { request } = event.Records[0].cf;

  if (request.uri === '/') {
    request.uri = '/latest/index.html';
  } else if (request.uri.match(/\/.+\//g)) {
    request.uri = request.uri + 'index.html';
  } else if (request.uri.match(/\/.+/g)) {
    request.uri = request.uri + '/index.html';
  }

  callback(null, request);
};
