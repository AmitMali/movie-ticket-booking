"use client";

import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
export function Providers({ children }) {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        {children}
      </Auth0Provider>
    </Provider>
  );
}
