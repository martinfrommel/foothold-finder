import { authDecoder } from '@redwoodjs/auth-supabase-api';
import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
let services = {};
import * as services_users_users from "../services/users/users";
services.users_users = services_users_users;
import { getCurrentUser } from "../lib/auth";
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  authDecoder,
  getCurrentUser,
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhdXRoRGVjb2RlciIsImNyZWF0ZUdyYXBoUUxIYW5kbGVyIiwiZGlyZWN0aXZlcyIsImRpcmVjdGl2ZXNfcmVxdWlyZUF1dGhfcmVxdWlyZUF1dGgiLCJyZXF1aXJlQXV0aF9yZXF1aXJlQXV0aCIsImRpcmVjdGl2ZXNfc2tpcEF1dGhfc2tpcEF1dGgiLCJza2lwQXV0aF9za2lwQXV0aCIsInNkbHMiLCJzZXJ2aWNlcyIsInNlcnZpY2VzX3VzZXJzX3VzZXJzIiwidXNlcnNfdXNlcnMiLCJnZXRDdXJyZW50VXNlciIsImRiIiwibG9nZ2VyIiwiaGFuZGxlciIsImxvZ2dlckNvbmZpZyIsIm9wdGlvbnMiLCJvbkV4Y2VwdGlvbiIsIiRkaXNjb25uZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9mdW5jdGlvbnMvZ3JhcGhxbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoRGVjb2RlciB9IGZyb20gJ0ByZWR3b29kanMvYXV0aC1zdXBhYmFzZS1hcGknXG5pbXBvcnQgeyBjcmVhdGVHcmFwaFFMSGFuZGxlciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCBkaXJlY3RpdmVzIGZyb20gJ3NyYy9kaXJlY3RpdmVzLyoqLyoue2pzLHRzfSdcbmltcG9ydCBzZGxzIGZyb20gJ3NyYy9ncmFwaHFsLyoqLyouc2RsLntqcyx0c30nXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnc3JjL3NlcnZpY2VzLyoqLyoue2pzLHRzfSdcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICdzcmMvbGliL2F1dGgnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvbGliL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVHcmFwaFFMSGFuZGxlcih7XG4gIGF1dGhEZWNvZGVyLFxuICBnZXRDdXJyZW50VXNlcixcbiAgbG9nZ2VyQ29uZmlnOiB7IGxvZ2dlciwgb3B0aW9uczoge30gfSxcbiAgZGlyZWN0aXZlcyxcbiAgc2RscyxcbiAgc2VydmljZXMsXG4gIG9uRXhjZXB0aW9uOiAoKSA9PiB7XG4gICAgLy8gRGlzY29ubmVjdCBmcm9tIHlvdXIgZGF0YWJhc2Ugd2l0aCBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgIGRiLiRkaXNjb25uZWN0KClcbiAgfSxcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFdBQVcsUUFBUSw4QkFBOEI7QUFDMUQsU0FBU0Msb0JBQW9CLFFBQVEsMkJBQTJCO0FBQUEsSUFBQUMsVUFBQTtBQUFBLFlBQUFDLGtDQUFBO0FBQUFELFVBQUEsQ0FBQUUsdUJBQUEsR0FBQUQsa0NBQUE7QUFBQSxZQUFBRSw0QkFBQTtBQUFBSCxVQUFBLENBQUFJLGlCQUFBLEdBQUFELDRCQUFBO0FBQUEsSUFBQUUsSUFBQTtBQUFBLElBQUFDLFFBQUE7QUFBQSxZQUFBQyxvQkFBQTtBQUFBRCxRQUFBLENBQUFFLFdBQUEsR0FBQUQsb0JBQUE7QUFNaEUsU0FBU0UsY0FBYztBQUN2QixTQUFTQyxFQUFFO0FBQ1gsU0FBU0MsTUFBTTtBQUVmLE9BQU8sTUFBTUMsT0FBTyxHQUFHYixvQkFBb0IsQ0FBQztFQUMxQ0QsV0FBVztFQUNYVyxjQUFjO0VBQ2RJLFlBQVksRUFBRTtJQUFFRixNQUFNO0lBQUVHLE9BQU8sRUFBRSxDQUFDO0VBQUUsQ0FBQztFQUNyQ2QsVUFBVTtFQUNWSyxJQUFJO0VBQ0pDLFFBQVE7RUFDUlMsV0FBVyxFQUFFQSxDQUFBLEtBQU07SUFDakI7SUFDQUwsRUFBRSxDQUFDTSxXQUFXLEVBQUU7RUFDbEI7QUFDRixDQUFDLENBQUMifQ==