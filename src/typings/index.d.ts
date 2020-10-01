declare module "workerize-loader!*" {
  class WebpackWorker extends Worker {
    constructor();
    expensive(time: number): Promise<number>;
  }

  export = WebpackWorker;
}
