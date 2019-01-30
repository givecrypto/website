import base64 from "base-64";

export const toGlobalId = ({ type, id }) => base64.encode(`${type}:${id}`);

export const fromGlobalId = globalID => {
  // pull out the parts from the base64 decoded id
  const [type, id] = base64.decode(globalID).split(":");

  // return the payload to the user
  return { type, id };
};
