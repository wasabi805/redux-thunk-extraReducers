export interface Istate {
  landing?: {
    inputField: number | string
  }
}
export interface IAction {
  payload?: {
    landing?: {
      inputField?: number
      imageIdInput?: string
    }
  }
}

export interface IthunkAction {
  payload: {
    thumbnailUrl?: string
    value: string
  }
}
