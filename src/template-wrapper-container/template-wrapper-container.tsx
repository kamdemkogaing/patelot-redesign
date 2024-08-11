import { PrimitiveContext, PrimitiveHeadline, PrimitiveText } from "../types";

export interface ITemplateWrapperContainer
  extends React.HTMLAttributes<HTMLDivElement> {
  anchor?: any;
  spaceBefore?: any;
  spaceAfter?: any;
  newImplementation?: boolean;
  colorScheme?: PrimitiveContext;
  context?: PrimitiveContext;
  headline?: PrimitiveHeadline;
  textAlignment?: string;
  handlePreComponentContainerContents?: boolean;
  text?: PrimitiveText;
  contextColor?: {
    bright?: string;
    dark?: string;
    gray?: string;
    blue?: string;
    white?: string;
    darkBlue?: string;
    midnightBlue?: string;
    midnightBlackBlue?: string;
    grey?: string;
  };
  considerGapProperties?: boolean;
  tableLayout?: string;
  reduceGapTop?: boolean;
  gapBottom?: boolean;
  reduceGapBottom?: boolean;
  noContainer?: boolean;
  container?: boolean;
  noPaddingBottom?: boolean;
  noPaddingLeft?: boolean;
  noPaddingRight?: boolean;
  noPaddingTop?: boolean;
  fullWith?: boolean;
  temporaryHeaderFix?: boolean;
  noHorizondalPadding?: boolean;
}
