import { expertCalculatorContent } from "./expert-content";

export function getExpertCalculatorContent(
  slug: string,
) {
  return expertCalculatorContent[
    slug as keyof typeof expertCalculatorContent
  ] ?? null;
}
