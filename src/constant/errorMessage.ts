export abstract class ErrorMessage {
  static required = 'This field is require'

  static invalidEmail = 'Please enter a valid email'

  static invalidPhoneNumber = 'Please enter a valid phone number'

  static invalidFaxNumber = 'Please enter a valid fax number'

  static numberOnly = 'Please enter only number'

  static passwordMinimumCharacters =
    'Password must include a minimum of 8 characters'

  static passwordFormat =
    'Password must include a minimum of 8 characters with A-Z, a-z, 0-9'

  static passwordMissMatch = 'Password does not match'

  static permissionAccessPage = "You don't have permission to access this page"
}
