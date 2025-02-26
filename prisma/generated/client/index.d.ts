
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Outlet
 * 
 */
export type Outlet = $Result.DefaultSelection<Prisma.$OutletPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model LaundryJob
 * 
 */
export type LaundryJob = $Result.DefaultSelection<Prisma.$LaundryJobPayload>
/**
 * Model TransportJob
 * 
 */
export type TransportJob = $Result.DefaultSelection<Prisma.$TransportJobPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model EmployeeAttendance
 * 
 */
export type EmployeeAttendance = $Result.DefaultSelection<Prisma.$EmployeeAttendancePayload>
/**
 * Model AttendanceRecord
 * 
 */
export type AttendanceRecord = $Result.DefaultSelection<Prisma.$AttendanceRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  OUTLET_ADMIN: 'OUTLET_ADMIN',
  WORKER: 'WORKER',
  DRIVER: 'DRIVER',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EmployeeWorkShift: {
  MORNING: 'MORNING',
  NOON: 'NOON',
  NIGHT: 'NIGHT'
};

export type EmployeeWorkShift = (typeof EmployeeWorkShift)[keyof typeof EmployeeWorkShift]


export const EmploymentStatus: {
  EMPLOYED: 'EMPLOYED',
  PAUSED: 'PAUSED',
  ENDED: 'ENDED'
};

export type EmploymentStatus = (typeof EmploymentStatus)[keyof typeof EmploymentStatus]


export const WorkerStation: {
  WASHING: 'WASHING',
  IRONING: 'IRONING',
  PACKING: 'PACKING'
};

export type WorkerStation = (typeof WorkerStation)[keyof typeof WorkerStation]


