export enum PublicErrors {
  INVALID_CREDENTIALS = 10000,
  ACCESS_DENIED = 11000,
  ACCESS_FORBIDDEN = 12000,
  ACTION_DENIED = 13000,
  INVALID_PASSWORD = 14000,
  USER_DEVICE_ACCESS_FORBIDDEN = 20000,
  USER_DEVICE_ACTION_FORBIDDEN = 21000,
  USER_DEVICE_ACCESS_TIMEOUT = 22000,
  USER_DEVICE_ACCESS_IN_REVIEW = 23000,
  USER_DEVICE_ACCESS_BLOCKED = 24000,
  USER_DEVICE_ACCESS_UNAVAILABLE = 25000,
  USER_DEVICE_IN_REVIEW_QUOTA_REACHED = 26000,
  USER_DEVICE_CONFIGURATION_MISSING = 27000,
  USER_DEVICE_ALLOCATION_FORBIDDEN = 28000,
  GROUP_DEVICE_ACCESS_FORBIDDEN = 30000,
  GROUP_DEVICE_ACTION_FORBIDDEN = 31000,
  GROUP_DEVICE_ACCESS_TIMEOUT = 32000,
  ACCESS_KEY_ACCESS_FORBIDDEN = 40000,
  ACCESS_KEY_ACCESS_TIMEOUT = 41000,
  ACCESS_KEY_INVALID = 42000,
  ACCESS_KEY_ACCESS_BLOCKED = 43000,
  ACCESS_KEY_IS_NOT_ATTACHED = 44000,
  UPLOAD_FAILED = 50000,
  DEVICE_SERIAL_NUMBER_INVALID = 60000,
  DEVICE_ACTIVATION_DENIED = 61000,
  DEVICE_RESET_DENIED = 62000,
  DEVICE_REMOVAL_DENIED = 63000,
  DEVICE_ACCESS_REMOVAL_DENIED = 64000,
  DEVICE_NOT_FOUND = 65000,
  SITE_FORBIDDEN = 70000,
  SITE_ADDRESS_MISSING = 71000,
  SITE_NOT_FOUND = 72000,
  SITE_REMOVAL_DENIED = 73000,
  CALL_DENIED = 80000,
  USER_INVITATION_DENIED = 90000,
  ACCESS_GROUP_TIME_OVERLAP = 100000,
  ACCESS_GROUP_IS_NOT_ATTACHED = 101000,
  TOKEN_INVALID = 200000,
  NOT_IMPLEMENTED = 210000,
}
