/**
 * Map the Debris
 * According to Kepler's Third Law, the orbital period T
 * of two point masses orbiting each other in a circular
 * or elliptic orbit is:
 *
 * T = 2π√a3/μ
 *
 * a is the orbit's semi-major axis
 * μ=GM is the standard gravitational parameter
 * G is the gravitational constant,
 * M is the mass of the more massive body.
 *
 * Return a new array that transforms the elements'
 * average altitude into their orbital
 * periods (in seconds).
 *
 * The array will contain objects in the
 * format {name: 'name', avgAlt: avgAlt}.
 *
 * The values should be rounded to the nearest
 * whole number. The body being orbited is Earth.
 *
 * The radius of the earth is 6367.4447 kilometers,
 * and the GM value of earth is 398600.4418 km3s-2.
 */

export const INVALID_ARG = 'The function receives as a parameter an array with objects "{name: \'name\', avgAlt: avgAlt}"'

export function orbitalPeriod(arr) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG)
  if (arr.constructor !== Array) throw new Error(INVALID_ARG)

  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
    );
    return { name, orbitalPeriod };
  });
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
])