/**
 * Copyright 2012-2017, Plotly, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


'use strict';

var fastdom = require('fastdom');

/** Facade for queueing DOM write operations
 * with Fastdom (https://github.com/wilsonpage/fastdom)
 * if available.
 * This could easily be extended to support alternate
 * implementations in the future.
 */
exports.write = function(callback) {
    return fastdom.mutate(callback);
};

/** Facade for queueing DOM read operations
 * with Fastdom (https://github.com/wilsonpage/fastdom)
 * if available.
 * This could easily be extended to support alternate
 * implementations in the future.
 */
exports.read = function(callback) {
    return fastdom.measure(callback);
};