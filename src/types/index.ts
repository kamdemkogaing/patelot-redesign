import has from "lodash/has";
import isArray from "lodash/isArray";
import isNil from "lodash/isNil";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";
import { ReactElement } from "react";

export * from "./header-types/header-navigation-types";
export * from "./header-types/header-types";
export * from "./header-types/header-validtaion";
export * from "./header-types/top-navigation-types";

export type PrimitiveString = string;
export type PrimitiveNumber = number;
export type PrimitiveDate = Date;
export type PrimitiveBoolean = boolean;

export type PrimitiveImage = {
  alt?: PrimitiveString;
  src: PrimitiveString;
  extension?: PrimitiveString;
  width: PrimitiveNumber;
  height: PrimitiveNumber;
  id?: PrimitiveString;
  content?: PrimitiveString;
};

export type PrimitiveVideo = {
  src: PrimitiveString;
};

export type PrimitiveHeadline = {
  value: PrimitiveString;
  className?: PrimitiveString;
  tag?: keyof JSX.IntrinsicElements;
};

export type PrimitiveTable = {
  style?: string;
  tableLayout?: PrimitiveTableLayot;
  headline?: PrimitiveHeadline;
  subheadline?: PrimitiveHeadline;
  colorScheme?: PrimitiveContext;
  tableAlignment?: string;
  textAlignment?: string;
  header?: string;
  thead?: Array<{
    id: string;
    cells: Array<{
      id: string;
      colSpan?: number;
      value: PrimitiveString;
    }>;
  }>;
  tbody?: Array<{
    id: string;
    header?: string;
    cells: Array<{
      id: string;
      colSpan?: number;
      value: PrimitiveString;
    }>;
  }>;
};

export type PrimitiveText = {
  value: PrimitiveString;
  className?: PrimitiveString;
};

export type PrimitiveTextWithId = {
  id: PrimitiveNumber;
} & PrimitiveText;

export type PrimitiveTextParagraphs = {
  paragraphs: PrimitiveTextWithId[];
} & PrimitiveText;

export type PrimitiveProduct = PrimitiveString;

export type PrimitiveVisibilityDates = {
  starttime?: PrimitiveNumber;
  endtime?: PrimitiveNumber;
};

export type PrimitiveLanguage = {
  href: string;
  fallbackUrl: string;
  language: string;
  active: boolean;
};

export type PrimitiveLinkId = {
  value: string;
};

export type PrimitiveFooterItems = {
  id: number;
  link: PrimitiveLink;
  className?: PrimitiveString;
  linkId?: PrimitiveLinkId;
  visibleForMinimizedFooter: number;
};

export type PrimitiveFooterContent = {
  headline: PrimitiveHeadline;
  items?: PrimitiveFooterItems[];
  text?: PrimitiveText;
  className?: PrimitiveString;
};

export type PrimitiveFooter = {
  id: number;
  type: string;
  colPos: string;
  content: PrimitiveFooterContent;
};
export type PrimitiveHeader = {
  id: number;
  type: string;
  colPos: string;
  content: PrimitiveFooterContent;
};

export type PrimitiveFooterCols = {
  colPos0: PrimitiveFooter[];
  colPos1: PrimitiveFooter[];
  colPos2: PrimitiveFooter[];
  colPos3: PrimitiveFooter[];
};

export type PrimitiveHeaderCols = {
  colPos0: PrimitiveHeader[];
};

type Never<T> = {
  [P in keyof T]?: never;
};

type LinkIconDecorationProps = {
  icon?: ReactElement;
};

type LinkArrowDecorationProps = {
  arrow?: boolean;
  arrowRight?: boolean;
};

type LinkIconDecoration = LinkIconDecorationProps &
  Never<LinkArrowDecorationProps>;
type LinkArrowDecoration = LinkArrowDecorationProps &
  Never<LinkIconDecorationProps>;

type LinkDecoration = LinkIconDecoration | LinkArrowDecoration;

type LinkCommonProps = {
  href: string;
  title?: string;
  linkId?: string;
  group?: boolean;
  type?: string;
  linkType?: string;
  target?: string;
  modalLink?: string;
  context?: string;
  colorSchemeChildren?: string;
};

type LinkUnstyledProps = {
  unstyled: boolean;
  invert?: boolean;
};

type LinkStyledProps = {
  primary?: boolean;
  secondary?: boolean;
  monochrome?: boolean;
  special?: boolean;
  borderless?: boolean;
  invert?: boolean;
};

type LinkButtonProps = {
  button: boolean;
  ghost?: boolean;
  stretch?: boolean;
  link?: PrimitiveLink;
  label?: PrimitiveText;
} & LinkStyledProps;

type LinkTextProps = unknown & LinkStyledProps;

