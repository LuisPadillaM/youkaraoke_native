import {Action} from 'redux'
import {Dispatch} from 'redux'

export interface ActionMeta {
  args?: any[]
  name?: string
  retry?: boolean
  title?: string
  timeStamp?: Date
}

export interface ActionInterface<T extends string, P, M = ActionMeta> extends Action<T> {
  payload: P
  meta?: M
}

export interface OfflineThunk<A extends Action> {
  (dispatch: Dispatch<A>): Promise<any>
  interceptInOffline?: boolean
  meta?: ActionMeta
}
