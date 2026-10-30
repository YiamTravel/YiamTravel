import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { previewPathRewrite } from "@/lib/preview-path-prefix";
import { routeTree } from "./routeTree.gen";
import { NotFoundPage } from "@/components/frame";

export function getRouter() {
  return createRouter({
    routeTree,
    rewrite: previewPathRewrite(),
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFoundPage,
  });
}
