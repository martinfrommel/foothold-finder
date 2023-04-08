import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js/instance/some";
import { parseJWT } from '@redwoodjs/api';
import { AuthenticationError, ForbiddenError, context } from '@redwoodjs/graphql-server';

/**
 * Represents the user attributes returned by the decoding the
 * Authentication provider's JWT together with an optional list of roles.
 */

/**
 * getCurrentUser returns the user information together with
 * an optional collection of roles used by requireAuth() to check
 * if the user is authenticated or has role-based access
 *
 * @param decoded - The decoded access token containing user info and JWT claims like `sub`. Note could be null.
 * @param { token, SupportedAuthTypes type } - The access token itself as well as the auth provider type
 * @param { APIGatewayEvent event, Context context } - An object which contains information from the invoker
 * such as headers and cookies, and the context information about the invocation such as IP Address
 *
 * !! BEWARE !! Anything returned from this function will be available to the
 * client--it becomes the content of `currentUser` on the web side (as well as
 * `context.currentUser` on the api side). You should carefully add additional
 * fields to the return object only once you've decided they are safe to be seen
 * if someone were to open the Web Inspector in their browser.
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 *
 * @returns RedwoodUser
 */
export const getCurrentUser = async (decoded, /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
{
  token,
  type
}, /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
{
  event,
  context
}) => {
  if (!decoded) {
    return null;
  }
  const {
    roles
  } = parseJWT({
    decoded
  });
  if (roles) {
    return {
      ...decoded,
      roles
    };
  }
  return {
    ...decoded
  };
};

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = () => {
  return !!context.currentUser;
};

