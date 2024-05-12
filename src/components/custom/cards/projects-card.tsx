import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function ProjectsCard() {
  return (
    <>
      <Card>
        <CardHeader className="p-2">
          <figure>
            <Image
              src="/images/proj-1.png"
              alt="Project"
              className="h-48 w-full rounded object-cover"
              width={414}
              height={414}
            />
          </figure>
        </CardHeader>

        <CardContent className="p-2 pt-0">
          <div className="mt-4 text-sm text-muted-foreground">Project Type</div>
          <div className="text-xl font-bold">Project Name Here</div>

          <div className="mt-4 flex flex-wrap gap-2">
            <div className="rounded bg-secondary px-2 py-1 text-sm">NextJs</div>
            <div className="rounded bg-secondary px-2 py-1 text-sm">
              Tailwindcss
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
