initSidebarItems({"macro":[["handler!","The `handler!` macro is shorthand for creating simple chat handlers. It accepts a name, a string used to build a regex for testing the incoming message and for collecting captures, and a closure which should return a `String` to be sent as the outgoing message."],["regex!","Shorthand for creating a `Regex` as suggested by the regex crate. You probably don't need to `macro_use` this unless you're creating handlers in an external module."]],"mod":[["adapter","Contains the `ChatAdapter` trait and several implementations"],["handler","Contains the MessageHandler trait and handler implementations."],["message","Types for incoming messages, outgoing messages, and an enum wrapper to enable control commands for adapters."]],"struct":[["Chatbot","The Chatbot is the central data structure of the chatbot platform. It contains a `run` method which listens for messages from adapters and routes them to handlers. Any program which uses chatbot will need to minimally create a Chatbot, add an adapter, add a handler, and call Chatbot `run`."]]});