type LinkUnstyled = LinkUnstyledProps &
  Never<Omit<LinkButtonProps, keyof LinkUnstyledProps>> &
  Never<Omit<LinkTextProps, keyof LinkUnstyledProps>>;

type LinkButton = LinkButtonProps &
  Never<Omit<LinkTextProps, keyof LinkButtonProps>> &
  Never<Omit<LinkUnstyledProps, keyof LinkButtonProps>>;

type LinkText = LinkTextProps &
  Never<Omit<LinkButtonProps, keyof LinkTextProps>> &
  Never<Omit<LinkUnstyledProps, keyof LinkTextProps>>;

export type PrimitiveLink = (LinkUnstyled | LinkButton | LinkText) &
  LinkCommonProps &
  LinkDecoration;

export type PrimitiveContext =
  | "dark"
  | "bright"
  | "grey"
  | "blue"
  | "midnightBlue"
  | "midnightBlackBlue"
  | "darkBlue"
  | "white"
  | "gray";

export type PrimitiveTableLayot = "transform" | "comparing";

export type PrimitiveOptions<Properties> = {
  -readonly [Property in keyof Properties]: Properties[Property];
};

export const isValidHeadline = (
  headline?: PrimitiveHeadline
): headline is PrimitiveHeadline => {
  return !isNil(headline?.value) && !!headline?.value;
};

export const isValidText = (text?: PrimitiveText): text is PrimitiveText => {
  return !isNil(text?.value) && !!text?.value;
};

export const isValidTextWithId = (
  text?: PrimitiveTextWithId
): text is PrimitiveTextWithId => {
  return isValidText(text) && isNumber(text?.id);
};

export const isValidTextParagraphs = (
  text?: PrimitiveTextParagraphs
): text is PrimitiveTextParagraphs => {
  return (
    !isNil(text) &&
    isObject(text) &&
    has(text, "paragraphs") &&
    isArray(text.paragraphs) &&
    text.paragraphs.every(isValidTextWithId)
  );
};

export type LinkValidationOptions = {
  title?: boolean;
};

export const isValidLink = (
  link?: PrimitiveLink,
  options: LinkValidationOptions = { title: true }
): link is PrimitiveLink => {
  if (options.title) {
    return (
      !isNil(link?.href) && !isNil(link?.title) && !!link?.href && !!link?.title
    );
  }

  return !isNil(link?.href) && !!link?.href;
};

export const isValidImage = (
  image?: PrimitiveImage
): image is PrimitiveImage => {
  return !isNil(image?.src) && !!image?.src;
};

export const isValidString = (
  string?: PrimitiveString
): string is PrimitiveString => {
  return !isNil(string) && !!string;
};

export const isValidVideo = (
  video?: PrimitiveVideo
): video is PrimitiveVideo => {
  return !isNil(video?.src) && !!video?.src;
};

export const isValidTable = (
  table: PrimitiveTable
): table is PrimitiveTable => {
  return (
    !isNil(table) &&
    ((isArray(table.tbody) &&
      table.tbody.some(({ cells }) =>
        cells.some(({ id, value }) => !isNil(value) && !isNil(id))
      )) ||
      (isArray(table.thead) &&
        table.thead.some(({ cells }) =>
          cells.some(({ id, value }) => !isNil(value) && !isNil(id))
        )))
  );
};

export const isValidFooterItems = (
  footerItems: PrimitiveFooterItems
): footerItems is PrimitiveFooterItems => {
  return isValidLink(footerItems.link) && !isNil(footerItems.id);
};

export const isValidFooterContent = (
  footerContent: PrimitiveFooterContent
): footerContent is PrimitiveFooterContent => {
  return (
    (!isNil(footerContent.headline) && isArray(footerContent.items)) ||
    !isNil(footerContent.text)
  );
};

export const isValidFooter = (
  footer: PrimitiveFooter
): footer is PrimitiveFooter => {
  return (
    !isNil(footer.colPos) &&
    !isNil(footer.id) &&
    !isNil(footer.type) &&
    isValidFooterContent(footer.content)
  );
};

export const isValidFooterCols = (
  footers: PrimitiveFooterCols
): footers is PrimitiveFooterCols => {
  return (
    footers.colPos0 !== undefined &&
    footers.colPos0.every((f) => isValidFooter(f)) &&
    footers.colPos1 !== undefined &&
    footers.colPos1.every((f) => isValidFooter(f)) &&
    footers.colPos2 !== undefined &&
    footers.colPos2.every((f) => isValidFooter(f))
  );
};

export const ValidColorsDark = [
  "blue",
  "darkBlue",
  "midnightBlue",
  "midnightBlackBlue",
  "dark",
];
export const ValidColorsBright = ["white", "grey", "bright"];

//export type IArtciles = {};
