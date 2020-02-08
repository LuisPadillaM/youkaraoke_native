declare module 'react-native-offline' {
  import {Middleware, Reducer, AnyAction} from 'redux';

  type HTTPMethod = 'HEAD' | 'OPTIONS';
  export type NetworkState = {
    isConnected: boolean;
    actionQueue: Array<AnyAction>;
  };
  export type MiddlewareConfig = {
    regexActionType?: RegExp;
    actionTypes?: Array<string>;
    queueReleaseThrottle?: number;
  };

  export type CheckInternetConnectionConfig = {
    url?: string;
    pingTimeout?: number;
    shouldPing?: boolean;
  };

  type Connectivity = {
    isConnected: boolean;
  };

  export type NetworkProviderProps = {
    children: React.ReactNode;
    pingTimeout?: number;
    pingServerUrl?: string;
    shouldPing?: boolean;
    pingInterval?: number;
    pingOnlyIfOffline?: boolean;
    pingInBackground?: boolean;
    httpMethod?: HTTPMethod;
  };

  export type NetworkConsumerProps = {
    children: ({isConnected}: Connectivity) => JSX.Element;
  };

  export const NetworkProvider: (props: NetworkProviderProps) => JSX.Element;
  export const NetworkConsumer: (props: NetworkConsumerProps) => JSX.Element;
  export const ReduxNetworkProvider: (
    props: NetworkProviderProps,
  ) => JSX.Element;
  export const reducer: Reducer<NetworkState, AnyAction>;
  export const createNetworkMiddleware: (
    config: MiddlewareConfig,
  ) => Middleware;
  export enum offlineActionTypes {
    CONNECTION_CHANGE = '@@network-connectivity/CONNECTION_CHANGE',
    FETCH_OFFLINE_MODE = '@@network-connectivity/FETCH_OFFLINE_MODE',
    REMOVE_FROM_ACTION_QUEUE = '@@network-connectivity/REMOVE_FROM_ACTION_QUEUE',
    DISMISS_ACTIONS_FROM_QUEUE = '@@network-connectivity/DISMISS_ACTIONS_FROM_QUEUE',
  }
  type ConnectionChange = (
    isConnected: boolean,
  ) => {
    type: offlineActionTypes.CONNECTION_CHANGE;
    payload: boolean;
  };
  export const offlineActionCreators: {
    connectionChange: ConnectionChange;
  };
  export const checkInternetConnection: (
    config?: CheckInternetConnectionConfig,
  ) => Promise<boolean>;
}
