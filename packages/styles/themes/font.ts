import { css } from "@emotion/react";

import { FONT_FAMILY } from "@repo/assets/static";

export const font = {
  regular_11: css`
    font-size: 1.1rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY};
    line-height: 1.45455;
  `,
  regular_12: css`
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY};
    line-height: 1.33333;
  `,
  regular_13: css`
    font-size: 1.3rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY};
    line-height: 1.53846;
  `,
  regular_14: css`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY};
    line-height: 1.57142;
  `,
  regular_15: css`
    font-size: 1.5rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY};
    line-height: 1.6;
  `,
  regular_16: css`
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY};
    line-height: 1.75;
  `,
  medium_11: css`
    font-size: 1.1rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.45455;
  `,
  medium_12: css`
    font-size: 1.2rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.45455;
  `,
  medium_13: css`
    font-size: 1.3rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.53846;
  `,
  medium_14: css`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.57142;
  `,
  medium_15: css`
    font-size: 1.5rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.6;
  `,
  medium_16: css`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.625;
  `,
  medium_17: css`
    font-size: 1.7rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.294117;
  `,
  medium_18: css`
    font-size: 1.8rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.66666;
  `,
  medium_20: css`
    font-size: 2rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.5;
  `,
  medium_22: css`
    font-size: 2.2rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.090909;
  `,
  medium_24: css`
    font-size: 2.4rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.25;
  `,
  medium_25: css`
    font-size: 2.5rem;
    font-weight: 500;
    font-family: ${FONT_FAMILY};
    line-height: 1.4;
  `,
  bold_13: css`
    font-size: 1.3rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.53846;
  `,
  bold_14: css`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.57142;
  `,
  bold_15: css`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.6;
  `,
  bold_16: css`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.625;
  `,
  bold_18: css`
    font-size: 1.8rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.66666;
  `,
  bold_20: css`
    font-size: 2rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.6;
  `,
  bold_24: css`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.66666;
  `,
  bold_26: css`
    font-size: 2.6rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.53846;
  `,
  bold_30: css`
    font-size: 3rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY};
    line-height: 1.33333;
  `,
} as const;

export type FontType = typeof font;
