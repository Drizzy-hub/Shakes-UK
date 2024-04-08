import React from "react";
import { AuthenticatedUserProvider } from "../provider/authProvider";
import RootNavigator from "./rootnavigator";

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
