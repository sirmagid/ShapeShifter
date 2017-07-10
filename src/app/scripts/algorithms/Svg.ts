import { svgPathProperties } from 'svg-path-properties';
import * as Path from 'svgpath';

import { INVALID_INPUT } from './Errors';
import { normalizeRing } from './Normalize';

function parse(str) {
  return new Path(str).abs();
}

function split(parsed) {
  return parsed
    .toString()
    .split('M')
    .map((d, i) => {
      d = d.trim();
      return i && d ? 'M' + d : d;
    })
    .filter(d => d);
}

export function toPathString(ring) {
  return 'M' + ring.join('L') + 'Z';
}

export function splitPathString(str) {
  return split(parse(str));
}

export function pathStringToRing(str, maxSegmentLength) {
  let parsed = parse(str);

  return exactRing(parsed) || approximateRing(parsed, maxSegmentLength);
}

function exactRing(parsed) {
  let segments = parsed.segments || [],
    ring = [];

  if (!segments.length || segments[0][0] !== 'M') {
    return false;
  }

  for (let i = 0; i < segments.length; i++) {
    let [command, x, y] = segments[i];
    if ((command === 'M' && i) || command === 'Z') {
      break;
    } else if (command === 'M' || command === 'L') {
      ring.push([x, y]);
    } else if (command === 'H') {
      ring.push([x, ring[ring.length - 1][1]]);
    } else if (command === 'V') {
      ring.push([ring[ring.length - 1][0], x]);
    } else {
      return false;
    }
  }

  return ring.length ? { ring } : false;
}

function approximateRing(parsed, maxSegmentLength) {
  let ringPath = split(parsed)[0],
    ring = [],
    props,
    len,
    m,
    numPoints = 3;

  if (!ringPath) {
    throw new TypeError(INVALID_INPUT);
  }

  m = measure(ringPath);
  len = m.getTotalLength();

  if (maxSegmentLength && Number.isFinite(maxSegmentLength) && maxSegmentLength > 0) {
    numPoints = Math.max(numPoints, Math.ceil(len / maxSegmentLength));
  }

  for (let i = 0; i < numPoints; i++) {
    let p = m.getPointAtLength(len * i / numPoints);
    ring.push([p.x, p.y]);
  }

  return {
    ring,
    skipBisect: true,
  };
}

function measure(d) {
  let svg = window.document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
    path = window.document.createElementNS('http://www.w3.org/2000/svg', 'path');

  path.setAttributeNS(null, 'd', d);

  return path;
}