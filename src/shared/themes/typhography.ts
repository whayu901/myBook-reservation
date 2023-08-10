export const Heading = {
  /**
   * font-size: 20px;
   * line-height: 30px;
   * font-family: rubik-medium;
   */
  H1: 'text-xl leading-[30px] font-rubikMedium text-neutral-100',
  /**
   * font-size: 18px;
   * line-height: 26px;
   * font-family: rubik-medium;
   */
  H2: 'text-lg leading-[26px] font-rubikMedium text-neutral-100',
  /**
   * font-size: 16px;
   * line-height: 24px;
   * font-family: rubik-medium;
   */
  H3: 'text-base leading-[24px] font-rubikMedium text-neutral-100',
} as const;

export const BodyText = {
  /**
   * font-size: 16px;
   * line-height: 24px;
   */
  Large: {
    Bold: 'text-base leading-[24px] font-rubikMedium text-neutral-100',
    Regular: 'text-base leading-[24px] font-rubikRegular text-neutral-100',
  },
  /**
   * font-size: 14px;
   * line-height: 20px;
   */
  Medium: {
    Bold: 'text-md leading-[20px] font-rubikMedium text-neutral-100',
    Regular: 'text-md leading-[20px] font-rubikRegular text-neutral-100',
  },
  /**
   * font-size: 12px;
   * line-height: 18px;
   */
  Small: {
    Bold: 'text-sm leading-[18px] font-rubikMedium text-neutral-100',
    Regular: 'text-sm leading-[18px] font-rubikRegular text-neutral-100',
  },
  /**
   * font-size: 10px;
   * line-height: 14px;
   */
  Tiny: {
    Bold: 'text-ultraSm leading-[14px] font-rubikMedium text-neutral-100',
    Regular: 'text-ultraSm leading-[14px] font-rubikRegular text-neutral-100',
  },
} as const;
