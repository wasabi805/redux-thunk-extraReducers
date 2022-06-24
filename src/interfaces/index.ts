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

export interface IinitialLandingState {
  status?: string
  inputField?: string | number
  joke?: string
  imageIdInput?: string | number
  imageSrc?: string
}

export interface ILandingState {
  name: string
  initialState: IinitialLandingState
  reducers: {
    inputField: any
    imageIdInput: any
  }
  extraReducers: {}
}

export interface IthunkAction {
  payload: {
    thumbnailUrl?: string
    value: string
  }
}
