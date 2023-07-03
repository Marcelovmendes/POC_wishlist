import { ApplicationError } from "../protocols/protocols";

export function notWatchedError(): ApplicationError {
  return {
    name: 'NotWatchedError',
    message: 'Cannot update a movie that has not been watched!',
  };
}
