export class Defaults {
  static DEFAULT_DATE_DISPLAY_FORMAT = '%d/%m/%Y %H:%M:%S %Z';
  static DEFAULT_THOUSAND_SEPARATOR = ',';
  static DEFAULT_DECIMAL_SEPARATOR = '.';
  static DEFAULT_CURRENCY_LOCATION: 'after' | 'before' = 'after';
  static FLOATING_PRECISION = 2;
  static RPC_ENDPOINT = 'http://localhost:8545';
  static BALANCE_SAVE_FREQUENCY = 24;
  static ANONYMIZED_LOGS = false;
  static HISTORICAL_DATA_START = '01/08/2015';
  static ANONYMOUS_USAGE_ANALYTICS = true;
  static KRAKEN_DEFAULT_ACCOUNT_TYPE = 'starter';
}

export const exchanges = [
  'poloniex',
  'kraken',
  'bittrex',
  'bitmex',
  'binance',
  'coinbase',
  'coinbasepro',
  'gemini'
] as const;
