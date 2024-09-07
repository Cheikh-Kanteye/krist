declare module "colorthief" {
  class ColorThief {
    getColor(
      img: HTMLImageElement,
      quality?: number
    ): Promise<[number, number, number]>;
    getPalette(
      img: HTMLImageElement,
      colorCount?: number,
      quality?: number
    ): Promise<[number, number, number][]>;
  }

  export default ColorThief;
}