/**
 * When checking role membership, roles can be a single value, a list, or none.
 * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
 */

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: {@link AllowedRoles} - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = roles => {
  if (!isAuthenticated()) {
    return false;
  }
  const currentUserRoles = context.currentUser?.roles;
  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles;
    } else if (_Array$isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => roles === allowedRole);
    }
  }
  if (_Array$isArray(roles)) {
    if (_Array$isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => _includesInstanceProperty(roles).call(roles, allowedRole));
    } else if (typeof currentUserRoles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return _someInstanceProperty(roles).call(roles, allowedRole => currentUserRoles === allowedRole);
    }
  }

  // roles not found
  return false;
};

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param roles?: {@link AllowedRoles} - When checking role membership, these roles grant access.
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {@link AuthenticationError} - If the currentUser is not authenticated
 * @throws {@link ForbiddenError} - If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = ({
  roles
} = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.");
  }
  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwYXJzZUpXVCIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJGb3JiaWRkZW5FcnJvciIsImNvbnRleHQiLCJnZXRDdXJyZW50VXNlciIsImRlY29kZWQiLCJ0b2tlbiIsInR5cGUiLCJldmVudCIsInJvbGVzIiwiaXNBdXRoZW50aWNhdGVkIiwiY3VycmVudFVzZXIiLCJoYXNSb2xlIiwiY3VycmVudFVzZXJSb2xlcyIsIl9BcnJheSRpc0FycmF5Iiwic29tZSIsImFsbG93ZWRSb2xlIiwiX2luY2x1ZGVzSW5zdGFuY2VQcm9wZXJ0eSIsImNhbGwiLCJfc29tZUluc3RhbmNlUHJvcGVydHkiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VKV1QgfSBmcm9tICdAcmVkd29vZGpzL2FwaSdcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRXJyb3IsIEZvcmJpZGRlbkVycm9yIH0gZnJvbSAnQHJlZHdvb2Rqcy9ncmFwaHFsLXNlcnZlcidcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSB1c2VyIGF0dHJpYnV0ZXMgcmV0dXJuZWQgYnkgdGhlIGRlY29kaW5nIHRoZVxuICogQXV0aGVudGljYXRpb24gcHJvdmlkZXIncyBKV1QgdG9nZXRoZXIgd2l0aCBhbiBvcHRpb25hbCBsaXN0IG9mIHJvbGVzLlxuICovXG50eXBlIFJlZHdvb2RVc2VyID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4gJiB7IHJvbGVzPzogc3RyaW5nW10gfVxuXG4vKipcbiAqIGdldEN1cnJlbnRVc2VyIHJldHVybnMgdGhlIHVzZXIgaW5mb3JtYXRpb24gdG9nZXRoZXIgd2l0aFxuICogYW4gb3B0aW9uYWwgY29sbGVjdGlvbiBvZiByb2xlcyB1c2VkIGJ5IHJlcXVpcmVBdXRoKCkgdG8gY2hlY2tcbiAqIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgb3IgaGFzIHJvbGUtYmFzZWQgYWNjZXNzXG4gKlxuICogQHBhcmFtIGRlY29kZWQgLSBUaGUgZGVjb2RlZCBhY2Nlc3MgdG9rZW4gY29udGFpbmluZyB1c2VyIGluZm8gYW5kIEpXVCBjbGFpbXMgbGlrZSBgc3ViYC4gTm90ZSBjb3VsZCBiZSBudWxsLlxuICogQHBhcmFtIHsgdG9rZW4sIFN1cHBvcnRlZEF1dGhUeXBlcyB0eXBlIH0gLSBUaGUgYWNjZXNzIHRva2VuIGl0c2VsZiBhcyB3ZWxsIGFzIHRoZSBhdXRoIHByb3ZpZGVyIHR5cGVcbiAqIEBwYXJhbSB7IEFQSUdhdGV3YXlFdmVudCBldmVudCwgQ29udGV4dCBjb250ZXh0IH0gLSBBbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgaW5mb3JtYXRpb24gZnJvbSB0aGUgaW52b2tlclxuICogc3VjaCBhcyBoZWFkZXJzIGFuZCBjb29raWVzLCBhbmQgdGhlIGNvbnRleHQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGludm9jYXRpb24gc3VjaCBhcyBJUCBBZGRyZXNzXG4gKlxuICogISEgQkVXQVJFICEhIEFueXRoaW5nIHJldHVybmVkIGZyb20gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGF2YWlsYWJsZSB0byB0aGVcbiAqIGNsaWVudC0taXQgYmVjb21lcyB0aGUgY29udGVudCBvZiBgY3VycmVudFVzZXJgIG9uIHRoZSB3ZWIgc2lkZSAoYXMgd2VsbCBhc1xuICogYGNvbnRleHQuY3VycmVudFVzZXJgIG9uIHRoZSBhcGkgc2lkZSkuIFlvdSBzaG91bGQgY2FyZWZ1bGx5IGFkZCBhZGRpdGlvbmFsXG4gKiBmaWVsZHMgdG8gdGhlIHJldHVybiBvYmplY3Qgb25seSBvbmNlIHlvdSd2ZSBkZWNpZGVkIHRoZXkgYXJlIHNhZmUgdG8gYmUgc2VlblxuICogaWYgc29tZW9uZSB3ZXJlIHRvIG9wZW4gdGhlIFdlYiBJbnNwZWN0b3IgaW4gdGhlaXIgYnJvd3Nlci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWR3b29kanMvcmVkd29vZC90cmVlL21haW4vcGFja2FnZXMvYXV0aCBmb3IgZXhhbXBsZXNcbiAqXG4gKiBAcmV0dXJucyBSZWR3b29kVXNlclxuICovXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoXG4gIGRlY29kZWQsXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbiAgeyB0b2tlbiwgdHlwZSB9LFxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4gIHsgZXZlbnQsIGNvbnRleHQgfVxuKTogUHJvbWlzZTxSZWR3b29kVXNlcj4gPT4ge1xuICBpZiAoIWRlY29kZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgeyByb2xlcyB9ID0gcGFyc2VKV1QoeyBkZWNvZGVkIH0pXG5cbiAgaWYgKHJvbGVzKSB7XG4gICAgcmV0dXJuIHsgLi4uZGVjb2RlZCwgcm9sZXMgfVxuICB9XG5cbiAgcmV0dXJuIHsgLi4uZGVjb2RlZCB9XG59XG5cbi8qKlxuICogVGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBpZiB0aGVyZSBpcyBhIGN1cnJlbnRVc2VyIGluIHRoZSBjb250ZXh0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuICEhY29udGV4dC5jdXJyZW50VXNlclxufVxuXG4vKipcbiAqIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCByb2xlcyBjYW4gYmUgYSBzaW5nbGUgdmFsdWUsIGEgbGlzdCwgb3Igbm9uZS5cbiAqIFlvdSBjYW4gdXNlIFByaXNtYSBlbnVtcyB0b28gKGlmIHlvdSdyZSB1c2luZyB0aGVtIGZvciByb2xlcyksIGp1c3QgaW1wb3J0IHlvdXIgZW51bSB0eXBlIGZyb20gYEBwcmlzbWEvY2xpZW50YFxuICovXG50eXBlIEFsbG93ZWRSb2xlcyA9IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkIChhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcylcbiAqXG4gKiBAcGFyYW0gcm9sZXM6IHtAbGluayBBbGxvd2VkUm9sZXN9IC0gQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhc3NpZ25lZCBvbmUgb2YgdGhlc2Ugcm9sZXNcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnRVc2VyIGlzIGxvZ2dlZCBpbiBhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcyxcbiAqIG9yIHdoZW4gbm8gcm9sZXMgYXJlIHByb3ZpZGVkIHRvIGNoZWNrIGFnYWluc3QuIE90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICovXG5leHBvcnQgY29uc3QgaGFzUm9sZSA9IChyb2xlczogQWxsb3dlZFJvbGVzKTogYm9vbGVhbiA9PiB7XG4gIGlmICghaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRVc2VyUm9sZXMgPSBjb250ZXh0LmN1cnJlbnRVc2VyPy5yb2xlc1xuXG4gIGlmICh0eXBlb2Ygcm9sZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50VXNlclJvbGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gcm9sZXMgdG8gY2hlY2sgaXMgYSBzdHJpbmcsIGN1cnJlbnRVc2VyLnJvbGVzIGlzIGEgc3RyaW5nXG4gICAgICByZXR1cm4gY3VycmVudFVzZXJSb2xlcyA9PT0gcm9sZXNcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFVzZXJSb2xlcykpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGEgc3RyaW5nLCBjdXJyZW50VXNlci5yb2xlcyBpcyBhbiBhcnJheVxuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXM/LnNvbWUoKGFsbG93ZWRSb2xlKSA9PiByb2xlcyA9PT0gYWxsb3dlZFJvbGUpXG4gICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocm9sZXMpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFVzZXJSb2xlcykpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGFuIGFycmF5LCBjdXJyZW50VXNlci5yb2xlcyBpcyBhbiBhcnJheVxuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXM/LnNvbWUoKGFsbG93ZWRSb2xlKSA9PlxuICAgICAgICByb2xlcy5pbmNsdWRlcyhhbGxvd2VkUm9sZSlcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdXJyZW50VXNlclJvbGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gcm9sZXMgdG8gY2hlY2sgaXMgYW4gYXJyYXksIGN1cnJlbnRVc2VyLnJvbGVzIGlzIGEgc3RyaW5nXG4gICAgICByZXR1cm4gcm9sZXMuc29tZSgoYWxsb3dlZFJvbGUpID0+IGN1cnJlbnRVc2VyUm9sZXMgPT09IGFsbG93ZWRSb2xlKVxuICAgIH1cbiAgfVxuXG4gIC8vIHJvbGVzIG5vdCBmb3VuZFxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBVc2UgcmVxdWlyZUF1dGggaW4geW91ciBzZXJ2aWNlcyB0byBjaGVjayB0aGF0IGEgdXNlciBpcyBsb2dnZWQgaW4sXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBhc3NpZ25lZCBhIHJvbGUsIGFuZCBvcHRpb25hbGx5IHJhaXNlIGFuXG4gKiBlcnJvciBpZiB0aGV5J3JlIG5vdC5cbiAqXG4gKiBAcGFyYW0gcm9sZXM/OiB7QGxpbmsgQWxsb3dlZFJvbGVzfSAtIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCB0aGVzZSByb2xlcyBncmFudCBhY2Nlc3MuXG4gKlxuICogQHJldHVybnMgLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZCAoYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMpXG4gKlxuICogQHRocm93cyB7QGxpbmsgQXV0aGVudGljYXRpb25FcnJvcn0gLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcbiAqIEB0aHJvd3Mge0BsaW5rIEZvcmJpZGRlbkVycm9yfSAtIElmIHRoZSBjdXJyZW50VXNlciBpcyBub3QgYWxsb3dlZCBkdWUgdG8gcm9sZSBwZXJtaXNzaW9uc1xuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlZHdvb2Rqcy9yZWR3b29kL3RyZWUvbWFpbi9wYWNrYWdlcy9hdXRoIGZvciBleGFtcGxlc1xuICovXG5leHBvcnQgY29uc3QgcmVxdWlyZUF1dGggPSAoeyByb2xlcyB9OiB7IHJvbGVzPzogQWxsb3dlZFJvbGVzIH0gPSB7fSkgPT4ge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoYXQuXCIpXG4gIH1cblxuICBpZiAocm9sZXMgJiYgIWhhc1JvbGUocm9sZXMpKSB7XG4gICAgdGhyb3cgbmV3IEZvcmJpZGRlbkVycm9yKFwiWW91IGRvbid0IGhhdmUgYWNjZXNzIHRvIGRvIHRoYXQuXCIpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBU0EsUUFBUSxRQUFRLGdCQUFnQjtBQUN6QyxTQUFTQyxtQkFBbUIsRUFBRUMsY0FBYyxFQXNEakNDLE9BQU8sUUF0RGtDLDJCQUEyQjs7QUFFL0U7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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