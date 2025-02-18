import { BaseDomain } from '../common'

export class LoginUser extends BaseDomain {

  constructor (
     private _uid: string,
     private _emailVerified: boolean,
     private _providerId: string = '',
     private _displayName: string = '',
     private _email: string = '',
     private _avatarURL: string = ''

    ) {
    super()
  }

    /**
     * User identifier
     */
  public get uid (): string {
    return this._uid
  }

  /**
   * If user's email is verifide {true} or not {false}
   */
  public get emailVerified (): boolean {
    return this._emailVerified
  }

  public get providerId (): string {
    return this._providerId
  }

  public get displayName (): string {
    return this._displayName
  }

  public get email (): string {
    return this._email
  }

  public get avatarURL (): string {
    return this._avatarURL
  }

}
