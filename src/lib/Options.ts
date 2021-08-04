import { OptionValues } from "commander";

export class Options {
  private static instance: Options;

  inputOptions: OptionValues = [];
  config: string = "";
  watchFolder: string = "";
  outputFolder: string = "";
  mainFile: string = "";
  sourceMap: boolean = false;
  plugins: string = "";
  runOnce: boolean = false;
  includeHidden: boolean = false;
  enableJs: boolean = false;
  lessArgs: string = "";
  minified: boolean = false;
  allowedExtensions: string[] = [".less"];

  private constructor(options?: OptionValues) {
    if (options) this.setValues(options);
  }

  private setValues(options: OptionValues|undefined) {
    if (options !== undefined){

      this.inputOptions = options;
      this.config = options.config;
      this.watchFolder = options.args[0];
      this.outputFolder = options.args[1];
      this.mainFile = options.mainFile || options.args[2];
      this.sourceMap = options.sourceMap;
      this.plugins = options.plugins;
      this.runOnce = options.runOnce;
      this.includeHidden = options.includeHidden;
      this.enableJs = options.enableJs;
      this.lessArgs = options.lessArgs;
      this.minified = options.minified;
      this.allowedExtensions = [".less"];
      }
    }
    public setValue(key:string, value:any):Options|boolean {
    if (key in this){
      [key] = value;
      return Options.instance;
    }else{
      return false;
    }
    
  }
  public reset():void {
    this.inputOptions = [];
    this.config = '';
    this.watchFolder = '';
    this.outputFolder = '';
    this.mainFile = '';
    this.sourceMap = false;
    this.plugins = '';
    this.runOnce = false;
    this.includeHidden = false;
    this.enableJs = false;
    this.lessArgs = '';
    this.minified = false;
  }

  public static getInstance(options?: OptionValues): Options {
    if (!Options.instance) {
      Options.instance = new Options(options);
    }else{
      Options.instance.setValues(options);
    }

    return Options.instance;
  }
}