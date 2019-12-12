class Network {
  private __rx: number = 0;

  setRx(r: number) {
    this.__rx = r;
  }

  getRx(): number {
    return this.__rx;
  }

  sayHello() {
    console.log(`Say hi to`);
  }
}

export default Network;
