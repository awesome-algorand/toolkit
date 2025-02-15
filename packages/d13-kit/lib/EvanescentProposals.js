import { getArc56ReturnValue } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "EvanescentProposals", "structs": {}, "methods": [], "state": { "schema": { "global": { "ints": 0, "bytes": 0 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": {}, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBjb250cmFjdHMuZXZhbmVzY2VudF9wcm9wb3NhbHMuRXZhbmVzY2VudFByb3Bvc2Fscy5hcHByb3ZhbF9wcm9ncmFtKCkgLT4gdWludDY0OgptYWluOgogICAgLy8gY29udHJhY3RzL2V2YW5lc2NlbnRfcHJvcG9zYWxzLnB5OjcKICAgIC8vIHN0YXJ0X3JvdW5kID0gb3AuYnRvaShUeG4uYXBwbGljYXRpb25fYXJncygwKSkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDAKICAgIGJ0b2kKICAgIC8vIGNvbnRyYWN0cy9ldmFuZXNjZW50X3Byb3Bvc2Fscy5weTo4CiAgICAvLyBlbmRfcm91bmQgPSBvcC5idG9pKFR4bi5hcHBsaWNhdGlvbl9hcmdzKDEpKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgYnRvaQogICAgLy8gY29udHJhY3RzL2V2YW5lc2NlbnRfcHJvcG9zYWxzLnB5OjkKICAgIC8vIGZvciBybmQgaW4gdXJhbmdlKHN0YXJ0X3JvdW5kLCBlbmRfcm91bmQgKyAxKToKICAgIHB1c2hpbnQgMSAvLyAxCiAgICArCiAgICBzd2FwCgptYWluX2Zvcl9oZWFkZXJAMToKICAgIC8vIGNvbnRyYWN0cy9ldmFuZXNjZW50X3Byb3Bvc2Fscy5weTo5CiAgICAvLyBmb3Igcm5kIGluIHVyYW5nZShzdGFydF9yb3VuZCwgZW5kX3JvdW5kICsgMSk6CiAgICBkdXAKICAgIGRpZyAyCiAgICA8CiAgICBieiBtYWluX2FmdGVyX2ZvckA0CiAgICAvLyBjb250cmFjdHMvZXZhbmVzY2VudF9wcm9wb3NhbHMucHk6MTIKICAgIC8vIG9wLml0b2Iob3AuQmxvY2suYmxrX3RpbWVzdGFtcChybmQpKSwKICAgIGR1cG4gMgogICAgYmxvY2sgQmxrVGltZXN0YW1wCiAgICBpdG9iCiAgICAvLyBjb250cmFjdHMvZXZhbmVzY2VudF9wcm9wb3NhbHMucHk6MTMKICAgIC8vIG9wLml0b2Iob3AuQmxvY2suYmxrX3R4bl9jb3VudGVyKHJuZCkpLAogICAgZGlnIDEKICAgIGJsb2NrIEJsa1R4bkNvdW50ZXIKICAgIGl0b2IKICAgIC8vIGNvbnRyYWN0cy9ldmFuZXNjZW50X3Byb3Bvc2Fscy5weToxMS0xNAogICAgLy8gb3AuY29uY2F0KAogICAgLy8gICAgIG9wLml0b2Iob3AuQmxvY2suYmxrX3RpbWVzdGFtcChybmQpKSwKICAgIC8vICAgICBvcC5pdG9iKG9wLkJsb2NrLmJsa190eG5fY291bnRlcihybmQpKSwKICAgIC8vICkKICAgIGNvbmNhdAogICAgLy8gY29udHJhY3RzL2V2YW5lc2NlbnRfcHJvcG9zYWxzLnB5OjEwLTE1CiAgICAvLyBsb2coCiAgICAvLyAgICAgb3AuY29uY2F0KAogICAgLy8gICAgICAgICBvcC5pdG9iKG9wLkJsb2NrLmJsa190aW1lc3RhbXAocm5kKSksCiAgICAvLyAgICAgICAgIG9wLml0b2Iob3AuQmxvY2suYmxrX3R4bl9jb3VudGVyKHJuZCkpLAogICAgLy8gICAgICkKICAgIC8vICkKICAgIGxvZwogICAgLy8gY29udHJhY3RzL2V2YW5lc2NlbnRfcHJvcG9zYWxzLnB5OjkKICAgIC8vIGZvciBybmQgaW4gdXJhbmdlKHN0YXJ0X3JvdW5kLCBlbmRfcm91bmQgKyAxKToKICAgIHB1c2hpbnQgMSAvLyAxCiAgICArCiAgICBidXJ5IDEKICAgIGIgbWFpbl9mb3JfaGVhZGVyQDEKCm1haW5fYWZ0ZXJfZm9yQDQ6CiAgICAvLyBjb250cmFjdHMvZXZhbmVzY2VudF9wcm9wb3NhbHMucHk6MTYKICAgIC8vIHJldHVybiBUcnVlCiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==", "clear": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": ["NoOp"], "call": [] } };
class BinaryStateValue {
    value;
    constructor(value) {
        this.value = value;
    }
    asByteArray() {
        return this.value;
    }
    asString() {
        return this.value !== undefined ? Buffer.from(this.value).toString('utf-8') : undefined;
    }
}
/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the EvanescentProposals smart contract
 */
export class EvanescentProposalsParamsFactory {
}
/**
 * A factory to create and deploy one or more instance of the EvanescentProposals smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class EvanescentProposalsFactory {
    /**
     * The underlying `AppFactory` for when you want to have more flexibility
     */
    appFactory;
    /**
     * Creates a new instance of `EvanescentProposalsFactory`
     *
     * @param params The parameters to initialise the app factory with
     */
    constructor(params) {
        this.appFactory = new _AppFactory({
            ...params,
            appSpec: APP_SPEC,
        });
    }
    /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
    get appName() {
        return this.appFactory.appName;
    }
    /** The ARC-56 app spec being used */
    get appSpec() {
        return APP_SPEC;
    }
    /** A reference to the underlying `AlgorandClient` this app factory is using. */
    get algorand() {
        return this.appFactory.algorand;
    }
    /**
     * Returns a new `AppClient` client for an app instance of the given ID.
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    getAppClientById(params) {
        return new EvanescentProposalsClient(this.appFactory.getAppClientById(params));
    }
    /**
     * Returns a new `AppClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    async getAppClientByCreatorAndName(params) {
        return new EvanescentProposalsClient(await this.appFactory.getAppClientByCreatorAndName(params));
    }
    /**
     * Idempotently deploys the EvanescentProposals smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    async deploy(params = {}) {
        const result = await this.appFactory.deploy({
            ...params,
        });
        return { result: result.result, appClient: new EvanescentProposalsClient(result.appClient) };
    }
    /**
     * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    params = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the EvanescentProposals smart contract using a bare call.
             *
             * @param params The params for the bare (raw) call
             * @returns The params for a create call
             */
            bare: (params) => {
                return this.appFactory.params.bare.create(params);
            },
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the EvanescentProposals smart contract using a bare call.
             *
             * @param params The params for the bare (raw) call
             * @returns The transaction for a create call
             */
            bare: (params) => {
                return this.appFactory.createTransaction.bare.create(params);
            },
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the EvanescentProposals smart contract using a bare call.
             *
             * @param params The params for the bare (raw) call
             * @returns The create result
             */
            bare: async (params) => {
                const result = await this.appFactory.send.bare.create(params);
                return { result: result.result, appClient: new EvanescentProposalsClient(result.appClient) };
            },
        },
    };
}
/**
 * A client to make calls to the EvanescentProposals smart contract
 */
