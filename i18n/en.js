export default {
  messages: {
    // common
    internalError: 'Internal server error',
    permissionDenied: 'Permission denied',
    notFound: '{object} not found',
    invalidDomain: 'Invalid domain',
    isExisted: '{object} is already exist',

    // token
    noTokenProvided: 'No token provided',
    tokenInvalid: 'Token is invalid',
    tokenExpired: 'Your session has expired. Please relogin',

    // params
    missingParams: '{param} is missing',
    invalidParams: '{param} is invalid',

    // user authentication
    loginFailed: 'Email or password is incorrect',
    emailIsExisted: 'Email is already registered',
    emailIsNotExisted: 'Email is not existed in system',
    userNotFound: 'User not existed or not in any team',
    emailIsInvited: 'You are invited to team, please go to mail for unique register.',
    userInactive: 'User is inactive.',

    // team
    userInTeam: 'User has this email is already in team',

    //server
    serverNotFound: 'Server can not found',

    // File upload
    typeInvalid: 'File type invalid, file only support {type} types',
    maxSize: 'The file is too large, max size is {size}'
  },
  emails: {
    subjectPrefix: 'Tiger CNY',
    subjectAdmin2FaQrCode: 'Invitation to web admin portal',
    resetPasswordAdmin: 'Reset your password',
    resetPasswordUser: 'Reset your password'
  }
};
