
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  email: 'email',
  password: 'password',
  avatar: 'avatar',
  isVerified: 'isVerified',
  role: 'role',
  token: 'token',
  tokenExpiresIn: 'tokenExpiresIn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  workShift: 'workShift',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  station: 'station',
  isWorking: 'isWorking',
  employmentStatus: 'employmentStatus',
  outletId: 'outletId',
  isPresent: 'isPresent'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  isPrimary: 'isPrimary',
  addressLine: 'addressLine',
  province: 'province',
  regency: 'regency',
  district: 'district',
  village: 'village',
  latitude: 'latitude',
  longitude: 'longitude',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  customerId: 'customerId'
};

exports.Prisma.OutletScalarFieldEnum = {
  id: 'id',
  outletName: 'outletName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  outletAddressId: 'outletAddressId'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderStatus: 'orderStatus',
  isPaid: 'isPaid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  customerAddressId: 'customerAddressId',
  laundryPrice: 'laundryPrice',
  laundryWeight: 'laundryWeight',
  outletId: 'outletId'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  qty: 'qty',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  orderId: 'orderId',
  orderItemName: 'orderItemName'
};

exports.Prisma.LaundryJobScalarFieldEnum = {
  id: 'id',
  isCompleted: 'isCompleted',
  byPassNote: 'byPassNote',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  orderId: 'orderId',
  workerId: 'workerId',
  byPassStatus: 'byPassStatus',
  isByPassRequested: 'isByPassRequested',
  station: 'station'
};

exports.Prisma.TransportJobScalarFieldEnum = {
  id: 'id',
  transportType: 'transportType',
  isCompleted: 'isCompleted',
  distance: 'distance',
  orderId: 'orderId',
  driverId: 'driverId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  isRead: 'isRead',
  title: 'title',
  description: 'description',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  url: 'url'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  totalPrice: 'totalPrice',
  paymentStatus: 'paymentStatus',
  paymentMethod: 'paymentMethod',
  snapToken: 'snapToken',
  snapRedirectURL: 'snapRedirectURL',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  orderId: 'orderId'
};

exports.Prisma.EmployeeAttendanceScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  employeeId: 'employeeId',
  isAttended: 'isAttended',
  canClockIn: 'canClockIn'
};

exports.Prisma.AttendanceRecordScalarFieldEnum = {
  id: 'id',
  attendanceType: 'attendanceType',
  employeeAttendanceId: 'employeeAttendanceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  OUTLET_ADMIN: 'OUTLET_ADMIN',
  WORKER: 'WORKER',
  DRIVER: 'DRIVER',
  CUSTOMER: 'CUSTOMER'
};

exports.EmployeeWorkShift = exports.$Enums.EmployeeWorkShift = {
  MORNING: 'MORNING',
  NOON: 'NOON',
  NIGHT: 'NIGHT'
};

exports.WorkerStation = exports.$Enums.WorkerStation = {
  WASHING: 'WASHING',
  IRONING: 'IRONING',
  PACKING: 'PACKING'
};

exports.EmploymentStatus = exports.$Enums.EmploymentStatus = {
  EMPLOYED: 'EMPLOYED',
  PAUSED: 'PAUSED',
  ENDED: 'ENDED'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  ARRIVED_AT_OUTLET: 'ARRIVED_AT_OUTLET',
  READY_FOR_WASHING: 'READY_FOR_WASHING',
  BEING_WASHED: 'BEING_WASHED',
  WASHING_COMPLETED: 'WASHING_COMPLETED',
  BEING_IRONED: 'BEING_IRONED',
  IRONING_COMPLETED: 'IRONING_COMPLETED',
  BEING_PACKED: 'BEING_PACKED',
  AWAITING_PAYMENT: 'AWAITING_PAYMENT',
  READY_FOR_DELIVERY: 'READY_FOR_DELIVERY',
  WAITING_FOR_DELIVERY_DRIVER: 'WAITING_FOR_DELIVERY_DRIVER',
  BEING_DELIVERED_TO_CUSTOMER: 'BEING_DELIVERED_TO_CUSTOMER',
  RECEIVED_BY_CUSTOMER: 'RECEIVED_BY_CUSTOMER',
  COMPLETED: 'COMPLETED',
  CANCELLED_BY_CUSTOMER: 'CANCELLED_BY_CUSTOMER',
  CANCELLED_BY_OUTLET: 'CANCELLED_BY_OUTLET',
  WAITING_FOR_PICKUP_DRIVER: 'WAITING_FOR_PICKUP_DRIVER',
  ON_THE_WAY_TO_CUSTOMER: 'ON_THE_WAY_TO_CUSTOMER',
  ON_THE_WAY_TO_OUTLET: 'ON_THE_WAY_TO_OUTLET'
};

exports.ByPassStatus = exports.$Enums.ByPassStatus = {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

exports.TransportType = exports.$Enums.TransportType = {
  PICKUP: 'PICKUP',
  DELIVERY: 'DELIVERY'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  SUCCEEDED: 'SUCCEEDED'
};

exports.AttendanceType = exports.$Enums.AttendanceType = {
  CLOCK_IN: 'CLOCK_IN',
  CLOCK_OUT: 'CLOCK_OUT'
};

exports.Prisma.ModelName = {
  User: 'User',
  Employee: 'Employee',
  Address: 'Address',
  Outlet: 'Outlet',
  Order: 'Order',
  OrderItem: 'OrderItem',
  LaundryJob: 'LaundryJob',
  TransportJob: 'TransportJob',
  Notification: 'Notification',
  Payment: 'Payment',
  EmployeeAttendance: 'EmployeeAttendance',
  AttendanceRecord: 'AttendanceRecord'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
