import { User2 } from './user2'
import { ImmutableObject } from '@angular/cdk/overlay/typings/overlay-ref';

export class User {
    user: ImmutableObject<User2>
    message: string
    sessionToken: string
}