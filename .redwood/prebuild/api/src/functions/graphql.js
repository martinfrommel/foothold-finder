import { authDecoder } from '@redwoodjs/auth-supabase-api';
import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
let services = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhdXRoRGVjb2RlciIsImNyZWF0ZUdyYXBoUUxIYW5kbGVyIiwiZGlyZWN0aXZlcyIsImRpcmVjdGl2ZXNfcmVxdWlyZUF1dGhfcmVxdWlyZUF1dGgiLCJyZXF1aXJlQXV0aF9yZXF1aXJlQXV0aCIsImRpcmVjdGl2ZXNfc2tpcEF1dGhfc2tpcEF1dGgiLCJza2lwQXV0aF9za2lwQXV0aCIsInNkbHMiLCJzZXJ2aWNlcyIsImdldEN1cnJlbnRVc2VyIiwiZGIiLCJsb2dnZXIiLCJoYW5kbGVyIiwibG9nZ2VyQ29uZmlnIiwib3B0aW9ucyIsIm9uRXhjZXB0aW9uIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2Z1bmN0aW9ucy9ncmFwaHFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhEZWNvZGVyIH0gZnJvbSAnQHJlZHdvb2Rqcy9hdXRoLXN1cGFiYXNlLWFwaSdcbmltcG9ydCB7IGNyZWF0ZUdyYXBoUUxIYW5kbGVyIH0gZnJvbSAnQHJlZHdvb2Rqcy9ncmFwaHFsLXNlcnZlcidcblxuaW1wb3J0IGRpcmVjdGl2ZXMgZnJvbSAnc3JjL2RpcmVjdGl2ZXMvKiovKi57anMsdHN9J1xuaW1wb3J0IHNkbHMgZnJvbSAnc3JjL2dyYXBocWwvKiovKi5zZGwue2pzLHRzfSdcbmltcG9ydCBzZXJ2aWNlcyBmcm9tICdzcmMvc2VydmljZXMvKiovKi57anMsdHN9J1xuXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJ3NyYy9saWIvYXV0aCdcbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy9saWIvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZUdyYXBoUUxIYW5kbGVyKHtcbiAgYXV0aERlY29kZXIsXG4gIGdldEN1cnJlbnRVc2VyLFxuICBsb2dnZXJDb25maWc6IHsgbG9nZ2VyLCBvcHRpb25zOiB7fSB9LFxuICBkaXJlY3RpdmVzLFxuICBzZGxzLFxuICBzZXJ2aWNlcyxcbiAgb25FeGNlcHRpb246ICgpID0+IHtcbiAgICAvLyBEaXNjb25uZWN0IGZyb20geW91ciBkYXRhYmFzZSB3aXRoIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgZGIuJGRpc2Nvbm5lY3QoKVxuICB9LFxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsV0FBVyxRQUFRLDhCQUE4QjtBQUMxRCxTQUFTQyxvQkFBb0IsUUFBUSwyQkFBMkI7QUFBQSxJQUFBQyxVQUFBO0FBQUEsWUFBQUMsa0NBQUE7QUFBQUQsVUFBQSxDQUFBRSx1QkFBQSxHQUFBRCxrQ0FBQTtBQUFBLFlBQUFFLDRCQUFBO0FBQUFILFVBQUEsQ0FBQUksaUJBQUEsR0FBQUQsNEJBQUE7QUFBQSxJQUFBRSxJQUFBO0FBQUEsSUFBQUMsUUFBQTtBQU1oRSxTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLEVBQUU7QUFDWCxTQUFTQyxNQUFNO0FBRWYsT0FBTyxNQUFNQyxPQUFPLEdBQUdYLG9CQUFvQixDQUFDO0VBQzFDRCxXQUFXO0VBQ1hTLGNBQWM7RUFDZEksWUFBWSxFQUFFO0lBQUVGLE1BQU07SUFBRUcsT0FBTyxFQUFFLENBQUM7RUFBRSxDQUFDO0VBQ3JDWixVQUFVO0VBQ1ZLLElBQUk7RUFDSkMsUUFBUTtFQUNSTyxXQUFXLEVBQUVBLENBQUEsS0FBTTtJQUNqQjtJQUNBTCxFQUFFLENBQUNNLFdBQVcsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQyJ9