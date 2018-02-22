// TypeScript Version: 2.2

export * from './spec';

// ============================================================================================
// Runtime typings adapted from https://github.com/vega/vega-lite/blob/master/typings/vega.d.ts
// ============================================================================================

// TODO
export type Runtime = any;

export const version: string;
export function parse(spec: any, opt?: any): Runtime;
export function isString(value: any): value is string;

export type Loader = {
  load: (uri: string, options?: any) => Promise<string>;
  sanitize: (uri: string, options: any) => Promise<{ href: string }>;
  http: (uri: string, options: any) => Promise<string>;
  file: (filename: string) => Promise<string>;
};

export class View {
  constructor(runtime: Runtime, config?: any);
  public initialize(dom?: Element | string): View;
  public finalize(): void;
  public logLevel(level: number): View;
  public renderer(renderer: 'canvas' | 'svg' | 'none'): View;
  public loader(loader: Loader): View;

  public hover(): View;
  public run(): View;
  public change(name: string, changeset: any): View;
  public changeset(): any;
  public data(name: string): object[];

  public width(w: number): View;
  public height(h: number): View;
  public padding(
    p: number | { left?: number; right?: number; top?: number; bottom?: number },
  ): View;

  public toImageURL(type: string): Promise<string>;

  toSVG(): Promise<string>;
  toCanvas(): Promise<any>; // TODO node-canvas result
}

export const Warn: number;
export const changeset: any;
export const loader: (opt?: any) => Loader;
