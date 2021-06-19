import { createEntityAdapter, EntityState, EntityAdapter} from '@ngrx/entity';
import { User } from '../../_models/user.model'


export interface UserState extends EntityState<User>{
    error: any
    selectedUser: User
    searchUserName: string
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = userAdapter.getInitialState({
    error: null,
    selectedUser: null, 
    searchUserName: ""
})