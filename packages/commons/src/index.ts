import { ON, Network } from "@starter/utils";

const net: Network = new Network();
const rx = net.getRx();
net.sayHello();
console.log(`On is ${ON} and Network is ${rx}`);
