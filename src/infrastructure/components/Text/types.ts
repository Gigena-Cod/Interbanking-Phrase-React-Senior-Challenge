export interface TextProps {
  value: string;
  fontColor?: string;
  fontSize?: FONT_SIZE;
  fontWeight?: FONT_WEIGHT;
}

export enum FONT_SIZE {
  TEXT_SM = "text-sm",
  TEXT_BASE = "text-base",
  TEXT_LG = "text-lg",
  TEXT_XL = "text-xl",
  TEXT_2XL = "text-2xl",
  TEXT_3XL = "text-3xl",
  TEXT_4XL = "text-4xl",
  TEXT_5XL = "text-5xl",
  TEXT_6XL = "text-6xl",
  TEXT_7XL = "text-7xl",
  TEXT_8XL = "text-8xl",
  TEXT_9XL = "text-9xl",
}

export enum FONT_WEIGHT {
  FONT_BOLD = "font-bold",
  FONT_MEDIUM = "font-medium",
  FONT_NORMAL = "font-normal",
  FONT_LIGHT = "font-light",
  FONT_THIN = "font-thin",
}
