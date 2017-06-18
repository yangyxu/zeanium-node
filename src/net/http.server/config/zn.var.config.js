zn.define({
    REQUEST_METHOD: {
        POST: 'POST',
        GET:'GET',
        PUT: 'PUT',
        DELETE: 'DELETE'
    },
    CONTENT_TYPE: {
        DEFAULT: 'text/plain;charset=UTF-8',
        HTML:'text/html;charset=UTF-8',
        XML: 'text/xml;charset=UTF-8',
        JSON:'application/json;charset=UTF-8',
        JAVASCRIPT: 'text/javascript;charset=UTF-8'
    },
    HTTP_MESSAGE: {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        406: "Not Acceptable",
        407: "Proxy Authorization Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Long",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        426: "Upgrade Required",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported"
    },
    HTTP_STATUS: {
        MESSAGE: {
            CONTINUE: 100,
            SWITCHING_PROTOCOLS: 101,
            PROCESSING: 102
        },
        SUCCESS: {
            OK: 200,
            CREATED: 201,
            ACCEPTED: 202,
            NON_AUTHORITATIVE_INFORMATION: 203,
            NO_CONTENT: 204,
            RESET_CONTENT: 205,
            PARTIAL_CONTENT: 206,
            MULTI_STATUS: 207
        },
        REDIRECT: {
            MULTIPLE_CHOICES: 300,
            MOVED_PERMANENTLY: 301,
            FOUND: 302,
            SEE_OTHER: 303,
            NOT_MODIFIED: 304,
            USE_PROXY: 305,
            SWITCH_PROXY: 306,
            TEMPORARY_REDIRECT: 307
        },
        CLIENT_ERROR: {
            BAD_REQUEST: 400,
            UNAUTHORIZED: 401,
            PAYMENT_REQUIRED: 402,
            FORBIDDEN: 403,
            NOT_FOUND: 404,
            METHOD_NOT_ALLOWED: 405,
            NOT_ACCEPTABLE: 406,
            PROXY_AUTHENTICATION_REQUIRED: 407,
            REQUEST_TIMEOUT: 408,
            CONFLICT: 409,
            GONE: 410,
            LENGTH_REQUIRED: 411,
            PRECONDITION_FAILED: 412,
            REQUEST_ENTITY_TOO_LARGE: 413,
            REQUEST_URI_TOO_LONG: 414,
            UNSUPPORTED_MEDIA_TYPE: 415,
            REQUESTED_RANGE_NOT_SATISFIABLE: 416,
            EXPECTATION_FAILED: 417,
            UNPROCESSABLE_ENTITY: 422,
            LOCKED: 423,
            FAILED_DEPENDENCY: 424,
            UNORDERED_COLLECTION: 425,
            UPGRADE_REQUIRED: 426,
            RETRY_WITH: 449
        },
        SERVER_ERROR: {
            INTERNAL_SERVER_ERROR: 500,
            NOT_IMPLEMENTED: 501,
            BAD_GATEWAY: 502,
            SERVICE_UNAVAILABLE: 503,
            GATEWAY_TIMEOUT: 504,
            HTTP_VERSION_NOT_SUPPORTED: 505,
            VARIANT_ALSO_NEGOTIATES: 506,
            INSUFFICIENT_STORAGE: 507,
            BANDWIDTH_LIMIT_EXCEEDED: 509,
            NOT_EXTENDED: 510
        }
    }
});