export const OrderStatus: {
  WAITING_FOR_PICKUP_DRIVER: 'WAITING_FOR_PICKUP_DRIVER',
  ON_THE_WAY_TO_CUSTOMER: 'ON_THE_WAY_TO_CUSTOMER',
  ON_THE_WAY_TO_OUTLET: 'ON_THE_WAY_TO_OUTLET',
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
  CANCELLED_BY_OUTLET: 'CANCELLED_BY_OUTLET'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const TransportType: {
  PICKUP: 'PICKUP',
  DELIVERY: 'DELIVERY'
};

export type TransportType = (typeof TransportType)[keyof typeof TransportType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  SUCCEEDED: 'SUCCEEDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const ByPassStatus: {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type ByPassStatus = (typeof ByPassStatus)[keyof typeof ByPassStatus]


export const AttendanceType: {
  CLOCK_IN: 'CLOCK_IN',
  CLOCK_OUT: 'CLOCK_OUT'
};

export type AttendanceType = (typeof AttendanceType)[keyof typeof AttendanceType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EmployeeWorkShift = $Enums.EmployeeWorkShift

export const EmployeeWorkShift: typeof $Enums.EmployeeWorkShift

export type EmploymentStatus = $Enums.EmploymentStatus

export const EmploymentStatus: typeof $Enums.EmploymentStatus

export type WorkerStation = $Enums.WorkerStation

export const WorkerStation: typeof $Enums.WorkerStation

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type TransportType = $Enums.TransportType

export const TransportType: typeof $Enums.TransportType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type ByPassStatus = $Enums.ByPassStatus

export const ByPassStatus: typeof $Enums.ByPassStatus

export type AttendanceType = $Enums.AttendanceType

export const AttendanceType: typeof $Enums.AttendanceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outlet`: Exposes CRUD operations for the **Outlet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outlets
    * const outlets = await prisma.outlet.findMany()
    * ```
    */
  get outlet(): Prisma.OutletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laundryJob`: Exposes CRUD operations for the **LaundryJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaundryJobs
    * const laundryJobs = await prisma.laundryJob.findMany()
    * ```
    */
  get laundryJob(): Prisma.LaundryJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportJob`: Exposes CRUD operations for the **TransportJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransportJobs
    * const transportJobs = await prisma.transportJob.findMany()
    * ```
    */
  get transportJob(): Prisma.TransportJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeAttendance`: Exposes CRUD operations for the **EmployeeAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeAttendances
    * const employeeAttendances = await prisma.employeeAttendance.findMany()
    * ```
    */
  get employeeAttendance(): Prisma.EmployeeAttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceRecord`: Exposes CRUD operations for the **AttendanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceRecords
    * const attendanceRecords = await prisma.attendanceRecord.findMany()
    * ```
    */
  get attendanceRecord(): Prisma.AttendanceRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "employee" | "address" | "outlet" | "order" | "orderItem" | "laundryJob" | "transportJob" | "notification" | "payment" | "employeeAttendance" | "attendanceRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Outlet: {
        payload: Prisma.$OutletPayload<ExtArgs>
        fields: Prisma.OutletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          findFirst: {
            args: Prisma.OutletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          findMany: {
            args: Prisma.OutletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>[]
          }
          create: {
            args: Prisma.OutletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          createMany: {
            args: Prisma.OutletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>[]
          }
          delete: {
            args: Prisma.OutletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          update: {
            args: Prisma.OutletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          deleteMany: {
            args: Prisma.OutletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>[]
          }
          upsert: {
            args: Prisma.OutletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          aggregate: {
            args: Prisma.OutletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutlet>
          }
          groupBy: {
            args: Prisma.OutletGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletCountArgs<ExtArgs>
            result: $Utils.Optional<OutletCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      LaundryJob: {
        payload: Prisma.$LaundryJobPayload<ExtArgs>
        fields: Prisma.LaundryJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaundryJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaundryJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>
          }
          findFirst: {
            args: Prisma.LaundryJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaundryJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>
          }
          findMany: {
            args: Prisma.LaundryJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>[]
          }
          create: {
            args: Prisma.LaundryJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>
          }
          createMany: {
            args: Prisma.LaundryJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaundryJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>[]
          }
          delete: {
            args: Prisma.LaundryJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>
          }
          update: {
            args: Prisma.LaundryJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>
          }
          deleteMany: {
            args: Prisma.LaundryJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaundryJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaundryJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>[]
          }
          upsert: {
            args: Prisma.LaundryJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaundryJobPayload>
          }
          aggregate: {
            args: Prisma.LaundryJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaundryJob>
          }
          groupBy: {
            args: Prisma.LaundryJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaundryJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaundryJobCountArgs<ExtArgs>
            result: $Utils.Optional<LaundryJobCountAggregateOutputType> | number
          }
        }
      }
      TransportJob: {
        payload: Prisma.$TransportJobPayload<ExtArgs>
        fields: Prisma.TransportJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>
          }
          findFirst: {
            args: Prisma.TransportJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>
          }
          findMany: {
            args: Prisma.TransportJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>[]
          }
          create: {
            args: Prisma.TransportJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>
          }
          createMany: {
            args: Prisma.TransportJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>[]
          }
          delete: {
            args: Prisma.TransportJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>
          }
          update: {
            args: Prisma.TransportJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>
          }
          deleteMany: {
            args: Prisma.TransportJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>[]
          }
          upsert: {
            args: Prisma.TransportJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportJobPayload>
          }
          aggregate: {
            args: Prisma.TransportJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportJob>
          }
          groupBy: {
            args: Prisma.TransportJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportJobCountArgs<ExtArgs>
            result: $Utils.Optional<TransportJobCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      EmployeeAttendance: {
        payload: Prisma.$EmployeeAttendancePayload<ExtArgs>
        fields: Prisma.EmployeeAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>
          }
          findFirst: {
            args: Prisma.EmployeeAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>
          }
          findMany: {
            args: Prisma.EmployeeAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>[]
          }
          create: {
            args: Prisma.EmployeeAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>
          }
          createMany: {
            args: Prisma.EmployeeAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>[]
          }
          delete: {
            args: Prisma.EmployeeAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>
          }
          update: {
            args: Prisma.EmployeeAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttendancePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeAttendance>
          }
          groupBy: {
            args: Prisma.EmployeeAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeAttendanceCountAggregateOutputType> | number
          }
        }
      }
      AttendanceRecord: {
        payload: Prisma.$AttendanceRecordPayload<ExtArgs>
        fields: Prisma.AttendanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findFirst: {
            args: Prisma.AttendanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findMany: {
            args: Prisma.AttendanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          create: {
            args: Prisma.AttendanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          createMany: {
            args: Prisma.AttendanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          delete: {
            args: Prisma.AttendanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          update: {
            args: Prisma.AttendanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          aggregate: {
            args: Prisma.AttendanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceRecord>
          }
          groupBy: {
            args: Prisma.AttendanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    employee?: EmployeeOmit
    address?: AddressOmit
    outlet?: OutletOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    laundryJob?: LaundryJobOmit
    transportJob?: TransportJobOmit
    notification?: NotificationOmit
    payment?: PaymentOmit
    employeeAttendance?: EmployeeAttendanceOmit
    attendanceRecord?: AttendanceRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Address: number
    Notification: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | UserCountOutputTypeCountAddressArgs
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    LaundryJob: number
    TransportJob: number
    EmployeeAttendance: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LaundryJob?: boolean | EmployeeCountOutputTypeCountLaundryJobArgs
    TransportJob?: boolean | EmployeeCountOutputTypeCountTransportJobArgs
    EmployeeAttendance?: boolean | EmployeeCountOutputTypeCountEmployeeAttendanceArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLaundryJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaundryJobWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTransportJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportJobWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountEmployeeAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeAttendanceWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    Order: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | AddressCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OutletCountOutputType
   */

  export type OutletCountOutputType = {
    Order: number
    Employee: number
  }

  export type OutletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OutletCountOutputTypeCountOrderArgs
    Employee?: boolean | OutletCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletCountOutputType
     */
    select?: OutletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    OrderItem: number
    LaundryJob: number
    TransportJob: number
    Payment: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | OrderCountOutputTypeCountOrderItemArgs
    LaundryJob?: boolean | OrderCountOutputTypeCountLaundryJobArgs
    TransportJob?: boolean | OrderCountOutputTypeCountTransportJobArgs
    Payment?: boolean | OrderCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountLaundryJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaundryJobWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountTransportJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportJobWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type EmployeeAttendanceCountOutputType
   */

  export type EmployeeAttendanceCountOutputType = {
    AttendanceRecord: number
  }

  export type EmployeeAttendanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AttendanceRecord?: boolean | EmployeeAttendanceCountOutputTypeCountAttendanceRecordArgs
  }

  // Custom InputTypes
  /**
   * EmployeeAttendanceCountOutputType without action
   */
  export type EmployeeAttendanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendanceCountOutputType
     */
    select?: EmployeeAttendanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeAttendanceCountOutputType without action
   */
  export type EmployeeAttendanceCountOutputTypeCountAttendanceRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerified: boolean | null
    role: $Enums.Role | null
    token: string | null
    tokenExpiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerified: boolean | null
    role: $Enums.Role | null
    token: string | null
    tokenExpiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    avatar: number
    isVerified: number
    role: number
    token: number
    tokenExpiresIn: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    role?: true
    token?: true
    tokenExpiresIn?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    role?: true
    token?: true
    tokenExpiresIn?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    role?: true
    token?: true
    tokenExpiresIn?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string | null
    email: string
    password: string | null
    avatar: string
    isVerified: boolean
    role: $Enums.Role
    token: string | null
    tokenExpiresIn: Date | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    role?: boolean
    token?: boolean
    tokenExpiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    Employee?: boolean | User$EmployeeArgs<ExtArgs>
    Address?: boolean | User$AddressArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    role?: boolean
    token?: boolean
    tokenExpiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    role?: boolean
    token?: boolean
    tokenExpiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    role?: boolean
    token?: boolean
    tokenExpiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "avatar" | "isVerified" | "role" | "token" | "tokenExpiresIn" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | User$EmployeeArgs<ExtArgs>
    Address?: boolean | User$AddressArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs> | null
      Address: Prisma.$AddressPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string | null
      email: string
      password: string | null
      avatar: string
      isVerified: boolean
      role: $Enums.Role
      token: string | null
      tokenExpiresIn: Date | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends User$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, User$EmployeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Address<T extends User$AddressArgs<ExtArgs> = {}>(args?: Subset<T, User$AddressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly token: FieldRef<"User", 'String'>
    readonly tokenExpiresIn: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Employee
   */
  export type User$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User.Address
   */
  export type User$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    outletId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    outletId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    workShift: $Enums.EmployeeWorkShift | null
    station: $Enums.WorkerStation | null
    isPresent: boolean | null
    isWorking: boolean | null
    employmentStatus: $Enums.EmploymentStatus | null
    userId: number | null
    outletId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    workShift: $Enums.EmployeeWorkShift | null
    station: $Enums.WorkerStation | null
    isPresent: boolean | null
    isWorking: boolean | null
    employmentStatus: $Enums.EmploymentStatus | null
    userId: number | null
    outletId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    workShift: number
    station: number
    isPresent: number
    isWorking: number
    employmentStatus: number
    userId: number
    outletId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    userId?: true
    outletId?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    userId?: true
    outletId?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    workShift?: true
    station?: true
    isPresent?: true
    isWorking?: true
    employmentStatus?: true
    userId?: true
    outletId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    workShift?: true
    station?: true
    isPresent?: true
    isWorking?: true
    employmentStatus?: true
    userId?: true
    outletId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    workShift?: true
    station?: true
    isPresent?: true
    isWorking?: true
    employmentStatus?: true
    userId?: true
    outletId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    workShift: $Enums.EmployeeWorkShift | null
    station: $Enums.WorkerStation | null
    isPresent: boolean
    isWorking: boolean
    employmentStatus: $Enums.EmploymentStatus
    userId: number
    outletId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workShift?: boolean
    station?: boolean
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: boolean
    userId?: boolean
    outletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
    LaundryJob?: boolean | Employee$LaundryJobArgs<ExtArgs>
    TransportJob?: boolean | Employee$TransportJobArgs<ExtArgs>
    EmployeeAttendance?: boolean | Employee$EmployeeAttendanceArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workShift?: boolean
    station?: boolean
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: boolean
    userId?: boolean
    outletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workShift?: boolean
    station?: boolean
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: boolean
    userId?: boolean
    outletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    workShift?: boolean
    station?: boolean
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: boolean
    userId?: boolean
    outletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workShift" | "station" | "isPresent" | "isWorking" | "employmentStatus" | "userId" | "outletId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
    LaundryJob?: boolean | Employee$LaundryJobArgs<ExtArgs>
    TransportJob?: boolean | Employee$TransportJobArgs<ExtArgs>
    EmployeeAttendance?: boolean | Employee$EmployeeAttendanceArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      outlet: Prisma.$OutletPayload<ExtArgs>
      LaundryJob: Prisma.$LaundryJobPayload<ExtArgs>[]
      TransportJob: Prisma.$TransportJobPayload<ExtArgs>[]
      EmployeeAttendance: Prisma.$EmployeeAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workShift: $Enums.EmployeeWorkShift | null
      station: $Enums.WorkerStation | null
      isPresent: boolean
      isWorking: boolean
      employmentStatus: $Enums.EmploymentStatus
      userId: number
      outletId: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    outlet<T extends OutletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutletDefaultArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    LaundryJob<T extends Employee$LaundryJobArgs<ExtArgs> = {}>(args?: Subset<T, Employee$LaundryJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    TransportJob<T extends Employee$TransportJobArgs<ExtArgs> = {}>(args?: Subset<T, Employee$TransportJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    EmployeeAttendance<T extends Employee$EmployeeAttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Employee$EmployeeAttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly workShift: FieldRef<"Employee", 'EmployeeWorkShift'>
    readonly station: FieldRef<"Employee", 'WorkerStation'>
    readonly isPresent: FieldRef<"Employee", 'Boolean'>
    readonly isWorking: FieldRef<"Employee", 'Boolean'>
    readonly employmentStatus: FieldRef<"Employee", 'EmploymentStatus'>
    readonly userId: FieldRef<"Employee", 'Int'>
    readonly outletId: FieldRef<"Employee", 'Int'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
    readonly isDeleted: FieldRef<"Employee", 'Boolean'>
    readonly deletedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.LaundryJob
   */
  export type Employee$LaundryJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    where?: LaundryJobWhereInput
    orderBy?: LaundryJobOrderByWithRelationInput | LaundryJobOrderByWithRelationInput[]
    cursor?: LaundryJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaundryJobScalarFieldEnum | LaundryJobScalarFieldEnum[]
  }

  /**
   * Employee.TransportJob
   */
  export type Employee$TransportJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    where?: TransportJobWhereInput
    orderBy?: TransportJobOrderByWithRelationInput | TransportJobOrderByWithRelationInput[]
    cursor?: TransportJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportJobScalarFieldEnum | TransportJobScalarFieldEnum[]
  }

  /**
   * Employee.EmployeeAttendance
   */
  export type Employee$EmployeeAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    where?: EmployeeAttendanceWhereInput
    orderBy?: EmployeeAttendanceOrderByWithRelationInput | EmployeeAttendanceOrderByWithRelationInput[]
    cursor?: EmployeeAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeAttendanceScalarFieldEnum | EmployeeAttendanceScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    isPrimary: boolean | null
    addressLine: string | null
    province: string | null
    regency: string | null
    district: string | null
    village: string | null
    latitude: string | null
    longitude: string | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    isPrimary: boolean | null
    addressLine: string | null
    province: string | null
    regency: string | null
    district: string | null
    village: string | null
    latitude: string | null
    longitude: string | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    isPrimary: number
    addressLine: number
    province: number
    regency: number
    district: number
    village: number
    latitude: number
    longitude: number
    customerId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    isPrimary?: true
    addressLine?: true
    province?: true
    regency?: true
    district?: true
    village?: true
    latitude?: true
    longitude?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    isPrimary?: true
    addressLine?: true
    province?: true
    regency?: true
    district?: true
    village?: true
    latitude?: true
    longitude?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    isPrimary?: true
    addressLine?: true
    province?: true
    regency?: true
    district?: true
    village?: true
    latitude?: true
    longitude?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    isPrimary: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    customerId: number | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isPrimary?: boolean
    addressLine?: boolean
    province?: boolean
    regency?: boolean
    district?: boolean
    village?: boolean
    latitude?: boolean
    longitude?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    customer?: boolean | Address$customerArgs<ExtArgs>
    Outlet?: boolean | Address$OutletArgs<ExtArgs>
    Order?: boolean | Address$OrderArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isPrimary?: boolean
    addressLine?: boolean
    province?: boolean
    regency?: boolean
    district?: boolean
    village?: boolean
    latitude?: boolean
    longitude?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    customer?: boolean | Address$customerArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isPrimary?: boolean
    addressLine?: boolean
    province?: boolean
    regency?: boolean
    district?: boolean
    village?: boolean
    latitude?: boolean
    longitude?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    customer?: boolean | Address$customerArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    isPrimary?: boolean
    addressLine?: boolean
    province?: boolean
    regency?: boolean
    district?: boolean
    village?: boolean
    latitude?: boolean
    longitude?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isPrimary" | "addressLine" | "province" | "regency" | "district" | "village" | "latitude" | "longitude" | "customerId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Address$customerArgs<ExtArgs>
    Outlet?: boolean | Address$OutletArgs<ExtArgs>
    Order?: boolean | Address$OrderArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Address$customerArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Address$customerArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs> | null
      Outlet: Prisma.$OutletPayload<ExtArgs> | null
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isPrimary: boolean
      addressLine: string
      province: string
      regency: string
      district: string
      village: string
      latitude: string
      longitude: string
      customerId: number | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Address$customerArgs<ExtArgs> = {}>(args?: Subset<T, Address$customerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Outlet<T extends Address$OutletArgs<ExtArgs> = {}>(args?: Subset<T, Address$OutletArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Order<T extends Address$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Address$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly isPrimary: FieldRef<"Address", 'Boolean'>
    readonly addressLine: FieldRef<"Address", 'String'>
    readonly province: FieldRef<"Address", 'String'>
    readonly regency: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly village: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'String'>
    readonly longitude: FieldRef<"Address", 'String'>
    readonly customerId: FieldRef<"Address", 'Int'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
    readonly isDeleted: FieldRef<"Address", 'Boolean'>
    readonly deletedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.customer
   */
  export type Address$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Address.Outlet
   */
  export type Address$OutletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    where?: OutletWhereInput
  }

  /**
   * Address.Order
   */
  export type Address$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Outlet
   */

  export type AggregateOutlet = {
    _count: OutletCountAggregateOutputType | null
    _avg: OutletAvgAggregateOutputType | null
    _sum: OutletSumAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  export type OutletAvgAggregateOutputType = {
    id: number | null
    outletAddressId: number | null
  }

  export type OutletSumAggregateOutputType = {
    id: number | null
    outletAddressId: number | null
  }

  export type OutletMinAggregateOutputType = {
    id: number | null
    outletName: string | null
    outletAddressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type OutletMaxAggregateOutputType = {
    id: number | null
    outletName: string | null
    outletAddressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type OutletCountAggregateOutputType = {
    id: number
    outletName: number
    outletAddressId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type OutletAvgAggregateInputType = {
    id?: true
    outletAddressId?: true
  }

  export type OutletSumAggregateInputType = {
    id?: true
    outletAddressId?: true
  }

  export type OutletMinAggregateInputType = {
    id?: true
    outletName?: true
    outletAddressId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type OutletMaxAggregateInputType = {
    id?: true
    outletName?: true
    outletAddressId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type OutletCountAggregateInputType = {
    id?: true
    outletName?: true
    outletAddressId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type OutletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outlet to aggregate.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outlets
    **/
    _count?: true | OutletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletMaxAggregateInputType
  }

  export type GetOutletAggregateType<T extends OutletAggregateArgs> = {
        [P in keyof T & keyof AggregateOutlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutlet[P]>
      : GetScalarType<T[P], AggregateOutlet[P]>
  }




  export type OutletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletWhereInput
    orderBy?: OutletOrderByWithAggregationInput | OutletOrderByWithAggregationInput[]
    by: OutletScalarFieldEnum[] | OutletScalarFieldEnum
    having?: OutletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletCountAggregateInputType | true
    _avg?: OutletAvgAggregateInputType
    _sum?: OutletSumAggregateInputType
    _min?: OutletMinAggregateInputType
    _max?: OutletMaxAggregateInputType
  }

  export type OutletGroupByOutputType = {
    id: number
    outletName: string
    outletAddressId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: OutletCountAggregateOutputType | null
    _avg: OutletAvgAggregateOutputType | null
    _sum: OutletSumAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  type GetOutletGroupByPayload<T extends OutletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletGroupByOutputType[P]>
            : GetScalarType<T[P], OutletGroupByOutputType[P]>
        }
      >
    >


  export type OutletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletName?: boolean
    outletAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    outletAddress?: boolean | AddressDefaultArgs<ExtArgs>
    Order?: boolean | Outlet$OrderArgs<ExtArgs>
    Employee?: boolean | Outlet$EmployeeArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlet"]>

  export type OutletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletName?: boolean
    outletAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    outletAddress?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlet"]>

  export type OutletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletName?: boolean
    outletAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    outletAddress?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlet"]>

  export type OutletSelectScalar = {
    id?: boolean
    outletName?: boolean
    outletAddressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type OutletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "outletName" | "outletAddressId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["outlet"]>
  export type OutletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outletAddress?: boolean | AddressDefaultArgs<ExtArgs>
    Order?: boolean | Outlet$OrderArgs<ExtArgs>
    Employee?: boolean | Outlet$EmployeeArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outletAddress?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type OutletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outletAddress?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $OutletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outlet"
    objects: {
      outletAddress: Prisma.$AddressPayload<ExtArgs>
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Employee: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      outletName: string
      outletAddressId: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["outlet"]>
    composites: {}
  }

  type OutletGetPayload<S extends boolean | null | undefined | OutletDefaultArgs> = $Result.GetResult<Prisma.$OutletPayload, S>

  type OutletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutletCountAggregateInputType | true
    }

  export interface OutletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outlet'], meta: { name: 'Outlet' } }
    /**
     * Find zero or one Outlet that matches the filter.
     * @param {OutletFindUniqueArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletFindUniqueArgs>(args: SelectSubset<T, OutletFindUniqueArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Outlet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutletFindUniqueOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Outlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindFirstArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletFindFirstArgs>(args?: SelectSubset<T, OutletFindFirstArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Outlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindFirstOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Outlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outlets
     * const outlets = await prisma.outlet.findMany()
     * 
     * // Get first 10 Outlets
     * const outlets = await prisma.outlet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletWithIdOnly = await prisma.outlet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutletFindManyArgs>(args?: SelectSubset<T, OutletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Outlet.
     * @param {OutletCreateArgs} args - Arguments to create a Outlet.
     * @example
     * // Create one Outlet
     * const Outlet = await prisma.outlet.create({
     *   data: {
     *     // ... data to create a Outlet
     *   }
     * })
     * 
     */
    create<T extends OutletCreateArgs>(args: SelectSubset<T, OutletCreateArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Outlets.
     * @param {OutletCreateManyArgs} args - Arguments to create many Outlets.
     * @example
     * // Create many Outlets
     * const outlet = await prisma.outlet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletCreateManyArgs>(args?: SelectSubset<T, OutletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outlets and returns the data saved in the database.
     * @param {OutletCreateManyAndReturnArgs} args - Arguments to create many Outlets.
     * @example
     * // Create many Outlets
     * const outlet = await prisma.outlet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outlets and only return the `id`
     * const outletWithIdOnly = await prisma.outlet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutletCreateManyAndReturnArgs>(args?: SelectSubset<T, OutletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Outlet.
     * @param {OutletDeleteArgs} args - Arguments to delete one Outlet.
     * @example
     * // Delete one Outlet
     * const Outlet = await prisma.outlet.delete({
     *   where: {
     *     // ... filter to delete one Outlet
     *   }
     * })
     * 
     */
    delete<T extends OutletDeleteArgs>(args: SelectSubset<T, OutletDeleteArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Outlet.
     * @param {OutletUpdateArgs} args - Arguments to update one Outlet.
     * @example
     * // Update one Outlet
     * const outlet = await prisma.outlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletUpdateArgs>(args: SelectSubset<T, OutletUpdateArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Outlets.
     * @param {OutletDeleteManyArgs} args - Arguments to filter Outlets to delete.
     * @example
     * // Delete a few Outlets
     * const { count } = await prisma.outlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletDeleteManyArgs>(args?: SelectSubset<T, OutletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outlets
     * const outlet = await prisma.outlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletUpdateManyArgs>(args: SelectSubset<T, OutletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outlets and returns the data updated in the database.
     * @param {OutletUpdateManyAndReturnArgs} args - Arguments to update many Outlets.
     * @example
     * // Update many Outlets
     * const outlet = await prisma.outlet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outlets and only return the `id`
     * const outletWithIdOnly = await prisma.outlet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutletUpdateManyAndReturnArgs>(args: SelectSubset<T, OutletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Outlet.
     * @param {OutletUpsertArgs} args - Arguments to update or create a Outlet.
     * @example
     * // Update or create a Outlet
     * const outlet = await prisma.outlet.upsert({
     *   create: {
     *     // ... data to create a Outlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outlet we want to update
     *   }
     * })
     */
    upsert<T extends OutletUpsertArgs>(args: SelectSubset<T, OutletUpsertArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletCountArgs} args - Arguments to filter Outlets to count.
     * @example
     * // Count the number of Outlets
     * const count = await prisma.outlet.count({
     *   where: {
     *     // ... the filter for the Outlets we want to count
     *   }
     * })
    **/
    count<T extends OutletCountArgs>(
      args?: Subset<T, OutletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutletAggregateArgs>(args: Subset<T, OutletAggregateArgs>): Prisma.PrismaPromise<GetOutletAggregateType<T>>

    /**
     * Group by Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletGroupByArgs['orderBy'] }
        : { orderBy?: OutletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outlet model
   */
  readonly fields: OutletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outletAddress<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Order<T extends Outlet$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Outlet$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Employee<T extends Outlet$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Outlet$EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outlet model
   */ 
  interface OutletFieldRefs {
    readonly id: FieldRef<"Outlet", 'Int'>
    readonly outletName: FieldRef<"Outlet", 'String'>
    readonly outletAddressId: FieldRef<"Outlet", 'Int'>
    readonly createdAt: FieldRef<"Outlet", 'DateTime'>
    readonly updatedAt: FieldRef<"Outlet", 'DateTime'>
    readonly isDeleted: FieldRef<"Outlet", 'Boolean'>
    readonly deletedAt: FieldRef<"Outlet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outlet findUnique
   */
  export type OutletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet findUniqueOrThrow
   */
  export type OutletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet findFirst
   */
  export type OutletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet findFirstOrThrow
   */
  export type OutletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet findMany
   */
  export type OutletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlets to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet create
   */
  export type OutletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The data needed to create a Outlet.
     */
    data: XOR<OutletCreateInput, OutletUncheckedCreateInput>
  }

  /**
   * Outlet createMany
   */
  export type OutletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outlets.
     */
    data: OutletCreateManyInput | OutletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outlet createManyAndReturn
   */
  export type OutletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * The data used to create many Outlets.
     */
    data: OutletCreateManyInput | OutletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outlet update
   */
  export type OutletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The data needed to update a Outlet.
     */
    data: XOR<OutletUpdateInput, OutletUncheckedUpdateInput>
    /**
     * Choose, which Outlet to update.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet updateMany
   */
  export type OutletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outlets.
     */
    data: XOR<OutletUpdateManyMutationInput, OutletUncheckedUpdateManyInput>
    /**
     * Filter which Outlets to update
     */
    where?: OutletWhereInput
    /**
     * Limit how many Outlets to update.
     */
    limit?: number
  }

  /**
   * Outlet updateManyAndReturn
   */
  export type OutletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * The data used to update Outlets.
     */
    data: XOR<OutletUpdateManyMutationInput, OutletUncheckedUpdateManyInput>
    /**
     * Filter which Outlets to update
     */
    where?: OutletWhereInput
    /**
     * Limit how many Outlets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outlet upsert
   */
  export type OutletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The filter to search for the Outlet to update in case it exists.
     */
    where: OutletWhereUniqueInput
    /**
     * In case the Outlet found by the `where` argument doesn't exist, create a new Outlet with this data.
     */
    create: XOR<OutletCreateInput, OutletUncheckedCreateInput>
    /**
     * In case the Outlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletUpdateInput, OutletUncheckedUpdateInput>
  }

  /**
   * Outlet delete
   */
  export type OutletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter which Outlet to delete.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet deleteMany
   */
  export type OutletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outlets to delete
     */
    where?: OutletWhereInput
    /**
     * Limit how many Outlets to delete.
     */
    limit?: number
  }

  /**
   * Outlet.Order
   */
  export type Outlet$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Outlet.Employee
   */
  export type Outlet$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Outlet without action
   */
  export type OutletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outlet
     */
    omit?: OutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    customerAddressId: number | null
    outletId: number | null
    laundryWeight: number | null
    laundryPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customerAddressId: number | null
    outletId: number | null
    laundryWeight: number | null
    laundryPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    orderStatus: $Enums.OrderStatus | null
    customerAddressId: number | null
    outletId: number | null
    laundryWeight: number | null
    laundryPrice: number | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    orderStatus: $Enums.OrderStatus | null
    customerAddressId: number | null
    outletId: number | null
    laundryWeight: number | null
    laundryPrice: number | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderStatus: number
    customerAddressId: number
    outletId: number
    laundryWeight: number
    laundryPrice: number
    isPaid: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    customerAddressId?: true
    outletId?: true
    laundryWeight?: true
    laundryPrice?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    customerAddressId?: true
    outletId?: true
    laundryWeight?: true
    laundryPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderStatus?: true
    customerAddressId?: true
    outletId?: true
    laundryWeight?: true
    laundryPrice?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderStatus?: true
    customerAddressId?: true
    outletId?: true
    laundryWeight?: true
    laundryPrice?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderStatus?: true
    customerAddressId?: true
    outletId?: true
    laundryWeight?: true
    laundryPrice?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    orderStatus: $Enums.OrderStatus
    customerAddressId: number
    outletId: number
    laundryWeight: number | null
    laundryPrice: number | null
    isPaid: boolean
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderStatus?: boolean
    customerAddressId?: boolean
    outletId?: boolean
    laundryWeight?: boolean
    laundryPrice?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    customerAddress?: boolean | AddressDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
    OrderItem?: boolean | Order$OrderItemArgs<ExtArgs>
    LaundryJob?: boolean | Order$LaundryJobArgs<ExtArgs>
    TransportJob?: boolean | Order$TransportJobArgs<ExtArgs>
    Payment?: boolean | Order$PaymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderStatus?: boolean
    customerAddressId?: boolean
    outletId?: boolean
    laundryWeight?: boolean
    laundryPrice?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    customerAddress?: boolean | AddressDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderStatus?: boolean
    customerAddressId?: boolean
    outletId?: boolean
    laundryWeight?: boolean
    laundryPrice?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    customerAddress?: boolean | AddressDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderStatus?: boolean
    customerAddressId?: boolean
    outletId?: boolean
    laundryWeight?: boolean
    laundryPrice?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderStatus" | "customerAddressId" | "outletId" | "laundryWeight" | "laundryPrice" | "isPaid" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerAddress?: boolean | AddressDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
    OrderItem?: boolean | Order$OrderItemArgs<ExtArgs>
    LaundryJob?: boolean | Order$LaundryJobArgs<ExtArgs>
    TransportJob?: boolean | Order$TransportJobArgs<ExtArgs>
    Payment?: boolean | Order$PaymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerAddress?: boolean | AddressDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerAddress?: boolean | AddressDefaultArgs<ExtArgs>
    outlet?: boolean | OutletDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customerAddress: Prisma.$AddressPayload<ExtArgs>
      outlet: Prisma.$OutletPayload<ExtArgs>
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
      LaundryJob: Prisma.$LaundryJobPayload<ExtArgs>[]
      TransportJob: Prisma.$TransportJobPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderStatus: $Enums.OrderStatus
      customerAddressId: number
      outletId: number
      laundryWeight: number | null
      laundryPrice: number | null
      isPaid: boolean
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customerAddress<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    outlet<T extends OutletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutletDefaultArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    OrderItem<T extends Order$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    LaundryJob<T extends Order$LaundryJobArgs<ExtArgs> = {}>(args?: Subset<T, Order$LaundryJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    TransportJob<T extends Order$TransportJobArgs<ExtArgs> = {}>(args?: Subset<T, Order$TransportJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Payment<T extends Order$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly orderStatus: FieldRef<"Order", 'OrderStatus'>
    readonly customerAddressId: FieldRef<"Order", 'Int'>
    readonly outletId: FieldRef<"Order", 'Int'>
    readonly laundryWeight: FieldRef<"Order", 'Int'>
    readonly laundryPrice: FieldRef<"Order", 'Int'>
    readonly isPaid: FieldRef<"Order", 'Boolean'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly isDeleted: FieldRef<"Order", 'Boolean'>
    readonly deletedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.OrderItem
   */
  export type Order$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.LaundryJob
   */
  export type Order$LaundryJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    where?: LaundryJobWhereInput
    orderBy?: LaundryJobOrderByWithRelationInput | LaundryJobOrderByWithRelationInput[]
    cursor?: LaundryJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaundryJobScalarFieldEnum | LaundryJobScalarFieldEnum[]
  }

  /**
   * Order.TransportJob
   */
  export type Order$TransportJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    where?: TransportJobWhereInput
    orderBy?: TransportJobOrderByWithRelationInput | TransportJobOrderByWithRelationInput[]
    cursor?: TransportJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportJobScalarFieldEnum | TransportJobScalarFieldEnum[]
  }

  /**
   * Order.Payment
   */
  export type Order$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    qty: number | null
    orderId: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    qty: number | null
    orderId: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    qty: number | null
    orderItemName: string | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    qty: number | null
    orderItemName: string | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    qty: number
    orderItemName: number
    orderId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    qty?: true
    orderId?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    qty?: true
    orderId?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    qty?: true
    orderItemName?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    qty?: true
    orderItemName?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    qty?: true
    orderItemName?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    qty: number | null
    orderItemName: string
    orderId: number | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qty?: boolean
    orderItemName?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderItem$orderArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qty?: boolean
    orderItemName?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderItem$orderArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qty?: boolean
    orderItemName?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderItem$orderArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    qty?: boolean
    orderItemName?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qty" | "orderItemName" | "orderId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderItem$orderArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderItem$orderArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderItem$orderArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      qty: number | null
      orderItemName: string
      orderId: number | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderItem$orderArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly qty: FieldRef<"OrderItem", 'Int'>
    readonly orderItemName: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
    readonly isDeleted: FieldRef<"OrderItem", 'Boolean'>
    readonly deletedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.order
   */
  export type OrderItem$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model LaundryJob
   */

  export type AggregateLaundryJob = {
    _count: LaundryJobCountAggregateOutputType | null
    _avg: LaundryJobAvgAggregateOutputType | null
    _sum: LaundryJobSumAggregateOutputType | null
    _min: LaundryJobMinAggregateOutputType | null
    _max: LaundryJobMaxAggregateOutputType | null
  }

  export type LaundryJobAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    workerId: number | null
  }

  export type LaundryJobSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    workerId: number | null
  }

  export type LaundryJobMinAggregateOutputType = {
    id: number | null
    station: $Enums.WorkerStation | null
    isByPassRequested: boolean | null
    isCompleted: boolean | null
    byPassNote: string | null
    byPassStatus: $Enums.ByPassStatus | null
    orderId: number | null
    workerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type LaundryJobMaxAggregateOutputType = {
    id: number | null
    station: $Enums.WorkerStation | null
    isByPassRequested: boolean | null
    isCompleted: boolean | null
    byPassNote: string | null
    byPassStatus: $Enums.ByPassStatus | null
    orderId: number | null
    workerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type LaundryJobCountAggregateOutputType = {
    id: number
    station: number
    isByPassRequested: number
    isCompleted: number
    byPassNote: number
    byPassStatus: number
    orderId: number
    workerId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type LaundryJobAvgAggregateInputType = {
    id?: true
    orderId?: true
    workerId?: true
  }

  export type LaundryJobSumAggregateInputType = {
    id?: true
    orderId?: true
    workerId?: true
  }

  export type LaundryJobMinAggregateInputType = {
    id?: true
    station?: true
    isByPassRequested?: true
    isCompleted?: true
    byPassNote?: true
    byPassStatus?: true
    orderId?: true
    workerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type LaundryJobMaxAggregateInputType = {
    id?: true
    station?: true
    isByPassRequested?: true
    isCompleted?: true
    byPassNote?: true
    byPassStatus?: true
    orderId?: true
    workerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type LaundryJobCountAggregateInputType = {
    id?: true
    station?: true
    isByPassRequested?: true
    isCompleted?: true
    byPassNote?: true
    byPassStatus?: true
    orderId?: true
    workerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type LaundryJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaundryJob to aggregate.
     */
    where?: LaundryJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaundryJobs to fetch.
     */
    orderBy?: LaundryJobOrderByWithRelationInput | LaundryJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaundryJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaundryJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaundryJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaundryJobs
    **/
    _count?: true | LaundryJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaundryJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaundryJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaundryJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaundryJobMaxAggregateInputType
  }

  export type GetLaundryJobAggregateType<T extends LaundryJobAggregateArgs> = {
        [P in keyof T & keyof AggregateLaundryJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaundryJob[P]>
      : GetScalarType<T[P], AggregateLaundryJob[P]>
  }




  export type LaundryJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaundryJobWhereInput
    orderBy?: LaundryJobOrderByWithAggregationInput | LaundryJobOrderByWithAggregationInput[]
    by: LaundryJobScalarFieldEnum[] | LaundryJobScalarFieldEnum
    having?: LaundryJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaundryJobCountAggregateInputType | true
    _avg?: LaundryJobAvgAggregateInputType
    _sum?: LaundryJobSumAggregateInputType
    _min?: LaundryJobMinAggregateInputType
    _max?: LaundryJobMaxAggregateInputType
  }

  export type LaundryJobGroupByOutputType = {
    id: number
    station: $Enums.WorkerStation
    isByPassRequested: boolean
    isCompleted: boolean
    byPassNote: string | null
    byPassStatus: $Enums.ByPassStatus | null
    orderId: number
    workerId: number | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: LaundryJobCountAggregateOutputType | null
    _avg: LaundryJobAvgAggregateOutputType | null
    _sum: LaundryJobSumAggregateOutputType | null
    _min: LaundryJobMinAggregateOutputType | null
    _max: LaundryJobMaxAggregateOutputType | null
  }

  type GetLaundryJobGroupByPayload<T extends LaundryJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaundryJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaundryJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaundryJobGroupByOutputType[P]>
            : GetScalarType<T[P], LaundryJobGroupByOutputType[P]>
        }
      >
    >


  export type LaundryJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    station?: boolean
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: boolean
    byPassStatus?: boolean
    orderId?: boolean
    workerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | LaundryJob$workerArgs<ExtArgs>
  }, ExtArgs["result"]["laundryJob"]>

  export type LaundryJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    station?: boolean
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: boolean
    byPassStatus?: boolean
    orderId?: boolean
    workerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | LaundryJob$workerArgs<ExtArgs>
  }, ExtArgs["result"]["laundryJob"]>

  export type LaundryJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    station?: boolean
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: boolean
    byPassStatus?: boolean
    orderId?: boolean
    workerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | LaundryJob$workerArgs<ExtArgs>
  }, ExtArgs["result"]["laundryJob"]>

  export type LaundryJobSelectScalar = {
    id?: boolean
    station?: boolean
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: boolean
    byPassStatus?: boolean
    orderId?: boolean
    workerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type LaundryJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "station" | "isByPassRequested" | "isCompleted" | "byPassNote" | "byPassStatus" | "orderId" | "workerId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["laundryJob"]>
  export type LaundryJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | LaundryJob$workerArgs<ExtArgs>
  }
  export type LaundryJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | LaundryJob$workerArgs<ExtArgs>
  }
  export type LaundryJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | LaundryJob$workerArgs<ExtArgs>
  }

  export type $LaundryJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaundryJob"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      worker: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      station: $Enums.WorkerStation
      isByPassRequested: boolean
      isCompleted: boolean
      byPassNote: string | null
      byPassStatus: $Enums.ByPassStatus | null
      orderId: number
      workerId: number | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["laundryJob"]>
    composites: {}
  }

  type LaundryJobGetPayload<S extends boolean | null | undefined | LaundryJobDefaultArgs> = $Result.GetResult<Prisma.$LaundryJobPayload, S>

  type LaundryJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaundryJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaundryJobCountAggregateInputType | true
    }

  export interface LaundryJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaundryJob'], meta: { name: 'LaundryJob' } }
    /**
     * Find zero or one LaundryJob that matches the filter.
     * @param {LaundryJobFindUniqueArgs} args - Arguments to find a LaundryJob
     * @example
     * // Get one LaundryJob
     * const laundryJob = await prisma.laundryJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaundryJobFindUniqueArgs>(args: SelectSubset<T, LaundryJobFindUniqueArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one LaundryJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaundryJobFindUniqueOrThrowArgs} args - Arguments to find a LaundryJob
     * @example
     * // Get one LaundryJob
     * const laundryJob = await prisma.laundryJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaundryJobFindUniqueOrThrowArgs>(args: SelectSubset<T, LaundryJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first LaundryJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaundryJobFindFirstArgs} args - Arguments to find a LaundryJob
     * @example
     * // Get one LaundryJob
     * const laundryJob = await prisma.laundryJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaundryJobFindFirstArgs>(args?: SelectSubset<T, LaundryJobFindFirstArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first LaundryJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaundryJobFindFirstOrThrowArgs} args - Arguments to find a LaundryJob
     * @example
     * // Get one LaundryJob
     * const laundryJob = await prisma.laundryJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaundryJobFindFirstOrThrowArgs>(args?: SelectSubset<T, LaundryJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more LaundryJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaundryJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaundryJobs
     * const laundryJobs = await prisma.laundryJob.findMany()
     * 
     * // Get first 10 LaundryJobs
     * const laundryJobs = await prisma.laundryJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laundryJobWithIdOnly = await prisma.laundryJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaundryJobFindManyArgs>(args?: SelectSubset<T, LaundryJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a LaundryJob.
     * @param {LaundryJobCreateArgs} args - Arguments to create a LaundryJob.
     * @example
     * // Create one LaundryJob
     * const LaundryJob = await prisma.laundryJob.create({
     *   data: {
     *     // ... data to create a LaundryJob
     *   }
     * })
     * 
     */
    create<T extends LaundryJobCreateArgs>(args: SelectSubset<T, LaundryJobCreateArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many LaundryJobs.
     * @param {LaundryJobCreateManyArgs} args - Arguments to create many LaundryJobs.
     * @example
     * // Create many LaundryJobs
     * const laundryJob = await prisma.laundryJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaundryJobCreateManyArgs>(args?: SelectSubset<T, LaundryJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaundryJobs and returns the data saved in the database.
     * @param {LaundryJobCreateManyAndReturnArgs} args - Arguments to create many LaundryJobs.
     * @example
     * // Create many LaundryJobs
     * const laundryJob = await prisma.laundryJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaundryJobs and only return the `id`
     * const laundryJobWithIdOnly = await prisma.laundryJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaundryJobCreateManyAndReturnArgs>(args?: SelectSubset<T, LaundryJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a LaundryJob.
     * @param {LaundryJobDeleteArgs} args - Arguments to delete one LaundryJob.
     * @example
     * // Delete one LaundryJob
     * const LaundryJob = await prisma.laundryJob.delete({
     *   where: {
     *     // ... filter to delete one LaundryJob
     *   }
     * })
     * 
     */
    delete<T extends LaundryJobDeleteArgs>(args: SelectSubset<T, LaundryJobDeleteArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one LaundryJob.
     * @param {LaundryJobUpdateArgs} args - Arguments to update one LaundryJob.
     * @example
     * // Update one LaundryJob
     * const laundryJob = await prisma.laundryJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaundryJobUpdateArgs>(args: SelectSubset<T, LaundryJobUpdateArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more LaundryJobs.
     * @param {LaundryJobDeleteManyArgs} args - Arguments to filter LaundryJobs to delete.
     * @example
     * // Delete a few LaundryJobs
     * const { count } = await prisma.laundryJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaundryJobDeleteManyArgs>(args?: SelectSubset<T, LaundryJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaundryJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaundryJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaundryJobs
     * const laundryJob = await prisma.laundryJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaundryJobUpdateManyArgs>(args: SelectSubset<T, LaundryJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaundryJobs and returns the data updated in the database.
     * @param {LaundryJobUpdateManyAndReturnArgs} args - Arguments to update many LaundryJobs.
     * @example
     * // Update many LaundryJobs
     * const laundryJob = await prisma.laundryJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LaundryJobs and only return the `id`
     * const laundryJobWithIdOnly = await prisma.laundryJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaundryJobUpdateManyAndReturnArgs>(args: SelectSubset<T, LaundryJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one LaundryJob.
     * @param {LaundryJobUpsertArgs} args - Arguments to update or create a LaundryJob.
     * @example
     * // Update or create a LaundryJob
     * const laundryJob = await prisma.laundryJob.upsert({
     *   create: {
     *     // ... data to create a LaundryJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaundryJob we want to update
     *   }
     * })
     */
    upsert<T extends LaundryJobUpsertArgs>(args: SelectSubset<T, LaundryJobUpsertArgs<ExtArgs>>): Prisma__LaundryJobClient<$Result.GetResult<Prisma.$LaundryJobPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of LaundryJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaundryJobCountArgs} args - Arguments to filter LaundryJobs to count.
     * @example
     * // Count the number of LaundryJobs
     * const count = await prisma.laundryJob.count({
     *   where: {
     *     // ... the filter for the LaundryJobs we want to count
     *   }
     * })
    **/
    count<T extends LaundryJobCountArgs>(
      args?: Subset<T, LaundryJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaundryJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaundryJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaundryJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaundryJobAggregateArgs>(args: Subset<T, LaundryJobAggregateArgs>): Prisma.PrismaPromise<GetLaundryJobAggregateType<T>>

    /**
     * Group by LaundryJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaundryJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaundryJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaundryJobGroupByArgs['orderBy'] }
        : { orderBy?: LaundryJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaundryJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaundryJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaundryJob model
   */
  readonly fields: LaundryJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaundryJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaundryJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    worker<T extends LaundryJob$workerArgs<ExtArgs> = {}>(args?: Subset<T, LaundryJob$workerArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LaundryJob model
   */ 
  interface LaundryJobFieldRefs {
    readonly id: FieldRef<"LaundryJob", 'Int'>
    readonly station: FieldRef<"LaundryJob", 'WorkerStation'>
    readonly isByPassRequested: FieldRef<"LaundryJob", 'Boolean'>
    readonly isCompleted: FieldRef<"LaundryJob", 'Boolean'>
    readonly byPassNote: FieldRef<"LaundryJob", 'String'>
    readonly byPassStatus: FieldRef<"LaundryJob", 'ByPassStatus'>
    readonly orderId: FieldRef<"LaundryJob", 'Int'>
    readonly workerId: FieldRef<"LaundryJob", 'Int'>
    readonly createdAt: FieldRef<"LaundryJob", 'DateTime'>
    readonly updatedAt: FieldRef<"LaundryJob", 'DateTime'>
    readonly isDeleted: FieldRef<"LaundryJob", 'Boolean'>
    readonly deletedAt: FieldRef<"LaundryJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LaundryJob findUnique
   */
  export type LaundryJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * Filter, which LaundryJob to fetch.
     */
    where: LaundryJobWhereUniqueInput
  }

  /**
   * LaundryJob findUniqueOrThrow
   */
  export type LaundryJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * Filter, which LaundryJob to fetch.
     */
    where: LaundryJobWhereUniqueInput
  }

  /**
   * LaundryJob findFirst
   */
  export type LaundryJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * Filter, which LaundryJob to fetch.
     */
    where?: LaundryJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaundryJobs to fetch.
     */
    orderBy?: LaundryJobOrderByWithRelationInput | LaundryJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaundryJobs.
     */
    cursor?: LaundryJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaundryJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaundryJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaundryJobs.
     */
    distinct?: LaundryJobScalarFieldEnum | LaundryJobScalarFieldEnum[]
  }

  /**
   * LaundryJob findFirstOrThrow
   */
  export type LaundryJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * Filter, which LaundryJob to fetch.
     */
    where?: LaundryJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaundryJobs to fetch.
     */
    orderBy?: LaundryJobOrderByWithRelationInput | LaundryJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaundryJobs.
     */
    cursor?: LaundryJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaundryJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaundryJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaundryJobs.
     */
    distinct?: LaundryJobScalarFieldEnum | LaundryJobScalarFieldEnum[]
  }

  /**
   * LaundryJob findMany
   */
  export type LaundryJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * Filter, which LaundryJobs to fetch.
     */
    where?: LaundryJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaundryJobs to fetch.
     */
    orderBy?: LaundryJobOrderByWithRelationInput | LaundryJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaundryJobs.
     */
    cursor?: LaundryJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaundryJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaundryJobs.
     */
    skip?: number
    distinct?: LaundryJobScalarFieldEnum | LaundryJobScalarFieldEnum[]
  }

  /**
   * LaundryJob create
   */
  export type LaundryJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * The data needed to create a LaundryJob.
     */
    data: XOR<LaundryJobCreateInput, LaundryJobUncheckedCreateInput>
  }

  /**
   * LaundryJob createMany
   */
  export type LaundryJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaundryJobs.
     */
    data: LaundryJobCreateManyInput | LaundryJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaundryJob createManyAndReturn
   */
  export type LaundryJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * The data used to create many LaundryJobs.
     */
    data: LaundryJobCreateManyInput | LaundryJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaundryJob update
   */
  export type LaundryJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * The data needed to update a LaundryJob.
     */
    data: XOR<LaundryJobUpdateInput, LaundryJobUncheckedUpdateInput>
    /**
     * Choose, which LaundryJob to update.
     */
    where: LaundryJobWhereUniqueInput
  }

  /**
   * LaundryJob updateMany
   */
  export type LaundryJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaundryJobs.
     */
    data: XOR<LaundryJobUpdateManyMutationInput, LaundryJobUncheckedUpdateManyInput>
    /**
     * Filter which LaundryJobs to update
     */
    where?: LaundryJobWhereInput
    /**
     * Limit how many LaundryJobs to update.
     */
    limit?: number
  }

  /**
   * LaundryJob updateManyAndReturn
   */
  export type LaundryJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * The data used to update LaundryJobs.
     */
    data: XOR<LaundryJobUpdateManyMutationInput, LaundryJobUncheckedUpdateManyInput>
    /**
     * Filter which LaundryJobs to update
     */
    where?: LaundryJobWhereInput
    /**
     * Limit how many LaundryJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaundryJob upsert
   */
  export type LaundryJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * The filter to search for the LaundryJob to update in case it exists.
     */
    where: LaundryJobWhereUniqueInput
    /**
     * In case the LaundryJob found by the `where` argument doesn't exist, create a new LaundryJob with this data.
     */
    create: XOR<LaundryJobCreateInput, LaundryJobUncheckedCreateInput>
    /**
     * In case the LaundryJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaundryJobUpdateInput, LaundryJobUncheckedUpdateInput>
  }

  /**
   * LaundryJob delete
   */
  export type LaundryJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
    /**
     * Filter which LaundryJob to delete.
     */
    where: LaundryJobWhereUniqueInput
  }

  /**
   * LaundryJob deleteMany
   */
  export type LaundryJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaundryJobs to delete
     */
    where?: LaundryJobWhereInput
    /**
     * Limit how many LaundryJobs to delete.
     */
    limit?: number
  }

  /**
   * LaundryJob.worker
   */
  export type LaundryJob$workerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * LaundryJob without action
   */
  export type LaundryJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaundryJob
     */
    select?: LaundryJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaundryJob
     */
    omit?: LaundryJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaundryJobInclude<ExtArgs> | null
  }


  /**
   * Model TransportJob
   */

  export type AggregateTransportJob = {
    _count: TransportJobCountAggregateOutputType | null
    _avg: TransportJobAvgAggregateOutputType | null
    _sum: TransportJobSumAggregateOutputType | null
    _min: TransportJobMinAggregateOutputType | null
    _max: TransportJobMaxAggregateOutputType | null
  }

  export type TransportJobAvgAggregateOutputType = {
    id: number | null
    distance: number | null
    orderId: number | null
    driverId: number | null
  }

  export type TransportJobSumAggregateOutputType = {
    id: number | null
    distance: number | null
    orderId: number | null
    driverId: number | null
  }

  export type TransportJobMinAggregateOutputType = {
    id: number | null
    transportType: $Enums.TransportType | null
    isCompleted: boolean | null
    distance: number | null
    orderId: number | null
    driverId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type TransportJobMaxAggregateOutputType = {
    id: number | null
    transportType: $Enums.TransportType | null
    isCompleted: boolean | null
    distance: number | null
    orderId: number | null
    driverId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type TransportJobCountAggregateOutputType = {
    id: number
    transportType: number
    isCompleted: number
    distance: number
    orderId: number
    driverId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type TransportJobAvgAggregateInputType = {
    id?: true
    distance?: true
    orderId?: true
    driverId?: true
  }

  export type TransportJobSumAggregateInputType = {
    id?: true
    distance?: true
    orderId?: true
    driverId?: true
  }

  export type TransportJobMinAggregateInputType = {
    id?: true
    transportType?: true
    isCompleted?: true
    distance?: true
    orderId?: true
    driverId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type TransportJobMaxAggregateInputType = {
    id?: true
    transportType?: true
    isCompleted?: true
    distance?: true
    orderId?: true
    driverId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type TransportJobCountAggregateInputType = {
    id?: true
    transportType?: true
    isCompleted?: true
    distance?: true
    orderId?: true
    driverId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type TransportJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportJob to aggregate.
     */
    where?: TransportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportJobs to fetch.
     */
    orderBy?: TransportJobOrderByWithRelationInput | TransportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransportJobs
    **/
    _count?: true | TransportJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportJobMaxAggregateInputType
  }

  export type GetTransportJobAggregateType<T extends TransportJobAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportJob[P]>
      : GetScalarType<T[P], AggregateTransportJob[P]>
  }




  export type TransportJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportJobWhereInput
    orderBy?: TransportJobOrderByWithAggregationInput | TransportJobOrderByWithAggregationInput[]
    by: TransportJobScalarFieldEnum[] | TransportJobScalarFieldEnum
    having?: TransportJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportJobCountAggregateInputType | true
    _avg?: TransportJobAvgAggregateInputType
    _sum?: TransportJobSumAggregateInputType
    _min?: TransportJobMinAggregateInputType
    _max?: TransportJobMaxAggregateInputType
  }

  export type TransportJobGroupByOutputType = {
    id: number
    transportType: $Enums.TransportType
    isCompleted: boolean
    distance: number
    orderId: number
    driverId: number | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: TransportJobCountAggregateOutputType | null
    _avg: TransportJobAvgAggregateOutputType | null
    _sum: TransportJobSumAggregateOutputType | null
    _min: TransportJobMinAggregateOutputType | null
    _max: TransportJobMaxAggregateOutputType | null
  }

  type GetTransportJobGroupByPayload<T extends TransportJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportJobGroupByOutputType[P]>
            : GetScalarType<T[P], TransportJobGroupByOutputType[P]>
        }
      >
    >


  export type TransportJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportType?: boolean
    isCompleted?: boolean
    distance?: boolean
    orderId?: boolean
    driverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | TransportJob$driverArgs<ExtArgs>
  }, ExtArgs["result"]["transportJob"]>

  export type TransportJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportType?: boolean
    isCompleted?: boolean
    distance?: boolean
    orderId?: boolean
    driverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | TransportJob$driverArgs<ExtArgs>
  }, ExtArgs["result"]["transportJob"]>

  export type TransportJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportType?: boolean
    isCompleted?: boolean
    distance?: boolean
    orderId?: boolean
    driverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | TransportJob$driverArgs<ExtArgs>
  }, ExtArgs["result"]["transportJob"]>

  export type TransportJobSelectScalar = {
    id?: boolean
    transportType?: boolean
    isCompleted?: boolean
    distance?: boolean
    orderId?: boolean
    driverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type TransportJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transportType" | "isCompleted" | "distance" | "orderId" | "driverId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["transportJob"]>
  export type TransportJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | TransportJob$driverArgs<ExtArgs>
  }
  export type TransportJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | TransportJob$driverArgs<ExtArgs>
  }
  export type TransportJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | TransportJob$driverArgs<ExtArgs>
  }

  export type $TransportJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransportJob"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      driver: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transportType: $Enums.TransportType
      isCompleted: boolean
      distance: number
      orderId: number
      driverId: number | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["transportJob"]>
    composites: {}
  }

  type TransportJobGetPayload<S extends boolean | null | undefined | TransportJobDefaultArgs> = $Result.GetResult<Prisma.$TransportJobPayload, S>

  type TransportJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportJobCountAggregateInputType | true
    }

  export interface TransportJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransportJob'], meta: { name: 'TransportJob' } }
    /**
     * Find zero or one TransportJob that matches the filter.
     * @param {TransportJobFindUniqueArgs} args - Arguments to find a TransportJob
     * @example
     * // Get one TransportJob
     * const transportJob = await prisma.transportJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportJobFindUniqueArgs>(args: SelectSubset<T, TransportJobFindUniqueArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TransportJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportJobFindUniqueOrThrowArgs} args - Arguments to find a TransportJob
     * @example
     * // Get one TransportJob
     * const transportJob = await prisma.transportJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportJobFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TransportJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportJobFindFirstArgs} args - Arguments to find a TransportJob
     * @example
     * // Get one TransportJob
     * const transportJob = await prisma.transportJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportJobFindFirstArgs>(args?: SelectSubset<T, TransportJobFindFirstArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TransportJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportJobFindFirstOrThrowArgs} args - Arguments to find a TransportJob
     * @example
     * // Get one TransportJob
     * const transportJob = await prisma.transportJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportJobFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TransportJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransportJobs
     * const transportJobs = await prisma.transportJob.findMany()
     * 
     * // Get first 10 TransportJobs
     * const transportJobs = await prisma.transportJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportJobWithIdOnly = await prisma.transportJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportJobFindManyArgs>(args?: SelectSubset<T, TransportJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TransportJob.
     * @param {TransportJobCreateArgs} args - Arguments to create a TransportJob.
     * @example
     * // Create one TransportJob
     * const TransportJob = await prisma.transportJob.create({
     *   data: {
     *     // ... data to create a TransportJob
     *   }
     * })
     * 
     */
    create<T extends TransportJobCreateArgs>(args: SelectSubset<T, TransportJobCreateArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TransportJobs.
     * @param {TransportJobCreateManyArgs} args - Arguments to create many TransportJobs.
     * @example
     * // Create many TransportJobs
     * const transportJob = await prisma.transportJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportJobCreateManyArgs>(args?: SelectSubset<T, TransportJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransportJobs and returns the data saved in the database.
     * @param {TransportJobCreateManyAndReturnArgs} args - Arguments to create many TransportJobs.
     * @example
     * // Create many TransportJobs
     * const transportJob = await prisma.transportJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransportJobs and only return the `id`
     * const transportJobWithIdOnly = await prisma.transportJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportJobCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TransportJob.
     * @param {TransportJobDeleteArgs} args - Arguments to delete one TransportJob.
     * @example
     * // Delete one TransportJob
     * const TransportJob = await prisma.transportJob.delete({
     *   where: {
     *     // ... filter to delete one TransportJob
     *   }
     * })
     * 
     */
    delete<T extends TransportJobDeleteArgs>(args: SelectSubset<T, TransportJobDeleteArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TransportJob.
     * @param {TransportJobUpdateArgs} args - Arguments to update one TransportJob.
     * @example
     * // Update one TransportJob
     * const transportJob = await prisma.transportJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportJobUpdateArgs>(args: SelectSubset<T, TransportJobUpdateArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TransportJobs.
     * @param {TransportJobDeleteManyArgs} args - Arguments to filter TransportJobs to delete.
     * @example
     * // Delete a few TransportJobs
     * const { count } = await prisma.transportJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportJobDeleteManyArgs>(args?: SelectSubset<T, TransportJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransportJobs
     * const transportJob = await prisma.transportJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportJobUpdateManyArgs>(args: SelectSubset<T, TransportJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportJobs and returns the data updated in the database.
     * @param {TransportJobUpdateManyAndReturnArgs} args - Arguments to update many TransportJobs.
     * @example
     * // Update many TransportJobs
     * const transportJob = await prisma.transportJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransportJobs and only return the `id`
     * const transportJobWithIdOnly = await prisma.transportJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportJobUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TransportJob.
     * @param {TransportJobUpsertArgs} args - Arguments to update or create a TransportJob.
     * @example
     * // Update or create a TransportJob
     * const transportJob = await prisma.transportJob.upsert({
     *   create: {
     *     // ... data to create a TransportJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransportJob we want to update
     *   }
     * })
     */
    upsert<T extends TransportJobUpsertArgs>(args: SelectSubset<T, TransportJobUpsertArgs<ExtArgs>>): Prisma__TransportJobClient<$Result.GetResult<Prisma.$TransportJobPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TransportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportJobCountArgs} args - Arguments to filter TransportJobs to count.
     * @example
     * // Count the number of TransportJobs
     * const count = await prisma.transportJob.count({
     *   where: {
     *     // ... the filter for the TransportJobs we want to count
     *   }
     * })
    **/
    count<T extends TransportJobCountArgs>(
      args?: Subset<T, TransportJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportJobAggregateArgs>(args: Subset<T, TransportJobAggregateArgs>): Prisma.PrismaPromise<GetTransportJobAggregateType<T>>

    /**
     * Group by TransportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportJobGroupByArgs['orderBy'] }
        : { orderBy?: TransportJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransportJob model
   */
  readonly fields: TransportJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransportJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    driver<T extends TransportJob$driverArgs<ExtArgs> = {}>(args?: Subset<T, TransportJob$driverArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransportJob model
   */ 
  interface TransportJobFieldRefs {
    readonly id: FieldRef<"TransportJob", 'Int'>
    readonly transportType: FieldRef<"TransportJob", 'TransportType'>
    readonly isCompleted: FieldRef<"TransportJob", 'Boolean'>
    readonly distance: FieldRef<"TransportJob", 'Int'>
    readonly orderId: FieldRef<"TransportJob", 'Int'>
    readonly driverId: FieldRef<"TransportJob", 'Int'>
    readonly createdAt: FieldRef<"TransportJob", 'DateTime'>
    readonly updatedAt: FieldRef<"TransportJob", 'DateTime'>
    readonly isDeleted: FieldRef<"TransportJob", 'Boolean'>
    readonly deletedAt: FieldRef<"TransportJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransportJob findUnique
   */
  export type TransportJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * Filter, which TransportJob to fetch.
     */
    where: TransportJobWhereUniqueInput
  }

  /**
   * TransportJob findUniqueOrThrow
   */
  export type TransportJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * Filter, which TransportJob to fetch.
     */
    where: TransportJobWhereUniqueInput
  }

  /**
   * TransportJob findFirst
   */
  export type TransportJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * Filter, which TransportJob to fetch.
     */
    where?: TransportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportJobs to fetch.
     */
    orderBy?: TransportJobOrderByWithRelationInput | TransportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportJobs.
     */
    cursor?: TransportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportJobs.
     */
    distinct?: TransportJobScalarFieldEnum | TransportJobScalarFieldEnum[]
  }

  /**
   * TransportJob findFirstOrThrow
   */
  export type TransportJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * Filter, which TransportJob to fetch.
     */
    where?: TransportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportJobs to fetch.
     */
    orderBy?: TransportJobOrderByWithRelationInput | TransportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportJobs.
     */
    cursor?: TransportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportJobs.
     */
    distinct?: TransportJobScalarFieldEnum | TransportJobScalarFieldEnum[]
  }

  /**
   * TransportJob findMany
   */
  export type TransportJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * Filter, which TransportJobs to fetch.
     */
    where?: TransportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportJobs to fetch.
     */
    orderBy?: TransportJobOrderByWithRelationInput | TransportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransportJobs.
     */
    cursor?: TransportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportJobs.
     */
    skip?: number
    distinct?: TransportJobScalarFieldEnum | TransportJobScalarFieldEnum[]
  }

  /**
   * TransportJob create
   */
  export type TransportJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * The data needed to create a TransportJob.
     */
    data: XOR<TransportJobCreateInput, TransportJobUncheckedCreateInput>
  }

  /**
   * TransportJob createMany
   */
  export type TransportJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransportJobs.
     */
    data: TransportJobCreateManyInput | TransportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransportJob createManyAndReturn
   */
  export type TransportJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * The data used to create many TransportJobs.
     */
    data: TransportJobCreateManyInput | TransportJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransportJob update
   */
  export type TransportJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * The data needed to update a TransportJob.
     */
    data: XOR<TransportJobUpdateInput, TransportJobUncheckedUpdateInput>
    /**
     * Choose, which TransportJob to update.
     */
    where: TransportJobWhereUniqueInput
  }

  /**
   * TransportJob updateMany
   */
  export type TransportJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransportJobs.
     */
    data: XOR<TransportJobUpdateManyMutationInput, TransportJobUncheckedUpdateManyInput>
    /**
     * Filter which TransportJobs to update
     */
    where?: TransportJobWhereInput
    /**
     * Limit how many TransportJobs to update.
     */
    limit?: number
  }

  /**
   * TransportJob updateManyAndReturn
   */
  export type TransportJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * The data used to update TransportJobs.
     */
    data: XOR<TransportJobUpdateManyMutationInput, TransportJobUncheckedUpdateManyInput>
    /**
     * Filter which TransportJobs to update
     */
    where?: TransportJobWhereInput
    /**
     * Limit how many TransportJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransportJob upsert
   */
  export type TransportJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * The filter to search for the TransportJob to update in case it exists.
     */
    where: TransportJobWhereUniqueInput
    /**
     * In case the TransportJob found by the `where` argument doesn't exist, create a new TransportJob with this data.
     */
    create: XOR<TransportJobCreateInput, TransportJobUncheckedCreateInput>
    /**
     * In case the TransportJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportJobUpdateInput, TransportJobUncheckedUpdateInput>
  }

  /**
   * TransportJob delete
   */
  export type TransportJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
    /**
     * Filter which TransportJob to delete.
     */
    where: TransportJobWhereUniqueInput
  }

  /**
   * TransportJob deleteMany
   */
  export type TransportJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportJobs to delete
     */
    where?: TransportJobWhereInput
    /**
     * Limit how many TransportJobs to delete.
     */
    limit?: number
  }

  /**
   * TransportJob.driver
   */
  export type TransportJob$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * TransportJob without action
   */
  export type TransportJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportJob
     */
    select?: TransportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportJob
     */
    omit?: TransportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportJobInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isRead: boolean | null
    url: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isRead: boolean | null
    url: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isRead: number
    url: number
    userId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isRead?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isRead?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isRead?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    title: string
    description: string
    isRead: boolean
    url: string | null
    userId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isRead?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isRead?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isRead?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isRead?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isRead" | "url" | "userId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      isRead: boolean
      url: string | null
      userId: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly description: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly url: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
    readonly isDeleted: FieldRef<"Notification", 'Boolean'>
    readonly deletedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    orderId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    orderId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: string | null
    snapToken: string | null
    snapRedirectURL: string | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: string | null
    snapToken: string | null
    snapRedirectURL: string | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    totalPrice: number
    paymentStatus: number
    paymentMethod: number
    snapToken: number
    snapRedirectURL: number
    orderId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    orderId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    totalPrice?: true
    orderId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    totalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    snapToken?: true
    snapRedirectURL?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    totalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    snapToken?: true
    snapRedirectURL?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    totalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    snapToken?: true
    snapRedirectURL?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    totalPrice: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod: string | null
    snapToken: string | null
    snapRedirectURL: string | null
    orderId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectURL?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectURL?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectURL?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectURL?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalPrice" | "paymentStatus" | "paymentMethod" | "snapToken" | "snapRedirectURL" | "orderId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      totalPrice: number
      paymentStatus: $Enums.PaymentStatus
      paymentMethod: string | null
      snapToken: string | null
      snapRedirectURL: string | null
      orderId: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly totalPrice: FieldRef<"Payment", 'Int'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly snapToken: FieldRef<"Payment", 'String'>
    readonly snapRedirectURL: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'Int'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly isDeleted: FieldRef<"Payment", 'Boolean'>
    readonly deletedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeAttendance
   */

  export type AggregateEmployeeAttendance = {
    _count: EmployeeAttendanceCountAggregateOutputType | null
    _avg: EmployeeAttendanceAvgAggregateOutputType | null
    _sum: EmployeeAttendanceSumAggregateOutputType | null
    _min: EmployeeAttendanceMinAggregateOutputType | null
    _max: EmployeeAttendanceMaxAggregateOutputType | null
  }

  export type EmployeeAttendanceAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EmployeeAttendanceSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EmployeeAttendanceMinAggregateOutputType = {
    id: number | null
    isAttended: boolean | null
    canClockIn: boolean | null
    employeeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type EmployeeAttendanceMaxAggregateOutputType = {
    id: number | null
    isAttended: boolean | null
    canClockIn: boolean | null
    employeeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type EmployeeAttendanceCountAggregateOutputType = {
    id: number
    isAttended: number
    canClockIn: number
    employeeId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type EmployeeAttendanceAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EmployeeAttendanceSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EmployeeAttendanceMinAggregateInputType = {
    id?: true
    isAttended?: true
    canClockIn?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type EmployeeAttendanceMaxAggregateInputType = {
    id?: true
    isAttended?: true
    canClockIn?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type EmployeeAttendanceCountAggregateInputType = {
    id?: true
    isAttended?: true
    canClockIn?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type EmployeeAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeAttendance to aggregate.
     */
    where?: EmployeeAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttendances to fetch.
     */
    orderBy?: EmployeeAttendanceOrderByWithRelationInput | EmployeeAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeAttendances
    **/
    _count?: true | EmployeeAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeAttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeAttendanceMaxAggregateInputType
  }

  export type GetEmployeeAttendanceAggregateType<T extends EmployeeAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeAttendance[P]>
      : GetScalarType<T[P], AggregateEmployeeAttendance[P]>
  }




  export type EmployeeAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeAttendanceWhereInput
    orderBy?: EmployeeAttendanceOrderByWithAggregationInput | EmployeeAttendanceOrderByWithAggregationInput[]
    by: EmployeeAttendanceScalarFieldEnum[] | EmployeeAttendanceScalarFieldEnum
    having?: EmployeeAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeAttendanceCountAggregateInputType | true
    _avg?: EmployeeAttendanceAvgAggregateInputType
    _sum?: EmployeeAttendanceSumAggregateInputType
    _min?: EmployeeAttendanceMinAggregateInputType
    _max?: EmployeeAttendanceMaxAggregateInputType
  }

  export type EmployeeAttendanceGroupByOutputType = {
    id: number
    isAttended: boolean
    canClockIn: boolean
    employeeId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: EmployeeAttendanceCountAggregateOutputType | null
    _avg: EmployeeAttendanceAvgAggregateOutputType | null
    _sum: EmployeeAttendanceSumAggregateOutputType | null
    _min: EmployeeAttendanceMinAggregateOutputType | null
    _max: EmployeeAttendanceMaxAggregateOutputType | null
  }

  type GetEmployeeAttendanceGroupByPayload<T extends EmployeeAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAttended?: boolean
    canClockIn?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    AttendanceRecord?: boolean | EmployeeAttendance$AttendanceRecordArgs<ExtArgs>
    _count?: boolean | EmployeeAttendanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeAttendance"]>

  export type EmployeeAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAttended?: boolean
    canClockIn?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeAttendance"]>

  export type EmployeeAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAttended?: boolean
    canClockIn?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeAttendance"]>

  export type EmployeeAttendanceSelectScalar = {
    id?: boolean
    isAttended?: boolean
    canClockIn?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type EmployeeAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isAttended" | "canClockIn" | "employeeId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["employeeAttendance"]>
  export type EmployeeAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    AttendanceRecord?: boolean | EmployeeAttendance$AttendanceRecordArgs<ExtArgs>
    _count?: boolean | EmployeeAttendanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmployeeAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EmployeeAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeAttendance"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      AttendanceRecord: Prisma.$AttendanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isAttended: boolean
      canClockIn: boolean
      employeeId: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["employeeAttendance"]>
    composites: {}
  }

  type EmployeeAttendanceGetPayload<S extends boolean | null | undefined | EmployeeAttendanceDefaultArgs> = $Result.GetResult<Prisma.$EmployeeAttendancePayload, S>

  type EmployeeAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeAttendanceCountAggregateInputType | true
    }

  export interface EmployeeAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeAttendance'], meta: { name: 'EmployeeAttendance' } }
    /**
     * Find zero or one EmployeeAttendance that matches the filter.
     * @param {EmployeeAttendanceFindUniqueArgs} args - Arguments to find a EmployeeAttendance
     * @example
     * // Get one EmployeeAttendance
     * const employeeAttendance = await prisma.employeeAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeAttendanceFindUniqueArgs>(args: SelectSubset<T, EmployeeAttendanceFindUniqueArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EmployeeAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeAttendanceFindUniqueOrThrowArgs} args - Arguments to find a EmployeeAttendance
     * @example
     * // Get one EmployeeAttendance
     * const employeeAttendance = await prisma.employeeAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EmployeeAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttendanceFindFirstArgs} args - Arguments to find a EmployeeAttendance
     * @example
     * // Get one EmployeeAttendance
     * const employeeAttendance = await prisma.employeeAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeAttendanceFindFirstArgs>(args?: SelectSubset<T, EmployeeAttendanceFindFirstArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EmployeeAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttendanceFindFirstOrThrowArgs} args - Arguments to find a EmployeeAttendance
     * @example
     * // Get one EmployeeAttendance
     * const employeeAttendance = await prisma.employeeAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EmployeeAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeAttendances
     * const employeeAttendances = await prisma.employeeAttendance.findMany()
     * 
     * // Get first 10 EmployeeAttendances
     * const employeeAttendances = await prisma.employeeAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeAttendanceWithIdOnly = await prisma.employeeAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeAttendanceFindManyArgs>(args?: SelectSubset<T, EmployeeAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EmployeeAttendance.
     * @param {EmployeeAttendanceCreateArgs} args - Arguments to create a EmployeeAttendance.
     * @example
     * // Create one EmployeeAttendance
     * const EmployeeAttendance = await prisma.employeeAttendance.create({
     *   data: {
     *     // ... data to create a EmployeeAttendance
     *   }
     * })
     * 
     */
    create<T extends EmployeeAttendanceCreateArgs>(args: SelectSubset<T, EmployeeAttendanceCreateArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EmployeeAttendances.
     * @param {EmployeeAttendanceCreateManyArgs} args - Arguments to create many EmployeeAttendances.
     * @example
     * // Create many EmployeeAttendances
     * const employeeAttendance = await prisma.employeeAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeAttendanceCreateManyArgs>(args?: SelectSubset<T, EmployeeAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeAttendances and returns the data saved in the database.
     * @param {EmployeeAttendanceCreateManyAndReturnArgs} args - Arguments to create many EmployeeAttendances.
     * @example
     * // Create many EmployeeAttendances
     * const employeeAttendance = await prisma.employeeAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeAttendances and only return the `id`
     * const employeeAttendanceWithIdOnly = await prisma.employeeAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EmployeeAttendance.
     * @param {EmployeeAttendanceDeleteArgs} args - Arguments to delete one EmployeeAttendance.
     * @example
     * // Delete one EmployeeAttendance
     * const EmployeeAttendance = await prisma.employeeAttendance.delete({
     *   where: {
     *     // ... filter to delete one EmployeeAttendance
     *   }
     * })
     * 
     */
    delete<T extends EmployeeAttendanceDeleteArgs>(args: SelectSubset<T, EmployeeAttendanceDeleteArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EmployeeAttendance.
     * @param {EmployeeAttendanceUpdateArgs} args - Arguments to update one EmployeeAttendance.
     * @example
     * // Update one EmployeeAttendance
     * const employeeAttendance = await prisma.employeeAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeAttendanceUpdateArgs>(args: SelectSubset<T, EmployeeAttendanceUpdateArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EmployeeAttendances.
     * @param {EmployeeAttendanceDeleteManyArgs} args - Arguments to filter EmployeeAttendances to delete.
     * @example
     * // Delete a few EmployeeAttendances
     * const { count } = await prisma.employeeAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeAttendanceDeleteManyArgs>(args?: SelectSubset<T, EmployeeAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeAttendances
     * const employeeAttendance = await prisma.employeeAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeAttendanceUpdateManyArgs>(args: SelectSubset<T, EmployeeAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeAttendances and returns the data updated in the database.
     * @param {EmployeeAttendanceUpdateManyAndReturnArgs} args - Arguments to update many EmployeeAttendances.
     * @example
     * // Update many EmployeeAttendances
     * const employeeAttendance = await prisma.employeeAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeAttendances and only return the `id`
     * const employeeAttendanceWithIdOnly = await prisma.employeeAttendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EmployeeAttendance.
     * @param {EmployeeAttendanceUpsertArgs} args - Arguments to update or create a EmployeeAttendance.
     * @example
     * // Update or create a EmployeeAttendance
     * const employeeAttendance = await prisma.employeeAttendance.upsert({
     *   create: {
     *     // ... data to create a EmployeeAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeAttendance we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeAttendanceUpsertArgs>(args: SelectSubset<T, EmployeeAttendanceUpsertArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EmployeeAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttendanceCountArgs} args - Arguments to filter EmployeeAttendances to count.
     * @example
     * // Count the number of EmployeeAttendances
     * const count = await prisma.employeeAttendance.count({
     *   where: {
     *     // ... the filter for the EmployeeAttendances we want to count
     *   }
     * })
    **/
    count<T extends EmployeeAttendanceCountArgs>(
      args?: Subset<T, EmployeeAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAttendanceAggregateArgs>(args: Subset<T, EmployeeAttendanceAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAttendanceAggregateType<T>>

    /**
     * Group by EmployeeAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeAttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeAttendance model
   */
  readonly fields: EmployeeAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    AttendanceRecord<T extends EmployeeAttendance$AttendanceRecordArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeAttendance$AttendanceRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeAttendance model
   */ 
  interface EmployeeAttendanceFieldRefs {
    readonly id: FieldRef<"EmployeeAttendance", 'Int'>
    readonly isAttended: FieldRef<"EmployeeAttendance", 'Boolean'>
    readonly canClockIn: FieldRef<"EmployeeAttendance", 'Boolean'>
    readonly employeeId: FieldRef<"EmployeeAttendance", 'Int'>
    readonly createdAt: FieldRef<"EmployeeAttendance", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeAttendance", 'DateTime'>
    readonly isDeleted: FieldRef<"EmployeeAttendance", 'Boolean'>
    readonly deletedAt: FieldRef<"EmployeeAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeAttendance findUnique
   */
  export type EmployeeAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAttendance to fetch.
     */
    where: EmployeeAttendanceWhereUniqueInput
  }

  /**
   * EmployeeAttendance findUniqueOrThrow
   */
  export type EmployeeAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAttendance to fetch.
     */
    where: EmployeeAttendanceWhereUniqueInput
  }

  /**
   * EmployeeAttendance findFirst
   */
  export type EmployeeAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAttendance to fetch.
     */
    where?: EmployeeAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttendances to fetch.
     */
    orderBy?: EmployeeAttendanceOrderByWithRelationInput | EmployeeAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeAttendances.
     */
    cursor?: EmployeeAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeAttendances.
     */
    distinct?: EmployeeAttendanceScalarFieldEnum | EmployeeAttendanceScalarFieldEnum[]
  }

  /**
   * EmployeeAttendance findFirstOrThrow
   */
  export type EmployeeAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAttendance to fetch.
     */
    where?: EmployeeAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttendances to fetch.
     */
    orderBy?: EmployeeAttendanceOrderByWithRelationInput | EmployeeAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeAttendances.
     */
    cursor?: EmployeeAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeAttendances.
     */
    distinct?: EmployeeAttendanceScalarFieldEnum | EmployeeAttendanceScalarFieldEnum[]
  }

  /**
   * EmployeeAttendance findMany
   */
  export type EmployeeAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAttendances to fetch.
     */
    where?: EmployeeAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttendances to fetch.
     */
    orderBy?: EmployeeAttendanceOrderByWithRelationInput | EmployeeAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeAttendances.
     */
    cursor?: EmployeeAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttendances.
     */
    skip?: number
    distinct?: EmployeeAttendanceScalarFieldEnum | EmployeeAttendanceScalarFieldEnum[]
  }

  /**
   * EmployeeAttendance create
   */
  export type EmployeeAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeAttendance.
     */
    data: XOR<EmployeeAttendanceCreateInput, EmployeeAttendanceUncheckedCreateInput>
  }

  /**
   * EmployeeAttendance createMany
   */
  export type EmployeeAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeAttendances.
     */
    data: EmployeeAttendanceCreateManyInput | EmployeeAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeAttendance createManyAndReturn
   */
  export type EmployeeAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeAttendances.
     */
    data: EmployeeAttendanceCreateManyInput | EmployeeAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeAttendance update
   */
  export type EmployeeAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeAttendance.
     */
    data: XOR<EmployeeAttendanceUpdateInput, EmployeeAttendanceUncheckedUpdateInput>
    /**
     * Choose, which EmployeeAttendance to update.
     */
    where: EmployeeAttendanceWhereUniqueInput
  }

  /**
   * EmployeeAttendance updateMany
   */
  export type EmployeeAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeAttendances.
     */
    data: XOR<EmployeeAttendanceUpdateManyMutationInput, EmployeeAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeAttendances to update
     */
    where?: EmployeeAttendanceWhereInput
    /**
     * Limit how many EmployeeAttendances to update.
     */
    limit?: number
  }

  /**
   * EmployeeAttendance updateManyAndReturn
   */
  export type EmployeeAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeAttendances.
     */
    data: XOR<EmployeeAttendanceUpdateManyMutationInput, EmployeeAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeAttendances to update
     */
    where?: EmployeeAttendanceWhereInput
    /**
     * Limit how many EmployeeAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeAttendance upsert
   */
  export type EmployeeAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeAttendance to update in case it exists.
     */
    where: EmployeeAttendanceWhereUniqueInput
    /**
     * In case the EmployeeAttendance found by the `where` argument doesn't exist, create a new EmployeeAttendance with this data.
     */
    create: XOR<EmployeeAttendanceCreateInput, EmployeeAttendanceUncheckedCreateInput>
    /**
     * In case the EmployeeAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeAttendanceUpdateInput, EmployeeAttendanceUncheckedUpdateInput>
  }

  /**
   * EmployeeAttendance delete
   */
  export type EmployeeAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
    /**
     * Filter which EmployeeAttendance to delete.
     */
    where: EmployeeAttendanceWhereUniqueInput
  }

  /**
   * EmployeeAttendance deleteMany
   */
  export type EmployeeAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeAttendances to delete
     */
    where?: EmployeeAttendanceWhereInput
    /**
     * Limit how many EmployeeAttendances to delete.
     */
    limit?: number
  }

  /**
   * EmployeeAttendance.AttendanceRecord
   */
  export type EmployeeAttendance$AttendanceRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * EmployeeAttendance without action
   */
  export type EmployeeAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttendance
     */
    select?: EmployeeAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttendance
     */
    omit?: EmployeeAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceRecord
   */

  export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null
    _avg: AttendanceRecordAvgAggregateOutputType | null
    _sum: AttendanceRecordSumAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  export type AttendanceRecordAvgAggregateOutputType = {
    id: number | null
    employeeAttendanceId: number | null
  }

  export type AttendanceRecordSumAggregateOutputType = {
    id: number | null
    employeeAttendanceId: number | null
  }

  export type AttendanceRecordMinAggregateOutputType = {
    id: number | null
    attendanceType: $Enums.AttendanceType | null
    employeeAttendanceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type AttendanceRecordMaxAggregateOutputType = {
    id: number | null
    attendanceType: $Enums.AttendanceType | null
    employeeAttendanceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type AttendanceRecordCountAggregateOutputType = {
    id: number
    attendanceType: number
    employeeAttendanceId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type AttendanceRecordAvgAggregateInputType = {
    id?: true
    employeeAttendanceId?: true
  }

  export type AttendanceRecordSumAggregateInputType = {
    id?: true
    employeeAttendanceId?: true
  }

  export type AttendanceRecordMinAggregateInputType = {
    id?: true
    attendanceType?: true
    employeeAttendanceId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type AttendanceRecordMaxAggregateInputType = {
    id?: true
    attendanceType?: true
    employeeAttendanceId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type AttendanceRecordCountAggregateInputType = {
    id?: true
    attendanceType?: true
    employeeAttendanceId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type AttendanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecord to aggregate.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceRecords
    **/
    _count?: true | AttendanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceRecord[P]>
      : GetScalarType<T[P], AggregateAttendanceRecord[P]>
  }




  export type AttendanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithAggregationInput | AttendanceRecordOrderByWithAggregationInput[]
    by: AttendanceRecordScalarFieldEnum[] | AttendanceRecordScalarFieldEnum
    having?: AttendanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceRecordCountAggregateInputType | true
    _avg?: AttendanceRecordAvgAggregateInputType
    _sum?: AttendanceRecordSumAggregateInputType
    _min?: AttendanceRecordMinAggregateInputType
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type AttendanceRecordGroupByOutputType = {
    id: number
    attendanceType: $Enums.AttendanceType
    employeeAttendanceId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: AttendanceRecordCountAggregateOutputType | null
    _avg: AttendanceRecordAvgAggregateOutputType | null
    _sum: AttendanceRecordSumAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendanceType?: boolean
    employeeAttendanceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    employeeAttendance?: boolean | EmployeeAttendanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendanceType?: boolean
    employeeAttendanceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    employeeAttendance?: boolean | EmployeeAttendanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendanceType?: boolean
    employeeAttendanceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    employeeAttendance?: boolean | EmployeeAttendanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectScalar = {
    id?: boolean
    attendanceType?: boolean
    employeeAttendanceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type AttendanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attendanceType" | "employeeAttendanceId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["attendanceRecord"]>
  export type AttendanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeAttendance?: boolean | EmployeeAttendanceDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeAttendance?: boolean | EmployeeAttendanceDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeAttendance?: boolean | EmployeeAttendanceDefaultArgs<ExtArgs>
  }

  export type $AttendanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceRecord"
    objects: {
      employeeAttendance: Prisma.$EmployeeAttendancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attendanceType: $Enums.AttendanceType
      employeeAttendanceId: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["attendanceRecord"]>
    composites: {}
  }

  type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = $Result.GetResult<Prisma.$AttendanceRecordPayload, S>

  type AttendanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceRecordCountAggregateInputType | true
    }

  export interface AttendanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'], meta: { name: 'AttendanceRecord' } }
    /**
     * Find zero or one AttendanceRecord that matches the filter.
     * @param {AttendanceRecordFindUniqueArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AttendanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceRecordFindUniqueOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AttendanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AttendanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AttendanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany()
     * 
     * // Get first 10 AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceRecordFindManyArgs>(args?: SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AttendanceRecord.
     * @param {AttendanceRecordCreateArgs} args - Arguments to create a AttendanceRecord.
     * @example
     * // Create one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.create({
     *   data: {
     *     // ... data to create a AttendanceRecord
     *   }
     * })
     * 
     */
    create<T extends AttendanceRecordCreateArgs>(args: SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AttendanceRecords.
     * @param {AttendanceRecordCreateManyArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceRecords and returns the data saved in the database.
     * @param {AttendanceRecordCreateManyAndReturnArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AttendanceRecord.
     * @param {AttendanceRecordDeleteArgs} args - Arguments to delete one AttendanceRecord.
     * @example
     * // Delete one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.delete({
     *   where: {
     *     // ... filter to delete one AttendanceRecord
     *   }
     * })
     * 
     */
    delete<T extends AttendanceRecordDeleteArgs>(args: SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AttendanceRecord.
     * @param {AttendanceRecordUpdateArgs} args - Arguments to update one AttendanceRecord.
     * @example
     * // Update one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceRecordUpdateArgs>(args: SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AttendanceRecords.
     * @param {AttendanceRecordDeleteManyArgs} args - Arguments to filter AttendanceRecords to delete.
     * @example
     * // Delete a few AttendanceRecords
     * const { count } = await prisma.attendanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords and returns the data updated in the database.
     * @param {AttendanceRecordUpdateManyAndReturnArgs} args - Arguments to update many AttendanceRecords.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AttendanceRecord.
     * @param {AttendanceRecordUpsertArgs} args - Arguments to update or create a AttendanceRecord.
     * @example
     * // Update or create a AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.upsert({
     *   create: {
     *     // ... data to create a AttendanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceRecordUpsertArgs>(args: SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordCountArgs} args - Arguments to filter AttendanceRecords to count.
     * @example
     * // Count the number of AttendanceRecords
     * const count = await prisma.attendanceRecord.count({
     *   where: {
     *     // ... the filter for the AttendanceRecords we want to count
     *   }
     * })
    **/
    count<T extends AttendanceRecordCountArgs>(
      args?: Subset<T, AttendanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>

    /**
     * Group by AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceRecord model
   */
  readonly fields: AttendanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employeeAttendance<T extends EmployeeAttendanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeAttendanceDefaultArgs<ExtArgs>>): Prisma__EmployeeAttendanceClient<$Result.GetResult<Prisma.$EmployeeAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceRecord model
   */ 
  interface AttendanceRecordFieldRefs {
    readonly id: FieldRef<"AttendanceRecord", 'Int'>
    readonly attendanceType: FieldRef<"AttendanceRecord", 'AttendanceType'>
    readonly employeeAttendanceId: FieldRef<"AttendanceRecord", 'Int'>
    readonly createdAt: FieldRef<"AttendanceRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"AttendanceRecord", 'DateTime'>
    readonly isDeleted: FieldRef<"AttendanceRecord", 'Boolean'>
    readonly deletedAt: FieldRef<"AttendanceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceRecord findUnique
   */
  export type AttendanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findUniqueOrThrow
   */
  export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findFirst
   */
  export type AttendanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findFirstOrThrow
   */
  export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findMany
   */
  export type AttendanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecords to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord create
   */
  export type AttendanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceRecord.
     */
    data: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
  }

  /**
   * AttendanceRecord createMany
   */
  export type AttendanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceRecord createManyAndReturn
   */
  export type AttendanceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord update
   */
  export type AttendanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceRecord.
     */
    data: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
    /**
     * Choose, which AttendanceRecord to update.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord updateMany
   */
  export type AttendanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
  }

  /**
   * AttendanceRecord updateManyAndReturn
   */
  export type AttendanceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord upsert
   */
  export type AttendanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceRecord to update in case it exists.
     */
    where: AttendanceRecordWhereUniqueInput
    /**
     * In case the AttendanceRecord found by the `where` argument doesn't exist, create a new AttendanceRecord with this data.
     */
    create: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
    /**
     * In case the AttendanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
  }

  /**
   * AttendanceRecord delete
   */
  export type AttendanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter which AttendanceRecord to delete.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord deleteMany
   */
  export type AttendanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecords to delete
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to delete.
     */
    limit?: number
  }

  /**
   * AttendanceRecord without action
   */
  export type AttendanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    workShift: 'workShift',
    station: 'station',
    isPresent: 'isPresent',
    isWorking: 'isWorking',
    employmentStatus: 'employmentStatus',
    userId: 'userId',
    outletId: 'outletId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    isPrimary: 'isPrimary',
    addressLine: 'addressLine',
    province: 'province',
    regency: 'regency',
    district: 'district',
    village: 'village',
    latitude: 'latitude',
    longitude: 'longitude',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const OutletScalarFieldEnum: {
    id: 'id',
    outletName: 'outletName',
    outletAddressId: 'outletAddressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type OutletScalarFieldEnum = (typeof OutletScalarFieldEnum)[keyof typeof OutletScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderStatus: 'orderStatus',
    customerAddressId: 'customerAddressId',
    outletId: 'outletId',
    laundryWeight: 'laundryWeight',
    laundryPrice: 'laundryPrice',
    isPaid: 'isPaid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    qty: 'qty',
    orderItemName: 'orderItemName',
    orderId: 'orderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const LaundryJobScalarFieldEnum: {
    id: 'id',
    station: 'station',
    isByPassRequested: 'isByPassRequested',
    isCompleted: 'isCompleted',
    byPassNote: 'byPassNote',
    byPassStatus: 'byPassStatus',
    orderId: 'orderId',
    workerId: 'workerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type LaundryJobScalarFieldEnum = (typeof LaundryJobScalarFieldEnum)[keyof typeof LaundryJobScalarFieldEnum]


  export const TransportJobScalarFieldEnum: {
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

  export type TransportJobScalarFieldEnum = (typeof TransportJobScalarFieldEnum)[keyof typeof TransportJobScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isRead: 'isRead',
    url: 'url',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    totalPrice: 'totalPrice',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    snapToken: 'snapToken',
    snapRedirectURL: 'snapRedirectURL',
    orderId: 'orderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const EmployeeAttendanceScalarFieldEnum: {
    id: 'id',
    isAttended: 'isAttended',
    canClockIn: 'canClockIn',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type EmployeeAttendanceScalarFieldEnum = (typeof EmployeeAttendanceScalarFieldEnum)[keyof typeof EmployeeAttendanceScalarFieldEnum]


  export const AttendanceRecordScalarFieldEnum: {
    id: 'id',
    attendanceType: 'attendanceType',
    employeeAttendanceId: 'employeeAttendanceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EmployeeWorkShift'
   */
  export type EnumEmployeeWorkShiftFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeWorkShift'>
    


  /**
   * Reference to a field of type 'EmployeeWorkShift[]'
   */
  export type ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeWorkShift[]'>
    


  /**
   * Reference to a field of type 'WorkerStation'
   */
  export type EnumWorkerStationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkerStation'>
    


  /**
   * Reference to a field of type 'WorkerStation[]'
   */
  export type ListEnumWorkerStationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkerStation[]'>
    


  /**
   * Reference to a field of type 'EmploymentStatus'
   */
  export type EnumEmploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentStatus'>
    


  /**
   * Reference to a field of type 'EmploymentStatus[]'
   */
  export type ListEnumEmploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'ByPassStatus'
   */
  export type EnumByPassStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ByPassStatus'>
    


  /**
   * Reference to a field of type 'ByPassStatus[]'
   */
  export type ListEnumByPassStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ByPassStatus[]'>
    


  /**
   * Reference to a field of type 'TransportType'
   */
  export type EnumTransportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportType'>
    


  /**
   * Reference to a field of type 'TransportType[]'
   */
  export type ListEnumTransportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'AttendanceType'
   */
  export type EnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType'>
    


  /**
   * Reference to a field of type 'AttendanceType[]'
   */
  export type ListEnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    token?: StringNullableFilter<"User"> | string | null
    tokenExpiresIn?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isDeleted?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Address?: AddressListRelationFilter
    Notification?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    tokenExpiresIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Employee?: EmployeeOrderByWithRelationInput
    Address?: AddressOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    token?: StringNullableFilter<"User"> | string | null
    tokenExpiresIn?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isDeleted?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Address?: AddressListRelationFilter
    Notification?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    tokenExpiresIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    tokenExpiresIn?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    workShift?: EnumEmployeeWorkShiftNullableFilter<"Employee"> | $Enums.EmployeeWorkShift | null
    station?: EnumWorkerStationNullableFilter<"Employee"> | $Enums.WorkerStation | null
    isPresent?: BoolFilter<"Employee"> | boolean
    isWorking?: BoolFilter<"Employee"> | boolean
    employmentStatus?: EnumEmploymentStatusFilter<"Employee"> | $Enums.EmploymentStatus
    userId?: IntFilter<"Employee"> | number
    outletId?: IntFilter<"Employee"> | number
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    isDeleted?: BoolFilter<"Employee"> | boolean
    deletedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outlet?: XOR<OutletScalarRelationFilter, OutletWhereInput>
    LaundryJob?: LaundryJobListRelationFilter
    TransportJob?: TransportJobListRelationFilter
    EmployeeAttendance?: EmployeeAttendanceListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    workShift?: SortOrderInput | SortOrder
    station?: SortOrderInput | SortOrder
    isPresent?: SortOrder
    isWorking?: SortOrder
    employmentStatus?: SortOrder
    userId?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    outlet?: OutletOrderByWithRelationInput
    LaundryJob?: LaundryJobOrderByRelationAggregateInput
    TransportJob?: TransportJobOrderByRelationAggregateInput
    EmployeeAttendance?: EmployeeAttendanceOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    workShift?: EnumEmployeeWorkShiftNullableFilter<"Employee"> | $Enums.EmployeeWorkShift | null
    station?: EnumWorkerStationNullableFilter<"Employee"> | $Enums.WorkerStation | null
    isPresent?: BoolFilter<"Employee"> | boolean
    isWorking?: BoolFilter<"Employee"> | boolean
    employmentStatus?: EnumEmploymentStatusFilter<"Employee"> | $Enums.EmploymentStatus
    outletId?: IntFilter<"Employee"> | number
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    isDeleted?: BoolFilter<"Employee"> | boolean
    deletedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outlet?: XOR<OutletScalarRelationFilter, OutletWhereInput>
    LaundryJob?: LaundryJobListRelationFilter
    TransportJob?: TransportJobListRelationFilter
    EmployeeAttendance?: EmployeeAttendanceListRelationFilter
  }, "id" | "userId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    workShift?: SortOrderInput | SortOrder
    station?: SortOrderInput | SortOrder
    isPresent?: SortOrder
    isWorking?: SortOrder
    employmentStatus?: SortOrder
    userId?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    workShift?: EnumEmployeeWorkShiftNullableWithAggregatesFilter<"Employee"> | $Enums.EmployeeWorkShift | null
    station?: EnumWorkerStationNullableWithAggregatesFilter<"Employee"> | $Enums.WorkerStation | null
    isPresent?: BoolWithAggregatesFilter<"Employee"> | boolean
    isWorking?: BoolWithAggregatesFilter<"Employee"> | boolean
    employmentStatus?: EnumEmploymentStatusWithAggregatesFilter<"Employee"> | $Enums.EmploymentStatus
    userId?: IntWithAggregatesFilter<"Employee"> | number
    outletId?: IntWithAggregatesFilter<"Employee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Employee"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    isPrimary?: BoolFilter<"Address"> | boolean
    addressLine?: StringFilter<"Address"> | string
    province?: StringFilter<"Address"> | string
    regency?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    village?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    customerId?: IntNullableFilter<"Address"> | number | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    isDeleted?: BoolFilter<"Address"> | boolean
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    customer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Outlet?: XOR<OutletNullableScalarRelationFilter, OutletWhereInput> | null
    Order?: OrderListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    isPrimary?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    regency?: SortOrder
    district?: SortOrder
    village?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    customer?: UserOrderByWithRelationInput
    Outlet?: OutletOrderByWithRelationInput
    Order?: OrderOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    isPrimary?: BoolFilter<"Address"> | boolean
    addressLine?: StringFilter<"Address"> | string
    province?: StringFilter<"Address"> | string
    regency?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    village?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    customerId?: IntNullableFilter<"Address"> | number | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    isDeleted?: BoolFilter<"Address"> | boolean
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    customer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Outlet?: XOR<OutletNullableScalarRelationFilter, OutletWhereInput> | null
    Order?: OrderListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    isPrimary?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    regency?: SortOrder
    district?: SortOrder
    village?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    isPrimary?: BoolWithAggregatesFilter<"Address"> | boolean
    addressLine?: StringWithAggregatesFilter<"Address"> | string
    province?: StringWithAggregatesFilter<"Address"> | string
    regency?: StringWithAggregatesFilter<"Address"> | string
    district?: StringWithAggregatesFilter<"Address"> | string
    village?: StringWithAggregatesFilter<"Address"> | string
    latitude?: StringWithAggregatesFilter<"Address"> | string
    longitude?: StringWithAggregatesFilter<"Address"> | string
    customerId?: IntNullableWithAggregatesFilter<"Address"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Address"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
  }

  export type OutletWhereInput = {
    AND?: OutletWhereInput | OutletWhereInput[]
    OR?: OutletWhereInput[]
    NOT?: OutletWhereInput | OutletWhereInput[]
    id?: IntFilter<"Outlet"> | number
    outletName?: StringFilter<"Outlet"> | string
    outletAddressId?: IntFilter<"Outlet"> | number
    createdAt?: DateTimeFilter<"Outlet"> | Date | string
    updatedAt?: DateTimeFilter<"Outlet"> | Date | string
    isDeleted?: BoolFilter<"Outlet"> | boolean
    deletedAt?: DateTimeNullableFilter<"Outlet"> | Date | string | null
    outletAddress?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    Order?: OrderListRelationFilter
    Employee?: EmployeeListRelationFilter
  }

  export type OutletOrderByWithRelationInput = {
    id?: SortOrder
    outletName?: SortOrder
    outletAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    outletAddress?: AddressOrderByWithRelationInput
    Order?: OrderOrderByRelationAggregateInput
    Employee?: EmployeeOrderByRelationAggregateInput
  }

  export type OutletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    outletAddressId?: number
    AND?: OutletWhereInput | OutletWhereInput[]
    OR?: OutletWhereInput[]
    NOT?: OutletWhereInput | OutletWhereInput[]
    outletName?: StringFilter<"Outlet"> | string
    createdAt?: DateTimeFilter<"Outlet"> | Date | string
    updatedAt?: DateTimeFilter<"Outlet"> | Date | string
    isDeleted?: BoolFilter<"Outlet"> | boolean
    deletedAt?: DateTimeNullableFilter<"Outlet"> | Date | string | null
    outletAddress?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    Order?: OrderListRelationFilter
    Employee?: EmployeeListRelationFilter
  }, "id" | "outletAddressId">

  export type OutletOrderByWithAggregationInput = {
    id?: SortOrder
    outletName?: SortOrder
    outletAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OutletCountOrderByAggregateInput
    _avg?: OutletAvgOrderByAggregateInput
    _max?: OutletMaxOrderByAggregateInput
    _min?: OutletMinOrderByAggregateInput
    _sum?: OutletSumOrderByAggregateInput
  }

  export type OutletScalarWhereWithAggregatesInput = {
    AND?: OutletScalarWhereWithAggregatesInput | OutletScalarWhereWithAggregatesInput[]
    OR?: OutletScalarWhereWithAggregatesInput[]
    NOT?: OutletScalarWhereWithAggregatesInput | OutletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Outlet"> | number
    outletName?: StringWithAggregatesFilter<"Outlet"> | string
    outletAddressId?: IntWithAggregatesFilter<"Outlet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Outlet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Outlet"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Outlet"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Outlet"> | Date | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    orderStatus?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    customerAddressId?: IntFilter<"Order"> | number
    outletId?: IntFilter<"Order"> | number
    laundryWeight?: IntNullableFilter<"Order"> | number | null
    laundryPrice?: IntNullableFilter<"Order"> | number | null
    isPaid?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    isDeleted?: BoolFilter<"Order"> | boolean
    deletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    customerAddress?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    outlet?: XOR<OutletScalarRelationFilter, OutletWhereInput>
    OrderItem?: OrderItemListRelationFilter
    LaundryJob?: LaundryJobListRelationFilter
    TransportJob?: TransportJobListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderStatus?: SortOrder
    customerAddressId?: SortOrder
    outletId?: SortOrder
    laundryWeight?: SortOrderInput | SortOrder
    laundryPrice?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    customerAddress?: AddressOrderByWithRelationInput
    outlet?: OutletOrderByWithRelationInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
    LaundryJob?: LaundryJobOrderByRelationAggregateInput
    TransportJob?: TransportJobOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderStatus?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    customerAddressId?: IntFilter<"Order"> | number
    outletId?: IntFilter<"Order"> | number
    laundryWeight?: IntNullableFilter<"Order"> | number | null
    laundryPrice?: IntNullableFilter<"Order"> | number | null
    isPaid?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    isDeleted?: BoolFilter<"Order"> | boolean
    deletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    customerAddress?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    outlet?: XOR<OutletScalarRelationFilter, OutletWhereInput>
    OrderItem?: OrderItemListRelationFilter
    LaundryJob?: LaundryJobListRelationFilter
    TransportJob?: TransportJobListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderStatus?: SortOrder
    customerAddressId?: SortOrder
    outletId?: SortOrder
    laundryWeight?: SortOrderInput | SortOrder
    laundryPrice?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    orderStatus?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    customerAddressId?: IntWithAggregatesFilter<"Order"> | number
    outletId?: IntWithAggregatesFilter<"Order"> | number
    laundryWeight?: IntNullableWithAggregatesFilter<"Order"> | number | null
    laundryPrice?: IntNullableWithAggregatesFilter<"Order"> | number | null
    isPaid?: BoolWithAggregatesFilter<"Order"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Order"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    qty?: IntNullableFilter<"OrderItem"> | number | null
    orderItemName?: StringFilter<"OrderItem"> | string
    orderId?: IntNullableFilter<"OrderItem"> | number | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    isDeleted?: BoolFilter<"OrderItem"> | boolean
    deletedAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    qty?: SortOrderInput | SortOrder
    orderItemName?: SortOrder
    orderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    qty?: IntNullableFilter<"OrderItem"> | number | null
    orderItemName?: StringFilter<"OrderItem"> | string
    orderId?: IntNullableFilter<"OrderItem"> | number | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    isDeleted?: BoolFilter<"OrderItem"> | boolean
    deletedAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    qty?: SortOrderInput | SortOrder
    orderItemName?: SortOrder
    orderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    qty?: IntNullableWithAggregatesFilter<"OrderItem"> | number | null
    orderItemName?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: IntNullableWithAggregatesFilter<"OrderItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"OrderItem"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"OrderItem"> | Date | string | null
  }

  export type LaundryJobWhereInput = {
    AND?: LaundryJobWhereInput | LaundryJobWhereInput[]
    OR?: LaundryJobWhereInput[]
    NOT?: LaundryJobWhereInput | LaundryJobWhereInput[]
    id?: IntFilter<"LaundryJob"> | number
    station?: EnumWorkerStationFilter<"LaundryJob"> | $Enums.WorkerStation
    isByPassRequested?: BoolFilter<"LaundryJob"> | boolean
    isCompleted?: BoolFilter<"LaundryJob"> | boolean
    byPassNote?: StringNullableFilter<"LaundryJob"> | string | null
    byPassStatus?: EnumByPassStatusNullableFilter<"LaundryJob"> | $Enums.ByPassStatus | null
    orderId?: IntFilter<"LaundryJob"> | number
    workerId?: IntNullableFilter<"LaundryJob"> | number | null
    createdAt?: DateTimeFilter<"LaundryJob"> | Date | string
    updatedAt?: DateTimeFilter<"LaundryJob"> | Date | string
    isDeleted?: BoolFilter<"LaundryJob"> | boolean
    deletedAt?: DateTimeNullableFilter<"LaundryJob"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    worker?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type LaundryJobOrderByWithRelationInput = {
    id?: SortOrder
    station?: SortOrder
    isByPassRequested?: SortOrder
    isCompleted?: SortOrder
    byPassNote?: SortOrderInput | SortOrder
    byPassStatus?: SortOrderInput | SortOrder
    orderId?: SortOrder
    workerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    worker?: EmployeeOrderByWithRelationInput
  }

  export type LaundryJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LaundryJobWhereInput | LaundryJobWhereInput[]
    OR?: LaundryJobWhereInput[]
    NOT?: LaundryJobWhereInput | LaundryJobWhereInput[]
    station?: EnumWorkerStationFilter<"LaundryJob"> | $Enums.WorkerStation
    isByPassRequested?: BoolFilter<"LaundryJob"> | boolean
    isCompleted?: BoolFilter<"LaundryJob"> | boolean
    byPassNote?: StringNullableFilter<"LaundryJob"> | string | null
    byPassStatus?: EnumByPassStatusNullableFilter<"LaundryJob"> | $Enums.ByPassStatus | null
    orderId?: IntFilter<"LaundryJob"> | number
    workerId?: IntNullableFilter<"LaundryJob"> | number | null
    createdAt?: DateTimeFilter<"LaundryJob"> | Date | string
    updatedAt?: DateTimeFilter<"LaundryJob"> | Date | string
    isDeleted?: BoolFilter<"LaundryJob"> | boolean
    deletedAt?: DateTimeNullableFilter<"LaundryJob"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    worker?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type LaundryJobOrderByWithAggregationInput = {
    id?: SortOrder
    station?: SortOrder
    isByPassRequested?: SortOrder
    isCompleted?: SortOrder
    byPassNote?: SortOrderInput | SortOrder
    byPassStatus?: SortOrderInput | SortOrder
    orderId?: SortOrder
    workerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LaundryJobCountOrderByAggregateInput
    _avg?: LaundryJobAvgOrderByAggregateInput
    _max?: LaundryJobMaxOrderByAggregateInput
    _min?: LaundryJobMinOrderByAggregateInput
    _sum?: LaundryJobSumOrderByAggregateInput
  }

  export type LaundryJobScalarWhereWithAggregatesInput = {
    AND?: LaundryJobScalarWhereWithAggregatesInput | LaundryJobScalarWhereWithAggregatesInput[]
    OR?: LaundryJobScalarWhereWithAggregatesInput[]
    NOT?: LaundryJobScalarWhereWithAggregatesInput | LaundryJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LaundryJob"> | number
    station?: EnumWorkerStationWithAggregatesFilter<"LaundryJob"> | $Enums.WorkerStation
    isByPassRequested?: BoolWithAggregatesFilter<"LaundryJob"> | boolean
    isCompleted?: BoolWithAggregatesFilter<"LaundryJob"> | boolean
    byPassNote?: StringNullableWithAggregatesFilter<"LaundryJob"> | string | null
    byPassStatus?: EnumByPassStatusNullableWithAggregatesFilter<"LaundryJob"> | $Enums.ByPassStatus | null
    orderId?: IntWithAggregatesFilter<"LaundryJob"> | number
    workerId?: IntNullableWithAggregatesFilter<"LaundryJob"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LaundryJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LaundryJob"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"LaundryJob"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"LaundryJob"> | Date | string | null
  }

  export type TransportJobWhereInput = {
    AND?: TransportJobWhereInput | TransportJobWhereInput[]
    OR?: TransportJobWhereInput[]
    NOT?: TransportJobWhereInput | TransportJobWhereInput[]
    id?: IntFilter<"TransportJob"> | number
    transportType?: EnumTransportTypeFilter<"TransportJob"> | $Enums.TransportType
    isCompleted?: BoolFilter<"TransportJob"> | boolean
    distance?: IntFilter<"TransportJob"> | number
    orderId?: IntFilter<"TransportJob"> | number
    driverId?: IntNullableFilter<"TransportJob"> | number | null
    createdAt?: DateTimeFilter<"TransportJob"> | Date | string
    updatedAt?: DateTimeFilter<"TransportJob"> | Date | string
    isDeleted?: BoolFilter<"TransportJob"> | boolean
    deletedAt?: DateTimeNullableFilter<"TransportJob"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    driver?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type TransportJobOrderByWithRelationInput = {
    id?: SortOrder
    transportType?: SortOrder
    isCompleted?: SortOrder
    distance?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    driver?: EmployeeOrderByWithRelationInput
  }

  export type TransportJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransportJobWhereInput | TransportJobWhereInput[]
    OR?: TransportJobWhereInput[]
    NOT?: TransportJobWhereInput | TransportJobWhereInput[]
    transportType?: EnumTransportTypeFilter<"TransportJob"> | $Enums.TransportType
    isCompleted?: BoolFilter<"TransportJob"> | boolean
    distance?: IntFilter<"TransportJob"> | number
    orderId?: IntFilter<"TransportJob"> | number
    driverId?: IntNullableFilter<"TransportJob"> | number | null
    createdAt?: DateTimeFilter<"TransportJob"> | Date | string
    updatedAt?: DateTimeFilter<"TransportJob"> | Date | string
    isDeleted?: BoolFilter<"TransportJob"> | boolean
    deletedAt?: DateTimeNullableFilter<"TransportJob"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    driver?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type TransportJobOrderByWithAggregationInput = {
    id?: SortOrder
    transportType?: SortOrder
    isCompleted?: SortOrder
    distance?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TransportJobCountOrderByAggregateInput
    _avg?: TransportJobAvgOrderByAggregateInput
    _max?: TransportJobMaxOrderByAggregateInput
    _min?: TransportJobMinOrderByAggregateInput
    _sum?: TransportJobSumOrderByAggregateInput
  }

  export type TransportJobScalarWhereWithAggregatesInput = {
    AND?: TransportJobScalarWhereWithAggregatesInput | TransportJobScalarWhereWithAggregatesInput[]
    OR?: TransportJobScalarWhereWithAggregatesInput[]
    NOT?: TransportJobScalarWhereWithAggregatesInput | TransportJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransportJob"> | number
    transportType?: EnumTransportTypeWithAggregatesFilter<"TransportJob"> | $Enums.TransportType
    isCompleted?: BoolWithAggregatesFilter<"TransportJob"> | boolean
    distance?: IntWithAggregatesFilter<"TransportJob"> | number
    orderId?: IntWithAggregatesFilter<"TransportJob"> | number
    driverId?: IntNullableWithAggregatesFilter<"TransportJob"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TransportJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransportJob"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"TransportJob"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TransportJob"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    url?: StringNullableFilter<"Notification"> | string | null
    userId?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    isDeleted?: BoolFilter<"Notification"> | boolean
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isRead?: SortOrder
    url?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    url?: StringNullableFilter<"Notification"> | string | null
    userId?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    isDeleted?: BoolFilter<"Notification"> | boolean
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isRead?: SortOrder
    url?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    description?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    url?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    userId?: IntWithAggregatesFilter<"Notification"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Notification"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    totalPrice?: IntFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    snapToken?: StringNullableFilter<"Payment"> | string | null
    snapRedirectURL?: StringNullableFilter<"Payment"> | string | null
    orderId?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    isDeleted?: BoolFilter<"Payment"> | boolean
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    snapToken?: SortOrderInput | SortOrder
    snapRedirectURL?: SortOrderInput | SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    totalPrice?: IntFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    snapToken?: StringNullableFilter<"Payment"> | string | null
    snapRedirectURL?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    isDeleted?: BoolFilter<"Payment"> | boolean
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    snapToken?: SortOrderInput | SortOrder
    snapRedirectURL?: SortOrderInput | SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    totalPrice?: IntWithAggregatesFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    snapToken?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    snapRedirectURL?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    orderId?: IntWithAggregatesFilter<"Payment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Payment"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type EmployeeAttendanceWhereInput = {
    AND?: EmployeeAttendanceWhereInput | EmployeeAttendanceWhereInput[]
    OR?: EmployeeAttendanceWhereInput[]
    NOT?: EmployeeAttendanceWhereInput | EmployeeAttendanceWhereInput[]
    id?: IntFilter<"EmployeeAttendance"> | number
    isAttended?: BoolFilter<"EmployeeAttendance"> | boolean
    canClockIn?: BoolFilter<"EmployeeAttendance"> | boolean
    employeeId?: IntFilter<"EmployeeAttendance"> | number
    createdAt?: DateTimeFilter<"EmployeeAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeAttendance"> | Date | string
    isDeleted?: BoolFilter<"EmployeeAttendance"> | boolean
    deletedAt?: DateTimeNullableFilter<"EmployeeAttendance"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    AttendanceRecord?: AttendanceRecordListRelationFilter
  }

  export type EmployeeAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    isAttended?: SortOrder
    canClockIn?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    AttendanceRecord?: AttendanceRecordOrderByRelationAggregateInput
  }

  export type EmployeeAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeAttendanceWhereInput | EmployeeAttendanceWhereInput[]
    OR?: EmployeeAttendanceWhereInput[]
    NOT?: EmployeeAttendanceWhereInput | EmployeeAttendanceWhereInput[]
    isAttended?: BoolFilter<"EmployeeAttendance"> | boolean
    canClockIn?: BoolFilter<"EmployeeAttendance"> | boolean
    employeeId?: IntFilter<"EmployeeAttendance"> | number
    createdAt?: DateTimeFilter<"EmployeeAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeAttendance"> | Date | string
    isDeleted?: BoolFilter<"EmployeeAttendance"> | boolean
    deletedAt?: DateTimeNullableFilter<"EmployeeAttendance"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    AttendanceRecord?: AttendanceRecordListRelationFilter
  }, "id">

  export type EmployeeAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    isAttended?: SortOrder
    canClockIn?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EmployeeAttendanceCountOrderByAggregateInput
    _avg?: EmployeeAttendanceAvgOrderByAggregateInput
    _max?: EmployeeAttendanceMaxOrderByAggregateInput
    _min?: EmployeeAttendanceMinOrderByAggregateInput
    _sum?: EmployeeAttendanceSumOrderByAggregateInput
  }

  export type EmployeeAttendanceScalarWhereWithAggregatesInput = {
    AND?: EmployeeAttendanceScalarWhereWithAggregatesInput | EmployeeAttendanceScalarWhereWithAggregatesInput[]
    OR?: EmployeeAttendanceScalarWhereWithAggregatesInput[]
    NOT?: EmployeeAttendanceScalarWhereWithAggregatesInput | EmployeeAttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmployeeAttendance"> | number
    isAttended?: BoolWithAggregatesFilter<"EmployeeAttendance"> | boolean
    canClockIn?: BoolWithAggregatesFilter<"EmployeeAttendance"> | boolean
    employeeId?: IntWithAggregatesFilter<"EmployeeAttendance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeAttendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeAttendance"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"EmployeeAttendance"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"EmployeeAttendance"> | Date | string | null
  }

  export type AttendanceRecordWhereInput = {
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    id?: IntFilter<"AttendanceRecord"> | number
    attendanceType?: EnumAttendanceTypeFilter<"AttendanceRecord"> | $Enums.AttendanceType
    employeeAttendanceId?: IntFilter<"AttendanceRecord"> | number
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    isDeleted?: BoolFilter<"AttendanceRecord"> | boolean
    deletedAt?: DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null
    employeeAttendance?: XOR<EmployeeAttendanceScalarRelationFilter, EmployeeAttendanceWhereInput>
  }

  export type AttendanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    attendanceType?: SortOrder
    employeeAttendanceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    employeeAttendance?: EmployeeAttendanceOrderByWithRelationInput
  }

  export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    attendanceType?: EnumAttendanceTypeFilter<"AttendanceRecord"> | $Enums.AttendanceType
    employeeAttendanceId?: IntFilter<"AttendanceRecord"> | number
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    isDeleted?: BoolFilter<"AttendanceRecord"> | boolean
    deletedAt?: DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null
    employeeAttendance?: XOR<EmployeeAttendanceScalarRelationFilter, EmployeeAttendanceWhereInput>
  }, "id">

  export type AttendanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    attendanceType?: SortOrder
    employeeAttendanceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AttendanceRecordCountOrderByAggregateInput
    _avg?: AttendanceRecordAvgOrderByAggregateInput
    _max?: AttendanceRecordMaxOrderByAggregateInput
    _min?: AttendanceRecordMinOrderByAggregateInput
    _sum?: AttendanceRecordSumOrderByAggregateInput
  }

  export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    OR?: AttendanceRecordScalarWhereWithAggregatesInput[]
    NOT?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttendanceRecord"> | number
    attendanceType?: EnumAttendanceTypeWithAggregatesFilter<"AttendanceRecord"> | $Enums.AttendanceType
    employeeAttendanceId?: IntWithAggregatesFilter<"AttendanceRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"AttendanceRecord"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"AttendanceRecord"> | Date | string | null
  }

  export type UserCreateInput = {
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Employee?: EmployeeCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutCustomerInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutCustomerNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeCreateInput = {
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutEmployeeInput
    outlet: OutletCreateNestedOneWithoutEmployeeInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    userId: number
    outletId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneRequiredWithoutEmployeeNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    userId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    userId: number
    outletId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    userId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateInput = {
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customer?: UserCreateNestedOneWithoutAddressInput
    Outlet?: OutletCreateNestedOneWithoutOutletAddressInput
    Order?: OrderCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Outlet?: OutletUncheckedCreateNestedOneWithoutOutletAddressInput
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressUpdateInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneWithoutAddressNestedInput
    Outlet?: OutletUpdateOneWithoutOutletAddressNestedInput
    Order?: OrderUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Outlet?: OutletUncheckedUpdateOneWithoutOutletAddressNestedInput
    Order?: OrderUncheckedUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type AddressUpdateManyMutationInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutletCreateInput = {
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    outletAddress: AddressCreateNestedOneWithoutOutletInput
    Order?: OrderCreateNestedManyWithoutOutletInput
    Employee?: EmployeeCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateInput = {
    id?: number
    outletName: string
    outletAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutOutletInput
    Employee?: EmployeeUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletUpdateInput = {
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outletAddress?: AddressUpdateOneRequiredWithoutOutletNestedInput
    Order?: OrderUpdateManyWithoutOutletNestedInput
    Employee?: EmployeeUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    outletName?: StringFieldUpdateOperationsInput | string
    outletAddressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutOutletNestedInput
    Employee?: EmployeeUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OutletCreateManyInput = {
    id?: number
    outletName: string
    outletAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OutletUpdateManyMutationInput = {
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    outletName?: StringFieldUpdateOperationsInput | string
    outletAddressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateInput = {
    orderStatus?: $Enums.OrderStatus
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customerAddress: AddressCreateNestedOneWithoutOrderInput
    outlet: OutletCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    outlet?: OutletUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateInput = {
    qty?: number | null
    orderItemName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    order?: OrderCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    qty?: number | null
    orderItemName: string
    orderId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderItemUpdateInput = {
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    orderItemName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    orderItemName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateManyInput = {
    id?: number
    qty?: number | null
    orderItemName: string
    orderId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderItemUpdateManyMutationInput = {
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    orderItemName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    orderItemName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaundryJobCreateInput = {
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    order: OrderCreateNestedOneWithoutLaundryJobInput
    worker?: EmployeeCreateNestedOneWithoutLaundryJobInput
  }

  export type LaundryJobUncheckedCreateInput = {
    id?: number
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    orderId: number
    workerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type LaundryJobUpdateInput = {
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutLaundryJobNestedInput
    worker?: EmployeeUpdateOneWithoutLaundryJobNestedInput
  }

  export type LaundryJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    orderId?: IntFieldUpdateOperationsInput | number
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaundryJobCreateManyInput = {
    id?: number
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    orderId: number
    workerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type LaundryJobUpdateManyMutationInput = {
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaundryJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    orderId?: IntFieldUpdateOperationsInput | number
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransportJobCreateInput = {
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    order: OrderCreateNestedOneWithoutTransportJobInput
    driver?: EmployeeCreateNestedOneWithoutTransportJobInput
  }

  export type TransportJobUncheckedCreateInput = {
    id?: number
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    orderId: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type TransportJobUpdateInput = {
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutTransportJobNestedInput
    driver?: EmployeeUpdateOneWithoutTransportJobNestedInput
  }

  export type TransportJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransportJobCreateManyInput = {
    id?: number
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    orderId: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type TransportJobUpdateManyMutationInput = {
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransportJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    title: string
    description: string
    isRead?: boolean
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    isRead?: boolean
    url?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    title: string
    description: string
    isRead?: boolean
    url?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateInput = {
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectURL?: string | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: number
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectURL?: string | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeAttendanceCreateInput = {
    isAttended?: boolean
    canClockIn?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutEmployeeAttendanceInput
    AttendanceRecord?: AttendanceRecordCreateNestedManyWithoutEmployeeAttendanceInput
  }

  export type EmployeeAttendanceUncheckedCreateInput = {
    id?: number
    isAttended?: boolean
    canClockIn?: boolean
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    AttendanceRecord?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeAttendanceInput
  }

  export type EmployeeAttendanceUpdateInput = {
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeAttendanceNestedInput
    AttendanceRecord?: AttendanceRecordUpdateManyWithoutEmployeeAttendanceNestedInput
  }

  export type EmployeeAttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AttendanceRecord?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeAttendanceNestedInput
  }

  export type EmployeeAttendanceCreateManyInput = {
    id?: number
    isAttended?: boolean
    canClockIn?: boolean
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type EmployeeAttendanceUpdateManyMutationInput = {
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeAttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordCreateInput = {
    attendanceType: $Enums.AttendanceType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    employeeAttendance: EmployeeAttendanceCreateNestedOneWithoutAttendanceRecordInput
  }

  export type AttendanceRecordUncheckedCreateInput = {
    id?: number
    attendanceType: $Enums.AttendanceType
    employeeAttendanceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type AttendanceRecordUpdateInput = {
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeAttendance?: EmployeeAttendanceUpdateOneRequiredWithoutAttendanceRecordNestedInput
  }

  export type AttendanceRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    employeeAttendanceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordCreateManyInput = {
    id?: number
    attendanceType: $Enums.AttendanceType
    employeeAttendanceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type AttendanceRecordUpdateManyMutationInput = {
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    employeeAttendanceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    token?: SortOrder
    tokenExpiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    token?: SortOrder
    tokenExpiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    token?: SortOrder
    tokenExpiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEmployeeWorkShiftNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeWorkShift | EnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmployeeWorkShiftNullableFilter<$PrismaModel> | $Enums.EmployeeWorkShift | null
  }

  export type EnumWorkerStationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWorkerStationNullableFilter<$PrismaModel> | $Enums.WorkerStation | null
  }

  export type EnumEmploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusFilter<$PrismaModel> | $Enums.EmploymentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OutletScalarRelationFilter = {
    is?: OutletWhereInput
    isNot?: OutletWhereInput
  }

  export type LaundryJobListRelationFilter = {
    every?: LaundryJobWhereInput
    some?: LaundryJobWhereInput
    none?: LaundryJobWhereInput
  }

  export type TransportJobListRelationFilter = {
    every?: TransportJobWhereInput
    some?: TransportJobWhereInput
    none?: TransportJobWhereInput
  }

  export type EmployeeAttendanceListRelationFilter = {
    every?: EmployeeAttendanceWhereInput
    some?: EmployeeAttendanceWhereInput
    none?: EmployeeAttendanceWhereInput
  }

  export type LaundryJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransportJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    workShift?: SortOrder
    station?: SortOrder
    isPresent?: SortOrder
    isWorking?: SortOrder
    employmentStatus?: SortOrder
    userId?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outletId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    workShift?: SortOrder
    station?: SortOrder
    isPresent?: SortOrder
    isWorking?: SortOrder
    employmentStatus?: SortOrder
    userId?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    workShift?: SortOrder
    station?: SortOrder
    isPresent?: SortOrder
    isWorking?: SortOrder
    employmentStatus?: SortOrder
    userId?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outletId?: SortOrder
  }

  export type EnumEmployeeWorkShiftNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeWorkShift | EnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmployeeWorkShiftNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeWorkShift | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmployeeWorkShiftNullableFilter<$PrismaModel>
    _max?: NestedEnumEmployeeWorkShiftNullableFilter<$PrismaModel>
  }

  export type EnumWorkerStationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWorkerStationNullableWithAggregatesFilter<$PrismaModel> | $Enums.WorkerStation | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumWorkerStationNullableFilter<$PrismaModel>
    _max?: NestedEnumWorkerStationNullableFilter<$PrismaModel>
  }

  export type EnumEmploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumEmploymentStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OutletNullableScalarRelationFilter = {
    is?: OutletWhereInput | null
    isNot?: OutletWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    isPrimary?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    regency?: SortOrder
    district?: SortOrder
    village?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    isPrimary?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    regency?: SortOrder
    district?: SortOrder
    village?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    isPrimary?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    regency?: SortOrder
    district?: SortOrder
    village?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutletCountOrderByAggregateInput = {
    id?: SortOrder
    outletName?: SortOrder
    outletAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OutletAvgOrderByAggregateInput = {
    id?: SortOrder
    outletAddressId?: SortOrder
  }

  export type OutletMaxOrderByAggregateInput = {
    id?: SortOrder
    outletName?: SortOrder
    outletAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OutletMinOrderByAggregateInput = {
    id?: SortOrder
    outletName?: SortOrder
    outletAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OutletSumOrderByAggregateInput = {
    id?: SortOrder
    outletAddressId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderStatus?: SortOrder
    customerAddressId?: SortOrder
    outletId?: SortOrder
    laundryWeight?: SortOrder
    laundryPrice?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerAddressId?: SortOrder
    outletId?: SortOrder
    laundryWeight?: SortOrder
    laundryPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderStatus?: SortOrder
    customerAddressId?: SortOrder
    outletId?: SortOrder
    laundryWeight?: SortOrder
    laundryPrice?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderStatus?: SortOrder
    customerAddressId?: SortOrder
    outletId?: SortOrder
    laundryWeight?: SortOrder
    laundryPrice?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerAddressId?: SortOrder
    outletId?: SortOrder
    laundryWeight?: SortOrder
    laundryPrice?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    orderItemName?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    orderItemName?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    orderItemName?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
  }

  export type EnumWorkerStationFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerStationFilter<$PrismaModel> | $Enums.WorkerStation
  }

  export type EnumByPassStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ByPassStatus | EnumByPassStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumByPassStatusNullableFilter<$PrismaModel> | $Enums.ByPassStatus | null
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type LaundryJobCountOrderByAggregateInput = {
    id?: SortOrder
    station?: SortOrder
    isByPassRequested?: SortOrder
    isCompleted?: SortOrder
    byPassNote?: SortOrder
    byPassStatus?: SortOrder
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type LaundryJobAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    workerId?: SortOrder
  }

  export type LaundryJobMaxOrderByAggregateInput = {
    id?: SortOrder
    station?: SortOrder
    isByPassRequested?: SortOrder
    isCompleted?: SortOrder
    byPassNote?: SortOrder
    byPassStatus?: SortOrder
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type LaundryJobMinOrderByAggregateInput = {
    id?: SortOrder
    station?: SortOrder
    isByPassRequested?: SortOrder
    isCompleted?: SortOrder
    byPassNote?: SortOrder
    byPassStatus?: SortOrder
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type LaundryJobSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    workerId?: SortOrder
  }

  export type EnumWorkerStationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerStationWithAggregatesFilter<$PrismaModel> | $Enums.WorkerStation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkerStationFilter<$PrismaModel>
    _max?: NestedEnumWorkerStationFilter<$PrismaModel>
  }

  export type EnumByPassStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ByPassStatus | EnumByPassStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumByPassStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ByPassStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumByPassStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumByPassStatusNullableFilter<$PrismaModel>
  }

  export type EnumTransportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportType | EnumTransportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportTypeFilter<$PrismaModel> | $Enums.TransportType
  }

  export type TransportJobCountOrderByAggregateInput = {
    id?: SortOrder
    transportType?: SortOrder
    isCompleted?: SortOrder
    distance?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransportJobAvgOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
  }

  export type TransportJobMaxOrderByAggregateInput = {
    id?: SortOrder
    transportType?: SortOrder
    isCompleted?: SortOrder
    distance?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransportJobMinOrderByAggregateInput = {
    id?: SortOrder
    transportType?: SortOrder
    isCompleted?: SortOrder
    distance?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransportJobSumOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
  }

  export type EnumTransportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportType | EnumTransportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportTypeFilter<$PrismaModel>
    _max?: NestedEnumTransportTypeFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isRead?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isRead?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isRead?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    snapToken?: SortOrder
    snapRedirectURL?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    snapToken?: SortOrder
    snapRedirectURL?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    snapToken?: SortOrder
    snapRedirectURL?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    orderId?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type AttendanceRecordListRelationFilter = {
    every?: AttendanceRecordWhereInput
    some?: AttendanceRecordWhereInput
    none?: AttendanceRecordWhereInput
  }

  export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    isAttended?: SortOrder
    canClockIn?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeAttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    isAttended?: SortOrder
    canClockIn?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    isAttended?: SortOrder
    canClockIn?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeAttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
  }

  export type EmployeeAttendanceScalarRelationFilter = {
    is?: EmployeeAttendanceWhereInput
    isNot?: EmployeeAttendanceWhereInput
  }

  export type AttendanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    attendanceType?: SortOrder
    employeeAttendanceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttendanceRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeAttendanceId?: SortOrder
  }

  export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    attendanceType?: SortOrder
    employeeAttendanceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttendanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    attendanceType?: SortOrder
    employeeAttendanceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttendanceRecordSumOrderByAggregateInput = {
    id?: SortOrder
    employeeAttendanceId?: SortOrder
  }

  export type EnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AddressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type AddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type OutletCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletCreateOrConnectWithoutEmployeeInput
    connect?: OutletWhereUniqueInput
  }

  export type LaundryJobCreateNestedManyWithoutWorkerInput = {
    create?: XOR<LaundryJobCreateWithoutWorkerInput, LaundryJobUncheckedCreateWithoutWorkerInput> | LaundryJobCreateWithoutWorkerInput[] | LaundryJobUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutWorkerInput | LaundryJobCreateOrConnectWithoutWorkerInput[]
    createMany?: LaundryJobCreateManyWorkerInputEnvelope
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
  }

  export type TransportJobCreateNestedManyWithoutDriverInput = {
    create?: XOR<TransportJobCreateWithoutDriverInput, TransportJobUncheckedCreateWithoutDriverInput> | TransportJobCreateWithoutDriverInput[] | TransportJobUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutDriverInput | TransportJobCreateOrConnectWithoutDriverInput[]
    createMany?: TransportJobCreateManyDriverInputEnvelope
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
  }

  export type EmployeeAttendanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeAttendanceCreateWithoutEmployeeInput, EmployeeAttendanceUncheckedCreateWithoutEmployeeInput> | EmployeeAttendanceCreateWithoutEmployeeInput[] | EmployeeAttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeAttendanceCreateOrConnectWithoutEmployeeInput | EmployeeAttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeAttendanceCreateManyEmployeeInputEnvelope
    connect?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
  }

  export type LaundryJobUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<LaundryJobCreateWithoutWorkerInput, LaundryJobUncheckedCreateWithoutWorkerInput> | LaundryJobCreateWithoutWorkerInput[] | LaundryJobUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutWorkerInput | LaundryJobCreateOrConnectWithoutWorkerInput[]
    createMany?: LaundryJobCreateManyWorkerInputEnvelope
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
  }

  export type TransportJobUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TransportJobCreateWithoutDriverInput, TransportJobUncheckedCreateWithoutDriverInput> | TransportJobCreateWithoutDriverInput[] | TransportJobUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutDriverInput | TransportJobCreateOrConnectWithoutDriverInput[]
    createMany?: TransportJobCreateManyDriverInputEnvelope
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
  }

  export type EmployeeAttendanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeAttendanceCreateWithoutEmployeeInput, EmployeeAttendanceUncheckedCreateWithoutEmployeeInput> | EmployeeAttendanceCreateWithoutEmployeeInput[] | EmployeeAttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeAttendanceCreateOrConnectWithoutEmployeeInput | EmployeeAttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeAttendanceCreateManyEmployeeInputEnvelope
    connect?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
  }

  export type NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeWorkShift | null
  }

  export type NullableEnumWorkerStationFieldUpdateOperationsInput = {
    set?: $Enums.WorkerStation | null
  }

  export type EnumEmploymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentStatus
  }

  export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type OutletUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletCreateOrConnectWithoutEmployeeInput
    upsert?: OutletUpsertWithoutEmployeeInput
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutEmployeeInput, OutletUpdateWithoutEmployeeInput>, OutletUncheckedUpdateWithoutEmployeeInput>
  }

  export type LaundryJobUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<LaundryJobCreateWithoutWorkerInput, LaundryJobUncheckedCreateWithoutWorkerInput> | LaundryJobCreateWithoutWorkerInput[] | LaundryJobUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutWorkerInput | LaundryJobCreateOrConnectWithoutWorkerInput[]
    upsert?: LaundryJobUpsertWithWhereUniqueWithoutWorkerInput | LaundryJobUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: LaundryJobCreateManyWorkerInputEnvelope
    set?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    disconnect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    delete?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    update?: LaundryJobUpdateWithWhereUniqueWithoutWorkerInput | LaundryJobUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: LaundryJobUpdateManyWithWhereWithoutWorkerInput | LaundryJobUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: LaundryJobScalarWhereInput | LaundryJobScalarWhereInput[]
  }

  export type TransportJobUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TransportJobCreateWithoutDriverInput, TransportJobUncheckedCreateWithoutDriverInput> | TransportJobCreateWithoutDriverInput[] | TransportJobUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutDriverInput | TransportJobCreateOrConnectWithoutDriverInput[]
    upsert?: TransportJobUpsertWithWhereUniqueWithoutDriverInput | TransportJobUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TransportJobCreateManyDriverInputEnvelope
    set?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    disconnect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    delete?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    update?: TransportJobUpdateWithWhereUniqueWithoutDriverInput | TransportJobUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TransportJobUpdateManyWithWhereWithoutDriverInput | TransportJobUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TransportJobScalarWhereInput | TransportJobScalarWhereInput[]
  }

  export type EmployeeAttendanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeAttendanceCreateWithoutEmployeeInput, EmployeeAttendanceUncheckedCreateWithoutEmployeeInput> | EmployeeAttendanceCreateWithoutEmployeeInput[] | EmployeeAttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeAttendanceCreateOrConnectWithoutEmployeeInput | EmployeeAttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeAttendanceUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeAttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeAttendanceCreateManyEmployeeInputEnvelope
    set?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    disconnect?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    delete?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    connect?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    update?: EmployeeAttendanceUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeAttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeAttendanceUpdateManyWithWhereWithoutEmployeeInput | EmployeeAttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeAttendanceScalarWhereInput | EmployeeAttendanceScalarWhereInput[]
  }

  export type LaundryJobUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<LaundryJobCreateWithoutWorkerInput, LaundryJobUncheckedCreateWithoutWorkerInput> | LaundryJobCreateWithoutWorkerInput[] | LaundryJobUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutWorkerInput | LaundryJobCreateOrConnectWithoutWorkerInput[]
    upsert?: LaundryJobUpsertWithWhereUniqueWithoutWorkerInput | LaundryJobUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: LaundryJobCreateManyWorkerInputEnvelope
    set?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    disconnect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    delete?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    update?: LaundryJobUpdateWithWhereUniqueWithoutWorkerInput | LaundryJobUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: LaundryJobUpdateManyWithWhereWithoutWorkerInput | LaundryJobUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: LaundryJobScalarWhereInput | LaundryJobScalarWhereInput[]
  }

  export type TransportJobUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TransportJobCreateWithoutDriverInput, TransportJobUncheckedCreateWithoutDriverInput> | TransportJobCreateWithoutDriverInput[] | TransportJobUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutDriverInput | TransportJobCreateOrConnectWithoutDriverInput[]
    upsert?: TransportJobUpsertWithWhereUniqueWithoutDriverInput | TransportJobUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TransportJobCreateManyDriverInputEnvelope
    set?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    disconnect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    delete?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    update?: TransportJobUpdateWithWhereUniqueWithoutDriverInput | TransportJobUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TransportJobUpdateManyWithWhereWithoutDriverInput | TransportJobUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TransportJobScalarWhereInput | TransportJobScalarWhereInput[]
  }

  export type EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeAttendanceCreateWithoutEmployeeInput, EmployeeAttendanceUncheckedCreateWithoutEmployeeInput> | EmployeeAttendanceCreateWithoutEmployeeInput[] | EmployeeAttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeAttendanceCreateOrConnectWithoutEmployeeInput | EmployeeAttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeAttendanceUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeAttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeAttendanceCreateManyEmployeeInputEnvelope
    set?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    disconnect?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    delete?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    connect?: EmployeeAttendanceWhereUniqueInput | EmployeeAttendanceWhereUniqueInput[]
    update?: EmployeeAttendanceUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeAttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeAttendanceUpdateManyWithWhereWithoutEmployeeInput | EmployeeAttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeAttendanceScalarWhereInput | EmployeeAttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type OutletCreateNestedOneWithoutOutletAddressInput = {
    create?: XOR<OutletCreateWithoutOutletAddressInput, OutletUncheckedCreateWithoutOutletAddressInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOutletAddressInput
    connect?: OutletWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCustomerAddressInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OutletUncheckedCreateNestedOneWithoutOutletAddressInput = {
    create?: XOR<OutletCreateWithoutOutletAddressInput, OutletUncheckedCreateWithoutOutletAddressInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOutletAddressInput
    connect?: OutletWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerAddressInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type OutletUpdateOneWithoutOutletAddressNestedInput = {
    create?: XOR<OutletCreateWithoutOutletAddressInput, OutletUncheckedCreateWithoutOutletAddressInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOutletAddressInput
    upsert?: OutletUpsertWithoutOutletAddressInput
    disconnect?: OutletWhereInput | boolean
    delete?: OutletWhereInput | boolean
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutOutletAddressInput, OutletUpdateWithoutOutletAddressInput>, OutletUncheckedUpdateWithoutOutletAddressInput>
  }

  export type OrderUpdateManyWithoutCustomerAddressNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerAddressInput | OrderUpsertWithWhereUniqueWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerAddressInput | OrderUpdateWithWhereUniqueWithoutCustomerAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerAddressInput | OrderUpdateManyWithWhereWithoutCustomerAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OutletUncheckedUpdateOneWithoutOutletAddressNestedInput = {
    create?: XOR<OutletCreateWithoutOutletAddressInput, OutletUncheckedCreateWithoutOutletAddressInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOutletAddressInput
    upsert?: OutletUpsertWithoutOutletAddressInput
    disconnect?: OutletWhereInput | boolean
    delete?: OutletWhereInput | boolean
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutOutletAddressInput, OutletUpdateWithoutOutletAddressInput>, OutletUncheckedUpdateWithoutOutletAddressInput>
  }

  export type OrderUncheckedUpdateManyWithoutCustomerAddressNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerAddressInput | OrderUpsertWithWhereUniqueWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerAddressInput | OrderUpdateWithWhereUniqueWithoutCustomerAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerAddressInput | OrderUpdateManyWithWhereWithoutCustomerAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutOutletInput = {
    create?: XOR<AddressCreateWithoutOutletInput, AddressUncheckedCreateWithoutOutletInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOutletInput
    connect?: AddressWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutOutletInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutOutletInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type AddressUpdateOneRequiredWithoutOutletNestedInput = {
    create?: XOR<AddressCreateWithoutOutletInput, AddressUncheckedCreateWithoutOutletInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOutletInput
    upsert?: AddressUpsertWithoutOutletInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOutletInput, AddressUpdateWithoutOutletInput>, AddressUncheckedUpdateWithoutOutletInput>
  }

  export type OrderUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOutletInput | OrderUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOutletInput | OrderUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOutletInput | OrderUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutOutletNestedInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOutletInput | EmployeeUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOutletInput | EmployeeUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOutletInput | EmployeeUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOutletInput | OrderUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOutletInput | OrderUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOutletInput | OrderUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOutletInput | EmployeeUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOutletInput | EmployeeUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOutletInput | EmployeeUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutOrderInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    connect?: AddressWhereUniqueInput
  }

  export type OutletCreateNestedOneWithoutOrderInput = {
    create?: XOR<OutletCreateWithoutOrderInput, OutletUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOrderInput
    connect?: OutletWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type LaundryJobCreateNestedManyWithoutOrderInput = {
    create?: XOR<LaundryJobCreateWithoutOrderInput, LaundryJobUncheckedCreateWithoutOrderInput> | LaundryJobCreateWithoutOrderInput[] | LaundryJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutOrderInput | LaundryJobCreateOrConnectWithoutOrderInput[]
    createMany?: LaundryJobCreateManyOrderInputEnvelope
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
  }

  export type TransportJobCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransportJobCreateWithoutOrderInput, TransportJobUncheckedCreateWithoutOrderInput> | TransportJobCreateWithoutOrderInput[] | TransportJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutOrderInput | TransportJobCreateOrConnectWithoutOrderInput[]
    createMany?: TransportJobCreateManyOrderInputEnvelope
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type LaundryJobUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<LaundryJobCreateWithoutOrderInput, LaundryJobUncheckedCreateWithoutOrderInput> | LaundryJobCreateWithoutOrderInput[] | LaundryJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutOrderInput | LaundryJobCreateOrConnectWithoutOrderInput[]
    createMany?: LaundryJobCreateManyOrderInputEnvelope
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
  }

  export type TransportJobUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransportJobCreateWithoutOrderInput, TransportJobUncheckedCreateWithoutOrderInput> | TransportJobCreateWithoutOrderInput[] | TransportJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutOrderInput | TransportJobCreateOrConnectWithoutOrderInput[]
    createMany?: TransportJobCreateManyOrderInputEnvelope
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type AddressUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    upsert?: AddressUpsertWithoutOrderInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOrderInput, AddressUpdateWithoutOrderInput>, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type OutletUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<OutletCreateWithoutOrderInput, OutletUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOrderInput
    upsert?: OutletUpsertWithoutOrderInput
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutOrderInput, OutletUpdateWithoutOrderInput>, OutletUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type LaundryJobUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LaundryJobCreateWithoutOrderInput, LaundryJobUncheckedCreateWithoutOrderInput> | LaundryJobCreateWithoutOrderInput[] | LaundryJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutOrderInput | LaundryJobCreateOrConnectWithoutOrderInput[]
    upsert?: LaundryJobUpsertWithWhereUniqueWithoutOrderInput | LaundryJobUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LaundryJobCreateManyOrderInputEnvelope
    set?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    disconnect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    delete?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    update?: LaundryJobUpdateWithWhereUniqueWithoutOrderInput | LaundryJobUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LaundryJobUpdateManyWithWhereWithoutOrderInput | LaundryJobUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LaundryJobScalarWhereInput | LaundryJobScalarWhereInput[]
  }

  export type TransportJobUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransportJobCreateWithoutOrderInput, TransportJobUncheckedCreateWithoutOrderInput> | TransportJobCreateWithoutOrderInput[] | TransportJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutOrderInput | TransportJobCreateOrConnectWithoutOrderInput[]
    upsert?: TransportJobUpsertWithWhereUniqueWithoutOrderInput | TransportJobUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransportJobCreateManyOrderInputEnvelope
    set?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    disconnect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    delete?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    update?: TransportJobUpdateWithWhereUniqueWithoutOrderInput | TransportJobUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransportJobUpdateManyWithWhereWithoutOrderInput | TransportJobUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransportJobScalarWhereInput | TransportJobScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type LaundryJobUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LaundryJobCreateWithoutOrderInput, LaundryJobUncheckedCreateWithoutOrderInput> | LaundryJobCreateWithoutOrderInput[] | LaundryJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LaundryJobCreateOrConnectWithoutOrderInput | LaundryJobCreateOrConnectWithoutOrderInput[]
    upsert?: LaundryJobUpsertWithWhereUniqueWithoutOrderInput | LaundryJobUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LaundryJobCreateManyOrderInputEnvelope
    set?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    disconnect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    delete?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    connect?: LaundryJobWhereUniqueInput | LaundryJobWhereUniqueInput[]
    update?: LaundryJobUpdateWithWhereUniqueWithoutOrderInput | LaundryJobUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LaundryJobUpdateManyWithWhereWithoutOrderInput | LaundryJobUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LaundryJobScalarWhereInput | LaundryJobScalarWhereInput[]
  }

  export type TransportJobUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransportJobCreateWithoutOrderInput, TransportJobUncheckedCreateWithoutOrderInput> | TransportJobCreateWithoutOrderInput[] | TransportJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransportJobCreateOrConnectWithoutOrderInput | TransportJobCreateOrConnectWithoutOrderInput[]
    upsert?: TransportJobUpsertWithWhereUniqueWithoutOrderInput | TransportJobUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransportJobCreateManyOrderInputEnvelope
    set?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    disconnect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    delete?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    connect?: TransportJobWhereUniqueInput | TransportJobWhereUniqueInput[]
    update?: TransportJobUpdateWithWhereUniqueWithoutOrderInput | TransportJobUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransportJobUpdateManyWithWhereWithoutOrderInput | TransportJobUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransportJobScalarWhereInput | TransportJobScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    upsert?: OrderUpsertWithoutOrderItemInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemInput, OrderUpdateWithoutOrderItemInput>, OrderUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderCreateNestedOneWithoutLaundryJobInput = {
    create?: XOR<OrderCreateWithoutLaundryJobInput, OrderUncheckedCreateWithoutLaundryJobInput>
    connectOrCreate?: OrderCreateOrConnectWithoutLaundryJobInput
    connect?: OrderWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutLaundryJobInput = {
    create?: XOR<EmployeeCreateWithoutLaundryJobInput, EmployeeUncheckedCreateWithoutLaundryJobInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLaundryJobInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumWorkerStationFieldUpdateOperationsInput = {
    set?: $Enums.WorkerStation
  }

  export type NullableEnumByPassStatusFieldUpdateOperationsInput = {
    set?: $Enums.ByPassStatus | null
  }

  export type OrderUpdateOneRequiredWithoutLaundryJobNestedInput = {
    create?: XOR<OrderCreateWithoutLaundryJobInput, OrderUncheckedCreateWithoutLaundryJobInput>
    connectOrCreate?: OrderCreateOrConnectWithoutLaundryJobInput
    upsert?: OrderUpsertWithoutLaundryJobInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutLaundryJobInput, OrderUpdateWithoutLaundryJobInput>, OrderUncheckedUpdateWithoutLaundryJobInput>
  }

  export type EmployeeUpdateOneWithoutLaundryJobNestedInput = {
    create?: XOR<EmployeeCreateWithoutLaundryJobInput, EmployeeUncheckedCreateWithoutLaundryJobInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLaundryJobInput
    upsert?: EmployeeUpsertWithoutLaundryJobInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLaundryJobInput, EmployeeUpdateWithoutLaundryJobInput>, EmployeeUncheckedUpdateWithoutLaundryJobInput>
  }

  export type OrderCreateNestedOneWithoutTransportJobInput = {
    create?: XOR<OrderCreateWithoutTransportJobInput, OrderUncheckedCreateWithoutTransportJobInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransportJobInput
    connect?: OrderWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutTransportJobInput = {
    create?: XOR<EmployeeCreateWithoutTransportJobInput, EmployeeUncheckedCreateWithoutTransportJobInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTransportJobInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumTransportTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransportType
  }

  export type OrderUpdateOneRequiredWithoutTransportJobNestedInput = {
    create?: XOR<OrderCreateWithoutTransportJobInput, OrderUncheckedCreateWithoutTransportJobInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransportJobInput
    upsert?: OrderUpsertWithoutTransportJobInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutTransportJobInput, OrderUpdateWithoutTransportJobInput>, OrderUncheckedUpdateWithoutTransportJobInput>
  }

  export type EmployeeUpdateOneWithoutTransportJobNestedInput = {
    create?: XOR<EmployeeCreateWithoutTransportJobInput, EmployeeUncheckedCreateWithoutTransportJobInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTransportJobInput
    upsert?: EmployeeUpsertWithoutTransportJobInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTransportJobInput, EmployeeUpdateWithoutTransportJobInput>, EmployeeUncheckedUpdateWithoutTransportJobInput>
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type EmployeeCreateNestedOneWithoutEmployeeAttendanceInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeAttendanceInput, EmployeeUncheckedCreateWithoutEmployeeAttendanceInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeAttendanceInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AttendanceRecordCreateNestedManyWithoutEmployeeAttendanceInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput> | AttendanceRecordCreateWithoutEmployeeAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput | AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput[]
    createMany?: AttendanceRecordCreateManyEmployeeAttendanceInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeAttendanceInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput> | AttendanceRecordCreateWithoutEmployeeAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput | AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput[]
    createMany?: AttendanceRecordCreateManyEmployeeAttendanceInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutEmployeeAttendanceNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeAttendanceInput, EmployeeUncheckedCreateWithoutEmployeeAttendanceInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeAttendanceInput
    upsert?: EmployeeUpsertWithoutEmployeeAttendanceInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEmployeeAttendanceInput, EmployeeUpdateWithoutEmployeeAttendanceInput>, EmployeeUncheckedUpdateWithoutEmployeeAttendanceInput>
  }

  export type AttendanceRecordUpdateManyWithoutEmployeeAttendanceNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput> | AttendanceRecordCreateWithoutEmployeeAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput | AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeAttendanceInput | AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeAttendanceInput[]
    createMany?: AttendanceRecordCreateManyEmployeeAttendanceInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeAttendanceInput | AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeAttendanceInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutEmployeeAttendanceInput | AttendanceRecordUpdateManyWithWhereWithoutEmployeeAttendanceInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutEmployeeAttendanceNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput> | AttendanceRecordCreateWithoutEmployeeAttendanceInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput | AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeAttendanceInput | AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeAttendanceInput[]
    createMany?: AttendanceRecordCreateManyEmployeeAttendanceInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeAttendanceInput | AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeAttendanceInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutEmployeeAttendanceInput | AttendanceRecordUpdateManyWithWhereWithoutEmployeeAttendanceInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type EmployeeAttendanceCreateNestedOneWithoutAttendanceRecordInput = {
    create?: XOR<EmployeeAttendanceCreateWithoutAttendanceRecordInput, EmployeeAttendanceUncheckedCreateWithoutAttendanceRecordInput>
    connectOrCreate?: EmployeeAttendanceCreateOrConnectWithoutAttendanceRecordInput
    connect?: EmployeeAttendanceWhereUniqueInput
  }

  export type EnumAttendanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceType
  }

  export type EmployeeAttendanceUpdateOneRequiredWithoutAttendanceRecordNestedInput = {
    create?: XOR<EmployeeAttendanceCreateWithoutAttendanceRecordInput, EmployeeAttendanceUncheckedCreateWithoutAttendanceRecordInput>
    connectOrCreate?: EmployeeAttendanceCreateOrConnectWithoutAttendanceRecordInput
    upsert?: EmployeeAttendanceUpsertWithoutAttendanceRecordInput
    connect?: EmployeeAttendanceWhereUniqueInput
    update?: XOR<XOR<EmployeeAttendanceUpdateToOneWithWhereWithoutAttendanceRecordInput, EmployeeAttendanceUpdateWithoutAttendanceRecordInput>, EmployeeAttendanceUncheckedUpdateWithoutAttendanceRecordInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeWorkShiftNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeWorkShift | EnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmployeeWorkShiftNullableFilter<$PrismaModel> | $Enums.EmployeeWorkShift | null
  }

  export type NestedEnumWorkerStationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWorkerStationNullableFilter<$PrismaModel> | $Enums.WorkerStation | null
  }

  export type NestedEnumEmploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusFilter<$PrismaModel> | $Enums.EmploymentStatus
  }

  export type NestedEnumEmployeeWorkShiftNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeWorkShift | EnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmployeeWorkShift[] | ListEnumEmployeeWorkShiftFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmployeeWorkShiftNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeWorkShift | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmployeeWorkShiftNullableFilter<$PrismaModel>
    _max?: NestedEnumEmployeeWorkShiftNullableFilter<$PrismaModel>
  }

  export type NestedEnumWorkerStationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWorkerStationNullableWithAggregatesFilter<$PrismaModel> | $Enums.WorkerStation | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumWorkerStationNullableFilter<$PrismaModel>
    _max?: NestedEnumWorkerStationNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumEmploymentStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumWorkerStationFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerStationFilter<$PrismaModel> | $Enums.WorkerStation
  }

  export type NestedEnumByPassStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ByPassStatus | EnumByPassStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumByPassStatusNullableFilter<$PrismaModel> | $Enums.ByPassStatus | null
  }

  export type NestedEnumWorkerStationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStation | EnumWorkerStationFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerStation[] | ListEnumWorkerStationFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerStationWithAggregatesFilter<$PrismaModel> | $Enums.WorkerStation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkerStationFilter<$PrismaModel>
    _max?: NestedEnumWorkerStationFilter<$PrismaModel>
  }

  export type NestedEnumByPassStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ByPassStatus | EnumByPassStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ByPassStatus[] | ListEnumByPassStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumByPassStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ByPassStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumByPassStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumByPassStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportType | EnumTransportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportTypeFilter<$PrismaModel> | $Enums.TransportType
  }

  export type NestedEnumTransportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportType | EnumTransportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportType[] | ListEnumTransportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportTypeFilter<$PrismaModel>
    _max?: NestedEnumTransportTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
  }

  export type NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutUserInput = {
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    outlet: OutletCreateNestedOneWithoutEmployeeInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    outletId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateWithoutCustomerInput = {
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Outlet?: OutletCreateNestedOneWithoutOutletAddressInput
    Order?: OrderCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressUncheckedCreateWithoutCustomerInput = {
    id?: number
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Outlet?: OutletUncheckedCreateNestedOneWithoutOutletAddressInput
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressCreateOrConnectWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressCreateManyCustomerInputEnvelope = {
    data: AddressCreateManyCustomerInput | AddressCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    description: string
    isRead?: boolean
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    isRead?: boolean
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outlet?: OutletUpdateOneRequiredWithoutEmployeeNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    outletId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateManyWithWhereWithoutCustomerInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    isPrimary?: BoolFilter<"Address"> | boolean
    addressLine?: StringFilter<"Address"> | string
    province?: StringFilter<"Address"> | string
    regency?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    village?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    customerId?: IntNullableFilter<"Address"> | number | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    isDeleted?: BoolFilter<"Address"> | boolean
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    url?: StringNullableFilter<"Notification"> | string | null
    userId?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    isDeleted?: BoolFilter<"Notification"> | boolean
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
  }

  export type UserCreateWithoutEmployeeInput = {
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Address?: AddressCreateNestedManyWithoutCustomerInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: number
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Address?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type OutletCreateWithoutEmployeeInput = {
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    outletAddress: AddressCreateNestedOneWithoutOutletInput
    Order?: OrderCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutEmployeeInput = {
    id?: number
    outletName: string
    outletAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutEmployeeInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
  }

  export type LaundryJobCreateWithoutWorkerInput = {
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    order: OrderCreateNestedOneWithoutLaundryJobInput
  }

  export type LaundryJobUncheckedCreateWithoutWorkerInput = {
    id?: number
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type LaundryJobCreateOrConnectWithoutWorkerInput = {
    where: LaundryJobWhereUniqueInput
    create: XOR<LaundryJobCreateWithoutWorkerInput, LaundryJobUncheckedCreateWithoutWorkerInput>
  }

  export type LaundryJobCreateManyWorkerInputEnvelope = {
    data: LaundryJobCreateManyWorkerInput | LaundryJobCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type TransportJobCreateWithoutDriverInput = {
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    order: OrderCreateNestedOneWithoutTransportJobInput
  }

  export type TransportJobUncheckedCreateWithoutDriverInput = {
    id?: number
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type TransportJobCreateOrConnectWithoutDriverInput = {
    where: TransportJobWhereUniqueInput
    create: XOR<TransportJobCreateWithoutDriverInput, TransportJobUncheckedCreateWithoutDriverInput>
  }

  export type TransportJobCreateManyDriverInputEnvelope = {
    data: TransportJobCreateManyDriverInput | TransportJobCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeAttendanceCreateWithoutEmployeeInput = {
    isAttended?: boolean
    canClockIn?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    AttendanceRecord?: AttendanceRecordCreateNestedManyWithoutEmployeeAttendanceInput
  }

  export type EmployeeAttendanceUncheckedCreateWithoutEmployeeInput = {
    id?: number
    isAttended?: boolean
    canClockIn?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    AttendanceRecord?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeAttendanceInput
  }

  export type EmployeeAttendanceCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeAttendanceWhereUniqueInput
    create: XOR<EmployeeAttendanceCreateWithoutEmployeeInput, EmployeeAttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeAttendanceCreateManyEmployeeInputEnvelope = {
    data: EmployeeAttendanceCreateManyEmployeeInput | EmployeeAttendanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateManyWithoutCustomerNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutletUpsertWithoutEmployeeInput = {
    update: XOR<OutletUpdateWithoutEmployeeInput, OutletUncheckedUpdateWithoutEmployeeInput>
    create: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
    where?: OutletWhereInput
  }

  export type OutletUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: OutletWhereInput
    data: XOR<OutletUpdateWithoutEmployeeInput, OutletUncheckedUpdateWithoutEmployeeInput>
  }

  export type OutletUpdateWithoutEmployeeInput = {
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outletAddress?: AddressUpdateOneRequiredWithoutOutletNestedInput
    Order?: OrderUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    outletName?: StringFieldUpdateOperationsInput | string
    outletAddressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type LaundryJobUpsertWithWhereUniqueWithoutWorkerInput = {
    where: LaundryJobWhereUniqueInput
    update: XOR<LaundryJobUpdateWithoutWorkerInput, LaundryJobUncheckedUpdateWithoutWorkerInput>
    create: XOR<LaundryJobCreateWithoutWorkerInput, LaundryJobUncheckedCreateWithoutWorkerInput>
  }

  export type LaundryJobUpdateWithWhereUniqueWithoutWorkerInput = {
    where: LaundryJobWhereUniqueInput
    data: XOR<LaundryJobUpdateWithoutWorkerInput, LaundryJobUncheckedUpdateWithoutWorkerInput>
  }

  export type LaundryJobUpdateManyWithWhereWithoutWorkerInput = {
    where: LaundryJobScalarWhereInput
    data: XOR<LaundryJobUpdateManyMutationInput, LaundryJobUncheckedUpdateManyWithoutWorkerInput>
  }

  export type LaundryJobScalarWhereInput = {
    AND?: LaundryJobScalarWhereInput | LaundryJobScalarWhereInput[]
    OR?: LaundryJobScalarWhereInput[]
    NOT?: LaundryJobScalarWhereInput | LaundryJobScalarWhereInput[]
    id?: IntFilter<"LaundryJob"> | number
    station?: EnumWorkerStationFilter<"LaundryJob"> | $Enums.WorkerStation
    isByPassRequested?: BoolFilter<"LaundryJob"> | boolean
    isCompleted?: BoolFilter<"LaundryJob"> | boolean
    byPassNote?: StringNullableFilter<"LaundryJob"> | string | null
    byPassStatus?: EnumByPassStatusNullableFilter<"LaundryJob"> | $Enums.ByPassStatus | null
    orderId?: IntFilter<"LaundryJob"> | number
    workerId?: IntNullableFilter<"LaundryJob"> | number | null
    createdAt?: DateTimeFilter<"LaundryJob"> | Date | string
    updatedAt?: DateTimeFilter<"LaundryJob"> | Date | string
    isDeleted?: BoolFilter<"LaundryJob"> | boolean
    deletedAt?: DateTimeNullableFilter<"LaundryJob"> | Date | string | null
  }

  export type TransportJobUpsertWithWhereUniqueWithoutDriverInput = {
    where: TransportJobWhereUniqueInput
    update: XOR<TransportJobUpdateWithoutDriverInput, TransportJobUncheckedUpdateWithoutDriverInput>
    create: XOR<TransportJobCreateWithoutDriverInput, TransportJobUncheckedCreateWithoutDriverInput>
  }

  export type TransportJobUpdateWithWhereUniqueWithoutDriverInput = {
    where: TransportJobWhereUniqueInput
    data: XOR<TransportJobUpdateWithoutDriverInput, TransportJobUncheckedUpdateWithoutDriverInput>
  }

  export type TransportJobUpdateManyWithWhereWithoutDriverInput = {
    where: TransportJobScalarWhereInput
    data: XOR<TransportJobUpdateManyMutationInput, TransportJobUncheckedUpdateManyWithoutDriverInput>
  }

  export type TransportJobScalarWhereInput = {
    AND?: TransportJobScalarWhereInput | TransportJobScalarWhereInput[]
    OR?: TransportJobScalarWhereInput[]
    NOT?: TransportJobScalarWhereInput | TransportJobScalarWhereInput[]
    id?: IntFilter<"TransportJob"> | number
    transportType?: EnumTransportTypeFilter<"TransportJob"> | $Enums.TransportType
    isCompleted?: BoolFilter<"TransportJob"> | boolean
    distance?: IntFilter<"TransportJob"> | number
    orderId?: IntFilter<"TransportJob"> | number
    driverId?: IntNullableFilter<"TransportJob"> | number | null
    createdAt?: DateTimeFilter<"TransportJob"> | Date | string
    updatedAt?: DateTimeFilter<"TransportJob"> | Date | string
    isDeleted?: BoolFilter<"TransportJob"> | boolean
    deletedAt?: DateTimeNullableFilter<"TransportJob"> | Date | string | null
  }

  export type EmployeeAttendanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeAttendanceWhereUniqueInput
    update: XOR<EmployeeAttendanceUpdateWithoutEmployeeInput, EmployeeAttendanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeAttendanceCreateWithoutEmployeeInput, EmployeeAttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeAttendanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeAttendanceWhereUniqueInput
    data: XOR<EmployeeAttendanceUpdateWithoutEmployeeInput, EmployeeAttendanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeAttendanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeAttendanceScalarWhereInput
    data: XOR<EmployeeAttendanceUpdateManyMutationInput, EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeAttendanceScalarWhereInput = {
    AND?: EmployeeAttendanceScalarWhereInput | EmployeeAttendanceScalarWhereInput[]
    OR?: EmployeeAttendanceScalarWhereInput[]
    NOT?: EmployeeAttendanceScalarWhereInput | EmployeeAttendanceScalarWhereInput[]
    id?: IntFilter<"EmployeeAttendance"> | number
    isAttended?: BoolFilter<"EmployeeAttendance"> | boolean
    canClockIn?: BoolFilter<"EmployeeAttendance"> | boolean
    employeeId?: IntFilter<"EmployeeAttendance"> | number
    createdAt?: DateTimeFilter<"EmployeeAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeAttendance"> | Date | string
    isDeleted?: BoolFilter<"EmployeeAttendance"> | boolean
    deletedAt?: DateTimeNullableFilter<"EmployeeAttendance"> | Date | string | null
  }

  export type UserCreateWithoutAddressInput = {
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Employee?: EmployeeCreateNestedOneWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: number
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type OutletCreateWithoutOutletAddressInput = {
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Order?: OrderCreateNestedManyWithoutOutletInput
    Employee?: EmployeeCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutOutletAddressInput = {
    id?: number
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutOutletInput
    Employee?: EmployeeUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutOutletAddressInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutOutletAddressInput, OutletUncheckedCreateWithoutOutletAddressInput>
  }

  export type OrderCreateWithoutCustomerAddressInput = {
    orderStatus?: $Enums.OrderStatus
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    outlet: OutletCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerAddressInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput>
  }

  export type OrderCreateManyCustomerAddressInputEnvelope = {
    data: OrderCreateManyCustomerAddressInput | OrderCreateManyCustomerAddressInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUpdateOneWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutletUpsertWithoutOutletAddressInput = {
    update: XOR<OutletUpdateWithoutOutletAddressInput, OutletUncheckedUpdateWithoutOutletAddressInput>
    create: XOR<OutletCreateWithoutOutletAddressInput, OutletUncheckedCreateWithoutOutletAddressInput>
    where?: OutletWhereInput
  }

  export type OutletUpdateToOneWithWhereWithoutOutletAddressInput = {
    where?: OutletWhereInput
    data: XOR<OutletUpdateWithoutOutletAddressInput, OutletUncheckedUpdateWithoutOutletAddressInput>
  }

  export type OutletUpdateWithoutOutletAddressInput = {
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateManyWithoutOutletNestedInput
    Employee?: EmployeeUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutOutletAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutOutletNestedInput
    Employee?: EmployeeUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerAddressInput, OrderUncheckedUpdateWithoutCustomerAddressInput>
    create: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerAddressInput, OrderUncheckedUpdateWithoutCustomerAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerAddressInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    orderStatus?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    customerAddressId?: IntFilter<"Order"> | number
    outletId?: IntFilter<"Order"> | number
    laundryWeight?: IntNullableFilter<"Order"> | number | null
    laundryPrice?: IntNullableFilter<"Order"> | number | null
    isPaid?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    isDeleted?: BoolFilter<"Order"> | boolean
    deletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type AddressCreateWithoutOutletInput = {
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customer?: UserCreateNestedOneWithoutAddressInput
    Order?: OrderCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressUncheckedCreateWithoutOutletInput = {
    id?: number
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressCreateOrConnectWithoutOutletInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOutletInput, AddressUncheckedCreateWithoutOutletInput>
  }

  export type OrderCreateWithoutOutletInput = {
    orderStatus?: $Enums.OrderStatus
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customerAddress: AddressCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOutletInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOutletInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput>
  }

  export type OrderCreateManyOutletInputEnvelope = {
    data: OrderCreateManyOutletInput | OrderCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutOutletInput = {
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutEmployeeInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutOutletInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOutletInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput>
  }

  export type EmployeeCreateManyOutletInputEnvelope = {
    data: EmployeeCreateManyOutletInput | EmployeeCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutOutletInput = {
    update: XOR<AddressUpdateWithoutOutletInput, AddressUncheckedUpdateWithoutOutletInput>
    create: XOR<AddressCreateWithoutOutletInput, AddressUncheckedCreateWithoutOutletInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOutletInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOutletInput, AddressUncheckedUpdateWithoutOutletInput>
  }

  export type AddressUpdateWithoutOutletInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneWithoutAddressNestedInput
    Order?: OrderUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutOutletInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutCustomerAddressNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutOutletInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutOutletInput, OrderUncheckedUpdateWithoutOutletInput>
    create: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutOutletInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutOutletInput, OrderUncheckedUpdateWithoutOutletInput>
  }

  export type OrderUpdateManyWithWhereWithoutOutletInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOutletInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOutletInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOutletInput, EmployeeUncheckedUpdateWithoutOutletInput>
    create: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOutletInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOutletInput, EmployeeUncheckedUpdateWithoutOutletInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOutletInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutOutletInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    workShift?: EnumEmployeeWorkShiftNullableFilter<"Employee"> | $Enums.EmployeeWorkShift | null
    station?: EnumWorkerStationNullableFilter<"Employee"> | $Enums.WorkerStation | null
    isPresent?: BoolFilter<"Employee"> | boolean
    isWorking?: BoolFilter<"Employee"> | boolean
    employmentStatus?: EnumEmploymentStatusFilter<"Employee"> | $Enums.EmploymentStatus
    userId?: IntFilter<"Employee"> | number
    outletId?: IntFilter<"Employee"> | number
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    isDeleted?: BoolFilter<"Employee"> | boolean
    deletedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
  }

  export type AddressCreateWithoutOrderInput = {
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customer?: UserCreateNestedOneWithoutAddressInput
    Outlet?: OutletCreateNestedOneWithoutOutletAddressInput
  }

  export type AddressUncheckedCreateWithoutOrderInput = {
    id?: number
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Outlet?: OutletUncheckedCreateNestedOneWithoutOutletAddressInput
  }

  export type AddressCreateOrConnectWithoutOrderInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
  }

  export type OutletCreateWithoutOrderInput = {
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    outletAddress: AddressCreateNestedOneWithoutOutletInput
    Employee?: EmployeeCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutOrderInput = {
    id?: number
    outletName: string
    outletAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Employee?: EmployeeUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutOrderInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutOrderInput, OutletUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    qty?: number | null
    orderItemName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    qty?: number | null
    orderItemName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type LaundryJobCreateWithoutOrderInput = {
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    worker?: EmployeeCreateNestedOneWithoutLaundryJobInput
  }

  export type LaundryJobUncheckedCreateWithoutOrderInput = {
    id?: number
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    workerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type LaundryJobCreateOrConnectWithoutOrderInput = {
    where: LaundryJobWhereUniqueInput
    create: XOR<LaundryJobCreateWithoutOrderInput, LaundryJobUncheckedCreateWithoutOrderInput>
  }

  export type LaundryJobCreateManyOrderInputEnvelope = {
    data: LaundryJobCreateManyOrderInput | LaundryJobCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type TransportJobCreateWithoutOrderInput = {
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    driver?: EmployeeCreateNestedOneWithoutTransportJobInput
  }

  export type TransportJobUncheckedCreateWithoutOrderInput = {
    id?: number
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type TransportJobCreateOrConnectWithoutOrderInput = {
    where: TransportJobWhereUniqueInput
    create: XOR<TransportJobCreateWithoutOrderInput, TransportJobUncheckedCreateWithoutOrderInput>
  }

  export type TransportJobCreateManyOrderInputEnvelope = {
    data: TransportJobCreateManyOrderInput | TransportJobCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateManyOrderInputEnvelope = {
    data: PaymentCreateManyOrderInput | PaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutOrderInput = {
    update: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOrderInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type AddressUpdateWithoutOrderInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneWithoutAddressNestedInput
    Outlet?: OutletUpdateOneWithoutOutletAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Outlet?: OutletUncheckedUpdateOneWithoutOutletAddressNestedInput
  }

  export type OutletUpsertWithoutOrderInput = {
    update: XOR<OutletUpdateWithoutOrderInput, OutletUncheckedUpdateWithoutOrderInput>
    create: XOR<OutletCreateWithoutOrderInput, OutletUncheckedCreateWithoutOrderInput>
    where?: OutletWhereInput
  }

  export type OutletUpdateToOneWithWhereWithoutOrderInput = {
    where?: OutletWhereInput
    data: XOR<OutletUpdateWithoutOrderInput, OutletUncheckedUpdateWithoutOrderInput>
  }

  export type OutletUpdateWithoutOrderInput = {
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outletAddress?: AddressUpdateOneRequiredWithoutOutletNestedInput
    Employee?: EmployeeUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    outletName?: StringFieldUpdateOperationsInput | string
    outletAddressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    qty?: IntNullableFilter<"OrderItem"> | number | null
    orderItemName?: StringFilter<"OrderItem"> | string
    orderId?: IntNullableFilter<"OrderItem"> | number | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    isDeleted?: BoolFilter<"OrderItem"> | boolean
    deletedAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
  }

  export type LaundryJobUpsertWithWhereUniqueWithoutOrderInput = {
    where: LaundryJobWhereUniqueInput
    update: XOR<LaundryJobUpdateWithoutOrderInput, LaundryJobUncheckedUpdateWithoutOrderInput>
    create: XOR<LaundryJobCreateWithoutOrderInput, LaundryJobUncheckedCreateWithoutOrderInput>
  }

  export type LaundryJobUpdateWithWhereUniqueWithoutOrderInput = {
    where: LaundryJobWhereUniqueInput
    data: XOR<LaundryJobUpdateWithoutOrderInput, LaundryJobUncheckedUpdateWithoutOrderInput>
  }

  export type LaundryJobUpdateManyWithWhereWithoutOrderInput = {
    where: LaundryJobScalarWhereInput
    data: XOR<LaundryJobUpdateManyMutationInput, LaundryJobUncheckedUpdateManyWithoutOrderInput>
  }

  export type TransportJobUpsertWithWhereUniqueWithoutOrderInput = {
    where: TransportJobWhereUniqueInput
    update: XOR<TransportJobUpdateWithoutOrderInput, TransportJobUncheckedUpdateWithoutOrderInput>
    create: XOR<TransportJobCreateWithoutOrderInput, TransportJobUncheckedCreateWithoutOrderInput>
  }

  export type TransportJobUpdateWithWhereUniqueWithoutOrderInput = {
    where: TransportJobWhereUniqueInput
    data: XOR<TransportJobUpdateWithoutOrderInput, TransportJobUncheckedUpdateWithoutOrderInput>
  }

  export type TransportJobUpdateManyWithWhereWithoutOrderInput = {
    where: TransportJobScalarWhereInput
    data: XOR<TransportJobUpdateManyMutationInput, TransportJobUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    totalPrice?: IntFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    snapToken?: StringNullableFilter<"Payment"> | string | null
    snapRedirectURL?: StringNullableFilter<"Payment"> | string | null
    orderId?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    isDeleted?: BoolFilter<"Payment"> | boolean
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
  }

  export type OrderCreateWithoutOrderItemInput = {
    orderStatus?: $Enums.OrderStatus
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customerAddress: AddressCreateNestedOneWithoutOrderInput
    outlet: OutletCreateNestedOneWithoutOrderInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutOrderItemInput = {
    update: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderUpdateWithoutOrderItemInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    outlet?: OutletUpdateOneRequiredWithoutOrderNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutLaundryJobInput = {
    orderStatus?: $Enums.OrderStatus
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customerAddress: AddressCreateNestedOneWithoutOrderInput
    outlet: OutletCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutLaundryJobInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutLaundryJobInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutLaundryJobInput, OrderUncheckedCreateWithoutLaundryJobInput>
  }

  export type EmployeeCreateWithoutLaundryJobInput = {
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutEmployeeInput
    outlet: OutletCreateNestedOneWithoutEmployeeInput
    TransportJob?: TransportJobCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutLaundryJobInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    userId: number
    outletId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutDriverInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutLaundryJobInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLaundryJobInput, EmployeeUncheckedCreateWithoutLaundryJobInput>
  }

  export type OrderUpsertWithoutLaundryJobInput = {
    update: XOR<OrderUpdateWithoutLaundryJobInput, OrderUncheckedUpdateWithoutLaundryJobInput>
    create: XOR<OrderCreateWithoutLaundryJobInput, OrderUncheckedCreateWithoutLaundryJobInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutLaundryJobInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutLaundryJobInput, OrderUncheckedUpdateWithoutLaundryJobInput>
  }

  export type OrderUpdateWithoutLaundryJobInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    outlet?: OutletUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutLaundryJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type EmployeeUpsertWithoutLaundryJobInput = {
    update: XOR<EmployeeUpdateWithoutLaundryJobInput, EmployeeUncheckedUpdateWithoutLaundryJobInput>
    create: XOR<EmployeeCreateWithoutLaundryJobInput, EmployeeUncheckedCreateWithoutLaundryJobInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLaundryJobInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLaundryJobInput, EmployeeUncheckedUpdateWithoutLaundryJobInput>
  }

  export type EmployeeUpdateWithoutLaundryJobInput = {
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneRequiredWithoutEmployeeNestedInput
    TransportJob?: TransportJobUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLaundryJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    userId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransportJob?: TransportJobUncheckedUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type OrderCreateWithoutTransportJobInput = {
    orderStatus?: $Enums.OrderStatus
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customerAddress: AddressCreateNestedOneWithoutOrderInput
    outlet: OutletCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTransportJobInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTransportJobInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTransportJobInput, OrderUncheckedCreateWithoutTransportJobInput>
  }

  export type EmployeeCreateWithoutTransportJobInput = {
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutEmployeeInput
    outlet: OutletCreateNestedOneWithoutEmployeeInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutWorkerInput
    EmployeeAttendance?: EmployeeAttendanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutTransportJobInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    userId: number
    outletId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutWorkerInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutTransportJobInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTransportJobInput, EmployeeUncheckedCreateWithoutTransportJobInput>
  }

  export type OrderUpsertWithoutTransportJobInput = {
    update: XOR<OrderUpdateWithoutTransportJobInput, OrderUncheckedUpdateWithoutTransportJobInput>
    create: XOR<OrderCreateWithoutTransportJobInput, OrderUncheckedCreateWithoutTransportJobInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutTransportJobInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutTransportJobInput, OrderUncheckedUpdateWithoutTransportJobInput>
  }

  export type OrderUpdateWithoutTransportJobInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    outlet?: OutletUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTransportJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type EmployeeUpsertWithoutTransportJobInput = {
    update: XOR<EmployeeUpdateWithoutTransportJobInput, EmployeeUncheckedUpdateWithoutTransportJobInput>
    create: XOR<EmployeeCreateWithoutTransportJobInput, EmployeeUncheckedCreateWithoutTransportJobInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTransportJobInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTransportJobInput, EmployeeUncheckedUpdateWithoutTransportJobInput>
  }

  export type EmployeeUpdateWithoutTransportJobInput = {
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneRequiredWithoutEmployeeNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutWorkerNestedInput
    EmployeeAttendance?: EmployeeAttendanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTransportJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    userId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutWorkerNestedInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateWithoutNotificationInput = {
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Employee?: EmployeeCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: number
    fullName?: string | null
    email: string
    password?: string | null
    avatar?: string
    isVerified?: boolean
    role?: $Enums.Role
    token?: string | null
    tokenExpiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OrderCreateWithoutPaymentInput = {
    orderStatus?: $Enums.OrderStatus
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    customerAddress: AddressCreateNestedOneWithoutOrderInput
    outlet: OutletCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutOrderInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    outlet?: OutletUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type EmployeeCreateWithoutEmployeeAttendanceInput = {
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutEmployeeInput
    outlet: OutletCreateNestedOneWithoutEmployeeInput
    LaundryJob?: LaundryJobCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobCreateNestedManyWithoutDriverInput
  }

  export type EmployeeUncheckedCreateWithoutEmployeeAttendanceInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    userId: number
    outletId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    LaundryJob?: LaundryJobUncheckedCreateNestedManyWithoutWorkerInput
    TransportJob?: TransportJobUncheckedCreateNestedManyWithoutDriverInput
  }

  export type EmployeeCreateOrConnectWithoutEmployeeAttendanceInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEmployeeAttendanceInput, EmployeeUncheckedCreateWithoutEmployeeAttendanceInput>
  }

  export type AttendanceRecordCreateWithoutEmployeeAttendanceInput = {
    attendanceType: $Enums.AttendanceType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput = {
    id?: number
    attendanceType: $Enums.AttendanceType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type AttendanceRecordCreateOrConnectWithoutEmployeeAttendanceInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput>
  }

  export type AttendanceRecordCreateManyEmployeeAttendanceInputEnvelope = {
    data: AttendanceRecordCreateManyEmployeeAttendanceInput | AttendanceRecordCreateManyEmployeeAttendanceInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutEmployeeAttendanceInput = {
    update: XOR<EmployeeUpdateWithoutEmployeeAttendanceInput, EmployeeUncheckedUpdateWithoutEmployeeAttendanceInput>
    create: XOR<EmployeeCreateWithoutEmployeeAttendanceInput, EmployeeUncheckedCreateWithoutEmployeeAttendanceInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutEmployeeAttendanceInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutEmployeeAttendanceInput, EmployeeUncheckedUpdateWithoutEmployeeAttendanceInput>
  }

  export type EmployeeUpdateWithoutEmployeeAttendanceInput = {
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneRequiredWithoutEmployeeNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUpdateManyWithoutDriverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEmployeeAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    userId?: IntFieldUpdateOperationsInput | number
    outletId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeAttendanceInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedUpdateWithoutEmployeeAttendanceInput>
    create: XOR<AttendanceRecordCreateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedCreateWithoutEmployeeAttendanceInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeAttendanceInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutEmployeeAttendanceInput, AttendanceRecordUncheckedUpdateWithoutEmployeeAttendanceInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutEmployeeAttendanceInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutEmployeeAttendanceInput>
  }

  export type AttendanceRecordScalarWhereInput = {
    AND?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    OR?: AttendanceRecordScalarWhereInput[]
    NOT?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    id?: IntFilter<"AttendanceRecord"> | number
    attendanceType?: EnumAttendanceTypeFilter<"AttendanceRecord"> | $Enums.AttendanceType
    employeeAttendanceId?: IntFilter<"AttendanceRecord"> | number
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    isDeleted?: BoolFilter<"AttendanceRecord"> | boolean
    deletedAt?: DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null
  }

  export type EmployeeAttendanceCreateWithoutAttendanceRecordInput = {
    isAttended?: boolean
    canClockIn?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutEmployeeAttendanceInput
  }

  export type EmployeeAttendanceUncheckedCreateWithoutAttendanceRecordInput = {
    id?: number
    isAttended?: boolean
    canClockIn?: boolean
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type EmployeeAttendanceCreateOrConnectWithoutAttendanceRecordInput = {
    where: EmployeeAttendanceWhereUniqueInput
    create: XOR<EmployeeAttendanceCreateWithoutAttendanceRecordInput, EmployeeAttendanceUncheckedCreateWithoutAttendanceRecordInput>
  }

  export type EmployeeAttendanceUpsertWithoutAttendanceRecordInput = {
    update: XOR<EmployeeAttendanceUpdateWithoutAttendanceRecordInput, EmployeeAttendanceUncheckedUpdateWithoutAttendanceRecordInput>
    create: XOR<EmployeeAttendanceCreateWithoutAttendanceRecordInput, EmployeeAttendanceUncheckedCreateWithoutAttendanceRecordInput>
    where?: EmployeeAttendanceWhereInput
  }

  export type EmployeeAttendanceUpdateToOneWithWhereWithoutAttendanceRecordInput = {
    where?: EmployeeAttendanceWhereInput
    data: XOR<EmployeeAttendanceUpdateWithoutAttendanceRecordInput, EmployeeAttendanceUncheckedUpdateWithoutAttendanceRecordInput>
  }

  export type EmployeeAttendanceUpdateWithoutAttendanceRecordInput = {
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeAttendanceNestedInput
  }

  export type EmployeeAttendanceUncheckedUpdateWithoutAttendanceRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateManyCustomerInput = {
    id?: number
    isPrimary?: boolean
    addressLine: string
    province: string
    regency: string
    district: string
    village: string
    latitude: string
    longitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    description: string
    isRead?: boolean
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type AddressUpdateWithoutCustomerInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Outlet?: OutletUpdateOneWithoutOutletAddressNestedInput
    Order?: OrderUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Outlet?: OutletUncheckedUpdateOneWithoutOutletAddressNestedInput
    Order?: OrderUncheckedUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaundryJobCreateManyWorkerInput = {
    id?: number
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type TransportJobCreateManyDriverInput = {
    id?: number
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type EmployeeAttendanceCreateManyEmployeeInput = {
    id?: number
    isAttended?: boolean
    canClockIn?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type LaundryJobUpdateWithoutWorkerInput = {
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutLaundryJobNestedInput
  }

  export type LaundryJobUncheckedUpdateWithoutWorkerInput = {
    id?: IntFieldUpdateOperationsInput | number
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaundryJobUncheckedUpdateManyWithoutWorkerInput = {
    id?: IntFieldUpdateOperationsInput | number
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransportJobUpdateWithoutDriverInput = {
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutTransportJobNestedInput
  }

  export type TransportJobUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransportJobUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeAttendanceUpdateWithoutEmployeeInput = {
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AttendanceRecord?: AttendanceRecordUpdateManyWithoutEmployeeAttendanceNestedInput
  }

  export type EmployeeAttendanceUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AttendanceRecord?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeAttendanceNestedInput
  }

  export type EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAttended?: BoolFieldUpdateOperationsInput | boolean
    canClockIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyCustomerAddressInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    outletId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderUpdateWithoutCustomerAddressInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outlet?: OutletUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    outletId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyOutletInput = {
    id?: number
    orderStatus?: $Enums.OrderStatus
    customerAddressId: number
    laundryWeight?: number | null
    laundryPrice?: number | null
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type EmployeeCreateManyOutletInput = {
    id?: number
    workShift?: $Enums.EmployeeWorkShift | null
    station?: $Enums.WorkerStation | null
    isPresent?: boolean
    isWorking?: boolean
    employmentStatus?: $Enums.EmploymentStatus
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderUpdateWithoutOutletInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOutletInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutOrderNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutOutletInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    customerAddressId?: IntFieldUpdateOperationsInput | number
    laundryWeight?: NullableIntFieldUpdateOperationsInput | number | null
    laundryPrice?: NullableIntFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeUpdateWithoutOutletInput = {
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    LaundryJob?: LaundryJobUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOutletInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LaundryJob?: LaundryJobUncheckedUpdateManyWithoutWorkerNestedInput
    TransportJob?: TransportJobUncheckedUpdateManyWithoutDriverNestedInput
    EmployeeAttendance?: EmployeeAttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutOutletInput = {
    id?: IntFieldUpdateOperationsInput | number
    workShift?: NullableEnumEmployeeWorkShiftFieldUpdateOperationsInput | $Enums.EmployeeWorkShift | null
    station?: NullableEnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    qty?: number | null
    orderItemName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type LaundryJobCreateManyOrderInput = {
    id?: number
    station: $Enums.WorkerStation
    isByPassRequested?: boolean
    isCompleted?: boolean
    byPassNote?: string | null
    byPassStatus?: $Enums.ByPassStatus | null
    workerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type TransportJobCreateManyOrderInput = {
    id?: number
    transportType: $Enums.TransportType
    isCompleted?: boolean
    distance: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type PaymentCreateManyOrderInput = {
    id?: number
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type OrderItemUpdateWithoutOrderInput = {
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    orderItemName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    orderItemName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    orderItemName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaundryJobUpdateWithoutOrderInput = {
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worker?: EmployeeUpdateOneWithoutLaundryJobNestedInput
  }

  export type LaundryJobUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaundryJobUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    station?: EnumWorkerStationFieldUpdateOperationsInput | $Enums.WorkerStation
    isByPassRequested?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    byPassNote?: NullableStringFieldUpdateOperationsInput | string | null
    byPassStatus?: NullableEnumByPassStatusFieldUpdateOperationsInput | $Enums.ByPassStatus | null
    workerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransportJobUpdateWithoutOrderInput = {
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driver?: EmployeeUpdateOneWithoutTransportJobNestedInput
  }

  export type TransportJobUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransportJobUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportType?: EnumTransportTypeFieldUpdateOperationsInput | $Enums.TransportType
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    distance?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutOrderInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordCreateManyEmployeeAttendanceInput = {
    id?: number
    attendanceType: $Enums.AttendanceType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type AttendanceRecordUpdateWithoutEmployeeAttendanceInput = {
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordUncheckedUpdateWithoutEmployeeAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutEmployeeAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}