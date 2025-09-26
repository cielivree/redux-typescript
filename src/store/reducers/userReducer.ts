interface UserState {
    users: any[],
    isLoading: boolean,
    error: string | null
}

enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null
}

type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { isLoading: true, error: null, users: [] }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { isLoading: false, error: null, users: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return { isLoading: false, error: action.payload, users: [] }
        default: 
            return state
    }
}