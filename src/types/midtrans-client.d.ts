declare module 'midtrans-client' {
  export class Snap {
    constructor(options: {
      isProduction: boolean;
      serverKey: string;
      clientKey: string;
    });

    createTransaction(parameter: {
      transaction_details: {
        order_id: string;
        gross_amount: number;
      };
      customer_details?: {
        first_name?: string;
        last_name?: string;
        email?: string;
        phone?: string;
      };
      item_details?: Array<{
        id: string;
        price: number;
        quantity: number;
        name: string;
      }>;
      [key: string]: any;
    }): Promise<{
      token: string;
      redirect_url: string;
    }>;

    transaction: {
      notification(notificationJson: any): Promise<{
        order_id: string;
        transaction_status: string;
        fraud_status: string;
        payment_type: string;
        [key: string]: any;
      }>;
      status(transactionId: string): Promise<any>;
    };
  }

  export class CoreApi {
    constructor(options: {
      isProduction: boolean;
      serverKey: string;
      clientKey: string;
    });
  }
}