export class EvanescentProposalsClient {
    /**
     * The underlying `AppClient` for when you want to have more flexibility
     */
    appClient;
    constructor(appClientOrParams) {
        this.appClient = appClientOrParams instanceof _AppClient ? appClientOrParams : new _AppClient({
            ...appClientOrParams,
            appSpec: APP_SPEC,
        });
    }
    /**
     * Checks for decode errors on the given return value and maps the return value to the return type for the given method
     * @returns The typed return value or undefined if there was no value
     */
    decodeReturnValue(method, returnValue) {
        return returnValue !== undefined ? getArc56ReturnValue(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : undefined;
    }
    /**
     * Returns a new `EvanescentProposalsClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    static async fromCreatorAndName(params) {
        return new EvanescentProposalsClient(await _AppClient.fromCreatorAndName({ ...params, appSpec: APP_SPEC }));
    }
    /**
     * Returns an `EvanescentProposalsClient` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    static async fromNetwork(params) {
        return new EvanescentProposalsClient(await _AppClient.fromNetwork({ ...params, appSpec: APP_SPEC }));
    }
    /** The ID of the app instance this client is linked to. */
    get appId() {
        return this.appClient.appId;
    }
    /** The app address of the app instance this client is linked to. */
    get appAddress() {
        return this.appClient.appAddress;
    }
    /** The name of the app. */
    get appName() {
        return this.appClient.appName;
    }
    /** The ARC-56 app spec being used */
    get appSpec() {
        return this.appClient.appSpec;
    }
    /** A reference to the underlying `AlgorandClient` this app client is using. */
    get algorand() {
        return this.appClient.algorand;
    }
    /**
     * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    params = {
        /**
         * Makes a clear_state call to an existing instance of the EvanescentProposals smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.params.bare.clearState(params);
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Makes a clear_state call to an existing instance of the EvanescentProposals smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.createTransaction.bare.clearState(params);
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Makes a clear_state call to an existing instance of the EvanescentProposals smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.send.bare.clearState(params);
        },
    };
    /**
     * Clone this app client with different params
     *
     * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
     * @returns A new app client with the altered params
     */
    clone(params) {
        return new EvanescentProposalsClient(this.appClient.clone(params));
    }
    /**
     * Methods to access state for the current EvanescentProposals app
     */
    state = {};
    newGroup() {
        const client = this;
        const composer = this.algorand.newGroup();
        let promiseChain = Promise.resolve();
        const resultMappers = [];
        return {
            /**
             * Add a clear state call to the EvanescentProposals contract
             */
            clearState(params) {
                promiseChain = promiseChain.then(() => composer.addAppCall(client.params.clearState(params)));
                return this;
            },
            addTransaction(txn, signer) {
                promiseChain = promiseChain.then(() => composer.addTransaction(txn, signer));
                return this;
            },
            async composer() {
                await promiseChain;
                return composer;
            },
            async simulate(options) {
                await promiseChain;
                const result = await (!options ? composer.simulate() : composer.simulate(options));
                return {
                    ...result,
                    returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue)
                };
            },
            async send(params) {
                await promiseChain;
                const result = await composer.send(params);
                return {
                    ...result,
                    returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue)
                };
            }
        };
    }
}
//# sourceMappingURL=EvanescentProposals.js.map