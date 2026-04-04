import { getTutorialBySlug } from "../../utils/tutorials";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }
  try {
    return await getTutorialBySlug(slug);
  } catch {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }
});
