/**
 * Entry Point
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2016-04-04
 * @license     MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import './core/request/interceptor.js';
import './core/request/sanitizer.js';
import './utilities/messenger.js';

import '../rulesets/dynamic/whitelist.js';
import '../rulesets/dynamic/xhr.js';
