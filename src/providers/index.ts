import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ModalController } from 'ionic-angular';
import { TransactionStorageService } from './transaction/transaction-storage-service';
import { TransactionService } from './transaction/transaction-service';
import { QRScanner } from './qrscanner/qrscanner';
import { PaymentService } from './payment/payment-service';
import { InsightPaymentRequestHandler } from './payment/insight-payment-request-handler';
import { BitcoinAverageExchangeService } from './currency/bitcoinaverage-service';
import { BitcoinUnit } from './currency/bitcoin-unit';
import { CurrencyService } from './currency/currency-service';
import { AccountService, ACCOUNT_TYPE_BITCOIN_ADDRESS, ACCOUNT_TYPE_BITCOIN_XPUB_KEY, ACCOUNT_TYPE_TESTNET_ADDRESS, ACCOUNT_TYPE_TESTNET_TPUB_KEY } from './account/account-service';
import { AccountSyncService } from './account/account-sync-service';
import { Repository } from './repository';
import { Config } from './config';
import {
    CryptocurrencyService ,
    BITCOIN,
    TESTNET,
    BITCOIN_ADDRESS,
    BITCOIN_XPUB_KEY,
    TESTNET_ADDRESS,
    TESTNET_TPUB_KEY,
    REGEX_BITCOIN_ADDRESS,
    REGEX_BITCOIN_URI,
    REGEX_TESTNET_ADDRESS,
    REGEX_TESTNET_URI,
    REGEX_XPUB_KEY,
    REGEX_TPUB_KEY
} from './currency/cryptocurrency-service';

export function provideCurrencyService(config:Config, exchangeService:BitcoinAverageExchangeService) {
    return new CurrencyService(config, exchangeService);
}

export function provideAccountService(cryptocurrencyService:CryptocurrencyService, config:Config, repository:Repository) {
    return new AccountService(cryptocurrencyService, config, repository);
}

export function provideAccountSyncService(transactionService:TransactionService, transactionStorageService:TransactionStorageService, accountService:AccountService, cryptocurrencyService:CryptocurrencyService) {
    return new AccountSyncService(transactionService, transactionStorageService, accountService, cryptocurrencyService);
}

export function provideTransactionService(http:Http, cryptocurrencyService:CryptocurrencyService) {
    return new TransactionService(http, cryptocurrencyService);
}

export function provideTransactionStorageService(repository:Repository) {
    return new TransactionStorageService(repository);
}

export function providePaymentService(transactionService:TransactionService) {
    return new PaymentService(transactionService);
}

export function provideCryptocurrencyService() {
    return new CryptocurrencyService();
}

export function provideRepository() {
    return new Repository();
}

export function provideConfig(storage:Storage) {
    return new Config(storage);
}

export function provideQRScanner(modalController: ModalController) {
    return new QRScanner(modalController);
}

export function provideBitcoinAverageExchangeService(http:Http) {
    return new BitcoinAverageExchangeService(http);
}

export {
    Config ,
    Repository ,
    BitcoinUnit ,
    AccountService ,
    AccountSyncService,
    CurrencyService ,
    CryptocurrencyService ,
    BitcoinAverageExchangeService,
    InsightPaymentRequestHandler,
    PaymentService,
    QRScanner,
    TransactionService,
    TransactionStorageService,
    BITCOIN,
    TESTNET,
    BITCOIN_ADDRESS,
    BITCOIN_XPUB_KEY,
    TESTNET_ADDRESS,
    TESTNET_TPUB_KEY,
    REGEX_BITCOIN_ADDRESS,
    REGEX_BITCOIN_URI,
    REGEX_TESTNET_ADDRESS,
    REGEX_TESTNET_URI,
    REGEX_XPUB_KEY,
    REGEX_TPUB_KEY,
    ACCOUNT_TYPE_BITCOIN_ADDRESS,
    ACCOUNT_TYPE_BITCOIN_XPUB_KEY,
    ACCOUNT_TYPE_TESTNET_ADDRESS,
    ACCOUNT_TYPE_TESTNET_TPUB_KEY
};
